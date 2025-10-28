"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SystemMetric } from "@/components/ui/SystemMetric";
import { GlassCard } from "@/components/ui/GlassCard";

export const SystemStatus = () => {
  const [apiResponse, setApiResponse] = useState(45);
  const [uptime, setUptime] = useState(99.97);
  const [connections, setConnections] = useState(247);

  useEffect(() => {
    // Simulate live metrics updates
    const interval = setInterval(() => {
      setApiResponse(Math.floor(Math.random() * 30) + 35); // 35-65ms
      setUptime(99.90 + Math.random() * 0.09); // 99.90-99.99%
      setConnections(Math.floor(Math.random() * 100) + 200); // 200-300
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-30 hidden lg:block"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <GlassCard variant="terminal" className="p-4 min-w-[280px]">
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-cyan-500/20">
          <div className="w-2 h-2 rounded-full bg-[#50fa7b] animate-pulse"></div>
          <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
            System Monitor
          </span>
        </div>

        <div className="space-y-3">
          <SystemMetric
            label="API Response"
            value={apiResponse}
            unit="ms"
            color="cyan"
            animated
          />
          <SystemMetric
            label="Uptime"
            value={uptime.toFixed(2)}
            unit="%"
            color="green"
            animated
          />
          <SystemMetric
            label="Active Requests"
            value={connections}
            unit=""
            color="purple"
            animated
          />
        </div>

        <div className="mt-3 pt-2 border-t border-cyan-500/20">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-600">
            <span className="text-[#50fa7b]">›</span>
            <span>All systems operational</span>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

