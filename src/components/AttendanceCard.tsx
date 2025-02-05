import React from 'react';
import { AttendanceStats } from '../types';
import { Calendar, Check, X } from 'lucide-react';

interface Props {
  stats: AttendanceStats;
}

export const AttendanceCard: React.FC<Props> = ({ stats }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <Calendar className="w-6 h-6 text-blue-500 mr-2" />
        <h2 className="text-xl font-bold text-gray-800">Attendance Overview</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <Calendar className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Days</p>
            <p className="text-xl font-bold text-gray-900">{stats.totalDays}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-green-100 p-3 rounded-full mr-4">
            <Check className="w-6 h-6 text-green-500" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Present Days</p>
            <p className="text-xl font-bold text-gray-900">{stats.presentDays}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-red-100 p-3 rounded-full mr-4">
            <X className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Leave Days</p>
            <p className="text-xl font-bold text-gray-900">{stats.leaveDays}</p>
          </div>
        </div>
      </div>
    </div>
  );
};