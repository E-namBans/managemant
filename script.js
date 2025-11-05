// Comprehensive School Management System
// This file contains all the functionality for the system

// Sample data - In a real application, this would come from your Laravel backend
// Enhanced Sample Data with Passwords - REPLACE THE ENTIRE sampleData OBJECT
const sampleData = {
    users: {
        // Student users
        'STU001': { password: 'student123', type: 'student', userData: 'STU001' },
        'STU002': { password: 'student123', type: 'student', userData: 'STU002' },
        'STU003': { password: 'student123', type: 'student', userData: 'STU003' },
        'STU004': { password: 'student123', type: 'student', userData: 'STU004' },
        'STU005': { password: 'student123', type: 'student', userData: 'STU005' },
        
        // Teacher users
        'TCH001': { password: 'teacher123', type: 'teacher', userData: 'TCH001' },
        'TCH002': { password: 'teacher123', type: 'teacher', userData: 'TCH002' },
        'TCH003': { password: 'teacher123', type: 'teacher', userData: 'TCH003' },
        'TCH004': { password: 'teacher123', type: 'teacher', userData: 'TCH004' },
        
        // Parent users (format: PARENT_studentId)
        'PARENT_STU001': { password: 'parent123', type: 'parent', userData: 'STU001' },
        'PARENT_STU002': { password: 'parent123', type: 'parent', userData: 'STU002' },
        
        // Admin users
        'admin': { password: 'admin123', type: 'admin', userData: null },
        'school_admin': { password: 'admin123', type: 'admin', userData: null }
    },

    students: [
        { 
            id: 'STU001', 
            name: 'John Doe', 
            class: '10A', 
            gpa: 3.8, 
            attendance: 92,
            dob: '2007-05-15',
            phone: '+1234567890',
            email: 'john.doe@school.edu',
            status: 'active'
        },
        { 
            id: 'STU002', 
            name: 'Jane Smith', 
            class: '10A', 
            gpa: 3.9, 
            attendance: 95,
            dob: '2007-08-22',
            phone: '+1234567891',
            email: 'jane.smith@school.edu',
            status: 'active'
        },
        { 
            id: 'STU003', 
            name: 'Michael Johnson', 
            class: '10B', 
            gpa: 3.5, 
            attendance: 88,
            dob: '2007-03-10',
            phone: '+1234567892',
            email: 'michael.j@school.edu',
            status: 'active'
        },
        { 
            id: 'STU004', 
            name: 'Emily Davis', 
            class: '10B', 
            gpa: 3.7, 
            attendance: 90,
            dob: '2007-11-05',
            phone: '+1234567893',
            email: 'emily.davis@school.edu',
            status: 'active'
        },
        { 
            id: 'STU005', 
            name: 'Robert Wilson', 
            class: '11A', 
            gpa: 3.6, 
            attendance: 85,
            dob: '2006-09-18',
            phone: '+1234567894',
            email: 'robert.w@school.edu',
            status: 'active'
        },
           { 
            id: 'STU006', 
            name: 'Robertd Wilson', 
            class: '11A', 
            gpa: 1.6, 
            attendance: 45,
            dob: '2006-09-18',
            phone: '+1234567894',
            email: 'robert.w@school.edu',
            status: 'active'
        },
          { 
        id: 'STU007', 
        name: 'John bans', 
        class: '10A', 
        gpa: 3.8,  // Performing student
        attendance: 92,
        dob: '2007-05-15',
        phone: '+1234567890',
        email: 'john.doe@school.edu',
        status: 'active'
    }
    ],
    
    teachers: [
        {
            id: 'TCH001',
            name: 'Dr. Sarah Johnson',
            subject: 'Mathematics',
            email: 's.johnson@school.edu',
            phone: '+1234567801',
            experience: '12 years',
            status: 'active'
        },
        {
            id: 'TCH002',
            name: 'Mr. David Chen',
            subject: 'Science',
            email: 'd.chen@school.edu',
            phone: '+1234567802',
            experience: '8 years',
            status: 'active'
        },
        {
            id: 'TCH003',
            name: 'Ms. Maria Garcia',
            subject: 'English',
            email: 'm.garcia@school.edu',
            phone: '+1234567803',
            experience: '10 years',
            status: 'active'
        },
        {
            id: 'TCH004',
            name: 'Mr. James Wilson',
            subject: 'History',
            email: 'j.wilson@school.edu',
            phone: '+1234567804',
            experience: '15 years',
            status: 'active'
        },
           {
            id: 'TCH005',
            name: 'Mr. Joel Wilson',
            subject: 'History',
            email: 'j.wilson@school.edu',
            phone: '+1234567804',
            experience: '15 years',
            status: 'active'
        }
        
    ],
    
    subjectAllocation: [
        { teacher: 'Dr. Sarah Johnson', subject: 'Mathematics', class: '10A', periods: 5 },
        { teacher: 'Dr. Sarah Johnson', subject: 'Mathematics', class: '10B', periods: 5 },
        { teacher: 'Mr. David Chen', subject: 'Science', class: '10A', periods: 4 },
        { teacher: 'Mr. David Chen', subject: 'Science', class: '10B', periods: 4 },
        { teacher: 'Ms. Maria Garcia', subject: 'English', class: '10A', periods: 4 },
        { teacher: 'Ms. Maria Garcia', subject: 'English', class: '10B', periods: 4 },
        { teacher: 'Mr. James Wilson', subject: 'History', class: '10A', periods: 3 },
        { teacher: 'Mr. James Wilson', subject: 'History', class: '10B', periods: 3 }
    ],
    
    results: {
           year2024: {
        term1: [
            { studentId: 'STU001', name: 'John Doe', math: 85, science: 78, english: 92, history: 75, total: 330, grade: 'B+' },
            { studentId: 'STU002', name: 'Jane Smith', math: 92, science: 88, english: 95, history: 90, total: 365, grade: 'A' },
            // ... other 2024 term1 results
        ],
        term2: [
            { studentId: 'STU001', name: 'John Doe', math: 88, science: 82, english: 94, history: 80, total: 344, grade: 'B+' },
            { studentId: 'STU002', name: 'Jane Smith', math: 95, science: 90, english: 96, history: 92, total: 373, grade: 'A' },
            // ... other 2024 term2 results
        ],
        term3: [
            { studentId: 'STU001', name: 'John Doe', math: 92, science: 85, english: 96, history: 85, total: 358, grade: 'A-' },
            { studentId: 'STU002', name: 'Jane Smith', math: 98, science: 92, english: 97, history: 94, total: 381, grade: 'A' },
            // ... other 2024 term3 results
        ]
    },
    year2023: {
        term1: [
            { studentId: 'STU001', name: 'John Doe', math: 78, science: 72, english: 85, history: 70, total: 305, grade: 'B' },
            { studentId: 'STU002', name: 'Jane Smith', math: 88, science: 82, english: 90, history: 85, total: 345, grade: 'B+' },
        ],
        term2: [
            { studentId: 'STU001', name: 'John Doe', math: 82, science: 75, english: 88, history: 72, total: 317, grade: 'B' },
            { studentId: 'STU002', name: 'Jane Smith', math: 90, science: 85, english: 92, history: 88, total: 355, grade: 'A-' },
        ],
        term3: [
            { studentId: 'STU001', name: 'John Doe', math: 85, science: 78, english: 90, history: 75, total: 328, grade: 'B+' },
            { studentId: 'STU002', name: 'Jane Smith', math: 92, science: 88, english: 94, history: 90, total: 364, grade: 'A-' },
        ]
    },
    year2022: {
        term1: [
            { studentId: 'STU001', name: 'John Doe', math: 72, science: 68, english: 80, history: 65, total: 285, grade: 'C+' },
            { studentId: 'STU002', name: 'Jane Smith', math: 85, science: 78, english: 88, history: 80, total: 331, grade: 'B+' },
        ]
    }
},
    
    analysis: {
        'STU001': {
            'term1-term2': {
                overall: '+4.2%',
                strongest: 'Mathematics',
                weakest: 'History',
                predicted: 'A-',
                subjects: [
                    { subject: 'Mathematics', previous: 85, current: 88, difference: 3, trend: 'up', recommendation: 'Continue practicing advanced problems' },
                    { subject: 'Science', previous: 78, current: 82, difference: 4, trend: 'up', recommendation: 'Focus on laboratory work' },
                    { subject: 'English', previous: 92, current: 94, difference: 2, trend: 'up', recommendation: 'Excellent performance, maintain consistency' },
                    { subject: 'History', previous: 75, current: 80, difference: 5, trend: 'up', recommendation: 'Improve note-taking and revision techniques' }
                ]
            },
            'term2-term3': {
                overall: '+4.1%',
                strongest: 'English',
                weakest: 'Science',
                predicted: 'A-',
                subjects: [
                    { subject: 'Mathematics', previous: 88, current: 92, difference: 4, trend: 'up', recommendation: 'Excellent progress in problem-solving' },
                    { subject: 'Science', previous: 82, current: 85, difference: 3, trend: 'up', recommendation: 'Focus on understanding scientific concepts' },
                    { subject: 'English', previous: 94, current: 96, difference: 2, trend: 'up', recommendation: 'Outstanding performance in literature' },
                    { subject: 'History', previous: 80, current: 85, difference: 5, trend: 'up', recommendation: 'Significant improvement, keep revising regularly' }
                ]
            }
        }
    },
    
    attendance: {
        '2024-01': {
            'STU001': { present: 20, absent: 2, late: 1 },
            'STU002': { present: 22, absent: 0, late: 0 },
            'STU003': { present: 18, absent: 4, late: 1 },
            'STU004': { present: 21, absent: 1, late: 1 },
            'STU005': { present: 19, absent: 3, late: 2 }
        }
    },
    
    timetable: {
        '10A': {
             monday: [
            { time: '8:00-9:00', subject: 'Mathematics', teacher: 'Dr. Sarah Johnson' },
            { time: '9:00-10:00', subject: 'Science', teacher: 'Mr. David Chen' },
            { time: '10:15-11:15', subject: 'English', teacher: 'Ms. Maria Garcia' },
            { time: '11:15-12:15', subject: 'History', teacher: 'Mr. James Wilson' },
            { time: '1:15-2:15', subject: 'Mathematics', teacher: 'Dr. Sarah Johnson' }
        ],
        tuesday: [
            { time: '8:00-9:00', subject: 'Science', teacher: 'Mr. David Chen' },
            { time: '9:00-10:00', subject: 'English', teacher: 'Ms. Maria Garcia' },
            { time: '10:15-11:15', subject: 'Mathematics', teacher: 'Dr. Sarah Johnson' },
            { time: '11:15-12:15', subject: 'Physical Education', teacher: 'Coach Miller' }
        ],
        wednesday: [
            { time: '8:00-9:00', subject: 'English', teacher: 'Ms. Maria Garcia' },
            { time: '9:00-10:00', subject: 'History', teacher: 'Mr. James Wilson' },
            { time: '10:15-11:15', subject: 'Science', teacher: 'Mr. David Chen' },
            { time: '11:15-12:15', subject: 'Mathematics', teacher: 'Dr. Sarah Johnson' }
        ],
        thursday: [
            { time: '8:00-9:00', subject: 'Mathematics', teacher: 'Dr. Sarah Johnson' },
            { time: '9:00-10:00', subject: 'Science Lab', teacher: 'Mr. David Chen' },
            { time: '10:15-11:15', subject: 'English', teacher: 'Ms. Maria Garcia' },
            { time: '11:15-12:15', subject: 'Art', teacher: 'Ms. Davis' }
        ],
        friday: [
            { time: '8:00-9:00', subject: 'History', teacher: 'Mr. James Wilson' },
            { time: '9:00-10:00', subject: 'Mathematics', teacher: 'Dr. Sarah Johnson' },
            { time: '10:15-11:15', subject: 'Science', teacher: 'Mr. David Chen' },
            { time: '11:15-12:15', subject: 'Sports', teacher: 'Coach Miller' }
        ]
    },
    '10B': {
        monday: [
            { time: '8:00-9:00', subject: 'Science', teacher: 'Mr. David Chen' },
            { time: '9:00-10:00', subject: 'Mathematics', teacher: 'Dr. Sarah Johnson' },
            { time: '10:15-11:15', subject: 'History', teacher: 'Mr. James Wilson' },
            { time: '11:15-12:15', subject: 'English', teacher: 'Ms. Maria Garcia' }
        ],
        tuesday: [
            { time: '8:00-9:00', subject: 'Mathematics', teacher: 'Dr. Sarah Johnson' },
            { time: '9:00-10:00', subject: 'English', teacher: 'Ms. Maria Garcia' },
            { time: '10:15-11:15', subject: 'Science', teacher: 'Mr. David Chen' },
            { time: '11:15-12:15', subject: 'Physical Education', teacher: 'Coach Miller' }
        ]
        }
    },
    
    fees: {
        'STU001': [
            { date: '2024-01-15', description: 'Term 1 Tuition', amount: 400, status: 'paid', receipt: 'RCP001' },
            { date: '2024-02-01', description: 'Lab Fees', amount: 50, status: 'paid', receipt: 'RCP002' },
            { date: '2024-03-01', description: 'Term 2 Tuition', amount: 400, status: 'pending', receipt: '' },
            { date: '2024-01-20', description: 'Library Fine', amount: 10, status: 'overdue', receipt: '' }
        ],
          'STU002': [
            { date: '2024-01-15', description: 'Term 1 Tuition', amount: 400, status: 'paid', receipt: 'RCP001' },
            { date: '2024-02-01', description: 'Lab Fees', amount: 50, status: 'paid', receipt: 'RCP002' },
            { date: '2024-03-01', description: 'Term 2 Tuition', amount: 400, status: 'pending', receipt: '' },
            { date: '2024-01-20', description: 'Library Fine', amount: 10, status: 'overdue', receipt: '' }
        ],
        'STU003': [
        { date: '2024-01-15', description: 'Term 1 Tuition', amount: 400, status: 'overdue', receipt: '' },
        { date: '2024-02-01', description: 'Lab Fees', amount: 50, status: 'overdue', receipt: '' }
    ]

    },
    
    library: {
        books: [
            { id: 'BK001', title: 'Advanced Mathematics', author: 'Dr. Robert Brown', isbn: '978-0123456789', available: true },
            { id: 'BK002', title: 'Physics Fundamentals', author: 'Prof. Alice Green', isbn: '978-0123456790', available: true },
            { id: 'BK003', title: 'English Literature', author: 'Dr. Charles White', isbn: '978-0123456791', available: false },
            { id: 'BK004', title: 'World History', author: 'Dr. Patricia Black', isbn: '978-0123456792', available: true }
        ],
        borrowed: [
            { bookId: 'BK003', studentId: 'STU001', borrowDate: '2024-02-15', dueDate: '2024-03-15' }
        ]
    },
    
    exams: [
    { id: 'EXM001', subject: 'Mathematics', class: '10A', date: '2024-04-15', time: '9:00 AM', duration: '3 hours' },
    { id: 'EXM002', subject: 'Science', class: '10A', date: '2024-04-17', time: '9:00 AM', duration: '2 hours' },
    { id: 'EXM003', subject: 'English', class: '10A', date: '2024-04-19', time: '9:00 AM', duration: '2 hours' },
    { id: 'EXM004', subject: 'History', class: '10A', date: '2024-04-22', time: '9:00 AM', duration: '2 hours' },
    { id: 'EXM005', subject: 'Mathematics', class: '10B', date: '2024-04-16', time: '9:00 AM', duration: '3 hours' },
    { id: 'EXM006', subject: 'Science', class: '10B', date: '2024-04-18', time: '9:00 AM', duration: '2 hours' },
    { id: 'EXM007', subject: 'English', class: '10B', date: '2024-04-20', time: '9:00 AM', duration: '2 hours' },
    { id: 'EXM008', subject: 'Physics', class: '11A', date: '2024-04-15', time: '1:00 PM', duration: '3 hours' },
    { id: 'EXM009', subject: 'Chemistry', class: '11A', date: '2024-04-18', time: '1:00 PM', duration: '3 hours' },
    { id: 'EXM010', subject: 'Biology', class: '11A', date: '2024-04-21', time: '1:00 PM', duration: '3 hours' },
    { id: 'EXM011', subject: 'Mathematics', class: '11A', date: '2024-05-02', time: '9:00 AM', duration: '3 hours' },
    { id: 'EXM012', subject: 'Computer Science', class: '11A', date: '2024-05-05', time: '9:00 AM', duration: '2 hours' }
    ],
    
    behavior: {
        'STU001': [
            { date: '2024-02-10', type: 'positive', description: 'Helped organize class library', teacher: 'Ms. Maria Garcia' },
            { date: '2024-02-15', type: 'improvement', description: 'Needs to improve participation in class discussions', teacher: 'Mr. David Chen' },
            { date: '2024-02-20', type: 'positive', description: 'Excellent performance in science project', teacher: 'Mr. David Chen' }
        ]
    },
    
    resources: [
        { id: 'RES001', title: 'Algebra Study Notes', category: 'notes', uploadDate: '2024-01-15', downloads: 45 },
        { id: 'RES002', title: 'Chemistry Lab Safety', category: 'videos', uploadDate: '2024-01-20', downloads: 32 },
        { id: 'RES003', title: '2023 Final Papers', category: 'papers', uploadDate: '2024-02-01', downloads: 78 },
        { id: 'RES004', title: 'Physics E-Book', category: 'books', uploadDate: '2024-02-10', downloads: 56 }
    ],
    
    notifications: [
        { id: 'NOT001', title: 'Term 2 Results Published', content: 'The results for Term 2 have been published. Students can check their performance in the results section.', date: '2024-03-01', audience: 'students' },
        { id: 'NOT002', title: 'Parent-Teacher Meeting', content: 'The quarterly parent-teacher meeting is scheduled for March 15, 2024. Please confirm your attendance.', date: '2024-02-25', audience: 'parents' },
        { id: 'NOT003', title: 'Science Fair', content: 'Annual Science Fair will be held on March 20, 2024. Students are encouraged to participate.', date: '2024-02-20', audience: 'all' }
    ],



 // === MONITORING DATA ===
    systemLogs: {
        logins: [
            { id: 'LOG001', userId: 'STU001', username: 'John Doe', timestamp: '2024-03-15 08:30:25', ip: '192.168.1.100', status: 'success', userType: 'student' },
            { id: 'LOG002', userId: 'TCH001', username: 'Dr. Sarah Johnson', timestamp: '2024-03-15 08:15:10', ip: '192.168.1.50', status: 'success', userType: 'teacher' },
            { id: 'LOG003', userId: 'admin', username: 'System Administrator', timestamp: '2024-03-15 07:45:33', ip: '192.168.1.10', status: 'success', userType: 'admin' },
            { id: 'LOG004', userId: 'STU002', username: 'Jane Smith', timestamp: '2024-03-15 09:05:17', ip: '192.168.1.105', status: 'success', userType: 'student' },
            { id: 'LOG005', userId: 'unknown', username: 'Unknown User', timestamp: '2024-03-15 09:12:45', ip: '192.168.1.200', status: 'failed', userType: 'unknown' },
            { id: 'LOG006', userId: 'TCH002', username: 'Mr. David Chen', timestamp: '2024-03-15 10:20:30', ip: '192.168.1.55', status: 'success', userType: 'teacher' },
            { id: 'LOG007', userId: 'PARENT_STU001', username: 'Parent of John Doe', timestamp: '2024-03-15 11:15:22', ip: '192.168.1.120', status: 'success', userType: 'parent' },
            { id: 'LOG008', userId: 'STU003', username: 'Michael Johnson', timestamp: '2024-03-15 12:30:18', ip: '192.168.1.110', status: 'success', userType: 'student' }
        ]
    },

    recentChanges: [
        { id: 'CHG001', type: 'update', entity: 'student', entityId: 'STU001', field: 'gpa', oldValue: 3.7, newValue: 3.8, changedBy: 'TCH001', timestamp: '2024-03-15 14:25:33', description: 'Updated GPA for John Doe' },
        { id: 'CHG002', type: 'create', entity: 'attendance', entityId: 'ATT_20240315', field: null, oldValue: null, newValue: 'present', changedBy: 'TCH001', timestamp: '2024-03-15 09:00:15', description: 'Marked attendance for Class 10A' },
        { id: 'CHG003', type: 'update', entity: 'teacher', entityId: 'TCH003', field: 'subject', oldValue: 'English Literature', newValue: 'English', changedBy: 'admin', timestamp: '2024-03-15 13:45:22', description: 'Updated subject for Ms. Maria Garcia' },
        { id: 'CHG004', type: 'create', entity: 'exam', entityId: 'EXM013', field: null, oldValue: null, newValue: 'Mathematics Final', changedBy: 'TCH001', timestamp: '2024-03-15 10:30:45', description: 'Created new exam: Mathematics Final' },
        { id: 'CHG005', type: 'update', entity: 'fee', entityId: 'STU001_FEE003', field: 'status', oldValue: 'pending', newValue: 'paid', changedBy: 'admin', timestamp: '2024-03-15 11:20:18', description: 'Updated fee status for John Doe' },
        { id: 'CHG006', type: 'delete', entity: 'resource', entityId: 'RES005', field: null, oldValue: 'Old Study Guide', newValue: null, changedBy: 'TCH002', timestamp: '2024-03-15 15:10:33', description: 'Deleted resource: Old Study Guide' }
    ],

    userActivity: {
        hourlyPattern: [
            { hour: '00:00', logins: 2, activity: 5 },
            { hour: '06:00', logins: 8, activity: 15 },
            { hour: '07:00', logins: 25, activity: 45 },
            { hour: '08:00', logins: 48, activity: 89 },
            { hour: '09:00', logins: 35, activity: 67 },
            { hour: '10:00', logins: 28, activity: 52 },
            { hour: '11:00', logins: 22, activity: 41 },
            { hour: '12:00', logins: 18, activity: 35 },
            { hour: '13:00', logins: 15, activity: 28 },
            { hour: '14:00', logins: 20, activity: 38 },
            { hour: '15:00', logins: 25, activity: 46 },
            { hour: '16:00', logins: 18, activity: 32 },
            { hour: '17:00', logins: 12, activity: 25 },
            { hour: '18:00', logins: 8, activity: 18 },
            { hour: '21:00', logins: 5, activity: 12 }
        ],
        userTypeDistribution: [
            { type: 'student', count: 65, percentage: 65 },
            { type: 'teacher', count: 20, percentage: 20 },
            { type: 'parent', count: 12, percentage: 12 },
            { type: 'admin', count: 3, percentage: 3 }
        ],
        topActiveUsers: [
            { userId: 'TCH001', username: 'Dr. Sarah Johnson', loginCount: 15, lastActive: '2024-03-15 14:25:33' },
            { userId: 'admin', username: 'System Administrator', loginCount: 12, lastActive: '2024-03-15 13:45:22' },
            { userId: 'STU001', username: 'John Doe', loginCount: 8, lastActive: '2024-03-15 12:30:18' },
            { userId: 'TCH002', username: 'Mr. David Chen', loginCount: 7, lastActive: '2024-03-15 11:20:18' },
            { userId: 'STU002', username: 'Jane Smith', loginCount: 6, lastActive: '2024-03-15 10:30:45' }
        ]
    },

    errorLogs: [
        { id: 'ERR001', type: 'authentication', severity: 'high', message: 'Multiple failed login attempts from IP: 192.168.1.200', timestamp: '2024-03-15 09:12:45', resolved: false },
        { id: 'ERR002', type: 'database', severity: 'medium', message: 'Slow query execution in results table', timestamp: '2024-03-15 11:30:15', resolved: true },
        { id: 'ERR003', type: 'system', severity: 'low', message: 'Temporary file cleanup failed', timestamp: '2024-03-15 08:45:22', resolved: true },
        { id: 'ERR004', type: 'authentication', severity: 'high', message: 'Session timeout for user: STU005', timestamp: '2024-03-15 14:20:33', resolved: false },
        { id: 'ERR005', type: 'network', severity: 'medium', message: 'API response timeout from external service', timestamp: '2024-03-15 10:15:18', resolved: false },
        { id: 'ERR006', type: 'system', severity: 'low', message: 'Memory usage above 80% threshold', timestamp: '2024-03-15 13:05:47', resolved: true }
    ]
};

// DOM Elements
const sections = {
    login: document.getElementById('login'),
    dashboard: document.getElementById('dashboard'),
    students: document.getElementById('students'),
    teachers: document.getElementById('teachers'),
    results: document.getElementById('results'),
    analysis: document.getElementById('analysis'),
    attendance: document.getElementById('attendance'),
    timetable: document.getElementById('timetable'),
    fees: document.getElementById('fees'),
    library: document.getElementById('library'),
    exams: document.getElementById('exams'),
    behavior: document.getElementById('behavior'),
    resources: document.getElementById('resources'),
    parentPortal: document.getElementById('parent-portal'),
    reports: document.getElementById('reports'),
    notifications: document.getElementById('notifications'),
     monitoring: document.getElementById('monitoring')
};

// Current application state
const appState = {
    currentUser: null,
    currentSection: 'login',
    isHighContrast: false,
    isLargeText: false,
    currentLanguage: 'en'
};


function updateUIForUserType(userType) {
    // Hide/show navigation items based on user type
    const navItems = document.querySelectorAll('.nav-link');
    
    navItems.forEach(item => {
        const target = item.getAttribute('data-target');
        const isVisible = isSectionAccessible(target, userType);
        item.parentElement.style.display = isVisible ? 'block' : 'none';
    });
    
    // Update dashboard header based on user type
    updateDashboardHeader(userType);
}


function isSectionAccessible(section, userType) {
    const accessibleSections = {
        student: ['dashboard', 'results', 'analysis', 'attendance', 'timetable',  'library', 'exams',  'resources', 'notifications'],
        teacher: ['dashboard', 'students', 'teachers', 'results', 'analysis', 'attendance', 'timetable', 'exams', 'behavior', 'resources', 'notifications'],
        parent: ['dashboard', 'parent-portal', 'results', 'attendance', 'fees', 'behavior', 'notifications'],
        admin: ['dashboard', 'students', 'teachers', 'results', 'analysis', 'attendance', 'timetable', 'fees', 'library', 'exams', 'behavior', 'resources', 'parent-portal', 'reports', 'notifications', 'monitoring']
    };
    
    return accessibleSections[userType]?.includes(section) || false;
}


function updateDashboardHeader(userType) {
    console.log('=== updateDashboardHeader called with:', userType); // ADD THIS
    
    const dashboardHeader = document.querySelector('.dashboard-header h2');
    if (dashboardHeader) {
        const headers = {
            student: 'Student Dashboard',
            teacher: 'Teacher Dashboard',
            parent: 'Parent Portal',
            admin: 'Administrator Dashboard'
        };
        dashboardHeader.textContent = headers[userType] || 'Dashboard';
    }
}



function addLogoutButton() {
    // Remove existing logout button if any
    const existingBtn = document.getElementById('logout-btn');
    if (existingBtn) {
        existingBtn.remove();
    }

    // Create new logout button
    const logoutBtn = document.createElement('button');
    logoutBtn.id = 'logout-btn';
    logoutBtn.className = 'btn-secondary';
    logoutBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> Logout';
    logoutBtn.addEventListener('click', handleLogout);
    
    // Find the header actions container
    const headerActions = document.querySelector('.header-actions');
    if (headerActions) {
        headerActions.appendChild(logoutBtn);
    } else {
        console.error('Header actions container not found');
        // Fallback: try to find another place to put the button
        const headerContent = document.querySelector('.header-content');
        if (headerContent) {
            headerContent.appendChild(logoutBtn);
        }
    }
}

function handleLogout() {
    // Clear app state
    appState.currentUser = null;
    appState.currentSection = 'login';
    
    // Clear session storage
    localStorage.removeItem('userSession');
    
    // Show login section and hide all others
    Object.values(sections).forEach(section => {
        if (section) {
            section.classList.remove('active');
            if (section.id === 'login') {
                section.classList.add('active');
            }
        }
    });
    
    // Reset active navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Show all navigation items again (they'll be filtered on next login)
    const navItems = document.querySelectorAll('nav li');
    navItems.forEach(item => {
        item.style.display = 'block';
    });
    
    // Reset login form
    document.getElementById('login-form').reset();
    
    // Remove logout button
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.remove();
    }
    
    // Show logout notification
    showNotification('You have been logged out successfully', 'info');
}




function validateSession() {
    console.log('validateSession called');
    
    const session = localStorage.getItem('userSession');
    if (!session) {
        console.log('No session found');
        return false;
    }
    
    try {
        const sessionData = JSON.parse(session);
        
        // Check if session is expired (1 hour)
        if (Date.now() - sessionData.loginTime > 3600000) {
            localStorage.removeItem('userSession');
            console.log('Session expired');
            return false;
        }
        
        // Verify user still exists in database
        const userAuth = sampleData.users[sessionData.id];
        if (!userAuth) {
            localStorage.removeItem('userSession');
            console.log('User not found in database');
            return false;
        }
        
        console.log('Valid session found for:', sessionData.name);
        return sessionData;
    } catch (e) {
        localStorage.removeItem('userSession');
        console.log('Session validation error:', e);
        return false;
    }
}
// THEN window.onload comes AFTER all function definitions
window.onload = function() {
    populateStudentsList();
    
  };


  

// Check for existing login session on page load
function checkExistingLogin() {
    console.log('checkExistingLogin called');
    
    const validSession = validateSession();
    if (validSession) {
        appState.currentUser = validSession;
        updateUIForUserType(validSession.type);
        showNotification(`Welcome back, ${validSession.name}!`, 'success');
        navigateToSection('dashboard');
        addLogoutButton();
    } else {
        console.log('No existing login session found');
    }
}





// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    console.log('Initializing application...');
    
    // Check if DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setupApplication();
        });
    } else {
        setupApplication();
    }
}

function setupApplication() {
    // Set up event listeners
    setupEventListeners();
    
    // Check for existing login session
    checkExistingLogin();
    
    // Initialize all sections
    initializeSections();
    
    // Load initial data
    loadInitialData();
    
    // Add logout button if user is logged in
    if (appState.currentUser) {
        addLogoutButton();
    } else {
        // Show login section by default
        showSection('login');
    }
    
    console.log('Application initialized successfully');
}

// Start the application when the script loads
initializeApp();




function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Navigation - these should always exist
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            navigateToSection(target);
        });
    });

    // Login form - should always exist
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Accessibility controls - check if they exist
    const highContrastToggle = document.getElementById('high-contrast-toggle');
    if (highContrastToggle) {
        highContrastToggle.addEventListener('click', toggleHighContrast);
    }
    
    const fontSizeToggle = document.getElementById('font-size-toggle');
    if (fontSizeToggle) {
        fontSizeToggle.addEventListener('click', toggleFontSize);
    }
    
    // Language selector - check if it exists
    const languageSelect = document.getElementById('language');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }

    // Results management - check if elements exist
    const resultTerm = document.getElementById('result-term');
    if (resultTerm) {
        resultTerm.addEventListener('change', updateResultsTable);
    }
    
    const resultClass = document.getElementById('result-class');
    if (resultClass) {
        resultClass.addEventListener('change', updateResultsTable);
    }
    
     // FIXED: Changed from exportResults to exportResultsData to avoid naming conflict
    const exportResultsBtn = document.getElementById('export-results');
    if (exportResultsBtn) {
        exportResultsBtn.addEventListener('click', exportResultsData);
    }
    // Result year - check if it exists
    const resultYear = document.getElementById('result-year');
    if (resultYear) {
        resultYear.addEventListener('change', updateResultsTable);
    }

    // Teacher management - check if it exists
    const addTeacherBtn = document.getElementById('add-teacher-btn');
    if (addTeacherBtn) {
        addTeacherBtn.addEventListener('click', addTeacher);
    }

    // Student management - check if elements exist
    const addStudentBtn = document.getElementById('add-student-btn');
    if (addStudentBtn) {
        addStudentBtn.addEventListener('click', showStudentModal);
    }
    
    const studentSearch = document.getElementById('student-search');
    if (studentSearch) {
        studentSearch.addEventListener('input', filterStudents);
    }
    
    const classFilter = document.getElementById('class-filter');
    if (classFilter) {
        classFilter.addEventListener('change', filterStudents);
    }
    
    const statusFilter = document.getElementById('status-filter');
    if (statusFilter) {
        statusFilter.addEventListener('change', filterStudents);
    }
    
    // Analysis - check if elements exist
    const analysisStudent = document.getElementById('analysis-student');
    if (analysisStudent) {
        analysisStudent.addEventListener('change', updateAnalysis);
    }
    
    const analysisPeriod = document.getElementById('analysis-period');
    if (analysisPeriod) {
        analysisPeriod.addEventListener('change', updateAnalysis);
    }
    
    const generateAnalysis = document.getElementById('generate-analysis');
    if (generateAnalysis) {
        generateAnalysis.addEventListener('click', updateAnalysis);
    }
    
    // Attendance - check if elements exist
    const markAttendance = document.getElementById('mark-attendance');
    if (markAttendance) {
        markAttendance.addEventListener('click', markAttendance);
    }
    
    const viewReport = document.getElementById('view-report');
    if (viewReport) {
        viewReport.addEventListener('click', viewAttendanceReport);
    }
    
    const attendanceClass = document.getElementById('attendance-class');
    if (attendanceClass) {
        attendanceClass.addEventListener('change', updateAttendanceTable);
    }
    
    // Timetable - check if elements exist
    const timetableClass = document.getElementById('timetable-class');
    if (timetableClass) {
        timetableClass.addEventListener('change', updateTimetable);
    }
    
    const printTimetableBtn = document.getElementById('print-timetable');
    if (printTimetableBtn) {
        printTimetableBtn.addEventListener('click', printTimetable);
    }
    
    // Fees - check if elements exist
    const recordPayment = document.getElementById('record-payment');
    if (recordPayment) {
        recordPayment.addEventListener('click', recordPayment);
    }
    
    const sendReminders = document.getElementById('send-reminders');
    if (sendReminders) {
        sendReminders.addEventListener('click', sendFeeReminders);
    }
    
    // Library - check if elements exist
    const bookSearch = document.getElementById('book-search');
    if (bookSearch) {
        bookSearch.addEventListener('input', searchBooks);
    }
    
    // Exams - check if elements exist
    const examClass = document.getElementById('exam-class');
    if (examClass) {
        examClass.addEventListener('change', updateExamSchedule);
    }
    
    const addExamBtn = document.getElementById('add-exam');
    if (addExamBtn) {
        addExamBtn.addEventListener('click', addExam);
    }
    
    const printExamsBtn = document.getElementById('print-exams');
    if (printExamsBtn) {
        printExamsBtn.addEventListener('click', printExams);
    }
    
    // Behavior - check if elements exist
    const addBehaviorRecord = document.getElementById('add-behavior-record');
    if (addBehaviorRecord) {
        addBehaviorRecord.addEventListener('click', addBehaviorRecord);
    }
    
    // Resources - check if elements exist
    document.querySelectorAll('.resource-category').forEach(btn => {
        btn.addEventListener('click', function() {
            filterResources(this.getAttribute('data-category'));
        });
    });
    
    const uploadResource = document.getElementById('upload-resource');
    if (uploadResource) {
        uploadResource.addEventListener('click', uploadResource);
    }
    
    // Parent Portal - check if elements exist
    const selectChild = document.getElementById('select-child');
    if (selectChild) {
        selectChild.addEventListener('change', updateChildProgress);
    }
    
    const messageTeacher = document.getElementById('message-teacher');
    if (messageTeacher) {
        messageTeacher.addEventListener('click', messageTeacher);
    }
    
    const scheduleMeeting = document.getElementById('schedule-meeting');
    if (scheduleMeeting) {
        scheduleMeeting.addEventListener('click', scheduleMeeting);
    }
    
    // Reports - check if elements exist
    const generateReport = document.getElementById('generate-report');
    if (generateReport) {
        generateReport.addEventListener('click', generateReport);
    }
    
    // Notifications - check if elements exist
    const sendAnnouncement = document.getElementById('send-announcement');
    if (sendAnnouncement) {
        sendAnnouncement.addEventListener('click', sendAnnouncement);
    }
    
    // Modal - check if elements exist
    const closeModal = document.querySelector('.close');
    if (closeModal) {
        closeModal.addEventListener('click', closeModal);
    }
    
    const studentForm = document.getElementById('student-form');
    if (studentForm) {
        studentForm.addEventListener('submit', addNewStudent);
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('student-modal');
        if (e.target === modal) {
            closeModal();
        }
    });
    
    console.log('Event listeners setup completed');
}




// Teacher Management Functions
function addTeacher() {
    alert('Opening add teacher form...');
    // In a real application, this would open a form to add a new teacher
    // For now, we'll just show a simple form
    const teacherForm = `
        <div class="modal" id="teacher-modal" style="display: block;">
            <div class="modal-content">
                <span class="close" onclick="closeTeacherModal()">&times;</span>
                <h3>Add New Teacher</h3>
                <form id="teacher-form">
                    <div class="form-group">
                        <label for="teacher-name">Full Name</label>
                        <input type="text" id="teacher-name" required>
                    </div>
                    <div class="form-group">
                        <label for="teacher-subject">Subject</label>
                        <input type="text" id="teacher-subject" required>
                    </div>
                    <div class="form-group">
                        <label for="teacher-email">Email</label>
                        <input type="email" id="teacher-email" required>
                    </div>
                    <div class="form-group">
                        <label for="teacher-phone">Phone</label>
                        <input type="tel" id="teacher-phone">
                    </div>
                    <div class="form-group">
                        <label for="teacher-experience">Experience</label>
                        <input type="text" id="teacher-experience" placeholder="e.g., 5 years">
                    </div>
                    <button type="submit" class="btn-primary">Add Teacher</button>
                </form>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', teacherForm);
    
    // Add form submit handler
    document.getElementById('teacher-form').addEventListener('submit', function(e) {
        e.preventDefault();
        handleAddTeacher();
    });
}

function closeTeacherModal() {
    const modal = document.getElementById('teacher-modal');
    if (modal) {
        modal.remove();
    }
}

function handleAddTeacher() {
    const name = document.getElementById('teacher-name').value;
    const subject = document.getElementById('teacher-subject').value;
    const email = document.getElementById('teacher-email').value;
    const phone = document.getElementById('teacher-phone').value;
    const experience = document.getElementById('teacher-experience').value;
    
    // Generate new teacher ID
    const newId = 'TCH' + (sampleData.teachers.length + 1).toString().padStart(3, '0');
    
    // Add to sample data
    sampleData.teachers.push({
        id: newId,
        name: name,
        subject: subject,
        email: email,
        phone: phone,
        experience: experience,
        status: 'active'
    });
    
    // Update UI
    populateTeachersGrid();
    
    // Close modal
    closeTeacherModal();
    
    showNotification(`Teacher ${name} added successfully with ID: ${newId}`, 'success');
}





// ========== AUTHENTICATION FUNCTIONS ==========

function createSession(user) {
    const sessionData = {
        ...user,
        loginTime: Date.now(),
        sessionId: 'session_' + Math.random().toString(36).substr(2, 9),
        lastActivity: Date.now()
    };
    localStorage.setItem('userSession', JSON.stringify(sessionData));
    return sessionData;
}



function authenticateUser(userId, password, userType) {
    console.log('Authenticating:', { userId, password, userType });
    
    // Find user in the users database
    const userAuth = sampleData.users[userId];
    console.log('User auth found:', userAuth);
    
    // Check if user exists
    if (!userAuth) {
        return {
            success: false,
            message: 'User ID not found. Please check your credentials.'
        };
    }
    
    // Check if password matches
    if (userAuth.password !== password) {
        return {
            success: false,
            message: 'Incorrect password. Please try again.'
        };
    }
    
    // Check if user type matches
    if (userAuth.type !== userType) {
        return {
            success: false,
            message: `This user ID is for a ${userAuth.type}, not ${userType}. Please select the correct user type.`
        };
    }
    
    // Get user details based on type
    let userDetails = {};
    switch (userType) {
        case 'student':
            userDetails = sampleData.students.find(s => s.id === userId);
            break;
        case 'teacher':
            userDetails = sampleData.teachers.find(t => t.id === userId);
            break;
        case 'parent':
            const studentId = userAuth.userData;
            const student = sampleData.students.find(s => s.id === studentId);
            userDetails = {
                id: userId,
                name: `Parent of ${student ? student.name : 'Student'}`,
                studentId: studentId,
                type: 'parent'
            };
            break;
        case 'admin':
            userDetails = {
                id: userId,
                name: userId === 'admin' ? 'System Administrator' : 'School Administrator',
                type: 'admin',
                role: 'admin'
            };
            break;
    }
    
    console.log('User details:', userDetails);
    
    if (!userDetails && userType !== 'admin') {
        return {
            success: false,
            message: 'User details not found. Please contact administrator.'
        };
    }
    
    return {
        success: true,
        user: {
            ...userDetails,
            type: userType,
            loginTime: Date.now()
        }
    };
}







function clearLoginErrors() {
    const inputs = document.querySelectorAll('#login-form input, #login-form select');
    inputs.forEach(input => {
        input.classList.remove('error');
    });
}

function showLoginError(message) {
    const inputs = document.querySelectorAll('#login-form input, #login-form select');
    inputs.forEach(input => {
        input.classList.add('error');
    });
}


    


// ========== MAIN LOGIN FUNCTION ==========

function handleLogin(e) {
    e.preventDefault();
    const userId = document.getElementById('student-id').value.trim();
    const userType = document.getElementById('user-type').value;
    const password = document.getElementById('password').value;

    console.log('Login attempt:', { userId, userType, password });

    if (!userId || !password) {
        showNotification('Please enter both User ID and Password', 'error');
        return;
    }

    // Clear any previous error states
    clearLoginErrors();

    // Validate credentials
    const authResult = authenticateUser(userId, password, userType);
    
    console.log('Auth result:', authResult);
    
    if (authResult.success) {
        // Create session and log in
        const session = createSession(authResult.user);
        appState.currentUser = session;
        
        // Update UI based on user type
        updateUIForUserType(authResult.user.type);
        
        showNotification(`Welcome, ${authResult.user.name}!`, 'success');
        navigateToSection('dashboard');
        addLogoutButton();
    } else {
        // Show appropriate error message
        showLoginError(authResult.message);
        showNotification(authResult.message, 'error');
    }
}
    
   
function initializeSections() {
    // Populate dropdowns and initial data
    populateStudentSelects();
    populateTeachersGrid();
    populateSubjectAllocation();
    populateBooksGrid();
    populateResourcesGrid();
    populateNotifications();
    updateResultsTable();
    updateTimetable();
    updateFeeData();
    updateExamSchedule();
    updateBehaviorData();

       setupTeacherFilters();    
}

function loadInitialData() {
    // In a real application, this would load data from the backend
    console.log('Loading initial data...');
}

// Navigation and Section Management
function navigateToSection(sectionId) {
    // Always allow access to login section
    if (sectionId === 'login') {
        showSection(sectionId);
        updateActiveNavLink(sectionId);
        appState.currentSection = sectionId;
        return;
    }
    
    // Check if user is logged in for other sections
    if (appState.currentUser) {
        // Check if the section is accessible for this user type
        if (!isSectionAccessible(sectionId, appState.currentUser.type)) {
            showNotification('Access denied. You do not have permission to view this section.', 'error');
            // Redirect to dashboard if trying to access restricted section
            if (appState.currentSection !== 'dashboard') {
                navigateToSection('dashboard');
            }
            return;
        }
        
        showSection(sectionId);
        updateActiveNavLink(sectionId);
        appState.currentSection = sectionId;
        
        // Update section-specific data
        updateSectionData(sectionId);
    } else {
        showNotification('Please login to access this section', 'warning');
        showSection('login');
    }
}

function showSection(sectionId) {
    // Hide all sections
    Object.values(sections).forEach(section => {
        if (section) section.classList.remove('active');
    });
    
    // Show the target section
    if (sections[sectionId]) {
        sections[sectionId].classList.add('active');
    } else {
        console.error(`Section ${sectionId} not found`);
        // Fallback to login if section doesn't exist
        if (sections.login) {
            sections.login.classList.add('active');
        }
    }
}

function updateActiveNavLink(sectionId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[data-target="${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}







// Enhanced Navigation with Authentication Check
function navigateToSection(sectionId) {
    // Always allow access to login section
    if (sectionId === 'login') {
        showSection(sectionId);
        updateActiveNavLink(sectionId);
        appState.currentSection = sectionId;
        return;
    }
    
    // Check if user is logged in for other sections
    if (appState.currentUser) {
        showSection(sectionId);
        updateActiveNavLink(sectionId);
        appState.currentSection = sectionId;
        
        // Update section-specific data
        updateSectionData(sectionId);
    } else {
        showNotification('Please login to access this section', 'warning');
        showSection('login');
    }
}

// ========== MODIFY THIS EXISTING FUNCTION ==========
function updateSectionData(sectionId) {
    console.log('🔄 updateSectionData called for:', sectionId);


     // Add debug for monitoring
    if (sectionId === 'monitoring') {
        debugMonitoring();
    }


    switch(sectionId) {
        case 'dashboard':
            updateDashboard();
            break;
        case 'students':
            if (appState.currentUser.type === 'student') {
                showStudentProfile();
            } else {
                populateStudentsList();
            }
            break;
        case 'teachers':
            populateTeachersGrid();
            populateSubjectAllocation();
            setupTeacherFilters();
            break;
        case 'results':
            if (appState.currentUser.type === 'student') {
                updateStudentResults(); // NEW: Student-specific results
            } else {
                updateResultsTable();
            }
            break;
        case 'analysis':
            if (appState.currentUser.type === 'student') {
                updateStudentAnalysis(); // NEW: Student-specific analysis
            } else {
                updateAnalysis();
            }
            break;
        case 'attendance':
 console.log('🎯 Processing attendance section');
            console.log('User type:', appState.currentUser.type);

            if (appState.currentUser.type === 'student') {
                  console.log('Calling updateStudentAttendance()');
                updateStudentAttendance();
            } else {
                 console.log('Calling updateAttendanceTable()');
                updateAttendanceTable();
            }
            break;
        case 'timetable':
            updateTimetable();
            break;
        case 'fees':
            updateFeeData();
            break;
        case 'library':
            populateBooksGrid();
            updateBorrowedBooks();
            break;
        case 'exams':
            updateExamSchedule();
            break;
        case 'behavior':
            if (appState.currentUser.type === 'student') {
                updateStudentBehavior(); // NEW: Student-specific behavior
            } else {
                updateBehaviorData();
            }
            break;
        case 'resources':
            populateResourcesGrid();
            break;
             case 'notifications': // ADD THIS MISSING CASE
            updateNotificationsView();
            break;
        case 'parent-portal':
            // Handle parent portal if needed
            break;
        case 'reports':
            // Handle reports if needed
            break;
             case 'monitoring':
            initializeMonitoringSection();
            break;
    }
    
    
}



function ensureMonitoringSection() {
    let monitoringSection = document.getElementById('monitoring');
    if (!monitoringSection) {
        // Create the section if it doesn't exist
        const main = document.querySelector('main');
        monitoringSection = document.createElement('section');
        monitoringSection.id = 'monitoring';
        monitoringSection.className = 'section';
        main.appendChild(monitoringSection);
    }
    return monitoringSection;
}



function initializeMonitoringSection() {
    const monitoringSection = ensureMonitoringSection();
    
    // Clear and rebuild the content
    monitoringSection.innerHTML = `
        <div class="section-header">
            <h2><i class="fas fa-shield-alt"></i> System Monitoring</h2>
            <p>Monitor system activity, user behavior, and system health</p>
        </div>
        
        <div class="monitoring-container">
            <div class="monitoring-tabs">
                <button class="monitoring-tab active" data-tab="logins">
                    <i class="fas fa-sign-in-alt"></i> System Logins
                </button>
                <button class="monitoring-tab" data-tab="changes">
                    <i class="fas fa-history"></i> Recent Changes
                </button>
                <button class="monitoring-tab" data-tab="activity">
                    <i class="fas fa-chart-line"></i> Activity Patterns
                </button>
                <button class="monitoring-tab" data-tab="errors">
                    <i class="fas fa-exclamation-triangle"></i> Error Logs
                </button>
            </div>
            
            <div class="monitoring-content">
                <div id="logins-tab" class="tab-content active">
                    <div class="tab-header">
                        <h3>Recent System Logins</h3>
                        <div class="tab-actions">
                            <input type="date" id="login-date-filter">
                            <select id="login-status-filter">
                                <option value="all">All Status</option>
                                <option value="success">Success</option>
                                <option value="failed">Failed</option>
                            </select>
                            <button class="btn-primary" onclick="exportLoginLogs()">
                                <i class="fas fa-download"></i> Export
                            </button>
                        </div>
                    </div>
                    <div class="login-stats">
                        <div class="stat-card small">
                            <div class="stat-value">${sampleData.systemLogs.logins.length}</div>
                            <div class="stat-label">Total Logins</div>
                        </div>
                        <div class="stat-card small">
                            <div class="stat-value">${sampleData.systemLogs.logins.filter(l => l.status === 'success').length}</div>
                            <div class="stat-label">Successful</div>
                        </div>
                        <div class="stat-card small">
                            <div class="stat-value">${sampleData.systemLogs.logins.filter(l => l.status === 'failed').length}</div>
                            <div class="stat-label">Failed</div>
                        </div>
                    </div>
                    <div class="table-container">
                        <table id="login-logs-table">
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Login Time</th>
                                    <th>IP Address</th>
                                    <th>User Type</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody id="login-logs-body">
                                <!-- Login logs will be populated here -->
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div id="changes-tab" class="tab-content">
                    <div class="tab-header">
                        <h3>Recent System Changes</h3>
                        <div class="tab-actions">
                            <select id="change-type-filter">
                                <option value="all">All Changes</option>
                                <option value="create">Created</option>
                                <option value="update">Updated</option>
                                <option value="delete">Deleted</option>
                            </select>
                        </div>
                    </div>
                    <div class="changes-timeline" id="changes-timeline">
                        <!-- Changes timeline will be populated here -->
                    </div>
                </div>
                
                <div id="activity-tab" class="tab-content">
                    <div class="tab-header">
                        <h3>User Activity Patterns</h3>
                    </div>
                    <div class="activity-grid">
                        <div class="activity-chart">
                            <h4>Login Activity by Hour</h4>
                            <div class="chart-container">
                                <div id="hourly-activity-chart">
                                    <!-- Hourly activity chart will be rendered here -->
                                </div>
                            </div>
                        </div>
                        <div class="activity-stats">
                            <div class="stat-section">
                                <h4>User Distribution</h4>
                                <div id="user-distribution-chart">
                                    <!-- User distribution chart will be rendered here -->
                                </div>
                            </div>
                            <div class="stat-section">
                                <h4>Most Active Users</h4>
                                <div class="top-users-list" id="top-users-list">
                                    <!-- Top users list will be populated here -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="errors-tab" class="tab-content">
                    <div class="tab-header">
                        <h3>System Error Logs</h3>
                        <div class="tab-actions">
                            <select id="error-severity-filter">
                                <option value="all">All Severity</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                            <button class="btn-secondary" onclick="clearResolvedErrors()">
                                <i class="fas fa-broom"></i> Clear Resolved
                            </button>
                        </div>
                    </div>
                    <div class="error-summary">
                        <div class="error-stat critical">
                            <div class="error-count">${sampleData.errorLogs.filter(e => e.severity === 'high' && !e.resolved).length}</div>
                            <div class="error-label">Critical Issues</div>
                        </div>
                        <div class="error-stat warning">
                            <div class="error-count">${sampleData.errorLogs.filter(e => e.severity === 'medium' && !e.resolved).length}</div>
                            <div class="error-label">Warnings</div>
                        </div>
                        <div class="error-stat info">
                            <div class="error-count">${sampleData.errorLogs.filter(e => e.severity === 'low' && !e.resolved).length}</div>
                            <div class="error-label">Info</div>
                        </div>
                    </div>
                    <div class="table-container">
                        <table id="error-logs-table">
                            <thead>
                                <tr>
                                    <th>Severity</th>
                                    <th>Error Type</th>
                                    <th>Message</th>
                                    <th>Timestamp</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody id="error-logs-body">
                                <!-- Error logs will be populated here -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Initialize all monitoring tabs
    initializeLoginLogs();
    initializeRecentChanges();
    initializeActivityPatterns();
    initializeErrorLogs();
    setupMonitoringTabEvents();
}



function debugMonitoring() {
    console.log('=== DEBUG MONITORING ===');
    console.log('Current user:', appState.currentUser);
    console.log('Current section:', appState.currentSection);
    console.log('Monitoring section exists:', !!document.getElementById('monitoring'));
    console.log('User is admin:', appState.currentUser?.type === 'admin');
    console.log('=====================');
}




function setupMonitoringTabEvents() {
    // Tab switching
    document.querySelectorAll('.monitoring-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Update active tab
            document.querySelectorAll('.monitoring-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update active content
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            document.getElementById(`${tabName}-tab`).classList.add('active');
        });
    });
    
    // Filter events
    document.getElementById('login-date-filter')?.addEventListener('change', filterLoginLogs);
    document.getElementById('login-status-filter')?.addEventListener('change', filterLoginLogs);
    document.getElementById('change-type-filter')?.addEventListener('change', filterRecentChanges);
    document.getElementById('error-severity-filter')?.addEventListener('change', filterErrorLogs);
}

function initializeLoginLogs() {
    const tbody = document.getElementById('login-logs-body');
    if (!tbody) return;
    
    tbody.innerHTML = sampleData.systemLogs.logins.map(log => `
        <tr class="${log.status === 'failed' ? 'error-row' : ''}">
            <td>
                <div class="user-info">
                    <div class="username">${log.username}</div>
                    <div class="user-id">${log.userId}</div>
                </div>
            </td>
            <td>${formatDateTime(log.timestamp)}</td>
            <td>${log.ip}</td>
            <td><span class="user-type-badge ${log.userType}">${log.userType}</span></td>
            <td>
                <span class="status-badge ${log.status}">
                    <i class="fas fa-${log.status === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                    ${log.status}
                </span>
            </td>
        </tr>
    `).join('');
}

function initializeRecentChanges() {
    const timeline = document.getElementById('changes-timeline');
    if (!timeline) return;
    
    timeline.innerHTML = sampleData.recentChanges.map(change => `
        <div class="timeline-item ${change.type}">
            <div class="timeline-marker">
                <i class="fas fa-${getChangeIcon(change.type)}"></i>
            </div>
            <div class="timeline-content">
                <div class="change-header">
                    <span class="change-type ${change.type}">${change.type.toUpperCase()}</span>
                    <span class="change-time">${formatDateTime(change.timestamp)}</span>
                </div>
                <div class="change-description">${change.description}</div>
                <div class="change-details">
                    <span class="changed-by">By: ${change.changedBy}</span>
                    ${change.field ? `<span class="change-field">Field: ${change.field}</span>` : ''}
                </div>
                ${change.oldValue && change.newValue ? `
                    <div class="change-values">
                        <span class="old-value">${change.oldValue}</span>
                        <i class="fas fa-arrow-right"></i>
                        <span class="new-value">${change.newValue}</span>
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
}

function initializeActivityPatterns() {
    renderHourlyActivityChart();
    renderUserDistributionChart();
    renderTopUsersList();
}

function initializeErrorLogs() {
    const tbody = document.getElementById('error-logs-body');
    if (!tbody) return;
    
    tbody.innerHTML = sampleData.errorLogs.map(error => `
        <tr class="error-row ${error.severity} ${error.resolved ? 'resolved' : ''}">
            <td>
                <span class="severity-badge ${error.severity}">
                    <i class="fas fa-${getErrorIcon(error.severity)}"></i>
                    ${error.severity.toUpperCase()}
                </span>
            </td>
            <td>${error.type}</td>
            <td class="error-message">${error.message}</td>
            <td>${formatDateTime(error.timestamp)}</td>
            <td>
                <span class="status-badge ${error.resolved ? 'resolved' : 'unresolved'}">
                    ${error.resolved ? 'Resolved' : 'Unresolved'}
                </span>
            </td>
            <td>
                <div class="error-actions">
                    ${!error.resolved ? `
                        <button class="btn-primary small" onclick="resolveError('${error.id}')">
                            <i class="fas fa-check"></i> Resolve
                        </button>
                    ` : ''}
                    <button class="btn-secondary small" onclick="viewErrorDetails('${error.id}')">
                        <i class="fas fa-info"></i> Details
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Chart rendering functions
function renderHourlyActivityChart() {
    const chart = document.getElementById('hourly-activity-chart');
    if (!chart) return;
    
    const data = sampleData.userActivity.hourlyPattern;
    const maxLogins = Math.max(...data.map(d => d.logins));
    
    chart.innerHTML = `
        <div class="hourly-chart">
            ${data.map(hour => `
                <div class="hour-bar">
                    <div class="bar-container">
                        <div class="login-bar" style="height: ${(hour.logins / maxLogins) * 100}%"></div>
                    </div>
                    <div class="hour-label">${hour.hour}</div>
                    <div class="hour-count">${hour.logins}</div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderUserDistributionChart() {
    const chart = document.getElementById('user-distribution-chart');
    if (!chart) return;
    
    const data = sampleData.userActivity.userTypeDistribution;
    
    chart.innerHTML = `
        <div class="distribution-chart">
            ${data.map(item => `
                <div class="distribution-item">
                    <div class="distribution-bar" style="width: ${item.percentage}%"></div>
                    <div class="distribution-label">
                        <span class="user-type">${item.type}</span>
                        <span class="user-count">${item.count} (${item.percentage}%)</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderTopUsersList() {
    const list = document.getElementById('top-users-list');
    if (!list) return;
    
    list.innerHTML = sampleData.userActivity.topActiveUsers.map(user => `
        <div class="top-user-item">
            <div class="user-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="user-details">
                <div class="user-name">${user.username}</div>
                <div class="user-stats">
                    <span class="login-count">${user.loginCount} logins</span>
                    <span class="last-active">Last: ${formatDateTime(user.lastActive)}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter functions
function filterLoginLogs() {
    const dateFilter = document.getElementById('login-date-filter').value;
    const statusFilter = document.getElementById('login-status-filter').value;
    
    let filteredLogs = sampleData.systemLogs.logins;
    
    if (dateFilter) {
        filteredLogs = filteredLogs.filter(log => log.timestamp.startsWith(dateFilter));
    }
    
    if (statusFilter !== 'all') {
        filteredLogs = filteredLogs.filter(log => log.status === statusFilter);
    }
    
    const tbody = document.getElementById('login-logs-body');
    tbody.innerHTML = filteredLogs.map(log => `
        <tr class="${log.status === 'failed' ? 'error-row' : ''}">
            <td>
                <div class="user-info">
                    <div class="username">${log.username}</div>
                    <div class="user-id">${log.userId}</div>
                </div>
            </td>
            <td>${formatDateTime(log.timestamp)}</td>
            <td>${log.ip}</td>
            <td><span class="user-type-badge ${log.userType}">${log.userType}</span></td>
            <td>
                <span class="status-badge ${log.status}">
                    <i class="fas fa-${log.status === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                    ${log.status}
                </span>
            </td>
        </tr>
    `).join('');
}

function filterRecentChanges() {
    const typeFilter = document.getElementById('change-type-filter').value;
    
    let filteredChanges = sampleData.recentChanges;
    
    if (typeFilter !== 'all') {
        filteredChanges = filteredChanges.filter(change => change.type === typeFilter);
    }
    
    const timeline = document.getElementById('changes-timeline');
    timeline.innerHTML = filteredChanges.map(change => `
        <div class="timeline-item ${change.type}">
            <div class="timeline-marker">
                <i class="fas fa-${getChangeIcon(change.type)}"></i>
            </div>
            <div class="timeline-content">
                <div class="change-header">
                    <span class="change-type ${change.type}">${change.type.toUpperCase()}</span>
                    <span class="change-time">${formatDateTime(change.timestamp)}</span>
                </div>
                <div class="change-description">${change.description}</div>
                <div class="change-details">
                    <span class="changed-by">By: ${change.changedBy}</span>
                    ${change.field ? `<span class="change-field">Field: ${change.field}</span>` : ''}
                </div>
                ${change.oldValue && change.newValue ? `
                    <div class="change-values">
                        <span class="old-value">${change.oldValue}</span>
                        <i class="fas fa-arrow-right"></i>
                        <span class="new-value">${change.newValue}</span>
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
}

function filterErrorLogs() {
    const severityFilter = document.getElementById('error-severity-filter').value;
    
    let filteredErrors = sampleData.errorLogs;
    
    if (severityFilter !== 'all') {
        filteredErrors = filteredErrors.filter(error => error.severity === severityFilter);
    }
    
    const tbody = document.getElementById('error-logs-body');
    tbody.innerHTML = filteredErrors.map(error => `
        <tr class="error-row ${error.severity} ${error.resolved ? 'resolved' : ''}">
            <td>
                <span class="severity-badge ${error.severity}">
                    <i class="fas fa-${getErrorIcon(error.severity)}"></i>
                    ${error.severity.toUpperCase()}
                </span>
            </td>
            <td>${error.type}</td>
            <td class="error-message">${error.message}</td>
            <td>${formatDateTime(error.timestamp)}</td>
            <td>
                <span class="status-badge ${error.resolved ? 'resolved' : 'unresolved'}">
                    ${error.resolved ? 'Resolved' : 'Unresolved'}
                </span>
            </td>
            <td>
                <div class="error-actions">
                    ${!error.resolved ? `
                        <button class="btn-primary small" onclick="resolveError('${error.id}')">
                            <i class="fas fa-check"></i> Resolve
                        </button>
                    ` : ''}
                    <button class="btn-secondary small" onclick="viewErrorDetails('${error.id}')">
                        <i class="fas fa-info"></i> Details
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Action functions
function exportLoginLogs() {
    const logs = sampleData.systemLogs.logins;
    const csvContent = [
        ['User ID', 'Username', 'Login Time', 'IP Address', 'User Type', 'Status'],
        ...logs.map(log => [log.userId, log.username, log.timestamp, log.ip, log.userType, log.status])
    ].map(row => row.join(',')).join('\n');
    
    downloadCSV(csvContent, 'system_logins_export.csv');
    showNotification('Login logs exported successfully', 'success');
}

function resolveError(errorId) {
    const error = sampleData.errorLogs.find(e => e.id === errorId);
    if (error) {
        error.resolved = true;
        showNotification(`Error ${errorId} marked as resolved`, 'success');
        initializeErrorLogs(); // Refresh the error logs display
    }
}

function clearResolvedErrors() {
    sampleData.errorLogs = sampleData.errorLogs.filter(error => !error.resolved);
    showNotification('Resolved errors cleared', 'success');
    initializeErrorLogs(); // Refresh the error logs display
}

function viewErrorDetails(errorId) {
    const error = sampleData.errorLogs.find(e => e.id === errorId);
    if (error) {
        alert(`Error Details:\n\nID: ${error.id}\nType: ${error.type}\nSeverity: ${error.severity}\nMessage: ${error.message}\nTimestamp: ${error.timestamp}\nResolved: ${error.resolved ? 'Yes' : 'No'}`);
    }
}

// Helper functions
function formatDateTime(timestamp) {
    return timestamp.replace(' ', ' at ');
}

function getChangeIcon(changeType) {
    const icons = {
        'create': 'plus-circle',
        'update': 'edit',
        'delete': 'trash-alt'
    };
    return icons[changeType] || 'history';
}

function getErrorIcon(severity) {
    const icons = {
        'high': 'exclamation-triangle',
        'medium': 'exclamation-circle',
        'low': 'info-circle'
    };
    return icons[severity] || 'info-circle';
}

function downloadCSV(content, filename) {
    const blob = new Blob([content], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
}


// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification-toast');
    existingNotifications.forEach(notification => {
        notification.remove();
    });
    
    const notification = document.createElement('div');
    notification.className = `notification-toast ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Add close functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}




function updateDashboard() {
    if (!appState.currentUser) return;
    
    const user = appState.currentUser;

      // Show/hide monitoring widget based on user type
    const monitoringWidget = document.getElementById('monitoring-widget');
    if (monitoringWidget) {
        monitoringWidget.style.display = user.type === 'admin' ? 'block' : 'none';
    }
    
    // Update welcome message for ALL user types
    document.getElementById('student-name').textContent = user.name;
    document.getElementById('student-id-display').textContent = user.id;
    
    // Update dashboard based on user type
    switch(user.type) {
        case 'student':
            updateStudentDashboard(); // CHANGED: Call new student function
            break;
        case 'teacher':
            updateTeacherDashboard();
            break;
        case 'parent':
            updateParentDashboard();
            break;
        case 'admin':
            updateAdminDashboard();
            break;
    }
    
    // Update dashboard header for all users
    updateDashboardHeader(user.type);
}

// ========== ADMIN DASHBOARD ==========

// ========== ADMIN DASHBOARD ==========

function updateAdminDashboard() {
    console.log('Updating admin dashboard with school metrics...');
    
    // Update class display for admin
    document.getElementById('student-class').textContent = 'Administrator';
    
    // Total number of students
    const totalStudents = sampleData.students.length;
    document.getElementById('current-gpa').textContent = totalStudents;
    document.querySelector('.card:nth-child(1) h3').textContent = 'Total Students';
    
    // Total number of teachers  
    const totalTeachers = sampleData.teachers.length;
    document.getElementById('attendance').textContent = totalTeachers;
    document.querySelector('.card:nth-child(2) h3').textContent = 'Total Teachers';
    
    // Total students owing fees
    const studentsOwingFees = calculateStudentsOwingFees();
    document.getElementById('upcoming-tests').textContent = studentsOwingFees;
    document.querySelector('.card:nth-child(3) h3').textContent = 'Students Owing Fees';
    
    // Total underperforming students (GPA < 2.5)
    const underperformingStudents = calculateUnderperformingStudents();
    document.getElementById('library-books').textContent = underperformingStudents;
    document.querySelector('.card:nth-child(4) h3').textContent = 'Underperforming Students';
    

    // NEW: Total performing students (GPA >= 3.5)
    const performingStudents = calculatePerformingStudents();
    document.getElementById('performing-students').textContent = performingStudents;
    document.querySelector('.card:nth-child(5) h3').textContent = 'Performing Students';

    // Update card trends
    updateAdminCardTrends();
    
    // Clear student-specific widgets for admin
    clearStudentWidgets();

        // ADD MONITORING WIDGET
    updateMonitoringWidget();
}


function updateMonitoringWidget() {
    const monitoringWidget = document.getElementById('monitoring-widget');
    if (!monitoringWidget) return;
    
    const todayLogins = sampleData.systemLogs.logins.filter(log => 
        log.timestamp.includes('2024-03-15')
    ).length;
    
    const failedLogins = sampleData.systemLogs.logins.filter(log => 
        log.status === 'failed'
    ).length;
    
    const unresolvedErrors = sampleData.errorLogs.filter(error => 
        !error.resolved
    ).length;
    
    monitoringWidget.innerHTML = `
        <div class="monitoring-quick-stats">
            <h3><i class="fas fa-shield-alt"></i> System Monitoring</h3>
            <div class="monitoring-stats-grid">
                <div class="monitoring-stat">
                    <div class="stat-value">${todayLogins}</div>
                    <div class="stat-label">Today's Logins</div>
                </div>
                <div class="monitoring-stat ${failedLogins > 0 ? 'warning' : ''}">
                    <div class="stat-value">${failedLogins}</div>
                    <div class="stat-label">Failed Attempts</div>
                </div>
                <div class="monitoring-stat ${unresolvedErrors > 0 ? 'error' : ''}">
                    <div class="stat-value">${unresolvedErrors}</div>
                    <div class="stat-label">Active Issues</div>
                </div>
            </div>
            <div class="monitoring-actions">
                <button class="btn-secondary" onclick="navigateToSection('monitoring')">
                    <i class="fas fa-chart-line"></i> View Details
                </button>
            </div>
        </div>
    `;
}





// Function to get upcoming class from timetable
function getUpcomingClass(student) {
    if (!student) return null;
    
    const now = new Date();
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const currentTime = now.getHours() * 60 + now.getMinutes(); // Convert to minutes
    
    const timetable = sampleData.timetable[student.class];
    if (!timetable) return null;
    
    // Get today's timetable
    const todayTimetable = timetable[currentDay];
    if (!todayTimetable) return null;
    
    // Find the next class
    let upcomingClass = null;
    
    for (const period of todayTimetable) {
        const [startTime, endTime] = period.time.split('-');
        const startMinutes = convertTimeToMinutes(startTime);
        
        // If class hasn't started yet or is currently running
        if (startMinutes >= currentTime || (startMinutes <= currentTime && convertTimeToMinutes(endTime) > currentTime)) {
            upcomingClass = {
                ...period,
                status: startMinutes > currentTime ? 'upcoming' : 'ongoing',
                timeUntil: startMinutes - currentTime
            };
            break;
        }
    }
    
    return upcomingClass;
}

// Helper function to convert time string to minutes
function convertTimeToMinutes(timeStr) {
    const [time, modifier] = timeStr.trim().split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    
    if (modifier === 'PM' && hours !== 12) hours += 12;
    if (modifier === 'AM' && hours === 12) hours = 0;
    
    return hours * 60 + minutes;
}

// Function to update upcoming class widget
function updateUpcomingClassWidget(student) {
    const widget = document.getElementById('upcoming-class-widget');
    if (!widget) return;
    
    const upcomingClass = getUpcomingClass(student);
    
    if (upcomingClass) {
        const statusClass = upcomingClass.status === 'ongoing' ? 'ongoing' : 'upcoming';
        const statusText = upcomingClass.status === 'ongoing' ? 'Now' : 'Next';
        
        widget.innerHTML = `
            <div class="upcoming-class ${statusClass}">
                <div class="class-header">
                    <div class="class-subject">${upcomingClass.subject}</div>
                    <div class="class-status ${statusClass}">${statusText}</div>
                </div>
                <div class="class-details">
                    <div class="class-time">
                        <i class="fas fa-clock"></i>
                        ${upcomingClass.time}
                    </div>
                    <div class="class-teacher">
                        <i class="fas fa-chalkboard-teacher"></i>
                        ${upcomingClass.teacher}
                    </div>
                    ${upcomingClass.status === 'upcoming' ? `
                        <div class="time-until">
                            Starts in ${Math.floor(upcomingClass.timeUntil / 60)}h ${upcomingClass.timeUntil % 60}m
                        </div>
                    ` : `
                        <div class="time-until ongoing">
                            Class in progress
                        </div>
                    `}
                </div>
            </div>
        `;
    } else {
        widget.innerHTML = `
            <div class="no-upcoming-class">
                <p><i class="fas fa-calendar-times"></i></p>
                <p>No more classes today</p>
            </div>
        `;
    }
}




function updateStudentDashboard() {
    const student = sampleData.students.find(s => s.id === appState.currentUser.id);
    if (!student) return;
    
    // Update student info
    document.getElementById('student-class').textContent = student.class;
    
    // Update dashboard cards with STUDENT information
    document.getElementById('current-gpa').textContent = student.gpa;
    document.querySelector('.card:nth-child(1) h3').textContent = 'Current GPA';
    
    document.getElementById('attendance').textContent = student.attendance + '%';
    document.querySelector('.card:nth-child(2) h3').textContent = 'Attendance';
    
    // Update upcoming exams count for the student's class
    const upcomingExams = sampleData.exams.filter(exam => 
        exam.class === student.class && new Date(exam.date) >= new Date()
    ).length;
    document.getElementById('upcoming-tests').textContent = upcomingExams;
    document.querySelector('.card:nth-child(3) h3').textContent = 'Upcoming Exams';
    
    const borrowedBooks = sampleData.library.borrowed.filter(b => b.studentId === student.id).length;
    document.getElementById('library-books').textContent = borrowedBooks;
    document.querySelector('.card:nth-child(4) h3').textContent = 'Borrowed Books';
    
    // Hide the 5th card for students
    const fifthCard = document.querySelector('.card:nth-child(5)');
    if (fifthCard) {
        fifthCard.style.display = 'none';
    }
    
    updateStudentCardTrends(student);
    updateStudentWidgets(student);
}

function updateStudentWidgets(student) {
    updateUpcomingClassWidget(student); // NEW: Add upcoming class
    updateRecentResults();
    updateExamScheduleWidget();
    updateLibraryBooksWidget();
    updateAssignmentsWidget(student);
}

// ========== ADD THIS NEW FUNCTION ==========
function updateStudentCardTrends(student) {
    const trends = document.querySelectorAll('.card-trend');
    
    if (trends[0]) {
        const gpaTrend = student.gpa >= 3.5 ? 'up' : 'down';
        trends[0].textContent = gpaTrend === 'up' ? 'Excellent performance' : 'Needs improvement';
        trends[0].className = `card-trend ${gpaTrend}`;
    }
    
    if (trends[1]) {
        const attendanceTrend = student.attendance >= 90 ? 'up' : 'down';
        trends[1].textContent = attendanceTrend === 'up' ? 'Good attendance' : 'Improve attendance';
        trends[1].className = `card-trend ${attendanceTrend}`;
    }
    
    if (trends[2]) {
        trends[2].textContent = 'Next: Math on Friday';
        trends[2].className = 'card-trend';
    }
    
    if (trends[3]) {
        const borrowedBooks = sampleData.library.borrowed.filter(b => b.studentId === student.id);
        const overdueBooks = borrowedBooks.filter(b => new Date(b.dueDate) < new Date());
        trends[3].textContent = overdueBooks.length > 0 ? `${overdueBooks.length} overdue` : 'All books current';
        trends[3].className = `card-trend ${overdueBooks.length > 0 ? 'down' : ''}`;
    }
}

// ========== ADD THIS NEW FUNCTION ==========
function updateStudentWidgets(student) {
    updateUpcomingClassWidget(student); // NEW: Add upcoming class
    updateRecentResults();
    updateExamScheduleWidget();
    updateLibraryBooksWidget();
    updateAssignmentsWidget(student);
}

// ========== ADD THIS NEW FUNCTION ==========
function updateAssignmentsWidget(student) {
    const recentResultsList = document.getElementById('recent-results-list');
    if (!recentResultsList) return;
    
    const assignments = [
        { subject: 'Mathematics', title: 'Algebra Homework', dueDate: '2024-03-20', status: 'pending' },
        { subject: 'Science', title: 'Lab Report', dueDate: '2024-03-22', status: 'pending' },
        { subject: 'English', title: 'Essay Writing', dueDate: '2024-03-18', status: 'submitted' }
    ];
    
    recentResultsList.innerHTML = `
        <div class="assignments-list">
            <h4>Recent Assignments</h4>
            ${assignments.map(assignment => `
                <div class="assignment-item ${assignment.status}">
                    <div class="assignment-subject">${assignment.subject}</div>
                    <div class="assignment-title">${assignment.title}</div>
                    <div class="assignment-due">Due: ${assignment.dueDate}</div>
                    <div class="assignment-status ${assignment.status}">${assignment.status}</div>
                </div>
            `).join('')}
        </div>
    `;
}

// ========== ADD THIS NEW FUNCTION ==========
function updateTimetableWidget(student) {
    const examScheduleWidget = document.getElementById('exam-schedule-widget');
    if (!examScheduleWidget) return;
    
    // FIX: Add proper string conversion and null checking
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const todayTimetable = sampleData.timetable[student.class] && sampleData.timetable[student.class][today];
    
    if (todayTimetable) {
        examScheduleWidget.innerHTML = `
            <div class="today-timetable">
                <h4>Today's Classes (${today.charAt(0).toUpperCase() + today.slice(1)})</h4>
                ${todayTimetable.map(period => `
                    <div class="timetable-item">
                        <span class="period-time">${period.time}</span>
                        <span class="period-subject">${period.subject}</span>
                        <span class="period-teacher">${period.teacher}</span>
                    </div>
                `).join('')}
            </div>
        `;
    } else {
        examScheduleWidget.innerHTML = '<p>No classes scheduled for today.</p>';
    }
}

function updateTimetable() {
    console.log('updateTimetable called');
    
    const classVal = document.getElementById('timetable-class').value;
    const timetableContainer = document.getElementById('timetable-container');
    
    if (!timetableContainer) return;
    
    const timetable = sampleData.timetable[classVal];
    
    if (timetable) {
        timetableContainer.innerHTML = `
            <div class="weekly-timetable">
                ${Object.entries(timetable).map(([day, periods]) => `
                    <div class="timetable-day">
                        <h3 class="day-header">${day.charAt(0).toUpperCase() + day.slice(1)}</h3>
                        <div class="periods-list">
                            ${periods.map(period => `
                                <div class="timetable-period">
                                    <div class="period-time">${period.time}</div>
                                    <div class="period-details">
                                        <div class="subject">${period.subject}</div>
                                        <div class="teacher">${period.teacher}</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    } else {
        timetableContainer.innerHTML = '<p>No timetable available for the selected class.</p>';
    }
}

// ========== ADD THIS NEW FUNCTION ==========
function showStudentProfile() {
    const studentsSection = document.getElementById('students');
    if (!studentsSection) return;
    
    const student = sampleData.students.find(s => s.id === appState.currentUser.id);
    if (!student) return;
    
    studentsSection.innerHTML = `
        <div class="section-header">
            <h2>My Profile</h2>
        </div>
        <div class="student-profile">
            <div class="profile-header">
                <h3>${student.name}</h3>
                <p>Student ID: ${student.id} | Class: ${student.class}</p>
            </div>
            <div class="profile-details">
                <div class="detail-group">
                    <h4>Personal Information</h4>
                    <p><strong>Date of Birth:</strong> ${student.dob}</p>
                    <p><strong>Email:</strong> ${student.email}</p>
                    <p><strong>Phone:</strong> ${student.phone}</p>
                    <p><strong>Status:</strong> <span class="status ${student.status}">${student.status}</span></p>
                </div>
                <div class="detail-group">
                    <h4>Academic Information</h4>
                    <p><strong>Current GPA:</strong> ${student.gpa}</p>
                    <p><strong>Attendance:</strong> ${student.attendance}%</p>
                    <p><strong>Class Teacher:</strong> Mr. James Wilson</p>
                </div>
            </div>
            <div class="profile-actions">
                <button class="btn-primary" onclick="editStudent('${student.id}')">Edit Profile</button>
                <button class="btn-secondary" onclick="navigateToSection('results')">View Results</button>
            </div>
        </div>
    `;
}










// ========== ADD THIS NEW FUNCTION ==========
function updateStudentAttendance() {
    const attendanceSection = document.getElementById('attendance');
    if (!attendanceSection) return;
    
    const student = sampleData.students.find(s => s.id === appState.currentUser.id);
    if (!student) return;
    
    const attendanceData = sampleData.attendance['2024-01'] && sampleData.attendance['2024-01'][student.id];
    
    attendanceSection.innerHTML = `
        <h2>My Attendance</h2>
        <div class="attendance-overview">
            <div class="attendance-stats">
                <div class="stat-card">
                    <h3>Current Month</h3>
                    <div class="attendance-percentage">${student.attendance}%</div>
                    <p>Overall Attendance Rate</p>
                </div>
                <div class="stat-card">
                    <h3>Present</h3>
                    <div class="present-count">${attendanceData ? attendanceData.present : '0'}</div>
                    <p>Days Present</p>
                </div>
                <div class="stat-card">
                    <h3>Absent</h3>
                    <div class="absent-count">${attendanceData ? attendanceData.absent : '0'}</div>
                    <p>Days Absent</p>
                </div>
                <div class="stat-card">
                    <h3>Late</h3>
                    <div class="late-count">${attendanceData ? attendanceData.late : '0'}</div>
                    <p>Times Late</p>
                </div>
            </div>
        </div>
        <div class="attendance-calendar">
            <h3>Monthly Overview</h3>
            <div class="calendar-placeholder">
                <p>Attendance calendar would be displayed here</p>
            </div>
        </div>
    `;
}









function updateTeacherDashboard() {
    // Teacher-specific metrics
    const myStudents = sampleData.students.filter(s => s.class === '10A').length;
    document.getElementById('current-gpa').textContent = myStudents;
    document.querySelector('.card:nth-child(1) h3').textContent = 'My Students';
    
    document.getElementById('attendance').textContent = '95%';
    document.querySelector('.card:nth-child(2) h3').textContent = 'Class Attendance';
    
    const upcomingClasses = 5;
    document.getElementById('upcoming-tests').textContent = upcomingClasses;
    document.querySelector('.card:nth-child(3) h3').textContent = 'Classes Today';
    
    const assignments = 3;
    document.getElementById('library-books').textContent = assignments;
    document.querySelector('.card:nth-child(4) h3').textContent = 'Pending Assignments';
}

function updateParentDashboard() {
    // Parent-specific metrics
    const child = sampleData.students.find(s => s.id === appState.currentUser.studentId);
    if (child) {
        document.getElementById('student-name').textContent = `Parent of ${child.name}`;
        document.getElementById('student-id-display').textContent = appState.currentUser.id;
        document.getElementById('student-class').textContent = `Child: ${child.class}`;
        
        document.getElementById('current-gpa').textContent = child.gpa;
        document.querySelector('.card:nth-child(1) h3').textContent = "Child's GPA";
        
        document.getElementById('attendance').textContent = child.attendance + '%';
        document.querySelector('.card:nth-child(2) h3').textContent = "Child's Attendance";
        
        const pendingFees = sampleData.fees[child.id] ? 
            sampleData.fees[child.id].filter(f => f.status === 'pending' || f.status === 'overdue').length : 0;
        document.getElementById('upcoming-tests').textContent = pendingFees;
        document.querySelector('.card:nth-child(3) h3').textContent = 'Pending Fees';
        
        const borrowedBooks = sampleData.library.borrowed.filter(b => b.studentId === child.id).length;
        document.getElementById('library-books').textContent = borrowedBooks;
        document.querySelector('.card:nth-child(4) h3').textContent = 'Borrowed Books';
        
        // Update parent-specific widgets
        updateParentWidgets(child);
    }
}

function updateParentWidgets(child) {
    updateUpcomingClassWidget(child); // Show child's upcoming class
    updateParentExamWidget(child);    // Show child's upcoming exams
    updateFeeStatusWidget();          // Show fee status
}


function updateParentExamWidget(child) {
    const examWidget = document.getElementById('exam-schedule-widget');
    if (!examWidget) return;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const childExams = sampleData.exams
        .filter(exam => exam.class === child.class && new Date(exam.date) >= today)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 2); // Show next 2 exams
    
    if (childExams.length > 0) {
        examWidget.innerHTML = `
            <div class="parent-exam-widget">
                <h4>${child.name}'s Upcoming Exams</h4>
                ${childExams.map(exam => `
                    <div class="exam-widget-item ${getExamUrgency(exam.date)}">
                        <div class="exam-widget-header">
                            <div class="exam-widget-subject">${exam.subject}</div>
                            <div class="exam-widget-date">${formatExamDate(exam.date)}</div>
                        </div>
                        <div class="exam-widget-details">
                            <span class="exam-widget-time"><i class="fas fa-clock"></i> ${exam.time}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    } else {
        examWidget.innerHTML = `
            <div class="no-upcoming-exams">
                <p>No upcoming exams for ${child.name}</p>
            </div>
        `;
    }
}



function calculateStudentsOwingFees() {
    let count = 0;
    sampleData.students.forEach(student => {
        const studentFees = sampleData.fees[student.id];
        if (studentFees) {
            const hasPendingFees = studentFees.some(fee => fee.status === 'pending' || fee.status === 'overdue');
            if (hasPendingFees) {
                count++;
            }
        }
    });
    return count;
}

function calculateUnderperformingStudents() {
    return sampleData.students.filter(student => student.gpa < 2.5).length;
}

function calculatePerformingStudents() {
    // Students with GPA >= 3.5 are considered performing well
    return sampleData.students.filter(student => student.gpa >= 3.5).length;
}

function updateAdminCardTrends() {
    const trends = document.querySelectorAll('.card-trend');
    
    // Student trend
    if (trends[0]) {
        trends[0].textContent = '+5 from last month';
        trends[0].className = 'card-trend up';
    }
    
    // Teacher trend
    if (trends[1]) {
        trends[1].textContent = '+2 from last term';
        trends[1].className = 'card-trend up';
    }
    
    // Fees trend
    if (trends[2]) {
        trends[2].textContent = '-3 from last week';
        trends[2].className = 'card-trend down';
    }
    
    // Underperforming trend
    if (trends[3]) {
        trends[3].textContent = '-2 from last term';
        trends[3].className = 'card-trend down';
    }

  if (trends[4]) {
        trends[4].textContent = '+4 from last term';
        trends[4].className = 'card-trend up';
    }

}

function clearStudentWidgets() {
    // Clear student-specific widgets for admin view
    const recentResults = document.getElementById('recent-results-list');
    const examWidget = document.getElementById('exam-schedule-widget');
    const feeWidget = document.getElementById('fee-status-widget');
    
    if (recentResults) recentResults.innerHTML = '<p>School-wide view</p>';
    if (examWidget) examWidget.innerHTML = '<p>All exam schedules</p>';
    if (feeWidget) feeWidget.innerHTML = '<p>Fee overview</p>';
}



// Student Management
function populateStudentSelects() {
    const studentSelects = [
        document.getElementById('analysis-student'),
        document.getElementById('behavior-student'),
        document.getElementById('select-child')
    ];
    
    studentSelects.forEach(select => {
        if (select) {
            select.innerHTML = '<option value="">Select Student</option>';
            sampleData.students.forEach(student => {
                const option = document.createElement('option');
                option.value = student.id;
                option.textContent = `${student.name} (${student.id})`;
                select.appendChild(option);
            });
        }
    });
}

function showStudentModal() {
    document.getElementById('student-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('student-modal').style.display = 'none';
}

function addNewStudent(e) {
    e.preventDefault();
    
    const name = document.getElementById('new-student-name').value;
    const studentClass = document.getElementById('new-student-class').value;
    const dob = document.getElementById('new-student-dob').value;
    const phone = document.getElementById('new-student-phone').value;
    const email = document.getElementById('new-student-email').value;
    
    // Generate a new student ID
    const newId = 'STU' + (sampleData.students.length + 1).toString().padStart(3, '0');
    
    // Add to sample data (in real app, this would be an API call)
    sampleData.students.push({
        id: newId,
        name,
        class: studentClass,
        gpa: 0,
        attendance: 100,
        dob,
        phone,
        email,
        status: 'active'
    });
    
    // Update UI
    populateStudentsList();
    populateStudentSelects();
    
    // Close modal and reset form
    closeModal();
    document.getElementById('student-form').reset();
    
    alert(`Student ${name} added successfully with ID: ${newId}`);
}

function populateStudentsList() {
    const studentsList = document.getElementById('students-list');
    if (!studentsList) return;
    
    studentsList.innerHTML = '';
    
    sampleData.students.forEach(student => {
        const studentCard = document.createElement('div');
        studentCard.className = 'student-card';
        studentCard.innerHTML = `
            <h3>${student.name}</h3>
            <p><strong>ID:</strong> ${student.id}</p>
            <p><strong>Class:</strong> ${student.class}</p>
            <p><strong>GPA:</strong> ${student.gpa}</p>
            <p><strong>Attendance:</strong> ${student.attendance}%</p>
            <p><strong>Status:</strong> <span class="status ${student.status}">${student.status}</span></p>
            <div class="student-actions">
                <button class="btn-primary" onclick="viewStudent('${student.id}')">View</button>
                <button class="btn-secondary" onclick="editStudent('${student.id}')">Edit</button>
            </div>
        `;
        studentsList.appendChild(studentCard);
    });
}

function filterStudents() {
    const searchTerm = document.getElementById('student-search').value.toLowerCase();
    const classFilter = document.getElementById('class-filter').value;
    const statusFilter = document.getElementById('status-filter').value;
    
    const filteredStudents = sampleData.students.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm) || 
                             student.id.toLowerCase().includes(searchTerm);
        const matchesClass = classFilter === 'all' || student.class === classFilter;
        const matchesStatus = statusFilter === 'all' || student.status === statusFilter;
        
        return matchesSearch && matchesClass && matchesStatus;
    });
    
    const studentsList = document.getElementById('students-list');
    studentsList.innerHTML = '';
    
    filteredStudents.forEach(student => {
        const studentCard = document.createElement('div');
        studentCard.className = 'student-card';
        studentCard.innerHTML = `
            <h3>${student.name}</h3>
            <p><strong>ID:</strong> ${student.id}</p>
            <p><strong>Class:</strong> ${student.class}</p>
            <p><strong>GPA:</strong> ${student.gpa}</p>
            <p><strong>Attendance:</strong> ${student.attendance}%</p>
            <p><strong>Status:</strong> <span class="status ${student.status}">${student.status}</span></p>
            <div class="student-actions">
                <button class="btn-primary" onclick="viewStudent('${student.id}')">View</button>
                <button class="btn-secondary" onclick="editStudent('${student.id}')">Edit</button>
            </div>
        `;
        studentsList.appendChild(studentCard);
    });
}

function viewStudent(studentId) {
    const student = sampleData.students.find(s => s.id === studentId);
    if (student) {
        alert(`Student Details:\nName: ${student.name}\nID: ${student.id}\nClass: ${student.class}\nGPA: ${student.gpa}\nAttendance: ${student.attendance}%`);
    }
}

function editStudent(studentId) {
    const student = sampleData.students.find(s => s.id === studentId);
    if (student) {
        // In a real application, this would open an edit form
        alert(`Edit student: ${student.name}`);
    }
}

// Teacher Management
function populateTeachersGrid() {
    const teachersGrid = document.getElementById('teachers-grid');
    if (!teachersGrid) return;
    
    teachersGrid.innerHTML = '';
    
    sampleData.teachers.forEach(teacher => {
        const teacherCard = document.createElement('div');
        teacherCard.className = 'teacher-card';
        teacherCard.innerHTML = `
            <h3>${teacher.name}</h3>
            <p><strong>ID:</strong> ${teacher.id}</p>
            <p><strong>Subject:</strong> ${teacher.subject}</p>
            <p><strong>Email:</strong> ${teacher.email}</p>
            <p><strong>Experience:</strong> ${teacher.experience}</p>
            <p><strong>Status:</strong> <span class="status ${teacher.status}">${teacher.status}</span></p>
            <div class="teacher-actions">
                <button class="btn-primary" onclick="viewTeacher('${teacher.id}')">View</button>
                 <button class="btn-secondary" onclick="editTeacher('${teacher.id}')">Edit</button>
                <button class="btn-secondary" onclick="messageTeacher('${teacher.id}')">Message</button>
            </div>
        `;
        teachersGrid.appendChild(teacherCard);
    });
}





function populateSubjectAllocation() {
    const table = document.getElementById('subject-allocation-table');
    if (!table) return;
    
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = '';
    
    sampleData.subjectAllocation.forEach(allocation => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${allocation.teacher}</td>
            <td>${allocation.subject}</td>
            <td>${allocation.class}</td>
            <td>${allocation.periods}</td>
            <td>
               <button class="btn-primary" onclick="editSubjectAllocation('${allocation.teacher}', '${allocation.subject}')">Edit</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function viewTeacher(teacherId) {
    const teacher = sampleData.teachers.find(t => t.id === teacherId);
    if (teacher) {
        alert(`Teacher Details:\n\nName: ${teacher.name}\nID: ${teacher.id}\nSubject: ${teacher.subject}\nEmail: ${teacher.email}\nPhone: ${teacher.phone}\nExperience: ${teacher.experience}\nStatus: ${teacher.status}`);
    }
}

function editTeacher(teacherId) {
    const teacher = sampleData.teachers.find(t => t.id === teacherId);
    if (teacher) {
        alert(`Edit teacher: ${teacher.name}\n\nThis would open an edit form in a real application.`);
    }
}
function messageTeacher(teacherId) {
    const teacher = sampleData.teachers.find(t => t.id === teacherId);
    if (teacher) {
        alert(`Open messaging interface for ${teacher.name}`);
    }
}

function editSubjectAllocation(teacherName, subject) {
    alert(`Edit subject allocation for ${teacherName} - ${subject}`);
}

// Teacher search and filter functionality
function setupTeacherFilters() {
    const teacherSearch = document.getElementById('teacher-search');
    const subjectFilter = document.getElementById('subject-filter');
    const statusFilter = document.getElementById('teacher-status-filter');
    
    if (teacherSearch) {
        teacherSearch.addEventListener('input', filterTeachers);
    }
    if (subjectFilter) {
        subjectFilter.addEventListener('change', filterTeachers);
    }
    if (statusFilter) {
        statusFilter.addEventListener('change', filterTeachers);
    }
}

function filterTeachers() {
    const searchTerm = document.getElementById('teacher-search').value.toLowerCase();
    const subjectFilter = document.getElementById('subject-filter').value;
    const statusFilter = document.getElementById('teacher-status-filter').value;
    
    const filteredTeachers = sampleData.teachers.filter(teacher => {
        const matchesSearch = teacher.name.toLowerCase().includes(searchTerm) || 
                             teacher.id.toLowerCase().includes(searchTerm);
        const matchesSubject = subjectFilter === 'all' || teacher.subject === subjectFilter;
        const matchesStatus = statusFilter === 'all' || teacher.status === statusFilter;
        
        return matchesSearch && matchesSubject && matchesStatus;
    });
    
    displayFilteredTeachers(filteredTeachers);
}

function displayFilteredTeachers(teachers) {
    const teachersGrid = document.getElementById('teachers-grid');
    teachersGrid.innerHTML = '';
    
    if (teachers.length === 0) {
        teachersGrid.innerHTML = '<p class="no-results">No teachers found matching your criteria.</p>';
        return;
    }
    
    teachers.forEach(teacher => {
        const teacherCard = document.createElement('div');
        teacherCard.className = 'teacher-card';
        teacherCard.innerHTML = `
            <h3>${teacher.name}</h3>
            <p><strong>ID:</strong> ${teacher.id}</p>
            <p><strong>Subject:</strong> ${teacher.subject}</p>
            <p><strong>Email:</strong> ${teacher.email}</p>
            <p><strong>Phone:</strong> ${teacher.phone}</p>
            <p><strong>Experience:</strong> ${teacher.experience}</p>
            <p><strong>Status:</strong> <span class="status ${teacher.status}">${teacher.status}</span></p>
            <div class="teacher-actions">
                <button class="btn-primary" onclick="viewTeacher('${teacher.id}')">View</button>
                <button class="btn-secondary" onclick="editTeacher('${teacher.id}')">Edit</button>
                <button class="btn-secondary" onclick="messageTeacher('${teacher.id}')">Message</button>
            </div>
        `;
        teachersGrid.appendChild(teacherCard);
    });
}

// Results Management
// Update the updateResultsTable function to include year filtering
function updateResultsTable() {
    const year = document.getElementById('result-year').value;
    const term = document.getElementById('result-term').value;
    const classFilter = document.getElementById('result-class').value;
    
    let results = getResultsByYearAndTerm(year, term);
    
    // Filter by class if needed
    if (classFilter !== 'all') {
        results = results.filter(result => {
            const student = sampleData.students.find(s => s.id === result.studentId);
            return student && student.class === classFilter;
        });
    }
    
    const tbody = document.querySelector('#results-table tbody');
    tbody.innerHTML = '';
    
    if (results.length === 0) {
        tbody.innerHTML = '<tr><td colspan="9" style="text-align: center;">No results found for the selected criteria.</td></tr>';
        return;
    }
    
    results.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.studentId}</td>
            <td>${result.name}</td>
            <td>${result.math}</td>
            <td>${result.science}</td>
            <td>${result.english}</td>
            <td>${result.history}</td>
            <td>${result.total}</td>
            <td>${result.grade}</td>
            <td>
                <button class="btn-primary" onclick="viewResultDetails('${result.studentId}', '${term}', '${year}')">View</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Add this function to get results by year and term
function getResultsByYearAndTerm(year, term) {
    // In a real application, this would fetch from your database
    // For demo, we'll modify the existing results structure
    const yearKey = `year${year}`;
    
    if (!sampleData.results[yearKey]) {
        // If no results for this year, return empty array or show message
        return [];
    }
    
    return sampleData.results[yearKey][term] || [];
}



function exportResults() {
    // In a real application, this would generate and download a file
    alert('Exporting results... This would download a file in a real application.');
}

function viewResultDetails(studentId, term) {
    // FIX: This also needs to use the year-based structure
    const yearKey = 'year2024'; // or get from somewhere
    const result = sampleData.results[yearKey] && 
                   sampleData.results[yearKey][term] && 
                   sampleData.results[yearKey][term].find(r => r.studentId === studentId);
    
    if (result) {
        alert(`Result Details for ${result.name} (${term}):\nMathematics: ${result.math}\nScience: ${result.science}\nEnglish: ${result.english}\nHistory: ${result.history}\nTotal: ${result.total}\nGrade: ${result.grade}`);
    }
}

function updateRecentResults() {
    if (!appState.currentUser || appState.currentUser.type !== 'student') return;
    
    const recentResultsList = document.getElementById('recent-results-list');
    if (!recentResultsList) return;
    
    // FIX: Use the new year-based structure with proper null checks
    const yearKey = 'year2024';
    const term = 'term3';
    const latestResults = sampleData.results[yearKey] && 
                         sampleData.results[yearKey][term] && 
                         sampleData.results[yearKey][term].find(r => r.studentId === appState.currentUser.id);
    
    if (latestResults) {
        recentResultsList.innerHTML = `
            <div class="results-grid">
                <div class="result-item">
                    <span class="subject">Mathematics</span>
                    <span class="score">${latestResults.math}</span>
                </div>
                <div class="result-item">
                    <span class="subject">Science</span>
                    <span class="score">${latestResults.science}</span>
                </div>
                <div class="result-item">
                    <span class="subject">English</span>
                    <span class="score">${latestResults.english}</span>
                </div>
                <div class="result-item">
                    <span class="subject">History</span>
                    <span class="score">${latestResults.history}</span>
                </div>
            </div>
        `;
    } else {
        // Show message if no results found
        recentResultsList.innerHTML = '<p>No recent results available.</p>';
    }
}

// Analysis
function updateAnalysis() {
    // Check if we're in the analysis section and elements exist
    const studentSelect = document.getElementById('analysis-student');
    const periodSelect = document.getElementById('analysis-period');
    
    if (!studentSelect || !periodSelect) {
        console.log('Analysis elements not found - likely not in analysis section');
        return;
    }
    
    const studentId = studentSelect.value;
    const period = periodSelect.value;
    
    if (!studentId) {
        // Only show alert if we're actually in the analysis section
        if (appState.currentSection === 'analysis') {
            alert('Please select a student');
        }
        return;
    }
    
    const analysis = sampleData.analysis[studentId] && sampleData.analysis[studentId][period];
    
    if (analysis) {
        // Safely update performance summary with null checks
        const overallElement = document.getElementById('overall-performance');
        const strongestElement = document.getElementById('strongest-subject');
        const weakestElement = document.getElementById('weakest-subject');
        const predictedElement = document.getElementById('predicted-grade');
        
        if (overallElement) {
            overallElement.innerHTML = `<span class="trend ${analysis.overall.includes('+') ? 'up' : 'down'}">${analysis.overall}</span>`;
        }
        if (strongestElement) strongestElement.textContent = analysis.strongest;
        if (weakestElement) weakestElement.textContent = analysis.weakest;
        if (predictedElement) predictedElement.textContent = analysis.predicted;
        
        // Update analysis table only if it exists
        const tbody = document.querySelector('#analysis-table tbody');
        if (tbody) {
            tbody.innerHTML = '';
            
            analysis.subjects.forEach(subject => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${subject.subject}</td>
                    <td>${subject.previous}</td>
                    <td>${subject.current}</td>
                    <td>${subject.difference > 0 ? '+' : ''}${subject.difference}</td>
                    <td><span class="trend ${subject.trend}">${subject.trend === 'up' ? '↑' : '↓'}</span></td>
                    <td>${subject.recommendation}</td>
                `;
                tbody.appendChild(row);
            });
        }
        
        // Render chart only if it exists
        const chart = document.getElementById('comparison-chart');
        if (chart) {
            renderSimpleChart(analysis.subjects);
        }
    } else {
        // Only show alert if we're in the analysis section
        if (appState.currentSection === 'analysis') {
            alert('No analysis data available for the selected student and period.');
        }
    }
}

function renderSimpleChart(subjects) {
    const chart = document.getElementById('comparison-chart');
    if (!chart) return;
    
    // In a real application, you would use a charting library like Chart.js
    // This is a simplified representation
    chart.innerHTML = `
        <div style="text-align: center; width: 100%;">
            <h4>Subject Performance Comparison</h4>
            <div style="display: flex; justify-content: space-around; align-items: flex-end; height: 200px; margin-top: 20px;">
                ${subjects.map(subject => `
                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <div style="width: 40px; background-color: ${subject.trend === 'up' ? '#4CAF50' : '#F44336'}; height: ${subject.current}px; margin: 0 10px;"></div>
                        <div style="width: 40px; background-color: #2196F3; height: ${subject.previous}px; margin: 0 10px;"></div>
                        <div style="margin-top: 10px; font-size: 0.8rem;">${subject.subject}</div>
                    </div>
                `).join('')}
            </div>
            <div style="display: flex; justify-content: center; margin-top: 20px; gap: 20px;">
                <div style="display: flex; align-items: center;">
                    <div style="width: 20px; height: 20px; background-color: #2196F3; margin-right: 5px;"></div>
                    <span>Previous</span>
                </div>
                <div style="display: flex; align-items: center;">
                    <div style="width: 20px; height: 20px; background-color: #4CAF50; margin-right: 5px;"></div>
                    <span>Current (Improved)</span>
                </div>
                <div style="display: flex; align-items: center;">
                    <div style="width: 20px; height: 20px; background-color: #F44336; margin-right: 5px;"></div>
                    <span>Current (Declined)</span>
                </div>
            </div>
        </div>
    `;
}

// Attendance
function markAttendance() {
    const date = document.getElementById('attendance-date').value;
    const classVal = document.getElementById('attendance-class').value; // ← THIS LINE MUST BE AT THE TOP
    
    if (!date) {
        showNotification('Please select a date', 'error');
        return;
    }
    
    // Collect attendance data
    const attendanceData = [];
    document.querySelectorAll('#attendance-table tbody tr').forEach(row => {
        const studentId = row.cells[0].textContent;
        const status = row.querySelector('.attendance-status').value;
        const remarks = row.querySelector('.attendance-remarks').value;
        
        attendanceData.push({ studentId, status, remarks, date });
    });
    
    // Save attendance (in real app, this would be an API call)
    console.log('Saving attendance:', attendanceData);
    showNotification(`Attendance marked for ${classVal} on ${date}`, 'success'); // ← Now classVal is defined
}

function viewAttendanceReport() {
    console.log('Opening attendance report...');
    alert('Attendance report feature would open here');
    // In a real app, this would show charts/analytics
}



function updateAttendanceTable() {
    console.log('🎯 INSIDE updateAttendanceTable - FUNCTION IS WORKING!');
    
    const classVal = document.getElementById('attendance-class').value;
    const tbody = document.querySelector('#attendance-table tbody');
    
    if (!tbody) {
        console.error('Table body not found');
        return;
    }
    
    // Clear table
    tbody.innerHTML = '';
    
    // Get students for selected class
    const classStudents = sampleData.students.filter(s => s.class === classVal);
    
    if (classStudents.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4">No students found for ' + classVal + '</td></tr>';
        return;
    }
    
    // Add students to table
    classStudents.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>
                <select class="attendance-status">
                    <option value="present">Present</option>
                    <option value="absent">Absent</option>
                    <option value="late">Late</option>
                </select>
            </td>
            <td><input type="text" class="attendance-remarks" placeholder="Remarks..."></td>
        `;
        tbody.appendChild(row);
    });
    
    console.log('✅ Added ' + classStudents.length + ' students to table');
}

function printTimetable() {
    const timetableContainer = document.getElementById('timetable-container');
    if (!timetableContainer) return;
    
    const printWindow = window.open('', '_blank');
    const classVal = document.getElementById('timetable-class').value;
    
    printWindow.document.write(`
        <html>
            <head>
                <title>Timetable - Class ${classVal}</title>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        margin: 20px; 
                        background: white;
                        color: black;
                    }
                    .weekly-timetable { 
                        display: grid; 
                        grid-template-columns: repeat(5, 1fr); 
                        gap: 15px; 
                        margin-top: 20px;
                    }
                    .timetable-day-card { 
                        border: 2px solid #333; 
                        border-radius: 8px;
                        page-break-inside: avoid;
                    }
                    .day-header { 
                        background: #2c3e50; 
                        color: white; 
                        padding: 15px; 
                        margin: 0;
                        text-align: center; 
                        font-weight: bold;
                        font-size: 1.1em;
                        border-radius: 6px 6px 0 0;
                    }
                    .periods-list { 
                        padding: 15px; 
                    }
                    .timetable-period { 
                        margin-bottom: 10px; 
                        padding: 10px; 
                        border-left: 3px solid #007bff; 
                        background: #f8f9fa; 
                        border-radius: 4px;
                    }
                    .period-time { 
                        font-weight: bold; 
                        margin-bottom: 5px;
                    }
                    h1 { 
                        text-align: center; 
                        color: #2c3e50;
                        margin-bottom: 20px;
                    }
                    @media print { 
                        body { margin: 0; }
                        .weekly-timetable { grid-template-columns: repeat(5, 1fr); }
                    }
                </style>
            </head>
            <body>
                <h1>Class Timetable - ${classVal}</h1>
                ${timetableContainer.innerHTML}
            </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
}

// Fee Management
function updateFeeData() {
    if (!appState.currentUser) return;
    
    // Only update fee data if we're in the fees section or dashboard
    const currentSection = appState.currentSection;
    if (currentSection !== 'fees' && currentSection !== 'dashboard') {
        return;
    }
    
    const feeData = sampleData.fees[appState.currentUser.id] || [];
    
    // Update fee summary - with null checks
    const total = feeData.reduce((sum, fee) => sum + fee.amount, 0);
    const paid = feeData.filter(f => f.status === 'paid').reduce((sum, fee) => sum + fee.amount, 0);
    const pending = feeData.filter(f => f.status === 'pending').reduce((sum, fee) => sum + fee.amount, 0);
    const overdue = feeData.filter(f => f.status === 'overdue').reduce((sum, fee) => sum + fee.amount, 0);
    
    // Safely update fee summary elements
    const totalElement = document.querySelector('.fee-summary .amount:nth-child(1)');
    const paidElement = document.querySelector('.fee-summary .amount.paid');
    const pendingElement = document.querySelector('.fee-summary .amount.pending');
    const overdueElement = document.querySelector('.fee-summary .amount.overdue');
    
    if (totalElement) totalElement.textContent = `$${total}`;
    if (paidElement) paidElement.textContent = `$${paid}`;
    if (pendingElement) pendingElement.textContent = `$${pending}`;
    if (overdueElement) overdueElement.textContent = `$${overdue}`;
    
    // Update fee history table only if it exists
    const tbody = document.querySelector('#fee-table tbody');
    if (tbody) {
        tbody.innerHTML = '';
        
        feeData.forEach(fee => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${fee.date}</td>
                <td>${fee.description}</td>
                <td>$${fee.amount}</td>
                <td><span class="status ${fee.status}">${fee.status}</span></td>
                <td>${fee.receipt ? `<a href="#">${fee.receipt}</a>` : '-'}</td>
            `;
            tbody.appendChild(row);
        });
    }
}

function updateFeeStatusWidget() {
    if (!appState.currentUser || appState.currentUser.type !== 'student') return;
    
    const feeStatusWidget = document.getElementById('fee-status-widget');
    if (!feeStatusWidget) return; // Add this check
    
    const feeData = sampleData.fees[appState.currentUser.id] || [];
    const pending = feeData.filter(f => f.status === 'pending' || f.status === 'overdue');
    
    if (pending.length > 0) {
        feeStatusWidget.innerHTML = `
            <div class="fee-alert">
                <p>You have ${pending.length} pending fee(s)</p>
                <p>Total amount: $${pending.reduce((sum, fee) => sum + fee.amount, 0)}</p>
                <button class="btn-primary" onclick="navigateToSection('fees')">View Details</button>
            </div>
        `;
    } else {
        feeStatusWidget.innerHTML = `<p>All fees are paid up to date.</p>`;
    }
}

function recordPayment() {
    console.log('Opening payment form...');
    alert('Payment recording form would open here');
}

function sendFeeReminders() {
    console.log('Sending fee reminders...');
    alert('Fee reminders would be sent to parents');
}

// Library Management
function populateBooksGrid() {
    const booksGrid = document.getElementById('books-grid');
    if (!booksGrid) return;
    
    booksGrid.innerHTML = '';
    
    sampleData.library.books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>ISBN:</strong> ${book.isbn}</p>
            <p><strong>Status:</strong> <span class="status ${book.available ? 'available' : 'borrowed'}">${book.available ? 'Available' : 'Borrowed'}</span></p>
            <div class="book-actions">
                <button class="btn-primary" ${!book.available ? 'disabled' : ''}>Borrow</button>
            </div>
        `;
        booksGrid.appendChild(bookCard);
    });
    
    updateBorrowedBooks();
}

function searchBooks() {
    const searchTerm = document.getElementById('book-search').value.toLowerCase();
    
    const filteredBooks = sampleData.library.books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.isbn.includes(searchTerm)
    );
    
    const booksGrid = document.getElementById('books-grid');
    booksGrid.innerHTML = '';
    
    filteredBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>ISBN:</strong> ${book.isbn}</p>
            <p><strong>Status:</strong> <span class="status ${book.available ? 'available' : 'borrowed'}">${book.available ? 'Available' : 'Borrowed'}</span></p>
            <div class="book-actions">
                <button class="btn-primary" ${!book.available ? 'disabled' : ''}>Borrow</button>
            </div>
        `;
        booksGrid.appendChild(bookCard);
    });
}

function updateBorrowedBooks() {
    const borrowedList = document.getElementById('borrowed-books-list');
    if (!borrowedList) return;
    
    if (!appState.currentUser || appState.currentUser.type !== 'student') {
        borrowedList.innerHTML = '<p>Login as a student to view borrowed books.</p>';
        return;
    }
    
    const userBorrowed = sampleData.library.borrowed.filter(b => b.studentId === appState.currentUser.id);
    
    if (userBorrowed.length === 0) {
        borrowedList.innerHTML = '<p>No books currently borrowed.</p>';
        return;
    }
    
    borrowedList.innerHTML = userBorrowed.map(borrowed => {
        const book = sampleData.library.books.find(b => b.id === borrowed.bookId);
        return `
            <div class="borrowed-book">
                <h4>${book.title}</h4>
                <p>Due: ${borrowed.dueDate}</p>
                <button class="btn-primary">Renew</button>
                <button class="btn-secondary">Return</button>
            </div>
        `;
    }).join('');
}

function updateLibraryBooksWidget() {
    if (!appState.currentUser || appState.currentUser.type !== 'student') return;
    
    const libraryBooksWidget = document.getElementById('library-books');
    const borrowedCount = sampleData.library.borrowed.filter(b => b.studentId === appState.currentUser.id).length;
    
    if (libraryBooksWidget) {
        libraryBooksWidget.textContent = borrowedCount;
    }
}

function updateExamSchedule() {
    console.log('updateExamSchedule called');
    
    const classFilter = document.getElementById('exam-class').value;
    const examsContainer = document.getElementById('exams-container');
    
    if (!examsContainer) return;
    
    // Filter exams based on class selection
    let filteredExams = sampleData.exams;
    if (classFilter !== 'all') {
        filteredExams = sampleData.exams.filter(exam => exam.class === classFilter);
    }
    
    if (filteredExams.length > 0) {
        // Group exams by month for better organization
        const examsByMonth = groupExamsByMonth(filteredExams);
        
        examsContainer.innerHTML = `
            <div class="exams-overview">
                <div class="exams-stats">
                    <div class="stat-card">
                        <h3>Total Exams</h3>
                        <div class="stat-value">${filteredExams.length}</div>
                    </div>
                    <div class="stat-card">
                        <h3>Upcoming</h3>
                        <div class="stat-value">${getUpcomingExamsCount(filteredExams)}</div>
                    </div>
                    <div class="stat-card">
                        <h3>This Month</h3>
                        <div class="stat-value">${getThisMonthExamsCount(filteredExams)}</div>
                    </div>
                </div>
                
                <div class="monthly-exams">
                    ${Object.entries(examsByMonth).map(([month, exams]) => `
                        <div class="exam-month-section">
                            <h3 class="month-header">${month}</h3>
                            <div class="exams-grid">
                                ${exams.map(exam => `
                                    <div class="exam-card ${isUpcomingExam(exam) ? 'upcoming' : ''}">
                                        <div class="exam-date">
                                            <div class="exam-day">${new Date(exam.date).getDate()}</div>
                                            <div class="exam-month">${new Date(exam.date).toLocaleDateString('en-US', { month: 'short' })}</div>
                                        </div>
                                        <div class="exam-details">
                                            <h4 class="exam-subject">${exam.subject}</h4>
                                            <p class="exam-class">Class: ${exam.class}</p>
                                            <p class="exam-time"><i class="fas fa-clock"></i> ${exam.time}</p>
                                            <p class="exam-duration"><i class="fas fa-hourglass-half"></i> ${exam.duration}</p>
                                        </div>
                                        <div class="exam-actions">
                                            <button class="btn-primary" onclick="viewExamDetails('${exam.id}')">Details</button>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else {
        examsContainer.innerHTML = '<p class="no-results">No exams found for the selected criteria.</p>';
    }
}

// Helper functions for exam organization
function groupExamsByMonth(exams) {
    const groups = {};
    
    exams.forEach(exam => {
        const date = new Date(exam.date);
        const monthYear = date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long' 
        });
        
        if (!groups[monthYear]) {
            groups[monthYear] = [];
        }
        
        groups[monthYear].push(exam);
    });
    
    // Sort months chronologically
    return Object.keys(groups)
        .sort((a, b) => new Date(a) - new Date(b))
        .reduce((sorted, key) => {
            // Sort exams within each month by date
            sorted[key] = groups[key].sort((a, b) => new Date(a.date) - new Date(b.date));
            return sorted;
        }, {});
}

function getUpcomingExamsCount(exams) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return exams.filter(exam => new Date(exam.date) >= today).length;
}

function getThisMonthExamsCount(exams) {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    return exams.filter(exam => {
        const examDate = new Date(exam.date);
        return examDate.getMonth() === currentMonth && examDate.getFullYear() === currentYear;
    }).length;
}

function isUpcomingExam(exam) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(exam.date) >= today;
}

function viewExamDetails(examId) {
    const exam = sampleData.exams.find(e => e.id === examId);
    if (exam) {
        alert(`Exam Details:\n\nSubject: ${exam.subject}\nClass: ${exam.class}\nDate: ${exam.date}\nTime: ${exam.time}\nDuration: ${exam.duration}`);
    }
}

function updateExamScheduleWidget() {
    if (!appState.currentUser || appState.currentUser.type !== 'student') return;
    
    const examScheduleWidget = document.getElementById('exam-schedule-widget');
    if (!examScheduleWidget) return;
    
    // Get student's class
    const student = sampleData.students.find(s => s.id === appState.currentUser.id);
    if (!student) return;
    
    // Filter exams for the student's class and get upcoming ones, sorted by date (earliest first)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const studentExams = sampleData.exams
        .filter(exam => {
            // Only show exams for the student's class
            const isStudentClass = exam.class === student.class;
            // Only show upcoming exams (today or future)
            const isUpcoming = new Date(exam.date) >= today;
            return isStudentClass && isUpcoming;
        })
        .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by date (earliest first)
        .slice(0, 3); // Show next 3 exams
    
    if (studentExams.length > 0) {
        examScheduleWidget.innerHTML = `
            <div class="upcoming-exams-widget">
                <h4>My Upcoming Exams</h4>
                ${studentExams.map(exam => `
                    <div class="exam-widget-item ${getExamUrgency(exam.date)}">
                        <div class="exam-widget-header">
                            <div class="exam-widget-subject">${exam.subject}</div>
                            <div class="exam-widget-date ${getExamUrgency(exam.date)}">${formatExamDate(exam.date)}</div>
                        </div>
                        <div class="exam-widget-details">
                            <span class="exam-widget-time"><i class="fas fa-clock"></i> ${exam.time}</span>
                            <span class="exam-widget-duration">${exam.duration}</span>
                        </div>
                        <div class="exam-widget-countdown">
                            ${getDaysUntilExam(exam.date)}
                        </div>
                    </div>
                `).join('')}
                <div class="view-all-exams">
                    <button class="btn-secondary" onclick="navigateToSection('exams')" style="width: 100%; margin-top: 10px; padding: 8px;">
                        <i class="fas fa-calendar-alt"></i> View All Exams
                    </button>
                </div>
            </div>
        `;
    } else {
        examScheduleWidget.innerHTML = `
            <div class="no-upcoming-exams">
                <p>No upcoming exams for ${student.class}</p>
                <button class="btn-secondary" onclick="navigateToSection('exams')" style="width: 100%; margin-top: 10px; padding: 8px;">
                    <i class="fas fa-calendar-alt"></i> View Exam Schedule
                </button>
            </div>
        `;
    }
}






// Helper function to get days until exam with urgency styling
function getDaysUntilExam(examDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const exam = new Date(examDate);
    exam.setHours(0, 0, 0, 0);
    
    const diffTime = exam - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
        return '<span class="urgency-high">Today</span>';
    } else if (diffDays === 1) {
        return '<span class="urgency-high">Tomorrow</span>';
    } else if (diffDays <= 7) {
        return `<span class="urgency-medium">${diffDays} days</span>`;
    } else {
        return `<span class="urgency-low">${diffDays} days</span>`;
    }
}

// Helper function to determine exam urgency for styling
function getExamUrgency(examDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const exam = new Date(examDate);
    exam.setHours(0, 0, 0, 0);
    
    const diffTime = exam - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays <= 1) return 'urgent';
    if (diffDays <= 7) return 'soon';
    return 'upcoming';
}

// Helper function to format date for display
function formatExamDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric'
    });
}

// Helper function to format date for display
function formatExamDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: 'numeric'
    });
}



function addExam() {
    alert('Opening add exam form...');
    // In a real application, this would open a form to add a new exam
}

function printExams() {
    const examsContainer = document.getElementById('exams-container');
    if (!examsContainer) return;
    
    const classFilter = document.getElementById('exam-class').value;
    const className = classFilter === 'all' ? 'All Classes' : classFilter;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>Exam Schedule - ${className}</title>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        margin: 20px; 
                        background: white;
                        color: black;
                    }
                    .exams-overview { 
                        background: white;
                    }
                    .exams-stats { 
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 15px;
                        margin-bottom: 20px;
                        background: #f8f9fa !important;
                        color: black !important;
                        padding: 15px;
                        border-radius: 8px;
                    }
                    .stat-card { 
                        background: white;
                        padding: 15px;
                        border-radius: 6px;
                        text-align: center;
                        border: 1px solid #ddd;
                    }
                    .month-header { 
                        color: #2c3e50;
                        font-size: 1.3em;
                        margin: 20px 0 10px 0;
                        padding-bottom: 5px;
                        border-bottom: 2px solid #ddd;
                    }
                    .exams-grid { 
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 15px;
                        margin-bottom: 20px;
                    }
                    .exam-card { 
                        border: 1px solid #000;
                        border-radius: 6px;
                        padding: 15px;
                        page-break-inside: avoid;
                        display: flex;
                        gap: 10px;
                    }
                    .exam-date { 
                        background: #2c3e50;
                        color: white;
                        padding: 10px;
                        border-radius: 4px;
                        text-align: center;
                        min-width: 60px;
                    }
                    .exam-day { 
                        font-size: 1.5em;
                        font-weight: bold;
                    }
                    .exam-details h4 { 
                        margin: 0 0 5px 0;
                        color: #2c3e50;
                    }
                    h1 { 
                        text-align: center; 
                        color: #2c3e50;
                        margin-bottom: 20px;
                    }
                    @media print { 
                        body { margin: 0; }
                        .exams-grid { grid-template-columns: repeat(2, 1fr); }
                    }
                </style>
            </head>
            <body>
                <h1>Exam Schedule - ${className}</h1>
                ${examsContainer.innerHTML}
            </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
}



// Behavior Tracking
function updateBehaviorData() {
    const positiveRecords = document.getElementById('positive-records');
    const improvementRecords = document.getElementById('improvement-records');
    
    if (!appState.currentUser) return;
    
    let behaviorData = [];
    
    if (appState.currentUser.type === 'student') {
        behaviorData = sampleData.behavior[appState.currentUser.id] || [];
    } else {
        // For teachers/admins, show all behavior records
        behaviorData = Object.values(sampleData.behavior).flat();
    }
    
    const positive = behaviorData.filter(r => r.type === 'positive');
    const improvement = behaviorData.filter(r => r.type === 'improvement');
    
    if (positiveRecords) {
        positiveRecords.innerHTML = positive.length > 0 ? 
            positive.map(record => `
                <div class="behavior-record positive">
                    <p><strong>${record.date}</strong>: ${record.description}</p>
                    <p class="teacher">- ${record.teacher}</p>
                </div>
            `).join('') : '<p>No positive records found.</p>';
    }
    
    if (improvementRecords) {
        improvementRecords.innerHTML = improvement.length > 0 ? 
            improvement.map(record => `
                <div class="behavior-record improvement">
                    <p><strong>${record.date}</strong>: ${record.description}</p>
                    <p class="teacher">- ${record.teacher}</p>
                </div>
            `).join('') : '<p>No improvement records found.</p>';
    }
}

function addBehaviorRecord() {
    const studentId = document.getElementById('behavior-student').value;
    
    if (!studentId) {
        alert('Please select a student');
        return;
    }
    
    alert(`Adding behavior record for student ${studentId}...`);
    // In a real application, this would open a form to add a behavior record
}

// Resource Management
function populateResourcesGrid() {
    const resourcesSection = document.getElementById('resources');
    if (!resourcesSection) return;
    
    const userType = appState.currentUser ? appState.currentUser.type : 'student';
    
    // Only rebuild the section if we're currently in the resources section
    if (appState.currentSection === 'resources') {
        if (userType === 'student' || userType === 'parent') {
            // Student and Parent view - only show resources list, no upload section
            resourcesSection.innerHTML = `
                <h2>Learning Resources</h2>
                <div class="resource-categories">
                    <button class="resource-category active" data-category="all">All Resources</button>
                    <button class="resource-category" data-category="notes">Study Notes</button>
                    <button class="resource-category" data-category="videos">Video Lessons</button>
                    <button class="resource-category" data-category="papers">Past Papers</button>
                    <button class="resource-category" data-category="books">E-Books</button>
                </div>
                <div class="read-only-resources-info">
                    <p><i class="fas fa-info-circle"></i> Welcome! Here you can access all available learning resources shared by your teachers.</p>
                    ${userType === 'student' ? '<p><i class="fas fa-graduation-cap"></i> Download study materials, past papers, and video lessons to support your learning.</p>' : ''}
                    ${userType === 'parent' ? '<p><i class="fas fa-user-friends"></i> Access learning materials to support your child\'s education at home.</p>' : ''}
                </div>
                <div class="resources-grid" id="resources-grid">
                    <!-- Resources will be populated below -->
                </div>
            `;
        } else {
            // Teacher and Admin view - show upload section and resources list
            resourcesSection.innerHTML = `
                <h2>Learning Resources</h2>
                <div class="resource-categories">
                    <button class="resource-category active" data-category="all">All Resources</button>
                    <button class="resource-category" data-category="notes">Study Notes</button>
                    <button class="resource-category" data-category="videos">Video Lessons</button>
                    <button class="resource-category" data-category="papers">Past Papers</button>
                    <button class="resource-category" data-category="books">E-Books</button>
                </div>
                
                <div class="resource-upload">
                    <h3>Upload New Resource</h3>
                    <div class="upload-form">
                        <input type="file" id="resource-file">
                        <select id="resource-category">
                            <option value="notes">Study Notes</option>
                            <option value="videos">Video Lessons</option>
                            <option value="papers">Past Papers</option>
                            <option value="books">E-Books</option>
                        </select>
                        <input type="text" id="resource-title" placeholder="Resource Title">
                        <button class="btn-primary" id="upload-resource"><i class="fas fa-upload"></i> Upload</button>
                    </div>
                </div>
                
                <div class="resources-grid" id="resources-grid">
                    <!-- Resources will be populated below -->
                </div>
            `;
            
            // Re-attach event listeners for upload functionality
            setTimeout(() => {
                const uploadButton = document.getElementById('upload-resource');
                if (uploadButton) {
                    uploadButton.addEventListener('click', uploadResource);
                }
                
                // Re-attach category filter listeners
                document.querySelectorAll('.resource-category').forEach(btn => {
                    btn.addEventListener('click', function() {
                        filterResources(this.getAttribute('data-category'));
                    });
                });
            }, 100);
        }
    }
    
    // Populate the resources grid for all users
    const resourcesGrid = document.getElementById('resources-grid');
    if (resourcesGrid) {
        resourcesGrid.innerHTML = '';
        
        sampleData.resources.forEach(resource => {
            const resourceCard = document.createElement('div');
            resourceCard.className = 'resource-card';
            resourceCard.innerHTML = `
                <h3>${resource.title}</h3>
                <p><strong>Category:</strong> ${resource.category}</p>
                <p><strong>Uploaded:</strong> ${resource.uploadDate}</p>
                <p><strong>Downloads:</strong> ${resource.downloads}</p>
                <div class="resource-actions">
                    <button class="btn-primary">Download</button>
                    <button class="btn-secondary">Preview</button>
                </div>
            `;
            resourcesGrid.appendChild(resourceCard);
        });
    }
}

function filterResources(category) {
    const resourcesGrid = document.getElementById('resources-grid');
    const filteredResources = category === 'all' ? 
        sampleData.resources : 
        sampleData.resources.filter(r => r.category === category);
    
    resourcesGrid.innerHTML = '';
    
    filteredResources.forEach(resource => {
        const resourceCard = document.createElement('div');
        resourceCard.className = 'resource-card';
        resourceCard.innerHTML = `
            <h3>${resource.title}</h3>
            <p><strong>Category:</strong> ${resource.category}</p>
            <p><strong>Uploaded:</strong> ${resource.uploadDate}</p>
            <p><strong>Downloads:</strong> ${resource.downloads}</p>
            <div class="resource-actions">
                <button class="btn-primary">Download</button>
                <button class="btn-secondary">Preview</button>
            </div>
        `;
        resourcesGrid.appendChild(resourceCard);
    });
    
    // Update active category button
    document.querySelectorAll('.resource-category').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
}

function uploadResource() {
    const file = document.getElementById('resource-file').files[0];
    const category = document.getElementById('resource-category').value;
    const title = document.getElementById('resource-title').value;
    
    if (!file || !title) {
        alert('Please select a file and enter a title');
        return;
    }
    
    // In a real application, this would upload the file to the server
    alert(`Uploading resource: ${title} (${category})`);
    
    // Reset form
    document.getElementById('resource-file').value = '';
    document.getElementById('resource-title').value = '';
}

// Parent Portal
function updateChildProgress() {
    const childId = document.getElementById('select-child').value;
    
    if (!childId) {
        document.getElementById('child-progress').innerHTML = '<p>Please select a child to view their progress.</p>';
        return;
    }
    
    const child = sampleData.students.find(s => s.id === childId);
    const results = sampleData.results.term3.find(r => r.studentId === childId);
    
    if (child && results) {
        document.getElementById('child-progress').innerHTML = `
            <div class="child-overview">
                <h3>${child.name}'s Progress</h3>
                <div class="progress-stats">
                    <div class="progress-stat">
                        <span class="label">Current GPA</span>
                        <span class="value">${child.gpa}</span>
                    </div>
                    <div class="progress-stat">
                        <span class="label">Attendance</span>
                        <span class="value">${child.attendance}%</span>
                    </div>
                    <div class="progress-stat">
                        <span class="label">Overall Grade</span>
                        <span class="value">${results.grade}</span>
                    </div>
                </div>
            </div>
        `;
        
        // Update academic performance chart (simplified)
        document.getElementById('child-academic-performance').innerHTML = `
            <div class="academic-chart">
                <p>Mathematics: ${results.math}/100</p>
                <p>Science: ${results.science}/100</p>
                <p>English: ${results.english}/100</p>
                <p>History: ${results.history}/100</p>
            </div>
        `;
        
        // Update attendance chart (simplified)
        const attendanceData = sampleData.attendance['2024-01'][childId] || { present: 0, absent: 0, late: 0 };
        document.getElementById('child-attendance').innerHTML = `
            <div class="attendance-chart">
                <p>Present: ${attendanceData.present} days</p>
                <p>Absent: ${attendanceData.absent} days</p>
                <p>Late: ${attendanceData.late} days</p>
            </div>
        `;
        
        // Update teacher comments
        const behaviorData = sampleData.behavior[childId] || [];
        const comments = behaviorData.map(record => `
            <div class="teacher-comment">
                <p><strong>${record.teacher} (${record.date})</strong>: ${record.description}</p>
            </div>
        `).join('');
        
        document.getElementById('teacher-comments').innerHTML = 
            comments || '<p>No teacher comments available.</p>';
    }
}

function messageTeacher(teacherId) {
    const teacher = teacherId ? 
        sampleData.teachers.find(t => t.id === teacherId) : 
        { name: 'Teacher', id: 'TCH000' };
    
    alert(`Opening message form for ${teacher.name}...`);
    // In a real application, this would open a messaging interface
}

function scheduleMeeting() {
    alert('Opening meeting scheduling form...');
    // In a real application, this would open a scheduling interface
}

// Report Generation
function generateReport() {
    const reportType = document.getElementById('report-type').value;
    const startDate = document.getElementById('report-start-date').value;
    const endDate = document.getElementById('report-end-date').value;
    const format = document.getElementById('report-format').value;
    
    if (!startDate || !endDate) {
        alert('Please select start and end dates');
        return;
    }
    
    // In a real application, this would generate a report based on the parameters
    const reportPreview = document.getElementById('report-preview');
    reportPreview.innerHTML = `
        <h3>${reportType.charAt(0).toUpperCase() + reportType.slice(1)} Report</h3>
        <p><strong>Period:</strong> ${startDate} to ${endDate}</p>
        <p><strong>Format:</strong> ${format.toUpperCase()}</p>
        <div class="report-content">
            <p>This is a sample ${reportType} report. In a real application, this would contain actual data based on the selected parameters.</p>
            <p>The report would include charts, tables, and analysis relevant to the report type.</p>
        </div>
        <button class="btn-primary" onclick="downloadReport('${reportType}', '${format}')">Download Report</button>
    `;
}

function downloadReport(reportType, format) {
    alert(`Downloading ${reportType} report in ${format} format...`);
    // In a real application, this would trigger the download
}


function updateNotificationsView() {
    const notificationsSection = document.getElementById('notifications');
    if (!notificationsSection) return;
    
    const userType = appState.currentUser ? appState.currentUser.type : 'student';
    
    if (userType === 'admin') {
        // Admin view - show compose section and notifications list
        notificationsSection.innerHTML = `
            <h2>Notifications & Announcements</h2>
            <div class="notification-compose">
                <h3>Compose New Announcement</h3>
                <div class="compose-form">
                    <input type="text" id="announcement-title" placeholder="Title">
                    <textarea id="announcement-content" placeholder="Content"></textarea>
                    <select id="announcement-audience">
                        <option value="all">All Users</option>
                        <option value="students">Students Only</option>
                        <option value="teachers">Teachers Only</option>
                        <option value="parents">Parents Only</option>
                        <option value="specific">Specific Class</option>
                    </select>
                    <button class="btn-primary" id="send-announcement"><i class="fas fa-paper-plane"></i> Send Announcement</button>
                </div>
            </div>
            <div class="notifications-list" id="notifications-list">
                <!-- Notifications will be populated here -->
            </div>
        `;
        
        // Re-attach event listeners for admin users
        setTimeout(() => {
            const sendButton = document.getElementById('send-announcement');
            if (sendButton) {
                sendButton.addEventListener('click', sendAnnouncement);
            }
        }, 100);
    } else {
        // Student, Teacher, Parent view - only show notifications list
        const userTypeDisplay = userType.charAt(0).toUpperCase() + userType.slice(1);
        notificationsSection.innerHTML = `
            <h2>Notifications & Announcements</h2>
            <div class="read-only-notifications-info">
                <p><i class="fas fa-info-circle"></i> Welcome, ${userTypeDisplay}! Here you can view all school announcements and notifications.</p>
                ${userType === 'teacher' ? '<p><i class="fas fa-chalkboard-teacher"></i> As a teacher, you will receive notifications about classes, meetings, and school updates.</p>' : ''}
                ${userType === 'parent' ? '<p><i class="fas fa-user-friends"></i> As a parent, you will receive notifications about your child\'s progress, school events, and important updates.</p>' : ''}
                ${userType === 'student' ? '<p><i class="fas fa-graduation-cap"></i> As a student, you will receive notifications about classes, exams, assignments, and school events.</p>' : ''}
            </div>
            <div class="notifications-list" id="notifications-list">
                <!-- Notifications will be populated here -->
            </div>
        `;
    }
    
    // Always populate the notifications list
    populateNotifications();
}











// Notifications
function populateNotifications() {
    const notificationsList = document.getElementById('notifications-list');
    if (!notificationsList) return;
    
    notificationsList.innerHTML = '';
    
    sampleData.notifications.forEach(notification => {
        const notificationItem = document.createElement('div');
        notificationItem.className = 'notification-item-full';
        notificationItem.innerHTML = `
            <h4>${notification.title}</h4>
            <div class="date">${notification.date}</div>
            <p>${notification.content}</p>
            <div class="notification-audience">Audience: ${notification.audience}</div>
        `;
        notificationsList.appendChild(notificationItem);
    });
}

function sendAnnouncement() {
    const title = document.getElementById('announcement-title').value;
    const content = document.getElementById('announcement-content').value;
    const audience = document.getElementById('announcement-audience').value;
    
    if (!title || !content) {
        alert('Please enter title and content for the announcement');
        return;
    }
    
    // In a real application, this would send the announcement to the specified audience
    alert(`Sending announcement to ${audience}: ${title}`);
    
    // Reset form
    document.getElementById('announcement-title').value = '';
    document.getElementById('announcement-content').value = '';
}

// Accessibility Features
function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
    appState.isHighContrast = !appState.isHighContrast;
    
    // Update button title
    const button = document.getElementById('high-contrast-toggle');
    button.title = appState.isHighContrast ? 'Disable High Contrast' : 'Enable High Contrast';
}

function toggleFontSize() {
    document.body.classList.toggle('large-text');
    appState.isLargeText = !appState.isLargeText;
    
    // Update button title
    const button = document.getElementById('font-size-toggle');
    button.title = appState.isLargeText ? 'Decrease Font Size' : 'Increase Font Size';
}

function changeLanguage(language) {
    appState.currentLanguage = language;
    // In a real application, this would update all text in the UI
    alert(`Language changed to ${language}. In a real application, all text would be translated.`);
}

// Export functions for HTML onclick attributes
window.viewStudent = viewStudent;
window.editStudent = editStudent;
window.viewTeacher = viewTeacher;
window.messageTeacher = messageTeacher;
window.viewResultDetails = viewResultDetails;
window.navigateToSection = navigateToSection;



// === ENHANCED SECURITY FUNCTIONS ===
function hashPassword(password) {
    // In a real application, use proper hashing like bcrypt
    return btoa(password); // Simple base64 for demo
}


// === DATA EXPORT FUNCTIONS - ADD TO END OF JS FILE ===

function exportToCSV(data, filename) {
    if (!data || data.length === 0) {
        showNotification('No data available to export', 'warning');
        return;
    }
    
    const headers = Object.keys(data[0]);
    const csvContent = [
        headers.join(','),
        ...data.map(row => headers.map(header => JSON.stringify(row[header])).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
}

function exportStudentData() {
    exportToCSV(sampleData.students, 'students_data.csv');
    showNotification('Student data exported successfully', 'success');
}

function exportResultsData() {
    const year = document.getElementById('result-year')?.value || '2024';
    const term = document.getElementById('result-term').value;
    const classFilter = document.getElementById('result-class').value;
    
    let results = getResultsByYearAndTerm(year, term);
    
    // Filter by class if needed
    if (classFilter !== 'all') {
        results = results.filter(result => {
            const student = sampleData.students.find(s => s.id === result.studentId);
            return student && student.class === classFilter;
        });
    }
    
    if (results.length === 0) {
        showNotification('No results to export for the selected criteria', 'warning');
        return;
    }
    
    exportToCSV(results, `results_${year}_${term}.csv`);
    showNotification(`Results exported successfully for ${term} ${year}`, 'success');
}




// === REAL-TIME UPDATES CLASS - ADD TO END OF JS FILE ===

class RealTimeUpdates {
    constructor() {
        this.connections = [];
        this.setupRealTimeFeatures();
    }
    
    setupRealTimeFeatures() {
        // Simulate real-time notifications
        setInterval(() => {
            this.simulateNewNotification();
        }, 30000); // Every 30 seconds
        
        // Simulate attendance updates
        setInterval(() => {
            this.simulateAttendanceUpdate();
        }, 60000); // Every minute
    }
    
    simulateNewNotification() {
        const notifications = [
            "New assignment posted in Mathematics",
            "School event reminder: Sports Day next week",
            "Library book due date approaching",
            "Parent-teacher meeting scheduled"
        ];
        
        const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
        
        // Only show if user is on dashboard
        if (appState.currentSection === 'dashboard') {
            showNotification(randomNotification, 'info');
        }
    }
    
    simulateAttendanceUpdate() {
        // Update attendance percentage randomly
        if (appState.currentUser && appState.currentUser.type === 'student') {
            const student = sampleData.students.find(s => s.id === appState.currentUser.id);
            if (student) {
                const change = Math.random() > 0.5 ? 1 : -1;
                student.attendance = Math.max(75, Math.min(100, student.attendance + change));
                
                if (appState.currentSection === 'dashboard') {
                    updateDashboard();
                }
            }
        }
    }
}

// === ADVANCED SEARCH CLASS - ADD TO END OF JS FILE ===

class AdvancedSearch {
    constructor() {
        this.setupAdvancedSearch();
    }
    
    setupAdvancedSearch() {
        // Debounced search for better performance
        this.setupDebouncedSearch('student-search', this.searchStudents.bind(this));
        this.setupDebouncedSearch('book-search', this.searchBooks.bind(this));
    }
    
    setupDebouncedSearch(inputId, searchFunction) {
        const input = document.getElementById(inputId);
        let timeout;
        
        input.addEventListener('input', (e) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                searchFunction(e.target.value);
            }, 300);
        });
    }
    
    searchStudents(query) {
        const classFilter = document.getElementById('class-filter').value;
        const statusFilter = document.getElementById('status-filter').value;
        
        const filteredStudents = sampleData.students.filter(student => {
            const matchesSearch = this.fuzzySearch(student, query, ['name', 'id', 'email']);
            const matchesClass = classFilter === 'all' || student.class === classFilter;
            const matchesStatus = statusFilter === 'all' || student.status === statusFilter;
            
            return matchesSearch && matchesClass && matchesStatus;
        });
        
        this.displaySearchResults(filteredStudents, 'students-list', this.createStudentCard.bind(this));
    }
    
    searchBooks(query) {
        const filteredBooks = sampleData.library.books.filter(book => 
            this.fuzzySearch(book, query, ['title', 'author', 'isbn'])
        );
        
        this.displaySearchResults(filteredBooks, 'books-grid', this.createBookCard.bind(this));
    }
    
    fuzzySearch(item, query, fields) {
        if (!query) return true;
        
        const searchTerm = query.toLowerCase();
        return fields.some(field => 
            String(item[field]).toLowerCase().includes(searchTerm)
        );
    }
    
    displaySearchResults(items, containerId, createCardFunction) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        
        if (items.length === 0) {
            container.innerHTML = '<p class="no-results">No items found matching your search.</p>';
            return;
        }
        
        items.forEach(item => {
            container.appendChild(createCardFunction(item));
        });
    }
    
    createStudentCard(student) {
        const studentCard = document.createElement('div');
        studentCard.className = 'student-card';
        studentCard.innerHTML = `
            <h3>${student.name}</h3>
            <p><strong>ID:</strong> ${student.id}</p>
            <p><strong>Class:</strong> ${student.class}</p>
            <p><strong>GPA:</strong> ${student.gpa}</p>
            <p><strong>Attendance:</strong> ${student.attendance}%</p>
            <p><strong>Status:</strong> <span class="status ${student.status}">${student.status}</span></p>
            <div class="student-actions">
                <button class="btn-primary" onclick="viewStudent('${student.id}')">View</button>
                <button class="btn-secondary" onclick="editStudent('${student.id}')">Edit</button>
            </div>
        `;
        return studentCard;
    }
    
    createBookCard(book) {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>ISBN:</strong> ${book.isbn}</p>
            <p><strong>Status:</strong> <span class="status ${book.available ? 'available' : 'borrowed'}">${book.available ? 'Available' : 'Borrowed'}</span></p>
            <div class="book-actions">
                <button class="btn-primary" ${!book.available ? 'disabled' : ''}>Borrow</button>
            </div>
        `;
        return bookCard;
    }
}

// === SESSION MANAGER CLASS - ADD TO END OF JS FILE ===

class SessionManager {
    constructor() {
        this.timeoutWarning = 5 * 60 * 1000; // 5 minutes warning
        this.timeoutDuration = 30 * 60 * 1000; // 30 minutes total
        this.warningShown = false;
        this.setupSessionMonitoring();
    }
    
    setupSessionMonitoring() {
        // Reset timer on user activity
        ['click', 'keypress', 'mousemove', 'scroll'].forEach(event => {
            document.addEventListener(event, () => {
                this.resetSessionTimer();
            });
        });
        
        this.startSessionTimer();
    }
    
    startSessionTimer() {
        this.sessionTimer = setTimeout(() => {
            this.showTimeoutWarning();
        }, this.timeoutDuration - this.timeoutWarning);
    }
    
    resetSessionTimer() {
        clearTimeout(this.sessionTimer);
        this.startSessionTimer();
        this.hideTimeoutWarning();
        this.warningShown = false;
    }
    
    showTimeoutWarning() {
        if (this.warningShown || !appState.currentUser) return;
        
        this.warningShown = true;
        const warning = document.createElement('div');
        warning.className = 'session-timeout-warning';
        warning.innerHTML = `
            <h3>Session Timeout Warning</h3>
            <p>Your session will expire in 5 minutes due to inactivity.</p>
            <p>Would you like to continue your session?</p>
            <div class="session-actions">
                <button class="btn-primary" id="continue-session">Continue Session</button>
                <button class="btn-secondary" id="logout-now">Logout Now</button>
            </div>
        `;
        
        document.body.appendChild(warning);
        
        document.getElementById('continue-session').addEventListener('click', () => {
            this.resetSessionTimer();
            warning.remove();
        });
        
        document.getElementById('logout-now').addEventListener('click', () => {
            handleLogout();
            warning.remove();
        });
        
        // Auto logout after warning period
        this.finalTimeout = setTimeout(() => {
            if (document.body.contains(warning)) {
                warning.remove();
            }
            handleLogout();
        }, this.timeoutWarning);
    }
    
    hideTimeoutWarning() {
        const warning = document.querySelector('.session-timeout-warning');
        if (warning) {
            warning.remove();
        }
        if (this.finalTimeout) {
            clearTimeout(this.finalTimeout);
        }
    }
}



// Initialize enhanced features
const realTimeUpdates = new RealTimeUpdates();
const advancedSearch = new AdvancedSearch();
const sessionManager = new SessionManager();




// ========== ADD THESE NEW FUNCTIONS ==========

// Student-specific results view
function updateStudentResults() {
    const resultsSection = document.getElementById('results');
    if (!resultsSection) return;
    
    const student = sampleData.students.find(s => s.id === appState.currentUser.id);
    if (!student) return;
    
    resultsSection.innerHTML = `
        <h2>My Results</h2>
        <div class="results-controls">
            <select id="result-year">
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
            </select>
            <select id="result-term">
                <option value="term1">Term 1</option>
                <option value="term2">Term 2</option>
                <option value="term3">Term 3</option>
            </select>
            <button class="btn-primary" id="export-results"><i class="fas fa-download"></i> Export</button>
        </div>
        <div class="student-results-overview">
            <div class="results-summary">
                <h3>Academic Performance Summary</h3>
                <div class="summary-grid">
                    <div class="summary-item">
                        <span class="label">Current GPA</span>
                        <span class="value">${student.gpa}</span>
                    </div>
                    <div class="summary-item">
                        <span class="label">Overall Grade</span>
                        <span class="value">A-</span>
                    </div>
                    <div class="summary-item">
                        <span class="label">Class Rank</span>
                        <span class="value">5/30</span>
                    </div>
                </div>
            </div>
            <div id="student-results-table-container">
                <!-- Results table will be populated here -->
            </div>
        </div>
    `;
    
    // Add event listeners for the new dropdowns
    document.getElementById('result-year').addEventListener('change', updateStudentResultsTable);
    document.getElementById('result-term').addEventListener('change', updateStudentResultsTable);
    
    updateStudentResultsTable();
}

// Student-specific results table
function updateStudentResultsTable() {
    const container = document.getElementById('student-results-table-container');
    if (!container) return;
    
    const year = document.getElementById('result-year')?.value || '2024';
    const term = document.getElementById('result-term')?.value || 'term1';
    
    const yearKey = `year${year}`;
    const results = sampleData.results[yearKey] && sampleData.results[yearKey][term];
    const studentResult = results ? results.find(r => r.studentId === appState.currentUser.id) : null;
    
    if (studentResult) {
        container.innerHTML = `
            <div class="results-table-container">
                <table id="student-results-table">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Score</th>
                            <th>Grade</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mathematics</td>
                            <td>${studentResult.math}/100</td>
                            <td>${getGrade(studentResult.math)}</td>
                            <td>${getRemarks(studentResult.math)}</td>
                        </tr>
                        <tr>
                            <td>Science</td>
                            <td>${studentResult.science}/100</td>
                            <td>${getGrade(studentResult.science)}</td>
                            <td>${getRemarks(studentResult.science)}</td>
                        </tr>
                        <tr>
                            <td>English</td>
                            <td>${studentResult.english}/100</td>
                            <td>${getGrade(studentResult.english)}</td>
                            <td>${getRemarks(studentResult.english)}</td>
                        </tr>
                        <tr>
                            <td>History</td>
                            <td>${studentResult.history}/100</td>
                            <td>${getGrade(studentResult.history)}</td>
                            <td>${getRemarks(studentResult.history)}</td>
                        </tr>
                        <tr class="total-row">
                            <td><strong>Total</strong></td>
                            <td><strong>${studentResult.total}/400</strong></td>
                            <td><strong>${studentResult.grade}</strong></td>
                            <td><strong>Overall Performance</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    } else {
        container.innerHTML = '<p class="no-results">No results available for the selected period.</p>';
    }
}

// Helper functions for grades and remarks
function getGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

function getRemarks(score) {
    if (score >= 90) return 'Excellent';
    if (score >= 80) return 'Very Good';
    if (score >= 70) return 'Good';
    if (score >= 60) return 'Satisfactory';
    return 'Needs Improvement';
}

// Student-specific analysis view
function updateStudentAnalysis() {
    const analysisSection = document.getElementById('analysis');
    if (!analysisSection) return;
    
    const student = sampleData.students.find(s => s.id === appState.currentUser.id);
    if (!student) return;
    
    analysisSection.innerHTML = `
        <h2>My Performance Analysis</h2>
        <div class="analysis-controls">
            <div class="form-group">
                <label for="analysis-period">Comparison Period</label>
                <select id="analysis-period">
                    <option value="term1-term2">Term 1 vs Term 2</option>
                    <option value="term2-term3">Term 2 vs Term 3</option>
                    <option value="term1-term3">Term 1 vs Term 3</option>
                </select>
            </div>
            <button class="btn-primary" id="generate-analysis"><i class="fas fa-chart-bar"></i> Generate Analysis</button>
        </div>
        
        <div class="analysis-results">
            <div class="performance-summary">
                <h3>My Performance Summary</h3>
                <div class="summary-cards">
                    <div class="summary-card">
                        <h4>Overall Performance</h4>
                        <div class="performance-indicator" id="overall-performance">
                            <span class="trend up">+4.2%</span>
                        </div>
                    </div>
                    <div class="summary-card">
                        <h4>Strongest Subject</h4>
                        <div class="subject-strength" id="strongest-subject">
                            Mathematics
                        </div>
                    </div>
                    <div class="summary-card">
                        <h4>Needs Improvement</h4>
                        <div class="subject-weakness" id="weakest-subject">
                            History
                        </div>
                    </div>
                    <div class="summary-card">
                        <h4>Predicted Grade</h4>
                        <div class="predicted-grade" id="predicted-grade">
                            A-
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="subject-comparison">
                <h3>My Subject-wise Performance</h3>
                <div class="comparison-chart" id="comparison-chart">
                    <!-- Chart will be rendered by JS -->
                </div>
            </div>
            
            <div class="detailed-analysis">
                <h3>Detailed Analysis</h3>
                <div class="analysis-table-container">
                    <table id="analysis-table">
                        <thead>
                            <tr>
                                <th>Subject</th>
                                <th>Previous Score</th>
                                <th>Current Score</th>
                                <th>Difference</th>
                                <th>Trend</th>
                                <th>Recommendation</th>
                            </tr>
                        </thead>
                        <tbody id="student-analysis-tbody">
                            <!-- Analysis data will be populated here -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
    
    // Add event listener
    document.getElementById('generate-analysis').addEventListener('click', updateStudentAnalysisData);
    document.getElementById('analysis-period').addEventListener('change', updateStudentAnalysisData);
    
    updateStudentAnalysisData();
}

// Student-specific analysis data
function updateStudentAnalysisData() {
    const period = document.getElementById('analysis-period').value;
    const analysis = sampleData.analysis[appState.currentUser.id] && sampleData.analysis[appState.currentUser.id][period];
    
    const tbody = document.getElementById('student-analysis-tbody');
    if (!tbody) return;
    
    if (analysis) {
        tbody.innerHTML = '';
        analysis.subjects.forEach(subject => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${subject.subject}</td>
                <td>${subject.previous}</td>
                <td>${subject.current}</td>
                <td>${subject.difference > 0 ? '+' : ''}${subject.difference}</td>
                <td><span class="trend ${subject.trend}">${subject.trend === 'up' ? '↑' : '↓'}</span></td>
                <td>${subject.recommendation}</td>
            `;
            tbody.appendChild(row);
        });
        
        // Update summary cards
        document.getElementById('overall-performance').innerHTML = 
            `<span class="trend ${analysis.overall.includes('+') ? 'up' : 'down'}">${analysis.overall}</span>`;
        document.getElementById('strongest-subject').textContent = analysis.strongest;
        document.getElementById('weakest-subject').textContent = analysis.weakest;
        document.getElementById('predicted-grade').textContent = analysis.predicted;
        
        renderStudentAnalysisChart(analysis.subjects);
    } else {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center;">No analysis data available for the selected period.</td></tr>';
    }
}

function renderStudentAnalysisChart(subjects) {
    const chart = document.getElementById('comparison-chart');
    if (!chart) return;
    
    chart.innerHTML = `
        <div style="text-align: center; width: 100%;">
            <h4>My Subject Performance Comparison</h4>
            <div style="display: flex; justify-content: space-around; align-items: flex-end; height: 200px; margin-top: 20px;">
                ${subjects.map(subject => `
                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <div style="width: 40px; background-color: ${subject.trend === 'up' ? '#4CAF50' : '#F44336'}; height: ${subject.current}px; margin: 0 10px;"></div>
                        <div style="width: 40px; background-color: #2196F3; height: ${subject.previous}px; margin: 0 10px;"></div>
                        <div style="margin-top: 10px; font-size: 0.8rem;">${subject.subject}</div>
                    </div>
                `).join('')}
            </div>
            <div style="display: flex; justify-content: center; margin-top: 20px; gap: 20px;">
                <div style="display: flex; align-items: center;">
                    <div style="width: 20px; height: 20px; background-color: #2196F3; margin-right: 5px;"></div>
                    <span>Previous</span>
                </div>
                <div style="display: flex; align-items: center;">
                    <div style="width: 20px; height: 20px; background-color: #4CAF50; margin-right: 5px;"></div>
                    <span>Current (Improved)</span>
                </div>
                <div style="display: flex; align-items: center;">
                    <div style="width: 20px; height: 20px; background-color: #F44336; margin-right: 5px;"></div>
                    <span>Current (Declined)</span>
                </div>
            </div>
        </div>
    `;
}

// Student-specific behavior view
function updateStudentBehavior() {
    const behaviorSection = document.getElementById('behavior');
    if (!behaviorSection) return;
    
    const student = sampleData.students.find(s => s.id === appState.currentUser.id);
    if (!student) return;
    
    const behaviorData = sampleData.behavior[student.id] || [];
    const positiveRecords = behaviorData.filter(r => r.type === 'positive');
    const improvementRecords = behaviorData.filter(r => r.type === 'improvement');
    
    behaviorSection.innerHTML = `
        <h2>My Behavior Records</h2>
        
        <div class="behavior-overview">
            <div class="behavior-stats">
                <h3>My Behavior Summary</h3>
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-label">Positive Incidents</div>
                        <div class="stat-value">${positiveRecords.length}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">Areas for Improvement</div>
                        <div class="stat-value">${improvementRecords.length}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">Overall Rating</div>
                        <div class="stat-value">Good</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="behavior-records">
            <div class="positive-behavior">
                <h3>Positive Feedback</h3>
                <div id="student-positive-records">
                    ${positiveRecords.length > 0 ? 
                        positiveRecords.map(record => `
                            <div class="behavior-record positive">
                                <p><strong>${record.date}</strong>: ${record.description}</p>
                                <p class="teacher">- ${record.teacher}</p>
                            </div>
                        `).join('') : 
                        '<p>No positive records found.</p>'
                    }
                </div>
            </div>
            <div class="improvement-areas">
                <h3>Areas for Improvement</h3>
                <div id="student-improvement-records">
                    ${improvementRecords.length > 0 ? 
                        improvementRecords.map(record => `
                            <div class="behavior-record improvement">
                                <p><strong>${record.date}</strong>: ${record.description}</p>
                                <p class="teacher">- ${record.teacher}</p>
                            </div>
                        `).join('') : 
                        '<p>No improvement records found.</p>'
                    }
                </div>
            </div>
        </div>
    `;
}


// ========== ADD THESE MISSING FUNCTION DEFINITIONS ==========

// Add to the window object for global access
window.addTeacher = addTeacher;
window.closeTeacherModal = closeTeacherModal;
window.exportResultsData = exportResultsData;

// Add other missing functions that might be needed
function editSubjectAllocation(teacherName, subject) {
    alert(`Edit subject allocation for ${teacherName} - ${subject}`);
}

function viewExamDetails(examId) {
    const exam = sampleData.exams.find(e => e.id === examId);
    if (exam) {
        alert(`Exam Details:\n\nSubject: ${exam.subject}\nClass: ${exam.class}\nDate: ${exam.date}\nTime: ${exam.time}\nDuration: ${exam.duration}`);
    }
}

// Make sure these are available globally
window.editSubjectAllocation = editSubjectAllocation;
window.viewExamDetails = viewExamDetails;







