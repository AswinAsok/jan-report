export interface TimesheetEntry {
  week: string;
  totalHours: string;
  date: string;
  codingHours: string;
  projectName: string;
  tasks: string;
  technicalSkillsGained: string;
  issuesEncountered: string;
  solutionsImplemented: string;
}

export interface WeeklyStats {
  weekNumber: string;
  totalHours: string;
  hoursNumeric: number;
  projects: string[];
  averageDailyHours: number;
  dailyBreakdown?: DailyWork[];
  technicalSkills?: string[];
}

export interface ProjectStat {
  name: string;
  count: number;
}

export interface DailyWork {
  date: string;
  hours: number;
  projects: string[];
}

export interface AttendanceStats {
  totalDays: number;
  presentDays: number;
  leaveDays: number;
  attendancePercentage: number;
}

export interface SkillsData {
  category: string;
  skills: string[];
  frequency: number;
}

export interface ProjectDetail {
  name: string;
  description: string;
  technologiesUsed: string[];
  keyAchievements: string[];
  totalHours: number;
}

export interface WeeklyDetail {
  weekNumber: string;
  summary: string;
  keyLearnings: string[];
  majorTasks: string[];
  challenges: string[];
  solutions: string[];
}

export interface SkillDetail {
  category: string;
  skills: {
    name: string;
    proficiency: number;
    projectsApplied: string[];
  }[];
}