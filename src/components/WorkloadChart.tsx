import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { WeeklyStats } from '../types';

interface Props {
  data: WeeklyStats[];
}

export const WorkloadChart: React.FC<Props> = ({ data }) => {
  const chartData = data.map(stat => ({
    name: stat.weekNumber,
    hours: stat.hoursNumeric
  }));

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area 
            type="monotone" 
            dataKey="hours" 
            stroke="#6366f1" 
            fill="#818cf8" 
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};