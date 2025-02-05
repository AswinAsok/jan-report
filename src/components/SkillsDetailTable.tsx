import React from 'react';
import { SkillDetail } from '../types';
import { Brain, ArrowRight } from 'lucide-react';

interface Props {
  skills: SkillDetail[];
}

export const SkillsDetailTable: React.FC<Props> = ({ skills }) => {
  return (
    <div className="space-y-6">
      {skills.map((category) => (
        <div key={category.category} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Brain className="w-6 h-6 text-purple-500 mr-2" />
            <h3 className="text-xl font-bold text-gray-800">{category.category}</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Skill
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Proficiency
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applied In
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {category.skills.map((skill) => (
                  <tr key={skill.name}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{skill.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-purple-600 h-2.5 rounded-full"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500 mt-1">{skill.proficiency}%</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        {skill.projectsApplied.map((project) => (
                          <span key={project} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            {project}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};