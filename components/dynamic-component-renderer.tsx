// Placeholder for DynamicComponentRenderer component
import React from 'react';
import { UIAction } from '../lib/types';
import { CareerGoalCard } from './career-goal-card';
import { SkillAssessmentPanel } from './skill-assesment';
import { LearningGapVisualizer } from './learinig-gap-visualizer';
import { RoadmapTimeline } from './roadmap-timeline';
import { JobFitExplorer } from './job-fit-explorer';
import { ResourceRecommendations } from './resouce-recomendation';
import { ConfidenceMeter } from './confidence-meter';

const COMPONENT_MAP: Record<string, React.ComponentType<any>> = {
  CareerGoalCard,
  SkillAssessmentPanel,
  LearningGapVisualizer,
  RoadmapTimeline,
  JobFitExplorer,
  ResourceRecommendations,
  ConfidenceMeter,
};

interface DynamicComponentRendererProps {
  actions: UIAction[];
}

export function DynamicComponentRenderer({ actions }: DynamicComponentRendererProps) {
  return (
    <div>
      {actions.map((action, idx) => {
        const Comp = COMPONENT_MAP[action.component];
        if (!Comp) return <div key={idx}>Unknown component: {action.component}</div>;
        return <Comp key={idx} {...(action.props || {})} />;
      })}
    </div>
  );
}
