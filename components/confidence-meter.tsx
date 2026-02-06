'use client'

import { motion } from 'framer-motion'
import { Gauge } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface ConfidenceMeterProps {
  clarity?: number
  confidence?: number
  insights?: string[]
}

export function ConfidenceMeter({
  clarity = 0,
  confidence = 0,
  insights = [],
}: ConfidenceMeterProps) {
  const getMeterColor = (value: number) => {
    if (value >= 80) return 'from-green-500 to-emerald-500'
    if (value >= 60) return 'from-blue-500 to-cyan-500'
    if (value >= 40) return 'from-amber-500 to-orange-500'
    return 'from-red-500 to-rose-500'
  }

  const getMeterLabel = (value: number) => {
    if (value >= 80) return 'Excellent'
    if (value >= 60) return 'Good'
    if (value >= 40) return 'Fair'
    return 'Need Work'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35 }}
    >
      <Card className="bg-card border border-border p-6 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="rounded-lg bg-primary/10 p-3">
            <Gauge className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            Your Progress
          </h3>
        </div>

        {clarity > 0 || confidence > 0 ? (
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-foreground">
                  Career Clarity
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-foreground">
                    {clarity}%
                  </span>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      clarity >= 80
                        ? 'bg-green-500/10 text-green-400'
                        : clarity >= 60
                          ? 'bg-blue-500/10 text-blue-400'
                          : 'bg-amber-500/10 text-amber-400'
                    }`}
                  >
                    {getMeterLabel(clarity)}
                  </span>
                </div>
              </div>
              <div className="h-3 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${getMeterColor(
                    clarity,
                  )} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${clarity}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-foreground">
                  Skill Confidence
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-foreground">
                    {confidence}%
                  </span>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      confidence >= 80
                        ? 'bg-green-500/10 text-green-400'
                        : confidence >= 60
                          ? 'bg-blue-500/10 text-blue-400'
                          : 'bg-amber-500/10 text-amber-400'
                    }`}
                  >
                    {getMeterLabel(confidence)}
                  </span>
                </div>
              </div>
              <div className="h-3 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${getMeterColor(
                    confidence,
                  )} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${confidence}%` }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                />
              </div>
            </div>

            {insights.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="rounded-lg bg-primary/5 border border-primary/20 p-4 space-y-2"
              >
                <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                  Key Insights
                </p>
                <ul className="space-y-1">
                  {insights.map((insight, index) => (
                    <li key={index} className="text-sm text-foreground/80">
                      • {insight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        ) : (
          <p className="text-muted-foreground italic">
            Your progress metrics will appear here
          </p>
        )}
      </Card>
    </motion.div>
  )
}
