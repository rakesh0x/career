'use client'

import React, { useMemo } from 'react'
import { CareerGoalCard } from './career-goal';
import { SkillAssessmentPanel } from './skill-assesment';
import { LearningGapVisualizer } from './learinig-gap-visualizer';
import { RoadmapTimeline } from './roadmap-timeline';
import { JobFitExplorer } from './job-fit-explorer';
import { ResourceRecommendations } from './resouce-recomendation';
import { ConfidenceMeter } from './confidence-meter'
import type { UIAction } from '@/lib/types'

interface DynamicComponentRendererProps {
  actions: UIAction[]
}

const COMPONENT_MAP: Record<string, React.ComponentType<any>> = {
  CareerGoalCard,
  SkillAssessmentPanel,
  LearningGapVisualizer,
  RoadmapTimeline,
  JobFitExplorer,
  ResourceRecommendations,
  ConfidenceMeter,
}

export function DynamicComponentRenderer({
  actions,
}: DynamicComponentRendererProps) {
  const { topComponents, mainComponents } = useMemo(() => {
    const top: UIAction[] = []
    const main: UIAction[] = []

    actions.forEach((action) => {
      if (action.position === 'top') {
        top.push(action)
      } else {
        main.push(action)
      }
    })

    return { topComponents: top, mainComponents: main }
  }, [actions])

  return (
    <div className="space-y-4">
      {/* Top-positioned components (typically the main goal/focus) */}
      <div className="space-y-4">
        {topComponents.map((action, index) => (
          <DynamicComponent key={`${action.component}-${index}`} action={action} />
        ))}
      </div>

      {/* Main flow components */}
      {mainComponents.length > 0 && (
        <div className="space-y-4">
          {mainComponents.map((action, index) => (
            <DynamicComponent
              key={`${action.component}-${index}`}
              action={action}
            />
          ))}
        </div>
      )}
    </div>
  )
}

interface DynamicComponentProps {
  action: UIAction
}

function DynamicComponent({ action }: DynamicComponentProps) {
  const Component = COMPONENT_MAP[action.component]

  if (!Component) {
    console.warn(`Component not found: ${action.component}`)
    return null
  }

  return <Component {...(action.props || {})} />
}
