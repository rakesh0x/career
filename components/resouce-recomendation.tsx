'use client'

import { motion } from 'framer-motion'
import { BookOpen, ExternalLink } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface Resource {
  title: string
  type: 'course' | 'book' | 'article' | 'tool'
  provider: string
  description: string
  estimatedTime?: string
  relevance: 'high' | 'medium' | 'low'
}

interface ResourceRecommendationsProps {
  resources?: Resource[]
}

export function ResourceRecommendations({
  resources = [],
}: ResourceRecommendationsProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'course':
        return 'bg-blue-500/10 text-blue-400'
      case 'book':
        return 'bg-purple-500/10 text-purple-400'
      case 'article':
        return 'bg-green-500/10 text-green-400'
      case 'tool':
        return 'bg-orange-500/10 text-orange-400'
      default:
        return 'bg-muted text-muted-foreground'
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card className="bg-card border border-border p-6 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="rounded-lg bg-primary/10 p-3">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            Recommended Resources
          </h3>
        </div>

        {resources.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {resources.map((resource, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="rounded-lg border border-border/50 p-4 h-full hover:border-primary/50 transition-colors group cursor-pointer">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getTypeColor(resource.type)}`}>
                      {resource.type.charAt(0).toUpperCase() +
                        resource.type.slice(1)}
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <h4 className="font-semibold text-foreground mb-1 line-clamp-2">
                    {resource.title}
                  </h4>

                  <p className="text-xs text-muted-foreground mb-3">
                    by {resource.provider}
                  </p>

                  <p className="text-sm text-foreground/70 mb-3 line-clamp-2">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between text-xs">
                    {resource.estimatedTime && (
                      <span className="text-muted-foreground">
                        ⏱ {resource.estimatedTime}
                      </span>
                    )}
                    <span
                      className={`px-2 py-1 rounded-full ${
                        resource.relevance === 'high'
                          ? 'bg-green-500/10 text-green-400'
                          : resource.relevance === 'medium'
                            ? 'bg-amber-500/10 text-amber-400'
                            : 'bg-gray-500/10 text-gray-400'
                      }`}
                    >
                      {resource.relevance} relevance
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className="text-muted-foreground italic">
            Learning resources will be recommended here
          </p>
        )}
      </Card>
    </motion.div>
  )
}
