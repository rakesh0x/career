'use client'

import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface Skill {
  name: string
  level: 'beginner' | 'intermediate' | 'advanced'
  proficiency: number
}

interface SkillAssessmentPanelProps {
  skills?: Skill[]
}

export function SkillAssessmentPanel({ skills = [] }: SkillAssessmentPanelProps) {
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

  const getColorForLevel = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-blue-500/10'
      case 'intermediate':
        return 'bg-purple-500/10'
      case 'advanced':
        return 'bg-green-500/10'
      default:
        return 'bg-muted'
    }
  }

  const getBarColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-blue-500'
      case 'intermediate':
        return 'bg-purple-500'
      case 'advanced':
        return 'bg-green-500'
      default:
        return 'bg-accent'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card className="bg-card border border-border p-6 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="rounded-lg bg-accent/10 p-3">
            <Zap className="h-5 w-5 text-accent" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            Skill Self-Assessment
          </h3>
        </div>

        {skills.length > 0 ? (
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    {skill.name}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${getColorForLevel(
                      skill.level,
                    )} text-foreground`}
                  >
                    {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    className={`h-full ${getBarColor(skill.level)}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className="text-muted-foreground italic">
            Your skills will be assessed here
          </p>
        )}
      </Card>
    </motion.div>
  )
}
