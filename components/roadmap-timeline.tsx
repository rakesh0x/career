'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { Card } from './ui/card'

interface Milestone {
  title: string
  description: string
  timeframe: string
  status: 'completed' | 'in-progress' | 'upcoming'
}

interface RoadmapTimelineProps {
  milestones?: Milestone[]
}

export function RoadmapTimeline({ milestones = [] }: RoadmapTimelineProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500'
      case 'in-progress':
        return 'bg-blue-500'
      case 'upcoming':
        return 'bg-muted'
      default:
        return 'bg-gray-500'
    }
  }

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/10'
      case 'in-progress':
        return 'bg-blue-500/10'
      case 'upcoming':
        return 'bg-muted'
      default:
        return 'bg-gray-500/10'
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="bg-card border border-border p-6 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="rounded-lg bg-primary/10 p-3">
            <Calendar className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            Career Roadmap
          </h3>
        </div>

        {milestones.length > 0 ? (
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-transparent rounded" />

            <div className="space-y-4 pl-20">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <div
                    className={`absolute -left-16 top-1 h-4 w-4 rounded-full border-2 border-background ${getStatusColor(milestone.status)}`}
                  />

                  <div className={`rounded-lg p-3 ${getStatusBgColor(milestone.status)}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">
                          {milestone.title}
                        </h4>
                        <p className="text-sm text-foreground/70 mt-1">
                          {milestone.description}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                        {milestone.timeframe}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <p className="text-muted-foreground italic">
            Your career roadmap will appear here
          </p>
        )}
      </Card>
    </motion.div>
  )
}
