"use client";
import { useEffect, useRef, useCallback } from "react";

type ScrollCallback = (scrollY: number, scrollProgress: number) => void;

// Shared scroll state - single listener for all subscribers
let scrollY = 0;
let scrollProgress = 0;
let ticking = false;
const subscribers = new Set<ScrollCallback>();

function updateScrollValues() {
  scrollY = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress = docHeight > 0 ? scrollY / docHeight : 0;
}

function notifySubscribers() {
  subscribers.forEach((callback) => callback(scrollY, scrollProgress));
  ticking = false;
}

function handleScroll() {
  updateScrollValues();

  if (!ticking) {
    // Use requestAnimationFrame for smooth 60fps updates
    requestAnimationFrame(notifySubscribers);
    ticking = true;
  }
}

// Initialize listener only once
let listenerInitialized = false;

function initScrollListener() {
  if (listenerInitialized || typeof window === "undefined") return;

  window.addEventListener("scroll", handleScroll, { passive: true });
  updateScrollValues();
  listenerInitialized = true;
}

/**
 * Hook for throttled scroll listening using a shared RAF-throttled listener
 * All components share a single scroll listener for better performance
 *
 * @param callback - Function called with (scrollY, scrollProgress) on scroll
 * @param enabled - Whether to subscribe to scroll events
 */
export function useThrottledScroll(callback: ScrollCallback, enabled: boolean = true) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  const stableCallback = useCallback<ScrollCallback>((y, progress) => {
    callbackRef.current(y, progress);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    initScrollListener();
    subscribers.add(stableCallback);

    // Initial call with current values
    stableCallback(scrollY, scrollProgress);

    return () => {
      subscribers.delete(stableCallback);
    };
  }, [enabled, stableCallback]);
}

/**
 * Hook that returns current scroll position, updated via shared throttled listener
 */
export function useScrollPosition() {
  const positionRef = useRef({ scrollY: 0, scrollProgress: 0 });

  useThrottledScroll((y, progress) => {
    positionRef.current = { scrollY: y, scrollProgress: progress };
  });

  return positionRef.current;
}
