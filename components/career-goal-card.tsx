import * as React from 'react';
import { Trophy, Calendar, Star } from 'lucide-react';

interface CareerGoalCardProps {
  goal?: string;
  timeline?: string;
  priority?: string;
}

export function CareerGoalCard({ goal, timeline, priority }: CareerGoalCardProps) {
  return (
    <div className="relative bg-gradient-to-br from-cyan-900/80 to-purple-900/80 border border-cyan-400/30 rounded-2xl p-6 shadow-xl overflow-hidden text-white mb-4">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl blur-2xl opacity-60 pointer-events-none" />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="w-8 h-8 text-yellow-400 drop-shadow" />
          <h2 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Career Goal
          </h2>
        </div>
        <div className="space-y-2">
          {goal && (
            <div className="flex items-center gap-2 text-lg">
              <Star className="w-5 h-5 text-cyan-300" />
              <span className="font-semibold">Goal:</span>
              <span className="text-cyan-100">{goal}</span>
            </div>
          )}
          {timeline && (
            <div className="flex items-center gap-2 text-lg">
              <Calendar className="w-5 h-5 text-purple-300" />
              <span className="font-semibold">Timeline:</span>
              <span className="text-purple-100">{timeline}</span>
            </div>
          )}
          {priority && (
            <div className="flex items-center gap-2 text-lg">
              <span className="font-semibold text-pink-300">Priority:</span>
              <span className="bg-pink-600/30 text-pink-100 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                {priority}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
