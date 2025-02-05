import React from 'react';
import { WeeklyStats } from '../types';
import { Clock, Briefcase } from 'lucide-react';

interface Props {
  stats: WeeklyStats;
}

export const WeeklyStatsCard: React.FC<Props> = ({ stats }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{stats.weekNumber}</h3>
      
      <div className="flex items-center mb-4">
        <Clock className="w-5 h-5 text-blue-500 mr-2" />
        <span className="text-gray-700">{stats.totalHours}</span>
      </div>
      
      <div className="flex items-start">
        <Briefcase className="w-5 h-5 text-green-500 mr-2 mt-1" />
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">Projects:</p>
          <div className="flex flex-wrap gap-2">
            {stats.projects.map((project, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-700"
              >
                {project}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};