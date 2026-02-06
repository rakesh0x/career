'use client'

import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface Gap {
  skill: string
  currentLevel: number
  requiredLevel: number
  gapSize: number
}

interface LearningGapVisualizerProps {
  gaps?: Gap[]
}

export function LearningGapVisualizer({ gaps = [] }: LearningGapVisualizerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      <Card className="bg-card border border-border p-6 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="rounded-lg bg-primary/10 p-3">
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            Learning Gap Analysis
          </h3>
        </div>

        {gaps.length > 0 ? (
          <div className="space-y-4">
            {gaps.map((gap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">{gap.skill}</span>
                  <span className="text-muted-foreground">
                    {gap.currentLevel}% → {gap.requiredLevel}%
                  </span>
                </div>

                <div className="flex gap-2 h-8 rounded-lg overflow-hidden bg-secondary p-1">
                  <motion.div
                    className="bg-blue-500 rounded"
                    style={{ flex: gap.currentLevel }}
                    initial={{ width: 0 }}
                    animate={{ width: `${gap.currentLevel}%` }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    className="bg-amber-500/30 rounded"
                    style={{ flex: gap.gapSize }}
                    initial={{ width: 0 }}
                    animate={{ width: `${gap.gapSize}%` }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  />
                  <div className="flex-1" />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground italic">
            Learning gaps will be visualized here
          </p>
        )}
      </Card>
    </motion.div>
  )
}
