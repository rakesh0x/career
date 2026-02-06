'use client'

import React from "react"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

interface CareerInputFormProps {
  onSubmit: (input: string) => void
  isLoading?: boolean
}

const PLACEHOLDER_PROMPTS = [
  "I want to become a Senior Software Engineer within 2 years",
  "Help me transition into Product Management",
  "I'm interested in becoming a Data Scientist",
  "I want to move into AI/ML development",
]

export function CareerInputForm({
  onSubmit,
  isLoading = false,
}: CareerInputFormProps) {
  const [input, setInput] = useState('')
  const [showPrompts, setShowPrompts] = useState(true)

  const handleSubmit = (value: string) => {
    if (value.trim()) {
      onSubmit(value)
      setInput('')
      setShowPrompts(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSubmit(input)
    }
  }

  return (
    <div className="space-y-4">
      {/* Input Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-3"
      >
        <div className="relative">
          <Textarea
            placeholder="Describe your career goal, current situation, or ask for guidance..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            className="min-h-28 resize-none border border-border/50 bg-card/50 backdrop-blur-sm placeholder-muted-foreground focus:border-primary focus:ring-primary rounded-lg p-4 text-foreground transition-all"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSubmit(input)}
            disabled={isLoading || !input.trim()}
            className="absolute bottom-3 right-3 p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="h-5 w-5" />
              </motion.div>
            ) : (
              <Send className="h-5 w-5" />
            )}
          </motion.button>
        </div>

        <p className="text-xs text-muted-foreground text-right">
          Press Ctrl+Enter to submit
        </p>
      </motion.div>

      {/* Quick Prompt Suggestions */}
      <AnimatePresence>
        {showPrompts && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-2"
          >
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              Try one of these:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {PLACEHOLDER_PROMPTS.map((prompt, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02, borderColor: 'hsl(var(--primary))' }}
                  onClick={() => handleSubmit(prompt)}
                  disabled={isLoading}
                  className="text-left text-sm px-3 py-2 rounded-lg border border-border/30 bg-card/30 hover:bg-card/60 text-muted-foreground hover:text-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {prompt}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
