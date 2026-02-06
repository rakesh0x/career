'use client'

import { motion } from 'framer-motion'
import { Target } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface CareerGoalCardProps {
  goal?: string
  timeline?: string
  priority?: 'high' | 'medium' | 'low'
}

export function CareerGoalCard({
  goal,
  timeline,
  priority,
}: CareerGoalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-card border border-border p-6 backdrop-blur-sm">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-primary/10 p-3">
            <Target className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Career Goal
            </h3>
            {goal ? (
              <p className="text-foreground/80 leading-relaxed">{goal}</p>
            ) : (
              <p className="text-muted-foreground italic">
                Your career goal will appear here
              </p>
            )}
            {timeline && (
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <span>Timeline:</span>
                <span className="font-medium text-foreground">{timeline}</span>
              </div>
            )}
            {priority && (
              <div className="mt-2 flex items-center gap-2">
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  priority === 'high'
                    ? 'bg-red-500/10 text-red-400'
                    : priority === 'medium'
                      ? 'bg-amber-500/10 text-amber-400'
                      : 'bg-green-500/10 text-green-400'
                }`}>
                  {priority === 'high' ? 'High Priority' : priority === 'medium' ? 'Medium Priority' : 'Low Priority'}
                </span>
              </div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
