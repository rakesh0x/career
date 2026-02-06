// Placeholder for CareerGoalCard component
import React from 'react';

interface CareerGoalCardProps {
  goal?: string;
  timeline?: string;
  priority?: string;
}

export function CareerGoalCard(props: CareerGoalCardProps) {
  return (
    <div>
      <div>Career Goal Card</div>
      {props.goal && <div>Goal: {props.goal}</div>}
      {props.timeline && <div>Timeline: {props.timeline}</div>}
      {props.priority && <div>Priority: {props.priority}</div>}
    </div>
  );
}
