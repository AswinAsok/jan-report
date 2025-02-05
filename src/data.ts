import {
    AttendanceStats,
    ProjectDetail,
    SkillDetail,
    SkillsData,
    WeeklyDetail,
    WeeklyStats,
} from "./types";

export const timesheetData = [
    {
        week: "Week 1",
        totalHours: "28 hours and 23 minutes",
        date: "January 1, 2025",
        codingHours: "3 hours 9 minutes",
        projectName: "MakeMyPass, Hoogo, ScaleUp",
        tasks: "Fixed GuestsTable bug; developed LinkedIn share backend for Hoogo; ScaleUp demo ticket started.",
        technicalSkillsGained: "API integration, debugging",
        issuesEncountered: "Bug in GuestsTable module",
        solutionsImplemented: "Fixed GuestsTable rendering bug",
    },
    {
        week: "Week 2",
        totalHours: "29 hours and 10 minutes",
        date: "January 8, 2025",
        codingHours: "4 hours 20 minutes",
        projectName: "MakeMyPass, JusVote",
        tasks: "Added new communication field, implemented minor code refactoring",
        technicalSkillsGained: "Code Maintainability",
        issuesEncountered: "Code readability issues",
        solutionsImplemented: "Devised new structure for better readability",
    },
    {
        week: "Week 3",
        totalHours: "33 hours, 26 minutes",
        date: "January 15, 2025",
        codingHours: "6 hours 27 minutes",
        projectName: "MakeMyPass, JusVote, Promote",
        tasks: "Updated header logo, fixed API issues, implemented new features",
        technicalSkillsGained: "UI Development, Production debugging",
        issuesEncountered: "API integration issues",
        solutionsImplemented: "Implemented proper error handling",
    },
    {
        week: "Week 4",
        totalHours: "33 hours and 21 minutes",
        date: "January 22, 2025",
        codingHours: "5 hours 35 minutes",
        projectName: "MakeMyPass, Hoogo, Promote, ScaleUp",
        tasks: "Fixed UI issues, implemented new features, improved UX",
        technicalSkillsGained: "UX Improvements, Frontend Development",
        issuesEncountered: "UI/UX issues",
        solutionsImplemented: "Implemented better user flows",
    },
    {
        week: "Week 5",
        totalHours: "19 hours and 30 minutes",
        date: "January 29, 2025",
        codingHours: "3 hours 42 minutes",
        projectName: "MakeMyPass, Flutter Learning",
        tasks: "Built Flutter application features, fixed MakeMyPass issues",
        technicalSkillsGained: "Flutter Development, Debugging",
        issuesEncountered: "Mobile development challenges",
        solutionsImplemented: "Implemented proper mobile patterns",
    },
];

export const calculateWeeklyStats = (data: any[]): WeeklyStats[] => {
    const weeklyStats: { [key: string]: WeeklyStats } = {};

    data.forEach((entry) => {
        if (!entry.week || !entry.totalHours) return;

        if (!weeklyStats[entry.week]) {
            const hours = parseHours(entry.totalHours);
            weeklyStats[entry.week] = {
                weekNumber: entry.week,
                totalHours: entry.totalHours,
                hoursNumeric: hours,
                projects: [],
                averageDailyHours: hours / 5, // Assuming 5 working days
            };
        }

        if (entry.projectName) {
            const projects = entry.projectName.split(",").map((p: string) => p.trim());
            weeklyStats[entry.week].projects = [
                ...new Set([...weeklyStats[entry.week].projects, ...projects]),
            ];
        }
    });

    return Object.values(weeklyStats);
};

export const parseHours = (timeString: string): number => {
    const hoursMatch = timeString.match(/(\d+)\s*hours?/);
    const minutesMatch = timeString.match(/(\d+)\s*minutes?/);

    const hours = hoursMatch ? parseInt(hoursMatch[1]) : 0;
    const minutes = minutesMatch ? parseInt(minutesMatch[1]) : 0;

    return hours + minutes / 60;
};

export const getProjectStats = (data: any[]) => {
    const projectCounts: { [key: string]: number } = {};

    data.forEach((entry) => {
        if (entry.projectName) {
            const projects = entry.projectName.split(",").map((p: string) => p.trim());
            projects.forEach((project) => {
                projectCounts[project] = (projectCounts[project] || 0) + 1;
            });
        }
    });

    return Object.entries(projectCounts)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count);
};

export const getAttendanceStats = (): AttendanceStats => {
    return {
        totalDays: 31,
        presentDays: 30,
        leaveDays: 1,
        attendancePercentage: (30 / 31) * 100,
    };
};

export const getSkillsData = (): SkillsData[] => {
    return [
        {
            category: "Frontend",
            skills: ["UI/UX Development", "React", "Flutter", "Form Validation"],
            frequency: 25,
        },
        {
            category: "Backend",
            skills: ["API Integration", "Authentication", "Database Management"],
            frequency: 18,
        },
        {
            category: "DevOps",
            skills: ["Production Deployment", "Bug Fixing", "Performance Optimization"],
            frequency: 15,
        },
        {
            category: "Project Management",
            skills: ["Code Maintainability", "Documentation", "Team Collaboration"],
            frequency: 12,
        },
    ];
};

export const getDailyHoursData = () => {
    return [
        { date: "Jan 1", hours: 3.15 },
        { date: "Jan 2", hours: 0.42 },
        { date: "Jan 3", hours: 4.72 },
        { date: "Jan 4", hours: 7.58 },
        { date: "Jan 5", hours: 4.25 },
        { date: "Jan 6", hours: 2.82 },
        { date: "Jan 7", hours: 5.45 },
        { date: "Jan 8", hours: 4.33 },
        { date: "Jan 9", hours: 4.15 },
        { date: "Jan 10", hours: 4.28 },
        { date: "Jan 11", hours: 4.12 },
        { date: "Jan 12", hours: 7.7 },
        { date: "Jan 13", hours: 3.78 },
        { date: "Jan 14", hours: 0.8 },
        { date: "Jan 15", hours: 6.45 },
        { date: "Jan 16", hours: 4.25 },
        { date: "Jan 17", hours: 4.28 },
        { date: "Jan 18", hours: 6.12 },
        { date: "Jan 19", hours: 3.97 },
        { date: "Jan 20", hours: 5.01 },
        { date: "Jan 21", hours: 6.37 },
        { date: "Jan 22", hours: 2.58 },
        { date: "Jan 23", hours: 7.23 },
        { date: "Jan 24", hours: 4.15 },
        { date: "Jan 25", hours: 5.53 },
        { date: "Jan 26", hours: 5.22 },
        { date: "Jan 27", hours: 2.28 },
        { date: "Jan 28", hours: 6.35 },
        { date: "Jan 29", hours: 3.7 },
        { date: "Jan 30", hours: 2.03 },
        { date: "Jan 31", hours: 0 },
    ];
};

export const getProjectDetails = (): ProjectDetail[] => {
    return [
        {
            name: "MakeMyPass",
            description:
                "Event management and ticketing platform with advanced features for organizers and attendees",
            technologiesUsed: ["React", "Node.js", "API Integration", "Authentication"],
            keyAchievements: [
                "Implemented new team registration flow",
                "Enhanced ticket management system",
                "Integrated Snapshare functionality",
                "Improved form builder UI",
            ],
            totalHours: 45.5,
        },
        {
            name: "JusVote",
            description: "Voting and judging platform for events and competitions",
            technologiesUsed: ["React", "Authentication", "Database Management"],
            keyAchievements: [
                "Developed authentication module",
                "Created event listing interface",
                "Implemented judge onboarding process",
            ],
            totalHours: 22.3,
        },
        {
            name: "Promote",
            description: "Marketing and promotion platform for events and businesses",
            technologiesUsed: ["React", "Image Processing", "UI/UX Design"],
            keyAchievements: [
                "Built admin dashboard",
                "Implemented image template system",
                "Added social media integration",
            ],
            totalHours: 18.7,
        },
    ];
};

export const getWeeklyDetails = (): WeeklyDetail[] => {
    return [
        {
            weekNumber: "Week 1 (Jan 1-7)",
            summary:
                "Focused on bug fixes, authentication flow improvements, and UI development across multiple projects.",
            keyLearnings: [
                "API integration with LinkedIn",
                "Authentication flow debugging",
                "Printer alignment fixes",
                "Frontend-backend coordination",
            ],
            majorTasks: [
                "Fixed GuestsTable bug in MakeMyPass",
                "Developed LinkedIn share backend for Hoogo",
                "Enhanced authentication flow",
                "Implemented email validation",
                "Refactored project directory structure",
            ],
            challenges: [
                "Complex authentication bugs",
                "Printer alignment issues",
                "Form submission tracking errors",
            ],
            solutions: [
                "Enhanced error handling and debugging",
                "Implemented structured printer calibration",
                "Fixed log handling for better form tracking",
            ],
        },
        {
            weekNumber: "Week 2 (Jan 8-14)",
            summary:
                "Focused on UI/UX development, production deployment, and authentication enhancements.",
            keyLearnings: [
                "Code maintainability best practices",
                "Production deployment strategies",
                "UI/UX optimization",
                "Dynamic form handling",
            ],
            majorTasks: [
                "Developed organization member CRUD",
                "Implemented form builder enhancements",
                "Fixed public form validation issues",
                "Deployed production release for JusVote and ScaleUp",
            ],
            challenges: [
                "Complex UI requirements for forms",
                "Production deployment concerns",
                "Password reset vulnerabilities",
            ],
            solutions: [
                "Restructured code for better readability",
                "Created deployment checklists",
                "Strengthened authentication security",
            ],
        },
        {
            weekNumber: "Week 3 (Jan 15-21)",
            summary:
                "Focused on SnapShare integration, event workflow enhancements, and admin dashboard improvements.",
            keyLearnings: [
                "Backend-based event search implementation",
                "Improving admin dashboard interactivity",
                "Optimizing event redirection and UX",
            ],
            majorTasks: [
                "Implemented authentication module in Promote",
                "Enhanced ticket UI with vertical layouts",
                "Integrated SnapShare with OTP validation",
                "Developed modal-based image uploads",
            ],
            challenges: [
                "Event display sequencing issues",
                "UI misalignment in event workflows",
                "Backend API inconsistencies",
            ],
            solutions: [
                "Refactored event search logic",
                "Fixed UI misalignments for better UX",
                "Streamlined API usage for consistency",
            ],
        },
        {
            weekNumber: "Week 4 (Jan 22-28)",
            summary:
                "Worked on multiple projects, Flutter learning, certificate generation, and critical bug fixes.",
            keyLearnings: [
                "Flutter development fundamentals",
                "Optimizing production-level bug fixes",
                "Frontend-backend synchronization",
                "Enhancing real-time validation flows",
            ],
            majorTasks: [
                "Implemented certificate generation",
                "Fixed ticket code edit and file preview",
                "Integrated per-ticket multi-select flow",
                "Built team settings for event management",
                "Started Flutter-based QR application development",
            ],
            challenges: [
                "Ensuring real-time validation in forms",
                "Fixing ticket code preservation issues",
                "Implementing seamless certificate generation",
            ],
            solutions: [
                "Enhanced validation logic in public forms",
                "Improved storage and retrieval of ticket data",
                "Structured certificate generation workflow",
            ],
        },
        {
            weekNumber: "Week 5 (Jan 29 - Feb 4)",
            summary:
                "Deepened Flutter learning, optimized MakeMyPass features, and worked on performance improvements.",
            keyLearnings: [
                "State management in Flutter",
                "Advanced UI animations and transitions",
                "Optimizing API response times",
                "Refining multi-user workflows",
            ],
            majorTasks: [
                "Enhanced QR application with scanning functionalities",
                "Fixed multi-user authentication issues in MakeMyPass",
                "Worked on reducing API latency",
                "Refactored Flutter application architecture for better maintainability",
                "Implemented dynamic role-based access control",
            ],
            challenges: [
                "Handling state persistence in Flutter apps",
                "Performance issues due to high API response times",
                "Managing role-based authentication in large teams",
            ],
            solutions: [
                "Used Flutter's Provider for state management",
                "Implemented caching and optimized database queries",
                "Refined authentication logic for better role handling",
            ],
        },
    ];
};

export const getSkillDetails = (): SkillDetail[] => {
    return [
        {
            category: "Frontend Development",
            skills: [
                {
                    name: "React.js",
                    proficiency: 85,
                    projectsApplied: ["MakeMyPass", "JusVote", "Promote"],
                },
                {
                    name: "UI/UX Design",
                    proficiency: 80,
                    projectsApplied: ["MakeMyPass", "Promote"],
                },
                {
                    name: "Flutter",
                    proficiency: 60,
                    projectsApplied: ["Mobile App Development"],
                },
            ],
        },
        {
            category: "Backend Development",
            skills: [
                {
                    name: "API Integration",
                    proficiency: 90,
                    projectsApplied: ["MakeMyPass", "Hoogo"],
                },
                {
                    name: "Authentication",
                    proficiency: 85,
                    projectsApplied: ["JusVote", "Promote"],
                },
            ],
        },
    ];
};
