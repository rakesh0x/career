'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { Card } from './ui/card'

interface JobRole {
  title: string
  fitScore: number
  description: string
  matchedSkills: string[]
}

interface JobFitExplorerProps {
  roles?: JobRole[]
}

export function JobFitExplorer({ roles = [] }: JobFitExplorerProps) {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'bg-green-500'
    if (score >= 60) return 'bg-blue-500'
    if (score >= 40) return 'bg-amber-500'
    return 'bg-red-500'
  }

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-500/10 text-green-400'
    if (score >= 60) return 'bg-blue-500/10 text-blue-400'
    if (score >= 40) return 'bg-amber-500/10 text-amber-400'
    return 'bg-red-500/10 text-red-400'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <Card className="bg-card border border-border p-6 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="rounded-lg bg-primary/10 p-3">
            <Briefcase className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            Job Fit Explorer
          </h3>
        </div>

        {roles.length > 0 ? (
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {roles.map((role, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="rounded-lg border border-border/50 p-4 hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {role.title}
                      </h4>
                      <p className="text-sm text-foreground/70 mt-1">
                        {role.description}
                      </p>
                    </div>
                    <div
                      className={`flex items-center justify-center h-16 w-16 rounded-lg flex-shrink-0 ${getScoreBgColor(
                        role.fitScore,
                      )}`}
                    >
                      <div className="text-center">
                        <div className="text-lg font-bold">
                          {role.fitScore}%
                        </div>
                        <div className="text-xs">Fit</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {role.matchedSkills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                    {role.matchedSkills.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-muted/50 text-muted-foreground">
                        +{role.matchedSkills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className="text-muted-foreground italic">
            Matching job roles will appear here
          </p>
        )}
      </Card>
    </motion.div>
  )
}
