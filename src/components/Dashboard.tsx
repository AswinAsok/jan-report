import React from "react";
import { WeeklyStatsCard } from "./WeeklyStatsCard";
import { WorkloadChart } from "./WorkloadChart";
import { ProjectDistribution } from "./ProjectDistribution";
import { DailyHoursChart } from "./DailyHoursChart";
import { SkillsChart } from "./SkillsChart";
import { AttendanceCard } from "./AttendanceCard";
import { ProjectDetailsTable } from "./ProjectDetailsTable";
import { WeeklySummaryTable } from "./WeeklySummaryTable";
import { SkillsDetailTable } from "./SkillsDetailTable";
import {
    timesheetData,
    calculateWeeklyStats,
    getProjectStats,
    getAttendanceStats,
    getSkillsData,
    getDailyHoursData,
    getProjectDetails,
    getWeeklyDetails,
    getSkillDetails,
} from "../data";
import { Clock, Calendar, Brain } from "lucide-react";

export const Dashboard: React.FC = () => {
    const weeklyStats = calculateWeeklyStats(timesheetData);
    const projectStats = getProjectStats(timesheetData);
    const attendanceStats = getAttendanceStats();
    const skillsData = getSkillsData();
    const dailyHoursData = getDailyHoursData();
    const projectDetails = getProjectDetails();
    const weeklyDetails = getWeeklyDetails();
    const skillDetails = getSkillDetails();
    const totalHours = weeklyStats.reduce((acc, curr) => acc + curr.hoursNumeric, 0);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        January 2025 Internship Report
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white rounded-lg shadow p-6 flex items-center justify-center">
                            <Calendar className="w-8 h-8 text-blue-500 mr-3" />
                            <div className="text-left">
                                <p className="text-sm text-gray-600">Attendance Rate</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {attendanceStats.attendancePercentage.toFixed(1)}%
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow p-6 flex items-center justify-center">
                            <Brain className="w-8 h-8 text-green-500 mr-3" />
                            <div className="text-left">
                                <p className="text-sm text-gray-600">Skills Developed</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {skillsData.reduce((acc, curr) => acc + curr.skills.length, 0)}
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow p-6 flex items-center justify-center">
                            <Clock className="w-8 h-8 text-purple-500 mr-3" />
                            <div className="text-left">
                                <p className="text-sm text-gray-600">Total Hours</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {totalHours.toFixed(1)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Executive Summary</h2>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <p className="text-gray-600 mb-4">
                            During January 2025, significant progress was made across multiple
                            projects, with a total of {totalHours.toFixed(1)} hours invested in
                            development work. Key achievements include implementing new features,
                            resolving critical bugs, and preparing systems for production
                            deployment.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <h3 className="font-semibold text-gray-700 mb-2">
                                    Key Highlights:
                                </h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Completed {projectDetails.length} major projects</li>
                                    <li>
                                        Maintained {attendanceStats.attendancePercentage.toFixed(1)}
                                        % attendance rate
                                    </li>
                                    <li>
                                        Developed{" "}
                                        {skillsData.reduce(
                                            (acc, curr) => acc + curr.skills.length,
                                            0
                                        )}{" "}
                                        new technical skills
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-700 mb-2">
                                    Areas of Focus:
                                </h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Frontend Development</li>
                                    <li>API Integration</li>
                                    <li>Production Deployment</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">
                            Daily Hours Distribution
                        </h2>
                        <DailyHoursChart data={dailyHoursData} />
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">
                            Project Distribution
                        </h2>
                        <ProjectDistribution data={projectStats} />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">
                            Weekly Workload Trends
                        </h2>
                        <WorkloadChart data={weeklyStats} />
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Skills Development</h2>
                        <SkillsChart data={skillsData} />
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Details</h2>
                    <ProjectDetailsTable projects={projectDetails} />
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Weekly Progress</h2>
                    <WeeklySummaryTable weeks={weeklyDetails} />
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills Development</h2>
                    <SkillsDetailTable skills={skillDetails} />
                </div>

                <AttendanceCard stats={attendanceStats} />

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {weeklyStats.map((stats, index) => (
                        <WeeklyStatsCard key={index} stats={stats} />
                    ))}
                </div>
            </div>
        </div>
    );
};
