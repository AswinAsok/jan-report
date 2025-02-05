import React from 'react';
import { WeeklyDetail } from '../types';
import { Calendar, BookOpen, Target, AlertTriangle, CheckCircle } from 'lucide-react';

interface Props {
  weeks: WeeklyDetail[];
}

export const WeeklySummaryTable: React.FC<Props> = ({ weeks }) => {
  return (
    <div className="space-y-6">
      {weeks.map((week) => (
        <div key={week.weekNumber} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Calendar className="w-6 h-6 text-blue-500 mr-2" />
            <h3 className="text-xl font-bold text-gray-800">{week.weekNumber}</h3>
          </div>
          
          <p className="text-gray-600 mb-6">{week.summary}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center mb-2">
                <BookOpen className="w-5 h-5 text-green-500 mr-2" />
                <h4 className="font-semibold text-gray-700">Key Learnings</h4>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                {week.keyLearnings.map((learning) => (
                  <li key={learning}>{learning}</li>
                ))}
              </ul>
              
              <div className="flex items-center mb-2">
                <Target className="w-5 h-5 text-blue-500 mr-2" />
                <h4 className="font-semibold text-gray-700">Major Tasks</h4>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {week.majorTasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
                <h4 className="font-semibold text-gray-700">Challenges</h4>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                {week.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
              
              <div className="flex items-center mb-2">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <h4 className="font-semibold text-gray-700">Solutions</h4>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {week.solutions.map((solution) => (
                  <li key={solution}>{solution}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};