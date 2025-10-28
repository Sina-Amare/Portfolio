"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { SkillBar } from "@/components/ui/SkillBar";
import { GlassCard } from "@/components/ui/GlassCard";
import { useScrollAnimation, fadeInUp } from "@/hooks/useScrollAnimation";
import Card3D from "@/components/3d/Card3D";
import ParallaxLayer from "@/components/effects/ParallaxLayer";
import PageBackground from "@/components/effects/PageBackground";
import { CopyButton } from "@/components/ui/CopyButton";

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("backend");
  const { ref: skillsRef, controls: skillsControls } = useScrollAnimation(0.1);

  const skillCategories = {
    backend: {
      title: "Backend Core",
      skills: [
        { name: "Django", percentage: 85, experience: "2 years" },
        { name: "FastAPI", percentage: 80, experience: "1.5 years" },
        { name: "Django REST Framework", percentage: 90, experience: "2 years" },
        { name: "Python", percentage: 85, experience: "2 years" },
        { name: "RESTful API Design", percentage: 90, experience: "2 years" },
      ],
      codeExample: `# Django API Endpoint Example
from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response

class ProjectViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    
    @action(detail=False, methods=['get'])
    def my_projects(self, request):
        projects = self.get_queryset().filter(
            owner=request.user
        ).select_related('category')
        serializer = self.get_serializer(projects, many=True)
        return Response(serializer.data)`,
    },
    databases: {
      title: "Databases & Caching",
      skills: [
        { name: "PostgreSQL", percentage: 80, experience: "2 years" },
        { name: "Redis", percentage: 70, experience: "1 year" },
        { name: "MongoDB", percentage: 60, experience: "1 year" },
        { name: "Database Design", percentage: 85, experience: "2 years" },
        { name: "Query Optimization", percentage: 75, experience: "1.5 years" },
      ],
      codeExample: `# PostgreSQL Query Optimization
from django.db.models import Prefetch, Count, F

# Optimized query with prefetch
projects = Project.objects.select_related(
    'owner', 'category'
).prefetch_related(
    Prefetch(
        'tasks',
        queryset=Task.objects.filter(
            status='active'
        )
    )
).annotate(
    task_count=Count('tasks'),
    completion_rate=F('completed_tasks') * 100 
                    / F('total_tasks')
).order_by('-created_at')`,
    },
    devops: {
      title: "DevOps & Infrastructure",
      skills: [
        { name: "Docker", percentage: 80, experience: "1.5 years" },
        { name: "CI/CD Pipelines", percentage: 75, experience: "1 year" },
        { name: "Git & Version Control", percentage: 90, experience: "2 years" },
        { name: "Nginx", percentage: 70, experience: "1 year" },
        { name: "Linux Administration", percentage: 75, experience: "2 years" },
      ],
      codeExample: `# Docker Compose for Django + PostgreSQL + Redis
version: '3.8'

services:
  web:
    build: .
    command: gunicorn config.wsgi:application --bind 0.0.0.0:8000
    volumes:
      - .:/app
    ports:
      - "8000:8000"
    depends_on:
      - db
      - redis
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/dbname
      - REDIS_URL=redis://redis:6379/0
  
  db:
    image: postgres:14
    volumes:
      - postgres_data:/var/lib/postgresql/data
  
  redis:
    image: redis:7-alpine`,
    },
    tools: {
      title: "Tools & Technologies",
      skills: [
        { name: "Celery (Task Queues)", percentage: 75, experience: "1 year" },
        { name: "RabbitMQ / Message Brokers", percentage: 65, experience: "8 months" },
        { name: "GraphQL", percentage: 60, experience: "6 months" },
        { name: "JWT Authentication", percentage: 85, experience: "1.5 years" },
        { name: "API Documentation (Swagger)", percentage: 80, experience: "2 years" },
      ],
      codeExample: `# Celery Background Task Example
from celery import shared_task
from django.core.mail import send_mail

@shared_task(bind=True, max_retries=3)
def send_notification_email(self, user_id, subject, message):
    try:
        user = User.objects.get(id=user_id)
        send_mail(
            subject=subject,
            message=message,
            from_email='noreply@example.com',
            recipient_list=[user.email],
            fail_silently=False,
        )
        return f"Email sent to {user.email}"
    except Exception as exc:
        raise self.retry(exc=exc, countdown=60)`,
    },
  };

  const tabs = Object.keys(skillCategories);

  return (
    <div className="w-full bg-primary-background min-h-screen">
      <PageBackground theme="skills" />
      <section className="w-full flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        {/* Background Effects with Parallax */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <ParallaxLayer speed={0.4}>
            <div className="absolute top-[15%] right-[10%] h-[400px] w-[400px] rounded-full bg-purple-600/[0.04] blur-[100px]" />
          </ParallaxLayer>
          <ParallaxLayer speed={0.6} direction="down">
            <div className="absolute bottom-[15%] left-[10%] h-[400px] w-[400px] rounded-full bg-cyan-500/[0.04] blur-[100px]" />
          </ParallaxLayer>
        </div>

        <div className="w-full max-w-[1200px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-number mb-12"
          >
            // 03. Skills
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              System <span className="gradient-text">Dashboard</span>
            </h1>
            <p className="text-gray-400 font-mono text-sm">
              <span className="text-cyan-400">$</span> monitoring --skills --verbose
            </p>
          </motion.div>

          {/* Terminal-Style Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <GlassCard variant="terminal" className="p-2">
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50"
                        : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                    }`}
                  >
                    <span className={activeTab === tab ? "text-[#50fa7b]" : "text-gray-600"}>
                      {activeTab === tab ? "▸" : "▹"}
                    </span>{" "}
                    {skillCategories[tab as keyof typeof skillCategories].title}
                  </button>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Skills Display */}
          <div ref={skillsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Skill Bars */}
            <motion.div
              key={`bars-${activeTab}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card3D intensity={6}>
                <GlassCard variant="terminal" className="p-6 h-full" glow interactive>
                  <div className="flex items-center gap-2 mb-6 pb-3 border-b border-cyan-500/20">
                    <div className="w-2 h-2 rounded-full bg-[#50fa7b] animate-pulse"></div>
                    <span className="text-sm font-mono text-gray-400 uppercase tracking-wider">
                      Proficiency Metrics
                    </span>
                  </div>

                  <div className="space-y-6">
                    {skillCategories[activeTab as keyof typeof skillCategories].skills.map(
                      (skill, index) => (
                        <SkillBar
                          key={skill.name}
                          skill={skill.name}
                          percentage={skill.percentage}
                          experience={skill.experience}
                          delay={index * 0.1}
                        />
                      )
                    )}
                  </div>

                  {/* Summary Stats */}
                  <div className="mt-6 pt-4 border-t border-cyan-500/20 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold font-mono text-cyan-400">
                        {skillCategories[activeTab as keyof typeof skillCategories].skills.length}
                      </div>
                      <div className="text-xs font-mono text-gray-500 mt-1">Skills</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-mono text-purple-400">
                        {Math.round(
                          skillCategories[activeTab as keyof typeof skillCategories].skills.reduce(
                            (acc, s) => acc + s.percentage,
                            0
                          ) /
                            skillCategories[activeTab as keyof typeof skillCategories].skills.length
                        )}
                        %
                      </div>
                      <div className="text-xs font-mono text-gray-500 mt-1">Avg Level</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-mono text-[#50fa7b]">2y</div>
                      <div className="text-xs font-mono text-gray-500 mt-1">Experience</div>
                    </div>
                  </div>
                </GlassCard>
              </Card3D>
            </motion.div>

            {/* Code Example */}
            <motion.div
              key={`code-${activeTab}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card3D intensity={6}>
                <GlassCard variant="terminal" className="p-6 h-full" interactive>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-cyan-500/20">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#ff605c]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd44]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#00ca4e]"></div>
                      </div>
                      <span className="text-xs font-mono text-gray-400 ml-2">example.py</span>
                    </div>
                    <CopyButton
                      textToCopy={
                        skillCategories[activeTab as keyof typeof skillCategories].codeExample
                      }
                    />
                  </div>

                  <pre className="text-xs md:text-sm overflow-hidden">
                    <code
                      className="language-python whitespace-pre-wrap break-words"
                      dangerouslySetInnerHTML={{
                        __html: skillCategories[
                          activeTab as keyof typeof skillCategories
                        ].codeExample
                          .replace(/</g, "&lt;")
                          .replace(/>/g, "&gt;"),
                      }}
                    />
                  </pre>

                  <div className="mt-4 pt-3 border-t border-cyan-500/20">
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-600">
                      <span className="text-[#50fa7b]">✓</span>
                      <span>Code compiled successfully</span>
                    </div>
                  </div>
                </GlassCard>
              </Card3D>
            </motion.div>
          </div>

          {/* Experience Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <GlassCard variant="subtle" className="p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">
                <span className="text-cyan-400">$</span> summary --experience
              </h3>
              <p className="text-gray-300 mb-6 max-w-[70ch] mx-auto leading-relaxed">
                2 years of hands-on backend development experience with{" "}
                <span className="text-purple-400 font-semibold">Python</span>,{" "}
                <span className="text-cyan-400 font-semibold">Django</span>, and{" "}
                <span className="text-[#50fa7b] font-semibold">FastAPI</span>. Specialized in
                building scalable APIs, optimizing database performance, and implementing robust
                system architectures. Employed professionally for 1 year, delivering
                production-grade solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Python", "Django", "FastAPI", "PostgreSQL", "Docker", "REST APIs"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-400 hover:border-cyan-500/30 hover:text-cyan-400 transition-colors"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #9333ea, #06b6d4);
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}
