// Comprehensive School Management System
// This file contains all the functionality for the system


// ==================== GHANAIAN STUDENT NAMES DATABASE ====================

// Ghanaian Student Names Database - PUT THIS RIGHT AFTER THE sampleData OBJECT
const ghanaianNames = {
    maleFirstNames: [
        'Kwame', 'Kofi', 'Kwasi', 'Kwadwo', 'Kwaku', 'Yaw', 'Kweku', 'Kwabena',
        'Ato', 'Kojo', 'Akwasi', 'Akwesi', 'Yao', 'Ekow', 'Nana', 'Osei',
        'Akos', 'Bismark', 'Clement', 'Daniel', 'Emmanuel', 'Felix', 'Gabriel',
        'Henry', 'Isaac', 'Jacob', 'Joshua', 'Kingsley', 'Lawrence', 'Michael',
        'Nathan', 'Obed', 'Paul', 'Quarshie', 'Raphael', 'Samuel', 'Theodore'
    ],
    
    femaleFirstNames: [
        'Ama', 'Abena', 'Akosua', 'Adwoa', 'Akua', 'Yaa', 'Afua', 'Aba',
        'Akos', 'Adoma', 'Afi', 'Agyeiwaa', 'Amma', 'Araba', 'Abigail',
        'Beatrice', 'Comfort', 'Dora', 'Esther', 'Florence', 'Grace', 'Hannah',
        'Irene', 'Janet', 'Joyce', 'Kate', 'Linda', 'Mary', 'Naa', 'Naomi',
        'Patience', 'Queenie', 'Rebecca', 'Sarah', 'Theresa', 'Ursula',
        'Veronica', 'Wendy'
    ],
    
    lastNames: [
        'Mensah', 'Appiah', 'Owusu', 'Agyemang', 'Asare', 'Boateng', 'Arthur', 'Amoah',
        'Addo', 'Adjei', 'Adu', 'Agyei', 'Akoto', 'Ampofo', 'Ankrah', 'Ansah',
        'Asante', 'Ashitey', 'Attoh', 'Baah', 'Baffoe', 'Bekoe', 'Bempah', 'Boahen',
        'Boakye', 'Bonsu', 'Danso', 'Darko', 'Donkor', 'Frimpong', 'Gyamfi', 'Karikari',
        'Kwarteng', 'Mintah', 'Nkrumah', 'Nti', 'Ofori', 'Opoku', 'Oppong', 'Osei',
        'Otoo', 'Poku', 'Prempeh', 'Quartey', 'Sarpong', 'Tawiah', 'Tuffour',
        'Tweneboah', 'Yeboah'
    ]
};

// Ghana Education System Class Structure
const ghanaClasses = {
    nursery: ['Crèche', 'Nursery 1', 'Nursery 2', 'KG 1', 'KG 2'],
    primary: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6'],
    jhs: ['JHS 1', 'JHS 2', 'JHS 3']
};


// Function to generate unique Ghanaian student names
function generateUniqueGhanaianNames(count) {
    const usedNames = new Set();
    const names = [];
    
    while (names.length < count) {
        const isMale = Math.random() > 0.5;
        const firstNamePool = isMale ? ghanaianNames.maleFirstNames : ghanaianNames.femaleFirstNames;
        const lastNamePool = ghanaianNames.lastNames;
        
        const firstName = firstNamePool[Math.floor(Math.random() * firstNamePool.length)];
        const lastName = lastNamePool[Math.floor(Math.random() * lastNamePool.length)];
        const fullName = `${firstName} ${lastName}`;
        
        // Ensure name is unique
        if (!usedNames.has(fullName)) {
            usedNames.add(fullName);
            names.push({
                firstName,
                lastName,
                fullName,
                gender: isMale ? 'Male' : 'Female'
            });
        }
    }
    
    return names;
}

// Generate 15 unique names for each class
const classStudentNames = {};

// Generate names for each Ghanaian class level
[...ghanaClasses.nursery, ...ghanaClasses.primary, ...ghanaClasses.jhs].forEach(className => {
    classStudentNames[className] = generateUniqueGhanaianNames(15);
});










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




    

    students: [ ],
    
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
     'record-keeping': document.getElementById('record-keeping'),
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
    console.log('=== updateUIForUserType called for:', userType);
    
    // Hide/show navigation items based on user type
    const navItems = document.querySelectorAll('.nav-link');
    
    navItems.forEach(item => {
        const target = item.getAttribute('data-target');
        const isVisible = isSectionAccessible(target, userType);
        console.log(`Section ${target}: ${isVisible ? 'visible' : 'hidden'} for ${userType}`);
        item.parentElement.style.display = isVisible ? 'block' : 'none';
    });
    
    // Update dashboard header based on user type
    updateDashboardHeader(userType);
    
    // Update add buttons visibility
    updateAddButtonsVisibility(userType);
}

function updateAddButtonsVisibility(userType) {
    const addStudentBtn = document.getElementById('add-student-btn');
    const addTeacherBtn = document.getElementById('add-teacher-btn');
    
    if (addStudentBtn) {
        addStudentBtn.style.display = userType === 'admin' ? 'block' : 'none';
    }
    
    if (addTeacherBtn) {
        addTeacherBtn.style.display = userType === 'admin' ? 'block' : 'none';
    }
}


function isSectionAccessible(section, userType) {
    const accessibleSections = {
        student: ['dashboard', 'results', 'analysis', 'attendance', 'timetable', 'library', 'exams', 'resources', 'notifications'],
        teacher: ['dashboard', 'students', 'teachers', 'results', 'analysis', 'attendance', 'timetable', 'exams', 'behavior', 'resources', 'notifications', 'record-keeping'],
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

     // Set current date for attendance date field
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('attendance-date').value = today;
    
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

     // ADD THIS LINE - Generate and populate students with Ghanaian names
    sampleData.students = generateSampleStudentsWithNames();
    
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

    // Teacher management - check if elements exist and user is admin
    const addTeacherBtn = document.getElementById('add-teacher-btn');
    if (addTeacherBtn) {
        if (appState.currentUser?.type === 'admin') {
            addTeacherBtn.addEventListener('click', addTeacher);
        } else {
            addTeacherBtn.style.display = 'none';
        }
    }

  // Student management - check if elements exist and user is admin
    const addStudentBtn = document.getElementById('add-student-btn');
    if (addStudentBtn) {
        if (appState.currentUser?.type === 'admin') {
            addStudentBtn.addEventListener('click', showStudentModal);
        } else {
            addStudentBtn.style.display = 'none';
        }
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


document.getElementById('analysis-type').addEventListener('change', updateAnalysisType);
document.getElementById('back-to-results').addEventListener('click', () => navigateToSection('results'));
document.getElementById('select-all-students').addEventListener('change', function() {
    document.querySelectorAll('.student-checkbox').forEach(cb => {
        cb.checked = this.checked;
    });
});

    
// Attendance - check if elements exist
const markAttendanceBtn1 = document.getElementById('mark-attendance');
if (markAttendanceBtn1) {
    markAttendanceBtn1.addEventListener('click', saveAttendance);
}

const viewReport = document.getElementById('view-report');
if (viewReport) {
    viewReport.addEventListener('click', viewAttendanceReport);
}

     // Teacher Attendance Event Listeners
const attendanceClass = document.getElementById('attendance-class');
if (attendanceClass) {
    attendanceClass.addEventListener('change', updateAttendanceTable);
}

const quickMarkAll = document.getElementById('quick-mark-all');
if (quickMarkAll) {
    quickMarkAll.addEventListener('click', quickMarkAllPresent);
}

const applyBulkAction = document.getElementById('apply-bulk-action');
if (applyBulkAction) {
    applyBulkAction.addEventListener('click', applyBulkAction);
}

const markAttendanceBtn2 = document.getElementById('mark-attendance');
if (markAttendanceBtn2) {
    markAttendanceBtn2.addEventListener('click', saveAttendance);
}

const selectAllAttendance = document.getElementById('select-all-attendance');
if (selectAllAttendance) {
    selectAllAttendance.addEventListener('change', function() {
        const checkboxes = document.querySelectorAll('.student-attendance-checkbox');
        checkboxes.forEach(cb => {
            cb.checked = this.checked;
        });
    });
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
    // Check if user is admin
    if (appState.currentUser?.type !== 'admin') {
        showNotification('Only administrators can add new teachers', 'error');
        return;
    }
    
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
        
        // Update add buttons visibility after login
        updateAddButtonsVisibility(authResult.user.type);
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
        
        // Update section-specific data with error handling
        try {
            updateSectionData(sectionId);
        } catch (error) {
            console.error(`Error updating section ${sectionId}:`, error);
            showNotification('Error loading section data', 'error');
        }
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



// Add this function to create the Record Keeping section dynamically
function initializeRecordKeepingSection() {
    const main = document.querySelector('main');
    
    // Create the record-keeping section if it doesn't exist
    let recordKeepingSection = document.getElementById('record-keeping');
    if (!recordKeepingSection) {
        recordKeepingSection = document.createElement('section');
        recordKeepingSection.id = 'record-keeping';
        recordKeepingSection.className = 'section';
        main.appendChild(recordKeepingSection);
    }
    
    // Update the sections object
    sections['record-keeping'] = recordKeepingSection;
    
    // Render the appropriate content based on authentication
    updateRecordKeepingContent();
}

// Function to update Record Keeping content based on user authentication
function updateRecordKeepingContent() {
    const recordKeepingSection = document.getElementById('record-keeping');
    if (!recordKeepingSection) return;

    // Check if user is logged in and is a teacher
    if (!appState.currentUser || appState.currentUser.type !== 'teacher') {
        recordKeepingSection.innerHTML = `
            <div class="section-header">
                <h2><i class="fas fa-clipboard-list"></i> Record Keeping</h2>
                <p>Manage attendance, grades, and student records</p>
            </div>
            
            <div class="login-prompt" style="text-align: center; padding: 40px;">
                <div class="prompt-icon">
                    <i class="fas fa-lock" style="font-size: 48px; color: #6c757d; margin-bottom: 20px;"></i>
                </div>
                <h3>Teacher Access Required</h3>
                <p>This section is only accessible to teachers. Please log in with a teacher account to access record keeping features.</p>
                <div style="margin-top: 30px;">
                    <button class="btn-primary" onclick="navigateToSection('login')">
                        <i class="fas fa-sign-in-alt"></i> Login as Teacher
                    </button>
                    <button class="btn-secondary" onclick="navigateToSection('dashboard')" style="margin-left: 10px;">
                        <i class="fas fa-home"></i> Back to Dashboard
                    </button>
                </div>
            </div>
        `;
    } else {
        // User is a teacher - show the full record keeping interface
        recordKeepingSection.innerHTML = `
            <div class="section-header">
                <h2><i class="fas fa-clipboard-list"></i> Record Keeping</h2>
                <p>Manage attendance, grades, and student records</p>
            </div>
            
            <div class="teacher-welcome" style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                <p><strong>Welcome, ${appState.currentUser.name}!</strong> You have access to all record keeping features.</p>
            </div>
            
            <div class="record-tabs">
                <button class="record-tab active" data-tab="attendance">
                    <i class="fas fa-calendar-check"></i> Attendance
                </button>
                <button class="record-tab" data-tab="grades">
                    <i class="fas fa-chart-bar"></i> Grade Management
                </button>
                <button class="record-tab" data-tab="behavior">
                    <i class="fas fa-clipboard-list"></i> Behavior Records
                </button>
            </div>
            
            <div class="record-content">
                <div id="attendance-tab" class="record-tab-content active">
                    <div class="attendance-controls">
                        <div class="form-group">
                            <label for="record-date">Date</label>
                            <input type="date" id="record-date">
                        </div>
                        <div class="form-group">
                            <label for="record-class">Class</label>
                            <select id="record-class">
                                <option value="">Select Class</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="attendance-actions">
                        <button class="btn-primary" id="quick-mark-all-present">
                            <i class="fas fa-check-circle"></i> Mark All Present
                        </button>
                        <select id="bulk-action-enhanced">
                            <option value="present">Present</option>
                            <option value="absent">Absent</option>
                            <option value="late">Late</option>
                            <option value="excused">Excused</option>
                        </select>
                        <button class="btn-secondary" id="apply-bulk-action-enhanced">
                            Apply to Selected
                        </button>
                    </div>
                    
                    <div class="attendance-summary-enhanced">
                        <div class="summary-card">
                            <div class="summary-value" id="present-count-enhanced">0</div>
                            <div class="summary-label">Present</div>
                        </div>
                        <div class="summary-card">
                            <div class="summary-value" id="absent-count-enhanced">0</div>
                            <div class="summary-label">Absent</div>
                        </div>
                        <div class="summary-card">
                            <div class="summary-value" id="late-count-enhanced">0</div>
                            <div class="summary-label">Late</div>
                        </div>
                        <div class="summary-card">
                            <div class="summary-value" id="excused-count-enhanced">0</div>
                            <div class="summary-label">Excused</div>
                        </div>
                    </div>
                    
                    <div class="table-container">
                        <table class="attendance-table">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" id="select-all-enhanced"></th>
                                    <th>Avatar</th>
                                    <th>Student ID</th>
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th>Time</th>
                                    <th>Remarks</th>
                                    <th>History</th>
                                    <th>Pattern</th>
                                </tr>
                            </thead>
                            <tbody id="attendance-table-body-enhanced">
                                <!-- Students will be loaded here -->
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="attendance-final-actions">
                        <button class="btn-secondary" id="save-attendance-draft">
                            <i class="fas fa-save"></i> Save Draft
                        </button>
                        <button class="btn-primary" id="submit-final-attendance">
                            <i class="fas fa-paper-plane"></i> Submit Final Attendance
                        </button>
                    </div>
                </div>
                
                <div id="grades-tab" class="record-tab-content">
                    <div class="tab-placeholder">
                        <h3>Grade Management</h3>
                        <p>This feature allows you to manage and input student grades.</p>
                        <p><em>Grade management interface will be implemented here.</em></p>
                    </div>
                </div>
                
                <div id="behavior-tab" class="record-tab-content">
                    <div class="tab-placeholder">
                        <h3>Behavior Records</h3>
                        <p>This feature allows you to record and track student behavior.</p>
                        <p><em>Behavior recording interface will be implemented here.</em></p>
                    </div>
                </div>
            </div>
        `;
        
        // Initialize the record keeping functionality for teachers
        initializeRecordKeeping();
    }
}




// ========== MODIFY THIS EXISTING FUNCTION ==========
function updateSectionData(sectionId) {
    console.log('🔄 updateSectionData called for:', sectionId);

    switch(sectionId) {
        case 'dashboard':
            updateDashboard();
            break;
        case 'teachers':
            populateTeachersGrid();
            populateSubjectAllocation();
            setupTeacherFilters();
            const addTeacherBtn = document.getElementById('add-teacher-btn');
            if (addTeacherBtn) {
                addTeacherBtn.style.display = appState.currentUser.type === 'admin' ? 'block' : 'none';
            }
            break;
            case 'students':
            // Initialize student management with tabs for admin
            if (appState.currentUser?.type === 'admin') {
                initializeStudentManagement();
            } else {
                // For non-admin users, use existing student display
                populateStudentsList();
            }
            break;
        case 'results':
            if (appState.currentUser.type === 'student') {
                updateStudentResults();
            } else if (appState.currentUser.type === 'teacher') {
                updateTeacherResults(); // NEW: Teacher-specific results
            } else {
                updateResultsTable();
            }
            break;
      case 'analysis':
    if (appState.currentUser.type === 'teacher') {
        updateTeacherAnalysis();
    } else if (appState.currentUser.type === 'student') {
        updateStudentAnalysis();
    } else {
        updateAnalysis();
    }
    break;
      case 'attendance':
            // Only call teacher attendance functions if user is a teacher
            if (appState.currentUser.type === 'teacher') {
                updateTeacherAttendance();
            } else if (appState.currentUser.type === 'student') {
                updateStudentAttendance();
            } else {
                // For admin or other users, use basic attendance
                const attendanceClass = document.getElementById('attendance-class');
                if (attendanceClass) {
                    updateAttendanceTable();
                }
            }
            break;
               case 'record-keeping': // ADD THIS CASE
            updateRecordKeepingContent();
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

function isAdminUser() {
    return appState.currentUser?.type === 'admin';
}

function hasPermission(action) {
    const permissions = {
        'add_student': 'admin',
        'add_teacher': 'admin',
        'edit_student': 'admin',
        'edit_teacher': 'admin',
        'delete_student': 'admin',
        'delete_teacher': 'admin',
        'view_monitoring': 'admin'
    };
    
    const requiredRole = permissions[action];
    return !requiredRole || appState.currentUser?.type === requiredRole;
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
             makeAllDashboardCardsClickable(); // Add this line
            break;
    }
    
    // Update dashboard header for all users
    updateDashboardHeader(user.type);
}


// Add this function to provide visual feedback
function addCardClickEffects() {
    const cards = document.querySelectorAll('.dashboard-grid .card');
    
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'scale(0.98)';
            this.style.backgroundColor = 'rgba(0, 123, 255, 0.1)';
            
            setTimeout(() => {
                this.style.transform = '';
                this.style.backgroundColor = '';
            }, 300);
            
            // Ripple effect
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(0, 123, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            const size = Math.max(this.offsetWidth, this.offsetHeight);
            const rect = this.getBoundingClientRect();
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
            ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}




// ========== ADMIN DASHBOARD ==========

// ========== ADMIN DASHBOARD ==========

function updateAdminDashboard() {
    console.log('Updating admin dashboard with school metrics...');
    
    // Update class display for admin
    const studentClassElement = document.getElementById('student-class');
    if (studentClassElement) {
        studentClassElement.textContent = 'Administrator';
    }
    
    // Get all cards from the dashboard
    const cards = document.querySelectorAll('.dashboard-grid .card');
    
    if (cards.length >= 5) {
        // Card 1: Total Students
        const totalStudents = sampleData.students.length;
        const totalStudentsCard = cards[0];
        
        // Update the number and title
        const gpaElement = document.getElementById('current-gpa');
        if (gpaElement) {
            gpaElement.textContent = totalStudents;
        }
        totalStudentsCard.querySelector('h3').textContent = 'Total Students';
        
        // Make the card clickable with hover effects
        makeCardClickable(totalStudentsCard, 'students');
        
        // Card 2: Total Teachers  
        const totalTeachers = sampleData.teachers.length;
        const teachersCard = cards[1];
        document.getElementById('attendance').textContent = totalTeachers;
        teachersCard.querySelector('h3').textContent = 'Total Teachers';
        makeCardClickable(teachersCard, 'teachers');
        
        // Card 3: Students Owing Fees
        const studentsOwingFees = calculateStudentsOwingFees();
        const feesCard = cards[2];
        document.getElementById('upcoming-tests').textContent = studentsOwingFees;
        feesCard.querySelector('h3').textContent = 'Students Owing Fees';
        makeCardClickable(feesCard, 'fees');
        
        // Card 4: Underperforming Students
        const underperformingStudents = calculateUnderperformingStudents();
        const underperformingCard = cards[3];
        document.getElementById('library-books').textContent = underperformingStudents;
        underperformingCard.querySelector('h3').textContent = 'Underperforming Students';
        makeCardClickable(underperformingCard, 'analysis');
        
        // Card 5: Performing Students
        const performingStudents = calculatePerformingStudents();
        const performingCard = cards[4];
        const performingElement = document.getElementById('performing-students');
        if (performingElement) {
            performingElement.textContent = performingStudents;
        }
        performingCard.querySelector('h3').textContent = 'Performing Students';
        makeCardClickable(performingCard, 'analysis');
    }

    // Update card trends
    updateAdminCardTrends();
    
    // Clear student-specific widgets for admin
    clearStudentWidgets();

    // ADD MONITORING WIDGET
    updateMonitoringWidget();
}


// Helper function to make cards clickable
function makeCardClickable(card, targetSection) {
    card.style.cursor = 'pointer';
    card.classList.add('clickable');
    
    // Store the original border color
    const originalBorderColor = window.getComputedStyle(card).borderColor;
    
    // Add hover effects
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 8px 25px rgba(0, 123, 255, 0.2)';
        this.style.borderColor = '#007bff';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        this.style.borderColor = originalBorderColor;
    });
    
    // Add click functionality
    card.addEventListener('click', function() {
        navigateToSection(targetSection);
        
        // Add a visual feedback when clicked
        this.style.backgroundColor = 'rgba(0, 123, 255, 0.1)';
        setTimeout(() => {
            this.style.backgroundColor = '';
        }, 300);
    });
    
    // Add click indicator (arrow icon)
    const cardContent = card.querySelector('.card-content') || card;
    const existingArrow = cardContent.querySelector('.click-arrow');
    if (!existingArrow) {
        const arrow = document.createElement('div');
        arrow.className = 'click-arrow';
        arrow.innerHTML = '<i class="fas fa-arrow-right"></i>';
        arrow.style.cssText = 'position: absolute; top: 15px; right: 15px; color: #007bff; opacity: 0.5; transition: opacity 0.3s ease;';
        cardContent.style.position = 'relative';
        cardContent.appendChild(arrow);
        
        card.addEventListener('mouseenter', function() {
            arrow.style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', function() {
            arrow.style.opacity = '0.5';
        });
    }
}

// Make all dashboard cards clickable
function makeAllDashboardCardsClickable() {
    const cards = document.querySelectorAll('.dashboard-grid .card');
    
    // Define what each card should do when clicked
    const cardActions = [
        { section: 'students', description: 'View all students' },
        { section: 'teachers', description: 'View all teachers' },
        { section: 'fees', description: 'Manage student fees' },
        { section: 'analysis', description: 'View student analysis', 
          action: () => {
              navigateToSection('analysis');
              setTimeout(() => {
                  document.getElementById('analysis-type').value = 'class';
                  updateAnalysisType();
                  updateTeacherAnalysisData();
              }, 100);
          }
        },
        { section: 'analysis', description: 'View performing students',
          action: () => {
              navigateToSection('analysis');
              setTimeout(() => {
                  document.getElementById('analysis-type').value = 'class';
                  updateAnalysisType();
                  updateTeacherAnalysisData();
              }, 100);
          }
        }
    ];
    
    cards.forEach((card, index) => {
        if (index < cardActions.length) {
            const action = cardActions[index];
            
            // Add tooltip
            card.title = action.description;
            
            // Set click action
            if (action.action) {
                card.addEventListener('click', action.action);
            } else {
                card.addEventListener('click', () => navigateToSection(action.section));
            }
            
            // Apply styling
            makeCardClickable(card, action.section);
        }
    });
}

// Update admin card trends with dynamic data
function updateAdminCardTrends() {
    const trends = document.querySelectorAll('.card-trend');
    
    if (trends.length >= 5) {
        // Calculate trends based on actual data
        const totalStudents = sampleData.students.length;
        const lastMonthStudents = Math.max(0, totalStudents - Math.floor(Math.random() * 6));
        
        // Student trend
        trends[0].textContent = `+${totalStudents - lastMonthStudents} from last month`;
        trends[0].className = 'card-trend up';
        
        // Teacher trend
        const totalTeachers = sampleData.teachers.length;
        const lastTermTeachers = Math.max(0, totalTeachers - Math.floor(Math.random() * 2));
        trends[1].textContent = `+${totalTeachers - lastTermTeachers} from last term`;
        trends[1].className = 'card-trend up';
        
        // Fees trend
        const studentsOwing = calculateStudentsOwingFees();
        const lastWeekOwing = Math.min(studentsOwing + Math.floor(Math.random() * 4), totalStudents);
        trends[2].textContent = `-${lastWeekOwing - studentsOwing} from last week`;
        trends[2].className = studentsOwing < lastWeekOwing ? 'card-trend down' : 'card-trend up';
        
        // Underperforming trend
        const underperforming = calculateUnderperformingStudents();
        const lastTermUnderperforming = Math.min(underperforming + Math.floor(Math.random() * 3), totalStudents);
        trends[3].textContent = `-${lastTermUnderperforming - underperforming} from last term`;
        trends[3].className = underperforming < lastTermUnderperforming ? 'card-trend down' : 'card-trend up';
        
        // Performing trend
        const performing = calculatePerformingStudents();
        const lastTermPerforming = Math.max(0, performing - Math.floor(Math.random() * 3));
        trends[4].textContent = `+${performing - lastTermPerforming} from last term`;
        trends[4].className = 'card-trend up';
    }
}

// Helper functions for calculations
function calculateStudentsOwingFees() {
    let count = 0;
    sampleData.students.forEach(student => {
        const studentFees = sampleData.fees[student.id];
        if (studentFees) {
            const hasPendingFees = studentFees.some(fee => 
                fee.status === 'pending' || fee.status === 'overdue'
            );
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
    return sampleData.students.filter(student => student.gpa >= 3.5).length;
}

// Clear student-specific widgets for admin view
function clearStudentWidgets() {
    const recentResults = document.getElementById('recent-results-list');
    const examWidget = document.getElementById('exam-schedule-widget');
    const feeWidget = document.getElementById('fee-status-widget');
    
    if (recentResults) recentResults.innerHTML = '<p>School-wide analytics</p>';
    if (examWidget) examWidget.innerHTML = '<p>All exam schedules</p>';
    if (feeWidget) feeWidget.innerHTML = '<p>Overall fee status</p>';
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
    if (!timeStr) return 0;
    
    // Handle formats like "8:00-9:00" or "8:00 AM"
    const timePart = timeStr.split('-')[0].trim(); // Take first part if range
    const [time, modifier] = timePart.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    
    if (modifier === 'PM' && hours !== 12) hours += 12;
    if (modifier === 'AM' && hours === 12) hours = 0;
    
    return hours * 60 + (minutes || 0);
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



function initializeAttendanceSection() {
    const attendanceSection = document.getElementById('attendance');
    if (!attendanceSection) return;
    
    // Set current date
    const today = new Date().toISOString().split('T')[0];
    const attendanceDate = document.getElementById('attendance-date');
    if (attendanceDate) {
        attendanceDate.value = today;
    }
    
    // Initialize teacher attendance if user is teacher
    if (appState.currentUser && appState.currentUser.type === 'teacher') {
        updateTeacherAttendance();
    }
    
    // Setup event listeners
    setupAttendanceEventListeners();
}


function setupAttendanceEventListeners() {
    // Class change listener
    const attendanceClass = document.getElementById('attendance-class');
    if (attendanceClass) {
        attendanceClass.addEventListener('change', updateAttendanceTable);
    }
    
    // Quick mark all present
    const quickMarkAll = document.getElementById('quick-mark-all');
    if (quickMarkAll) {
        quickMarkAll.addEventListener('click', quickMarkAllPresent);
    }
    
    // Bulk actions
    const applyBulkAction = document.getElementById('apply-bulk-action');
    if (applyBulkAction) {
        applyBulkAction.addEventListener('click', applyBulkAttendanceAction);
    }
    
    // Mark attendance
    const markAttendanceBtn = document.getElementById('mark-attendance');
    if (markAttendanceBtn) {
        markAttendanceBtn.addEventListener('click', saveAttendance);
    }
    
    // Select all checkbox
    const selectAllAttendance = document.getElementById('select-all-attendance');
    if (selectAllAttendance) {
        selectAllAttendance.addEventListener('change', function() {
            const checkboxes = document.querySelectorAll('.student-attendance-checkbox');
            checkboxes.forEach(cb => {
                cb.checked = this.checked;
            });
        });
    }
    
    // Date change
    const attendanceDate = document.getElementById('attendance-date');
    if (attendanceDate) {
        attendanceDate.addEventListener('change', updateAttendanceTable);
    }
}

function updateTeacherAttendance() {
    const teacher = sampleData.teachers.find(t => t.id === appState.currentUser.id);
    if (!teacher) return;

    const assignedClasses = getTeacherAssignedClasses(teacher.name);
    
    // Update class dropdowns
    const attendanceClass = document.getElementById('attendance-class');
    const overviewClass = document.getElementById('overview-class');
    
    if (attendanceClass) {
        attendanceClass.innerHTML = assignedClasses.map(className => 
            `<option value="${className}">${className}</option>`
        ).join('');
    }
    
    if (overviewClass) {
        overviewClass.innerHTML = assignedClasses.map(className => 
            `<option value="${className}">${className}</option>`
        ).join('');
    }
    
    // Load initial attendance data
    updateAttendanceTable();
}




function updateTeacherDashboard() {
    console.log('Updating teacher dashboard...');
    
    const teacher = sampleData.teachers.find(t => t.id === appState.currentUser.id);
    if (!teacher) return;
    
    // Update teacher info
    document.getElementById('student-name').textContent = teacher.name;
    document.getElementById('student-id-display').textContent = teacher.id;
    document.getElementById('student-class').textContent = teacher.subject + ' Teacher';
    
    // Update dashboard cards with TEACHER information
    const myStudents = sampleData.students.filter(s => 
        sampleData.subjectAllocation.some(sa => 
            sa.teacher === teacher.name && sa.class === s.class
        )
    ).length;
    
    document.getElementById('current-gpa').textContent = myStudents;
    document.querySelector('.card:nth-child(1) h3').textContent = 'My Students';
    
    // Calculate average class attendance for teacher's classes
    const teacherClasses = [...new Set(sampleData.subjectAllocation
        .filter(sa => sa.teacher === teacher.name)
        .map(sa => sa.class)
    )];
    
    const avgAttendance = calculateTeacherClassAttendance(teacherClasses);
    document.getElementById('attendance').textContent = avgAttendance + '%';
    document.querySelector('.card:nth-child(2) h3').textContent = 'Class Attendance';
    
    // Classes today for this teacher
    const classesToday = getTeacherClassesToday(teacher.name);
    document.getElementById('upcoming-tests').textContent = classesToday;
    document.querySelector('.card:nth-child(3) h3').textContent = 'Classes Today';
    
    // Pending assignments to grade
    const pendingAssignments = 3; // This would come from real data
    document.getElementById('library-books').textContent = pendingAssignments;
    document.querySelector('.card:nth-child(4) h3').textContent = 'Assignments to Grade';
    
    // Hide the 5th card for teachers
    const fifthCard = document.querySelector('.card:nth-child(5)');
    if (fifthCard) {
        fifthCard.style.display = 'none';
    }
    
    updateTeacherCardTrends(teacher);
    updateTeacherWidgets(teacher);
}

// ========== ADD THESE HELPER FUNCTIONS FOR TEACHER DASHBOARD ==========

function calculateTeacherClassAttendance(teacherClasses) {
    let totalAttendance = 0;
    let classCount = 0;
    
    teacherClasses.forEach(className => {
        const classStudents = sampleData.students.filter(s => s.class === className);
        if (classStudents.length > 0) {
            const classAttendance = classStudents.reduce((sum, student) => sum + student.attendance, 0) / classStudents.length;
            totalAttendance += classAttendance;
            classCount++;
        }
    });
    
    return classCount > 0 ? Math.round(totalAttendance / classCount) : 0;
}

function getTeacherClassesToday(teacherName) {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    let classCount = 0;
    
    // Get all classes this teacher teaches
    const teacherClasses = [...new Set(sampleData.subjectAllocation
        .filter(sa => sa.teacher === teacherName)
        .map(sa => sa.class)
    )];
    
    // Count periods for today
    teacherClasses.forEach(className => {
        const timetable = sampleData.timetable[className];
        if (timetable && timetable[today]) {
            classCount += timetable[today].filter(period => period.teacher === teacherName).length;
        }
    });
    
    return classCount;
}

function updateTeacherCardTrends(teacher) {
    const trends = document.querySelectorAll('.card-trend');
    
    if (trends[0]) {
        trends[0].textContent = '+2 from last term';
        trends[0].className = 'card-trend up';
    }
    
    if (trends[1]) {
        const teacherClasses = [...new Set(sampleData.subjectAllocation
            .filter(sa => sa.teacher === teacher.name)
            .map(sa => sa.class)
        )];
        const avgAttendance = calculateTeacherClassAttendance(teacherClasses);
        trends[1].textContent = avgAttendance >= 90 ? 'Excellent' : 'Good';
        trends[1].className = `card-trend ${avgAttendance >= 90 ? 'up' : ''}`;
    }
    
    if (trends[2]) {
        trends[2].textContent = 'Next: Period 1';
        trends[2].className = 'card-trend';
    }
    
    if (trends[3]) {
        trends[3].textContent = 'Due tomorrow';
        trends[3].className = 'card-trend down';
    }
}

function updateTeacherWidgets(teacher) {
    updateTeacherUpcomingClassWidget(teacher);
    updateTeacherScheduleWidget(teacher);
    updateTeacherTodoWidget(teacher);
    
    // Remove student-specific widgets
    removeTeacherUnnecessaryWidgets();
}

function updateTeacherUpcomingClassWidget(teacher) {
    const upcomingClassWidget = document.getElementById('upcoming-class-widget');
    if (!upcomingClassWidget) return;
    
    const upcomingClass = getTeacherUpcomingClass(teacher.name);
    
    if (upcomingClass) {
        const statusClass = upcomingClass.status === 'ongoing' ? 'ongoing' : 'upcoming';
        const statusText = upcomingClass.status === 'ongoing' ? 'Now' : 'Next';
        
        upcomingClassWidget.innerHTML = `
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
                    <div class="class-info">
                        <i class="fas fa-users"></i>
                        Class: ${upcomingClass.class}
                    </div>
                    <div class="class-room">
                        <i class="fas fa-door-open"></i>
                        Room: ${upcomingClass.room || 'Main Hall'}
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
        upcomingClassWidget.innerHTML = `
            <div class="no-upcoming-class">
                <p><i class="fas fa-calendar-times"></i></p>
                <p>No more classes today</p>
            </div>
        `;
    }
}

function updateClassAnalysisDisplay(stats, students) {
    const classView = document.getElementById('class-analysis-view');
    if (!classView) return;
    
    classView.innerHTML = `
        <div class="class-analysis-header">
            <h3>Class Analysis: ${stats.className}</h3>
            <div class="class-overview-stats">
                <div class="class-stat">
                    <div class="stat-value">${stats.totalStudents}</div>
                    <div class="stat-label">Total Students</div>
                </div>
                <div class="class-stat">
                    <div class="stat-value">${stats.averageGPA}</div>
                    <div class="stat-label">Average GPA</div>
                </div>
                <div class="class-stat">
                    <div class="stat-value">${stats.averageAttendance}%</div>
                    <div class="stat-label">Average Attendance</div>
                </div>
            </div>
        </div>
        
        <div class="class-analysis-content">
            <div class="analysis-section">
                <h4>Subject Performance</h4>
                <div class="subject-performance-grid">
                    <div class="subject-performance">
                        <span class="subject-name">Mathematics</span>
                        <span class="subject-score">${stats.subjectAverages.math ? stats.subjectAverages.math.toFixed(1) : 'N/A'}/100</span>
                    </div>
                    <div class="subject-performance">
                        <span class="subject-name">Science</span>
                        <span class="subject-score">${stats.subjectAverages.science ? stats.subjectAverages.science.toFixed(1) : 'N/A'}/100</span>
                    </div>
                    <div class="subject-performance">
                        <span class="subject-name">English</span>
                        <span class="subject-score">${stats.subjectAverages.english ? stats.subjectAverages.english.toFixed(1) : 'N/A'}/100</span>
                    </div>
                    <div class="subject-performance">
                        <span class="subject-name">History</span>
                        <span class="subject-score">${stats.subjectAverages.history ? stats.subjectAverages.history.toFixed(1) : 'N/A'}/100</span>
                    </div>
                </div>
            </div>
            
            <div class="analysis-columns">
                <div class="analysis-column">
                    <h4>Top Performers</h4>
                    <div class="student-ranking">
                        ${stats.topPerformers.map((student, index) => `
                            <div class="ranking-item" data-student-id="${student.id}">
                                <span class="rank">${index + 1}</span>
                                <span class="student-name">${student.name}</span>
                                <span class="student-gpa">${student.gpa}</span>
                            </div>
                        `).join('')}
                        ${stats.topPerformers.length === 0 ? '<p>No top performers found</p>' : ''}
                    </div>
                </div>
                
                <div class="analysis-column">
                    <h4>Need Attention</h4>
                    <div class="student-ranking">
                        ${stats.needAttention.map((student, index) => `
                            <div class="ranking-item warning" data-student-id="${student.id}">
                                <span class="rank">${index + 1}</span>
                                <span class="student-name">${student.name}</span>
                                <span class="student-gpa">${student.gpa}</span>
                            </div>
                        `).join('')}
                        ${stats.needAttention.length === 0 ? '<p>All students performing well</p>' : ''}
                    </div>
                </div>
            </div>
            
            <div class="analysis-section">
                <h4>Performance Distribution</h4>
                <div class="performance-distribution">
                    <div class="distribution-bar">
                        <div class="bar-segment excellent" style="width: ${(students.filter(s => s.gpa >= 3.5).length / students.length) * 100}%">
                            <span>Excellent (A)</span>
                        </div>
                        <div class="bar-segment good" style="width: ${(students.filter(s => s.gpa >= 3.0 && s.gpa < 3.5).length / students.length) * 100}%">
                            <span>Good (B)</span>
                        </div>
                        <div class="bar-segment average" style="width: ${(students.filter(s => s.gpa >= 2.0 && s.gpa < 3.0).length / students.length) * 100}%">
                            <span>Average (C)</span>
                        </div>
                        <div class="bar-segment poor" style="width: ${(students.filter(s => s.gpa < 2.0).length / students.length) * 100}%">
                            <span>Needs Help (D/F)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Make ranking items clickable
    makeRankingClickable();
}



function getTeacherUpcomingClass(teacherName) {
    const now = new Date();
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const currentTime = now.getHours() * 60 + now.getMinutes(); // Convert to minutes
    
    // Get all classes this teacher teaches
    const teacherClasses = [...new Set(sampleData.subjectAllocation
        .filter(sa => sa.teacher === teacherName)
        .map(sa => sa.class)
    )];
    
    let upcomingClass = null;
    
    // Check each class's timetable for this teacher
    for (const className of teacherClasses) {
        const timetable = sampleData.timetable[className];
        if (!timetable) continue;
        
        const todayTimetable = timetable[currentDay];
        if (!todayTimetable) continue;
        
        // Find teacher's periods for today
        const teacherPeriods = todayTimetable.filter(period => period.teacher === teacherName);
        
        for (const period of teacherPeriods) {
            const [startTime, endTime] = period.time.split('-');
            const startMinutes = convertTimeToMinutes(startTime);
            
            // If class hasn't started yet or is currently running
            if (startMinutes >= currentTime || (startMinutes <= currentTime && convertTimeToMinutes(endTime) > currentTime)) {
                upcomingClass = {
                    ...period,
                    class: className,
                    room: getClassroom(className, period.subject),
                    status: startMinutes > currentTime ? 'upcoming' : 'ongoing',
                    timeUntil: startMinutes - currentTime
                };
                break;
            }
        }
        
        if (upcomingClass) break;
    }
    
    return upcomingClass;
}


function getClassroom(className, subject) {
    // Simple classroom assignment logic
    const roomMap = {
        '10A': 'Room 101',
        '10B': 'Room 102', 
        '11A': 'Room 201',
        '11B': 'Room 202'
    };
    return roomMap[className] || 'Main Hall';
}

function updateTeacherScheduleWidget(teacher) {
    const examScheduleWidget = document.getElementById('exam-schedule-widget');
    if (!examScheduleWidget) return;
    
    const today = new Date();
    const todayString = today.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    
    // Get today's schedule for this teacher
    const teacherClasses = [...new Set(sampleData.subjectAllocation
        .filter(sa => sa.teacher === teacher.name)
        .map(sa => sa.class)
    )];
    
    let todaysSchedule = [];
    
    teacherClasses.forEach(className => {
        const timetable = sampleData.timetable[className];
        if (timetable && timetable[todayString]) {
            const teacherPeriods = timetable[todayString].filter(period => period.teacher === teacher.name);
            todaysSchedule.push(...teacherPeriods.map(period => ({
                ...period,
                class: className
            })));
        }
    });
    
    // Sort by time
    todaysSchedule.sort((a, b) => {
        const aTime = convertTimeToMinutes(a.time.split('-')[0]);
        const bTime = convertTimeToMinutes(b.time.split('-')[0]);
        return aTime - bTime;
    });
    
    if (todaysSchedule.length > 0) {
        examScheduleWidget.innerHTML = `
            <div class="teacher-schedule-widget">
                <h4>Today's Schedule</h4>
                ${todaysSchedule.map(period => `
                    <div class="schedule-item ${getScheduleItemStatus(period)}">
                        <div class="schedule-time">${period.time}</div>
                        <div class="schedule-details">
                            <div class="schedule-subject">${period.subject}</div>
                            <div class="schedule-class">${period.class}</div>
                        </div>
                        <div class="schedule-room">${getClassroom(period.class, period.subject)}</div>
                    </div>
                `).join('')}
            </div>
        `;
    } else {
        examScheduleWidget.innerHTML = `
            <div class="no-schedule-today">
                <p>No classes scheduled for today</p>
            </div>
        `;
    }
}

function getScheduleItemStatus(period) {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    const [startTime, endTime] = period.time.split('-');
    const startMinutes = convertTimeToMinutes(startTime);
    const endMinutes = convertTimeToMinutes(endTime);
    
    if (currentTime >= startMinutes && currentTime <= endMinutes) {
        return 'ongoing';
    } else if (currentTime < startMinutes) {
        return 'upcoming';
    } else {
        return 'completed';
    }
}


function updateTeacherTodoWidget(teacher) {
    const recentResultsList = document.getElementById('recent-results-list');
    if (!recentResultsList) return;
    
    const todoItems = [
        { task: 'Grade Mathematics assignments', due: 'Today', priority: 'high' },
        { task: 'Prepare Science lab materials', due: 'Tomorrow', priority: 'medium' },
        { task: 'Update student progress reports', due: 'This week', priority: 'medium' },
        { task: 'Plan next week lessons', due: 'Friday', priority: 'low' }
    ];
    
    recentResultsList.innerHTML = `
        <div class="teacher-todo-list">
            <h4>My To-Do List</h4>
            ${todoItems.map(item => `
                <div class="todo-item ${item.priority}">
                    <div class="todo-checkbox">
                        <input type="checkbox" id="todo-${todoItems.indexOf(item)}">
                    </div>
                    <div class="todo-content">
                        <div class="todo-task">${item.task}</div>
                        <div class="todo-due">Due: ${item.due}</div>
                    </div>
                    <div class="todo-priority ${item.priority}">
                        ${item.priority}
                    </div>
                </div>
            `).join('')}
            <div class="todo-actions">
                <button class="btn-secondary" onclick="addTodoItem()">
                    <i class="fas fa-plus"></i> Add Item
                </button>
            </div>
        </div>
    `;
}

function removeTeacherUnnecessaryWidgets() {
    // Remove fee status widget for teachers
    const feeStatusWidget = document.getElementById('fee-status-widget');
    if (feeStatusWidget) {
        feeStatusWidget.style.display = 'none';
    }
    
    // Remove recent results widget for teachers
    const recentResultsList = document.getElementById('recent-results-list');
    if (recentResultsList) {
        recentResultsList.innerHTML = '<p>Teacher-specific content will be displayed here</p>';
    }
} // <-- THIS WAS THE MISSING CLOSING BRACE

function addTodoItem() {
    const task = prompt('Enter new task:');
    if (task) {
        showNotification('Task added to your to-do list', 'success');
        // In a real app, this would add to the teacher's todo list
    }
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
    // Check if user is admin
    if (appState.currentUser?.type !== 'admin') {
        showNotification('Only administrators can add new students', 'error');
        return;
    }
    document.getElementById('student-modal').style.display = 'block';
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
    
    // Show/hide add student button based on user type
    const addStudentBtn = document.getElementById('add-student-btn');
    if (addStudentBtn) {
        addStudentBtn.style.display = appState.currentUser?.type === 'admin' ? 'block' : 'none';
    }
    
    // Load students based on user type
    if (appState.currentUser?.type === 'admin') {
        // Admin gets the enhanced view with tabs
        initializeStudentManagement();
    } else {
        // Other users get basic student list
        const sampleStudents = generateSampleStudentsWithNames();
        displayStudentsByGhanaClass(sampleStudents);
    }
}
function filterStudents() {
    const searchTerm = document.getElementById('student-search').value.toLowerCase();
    const classFilter = document.getElementById('class-filter').value;
    const statusFilter = document.getElementById('status-filter').value;
    
    const sampleStudents = generateSampleStudentsWithNames();
    const filteredStudents = sampleStudents.filter(student => {
        const matchesSearch = student.fullName.toLowerCase().includes(searchTerm) || 
                             student.id.toLowerCase().includes(searchTerm);
        const matchesClass = classFilter === 'all' || student.className.toLowerCase().replace(' ', '') === classFilter;
        const matchesStatus = statusFilter === 'all' || student.status === statusFilter;
        
        return matchesSearch && matchesClass && matchesStatus;
    });
    
    displayStudentsByGhanaClass(filteredStudents);
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
    
    // Show/hide add teacher button based on user type
    const addTeacherBtn = document.getElementById('add-teacher-btn');
    if (addTeacherBtn) {
        addTeacherBtn.style.display = appState.currentUser?.type === 'admin' ? 'block' : 'none';
    }
    
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
                ${appState.currentUser?.type === 'admin' ? 
                    `<button class="btn-secondary" onclick="editTeacher('${teacher.id}')">Edit</button>` : 
                    ''}
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



// ========== TEACHER RESULTS MANAGEMENT ==========

function updateTeacherResults() {
    const teacher = sampleData.teachers.find(t => t.id === appState.currentUser.id);
    if (!teacher) return;

    const assignedClasses = getTeacherAssignedClasses(teacher.name);
    
    // Update class dropdown
    const classSelect = document.getElementById('result-class');
    classSelect.innerHTML = '<option value="all">All Classes</option>' + 
        assignedClasses.map(className => `<option value="${className}">${className}</option>`).join('');
    
    updateTeacherResultsTable();
}
// Helper functions for teacher results
function getTeacherAssignedClasses(teacherName) {
    const allocations = sampleData.subjectAllocation.filter(sa => sa.teacher === teacherName);
    return [...new Set(allocations.map(sa => sa.class))];
}

function getTeacherSubjects(teacherName) {
    const allocations = sampleData.subjectAllocation.filter(sa => sa.teacher === teacherName);
    return [...new Set(allocations.map(sa => sa.subject))];
}

function getStudentCount(classes) {
    return sampleData.students.filter(s => classes.includes(s.class)).length;
}

function getResultsEnteredCount(teacherName) {
    // This would count results entered by this teacher
    // For demo, return a mock count
    return 45;
}

function getAverageScore(teacherName) {
    // This would calculate average score for teacher's subjects
    // For demo, return a mock average
    return 78;
}

function getPendingResultsCount(teacherName) {
    // This would count pending results
    // For demo, return a mock count
    return 12;
}

// Enhanced results table with student names and progress links
function updateTeacherResultsTable() {
    const tbody = document.querySelector('#results-table tbody');
    const selectedClass = document.getElementById('result-class').value;
    const year = document.getElementById('result-year').value;
    const term = document.getElementById('result-term').value;
    
    // Get students from teacher's classes
    let students = sampleData.students.filter(s => {
        const teacherClasses = getTeacherAssignedClasses(appState.currentUser.name);
        return teacherClasses.includes(s.class) && 
               (selectedClass === 'all' || s.class === selectedClass);
    });

    tbody.innerHTML = students.map(student => {
        const yearKey = `year${year}`;
        const results = sampleData.results[yearKey] && sampleData.results[yearKey][term];
        const studentResult = results ? results.find(r => r.studentId === student.id) : null;
        
        return `
            <tr class="student-row" data-student-id="${student.id}">
                <td><input type="checkbox" class="student-checkbox" value="${student.id}"></td>
                <td>${student.id}</td>
                <td class="student-name">${student.name}</td>
                <td>
                    <input type="number" class="score-input" data-subject="math" 
                           value="${studentResult ? studentResult.math : ''}" 
                           min="0" max="100">
                </td>
                <td>
                    <input type="number" class="score-input" data-subject="science" 
                           value="${studentResult ? studentResult.science : ''}" 
                           min="0" max="100">
                </td>
                <td>
                    <input type="number" class="score-input" data-subject="english" 
                           value="${studentResult ? studentResult.english : ''}" 
                           min="0" max="100">
                </td>
                <td>
                    <input type="number" class="score-input" data-subject="history" 
                           value="${studentResult ? studentResult.history : ''}" 
                           min="0" max="100">
                </td>
                <td class="total-score">${studentResult ? studentResult.total : '-'}</td>
                <td class="student-grade">${studentResult ? studentResult.grade : '-'}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-primary small" onclick="saveStudentResults('${student.id}')">
                            <i class="fas fa-save"></i> Save
                        </button>
                        <a href="#" class="progress-link" onclick="analyzeStudent('${student.id}', event)">
                            <i class="fas fa-chart-line"></i> Progress
                        </a>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}


// Navigate to analysis for a specific student
function analyzeStudent(studentId, event) {
    if (event) event.preventDefault();
    
    // Store the student to analyze
    appState.analyzingStudent = studentId;
    
    // Navigate to analysis section
    navigateToSection('analysis');
    
    // Switch to student analysis view
    setTimeout(() => {
        document.getElementById('analysis-type').value = 'student';
        document.getElementById('analysis-student').value = studentId;
        updateAnalysisType();
        updateTeacherAnalysisData();
    }, 100);
}

// Analyze multiple selected students
function analyzeSelectedStudents() {
    const selectedStudents = Array.from(document.querySelectorAll('.student-checkbox:checked'))
        .map(cb => cb.value);
    
    if (selectedStudents.length === 0) {
        showNotification('Please select at least one student to analyze', 'warning');
        return;
    }
    
    appState.analyzingStudents = selectedStudents;
    navigateToSection('analysis');
    
    setTimeout(() => {
        if (selectedStudents.length === 1) {
            document.getElementById('analysis-type').value = 'student';
            document.getElementById('analysis-student').value = selectedStudents[0];
        } else {
            document.getElementById('analysis-type').value = 'comparison';
            selectedStudents.forEach(studentId => {
                const option = document.querySelector(`#compare-students option[value="${studentId}"]`);
                if (option) option.selected = true;
            });
        }
        updateAnalysisType();
        updateTeacherAnalysisData();
    }, 100);
}


// Update analysis type view
function updateAnalysisType() {
    const type = document.getElementById('analysis-type').value;
    
    // Hide all controls
    document.querySelectorAll('.class-controls, .student-controls, .comparison-controls').forEach(el => {
        el.style.display = 'none';
        el.classList.remove('active');
    });
    
    // Show relevant controls
    const activeControls = document.querySelector(`.${type}-controls`);
    if (activeControls) {
        activeControls.style.display = 'block';
        activeControls.classList.add('active');
    }
    
    // Show relevant view
    const studentView = document.getElementById('student-analysis-view');
    const classView = document.getElementById('class-analysis-view');
    
    if (studentView && classView) {
        studentView.style.display = type === 'student' ? 'block' : 'none';
        classView.style.display = type !== 'student' ? 'block' : 'none';
    }
    
    // Update analysis data when type changes
    updateTeacherAnalysisData();
}

// ========== MAKE FUNCTIONS GLOBAL ==========

// Add these to make the functions available globally
window.updateClassAnalysisDisplay = updateClassAnalysisDisplay;
window.updateStudentAnalysisView = updateStudentAnalysisView;
window.updateStudentComparisonView = updateStudentComparisonView;
window.updateClassAnalysisView = updateClassAnalysisView;
window.updateTeacherAnalysisData = updateTeacherAnalysisData;
window.updateAnalysisType = updateAnalysisType;



function updateStudentScore(studentId, subject, score) {
    // Update the total and grade in real-time
    const row = document.querySelector(`tr[data-student-id="${studentId}"]`);
    if (!row) return;

    const inputs = row.querySelectorAll('.score-input');
    let total = 0;
    let allScoresEntered = true;

    inputs.forEach(input => {
        const value = parseInt(input.value) || 0;
        total += value;
        if (!input.value) allScoresEntered = false;
    });

    // Update total
    const totalCell = row.querySelector('.total-score');
    totalCell.textContent = allScoresEntered ? total : '-';

    // Update grade
    const gradeCell = row.querySelector('.student-grade');
    gradeCell.textContent = allScoresEntered ? calculateGrade(total) : '-';
}

function calculateGrade(total) {
    const percentage = (total / 400) * 100;
    if (percentage >= 90) return 'A';
    if (percentage >= 80) return 'B';
    if (percentage >= 70) return 'C';
    if (percentage >= 60) return 'D';
    return 'F';
}

function saveStudentResults(studentId) {
    const row = document.querySelector(`tr[data-student-id="${studentId}"]`);
    if (!row) return;

    const inputs = row.querySelectorAll('.score-input');
    const scores = {};
    let allScoresEntered = true;

    inputs.forEach(input => {
        const subject = input.getAttribute('data-subject');
        const score = parseInt(input.value);
        if (isNaN(score)) {
            allScoresEntered = false;
            return;
        }
        scores[subject] = score;
    });

    if (!allScoresEntered) {
        showNotification('Please enter all scores before saving', 'error');
        return;
    }

    const year = document.getElementById('teacher-result-year').value;
    const term = document.getElementById('teacher-result-term').value;
    const student = sampleData.students.find(s => s.id === studentId);

    // Calculate total and grade
    const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
    const grade = calculateGrade(total);

    // Save to results data
    const yearKey = `year${year}`;
    if (!sampleData.results[yearKey]) {
        sampleData.results[yearKey] = {};
    }
    if (!sampleData.results[yearKey][term]) {
        sampleData.results[yearKey][term] = [];
    }

    // Remove existing result if any
    sampleData.results[yearKey][term] = sampleData.results[yearKey][term].filter(
        r => r.studentId !== studentId
    );

    // Add new result
    sampleData.results[yearKey][term].push({
        studentId: studentId,
        name: student.name,
        math: scores.math,
        science: scores.science,
        english: scores.english,
        history: scores.history,
        total: total,
        grade: grade
    });

    showNotification(`Results saved for ${student.name}`, 'success');
}

function showAddResultModal() {
    const teacher = sampleData.teachers.find(t => t.id === appState.currentUser.id);
    if (!teacher) return;

    const assignedClasses = getTeacherAssignedClasses(teacher.name);
    
    const modalHTML = `
        <div class="modal" id="add-result-modal" style="display: block;">
            <div class="modal-content">
                <span class="close" onclick="closeAddResultModal()">&times;</span>
                <h3>Add New Results</h3>
                <form id="add-result-form">
                    <div class="form-group">
                        <label for="new-result-class">Class</label>
                        <select id="new-result-class" required>
                            <option value="">Select Class</option>
                            ${assignedClasses.map(className => 
                                `<option value="${className}">${className}</option>`
                            ).join('')}
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="new-result-student">Student</label>
                        <select id="new-result-student" required>
                            <option value="">Select Student</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="new-result-year">Academic Year</label>
                        <select id="new-result-year" required>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="new-result-term">Term</label>
                        <select id="new-result-term" required>
                            <option value="term1">Term 1</option>
                            <option value="term2">Term 2</option>
                            <option value="term3">Term 3</option>
                        </select>
                    </div>
                    <div class="scores-grid">
                        <div class="form-group">
                            <label for="new-result-math">Mathematics</label>
                            <input type="number" id="new-result-math" min="0" max="100" required>
                        </div>
                        <div class="form-group">
                            <label for="new-result-science">Science</label>
                            <input type="number" id="new-result-science" min="0" max="100" required>
                        </div>
                        <div class="form-group">
                            <label for="new-result-english">English</label>
                            <input type="number" id="new-result-english" min="0" max="100" required>
                        </div>
                        <div class="form-group">
                            <label for="new-result-history">History</label>
                            <input type="number" id="new-result-history" min="0" max="100" required>
                        </div>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="btn-primary">Add Results</button>
                        <button type="button" class="btn-secondary" onclick="closeAddResultModal()">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Add event listeners
    document.getElementById('new-result-class').addEventListener('change', function() {
        updateStudentDropdown(this.value);
    });

    document.getElementById('add-result-form').addEventListener('submit', function(e) {
        e.preventDefault();
        addNewResults();
    });
}

function updateStudentDropdown(className) {
    const studentSelect = document.getElementById('new-result-student');
    const students = sampleData.students.filter(s => s.class === className);
    
    studentSelect.innerHTML = '<option value="">Select Student</option>';
    students.forEach(student => {
        const option = document.createElement('option');
        option.value = student.id;
        option.textContent = `${student.name} (${student.id})`;
        studentSelect.appendChild(option);
    });
}

function addNewResults() {
    const classVal = document.getElementById('new-result-class').value;
    const studentId = document.getElementById('new-result-student').value;
    const year = document.getElementById('new-result-year').value;
    const term = document.getElementById('new-result-term').value;
    const math = parseInt(document.getElementById('new-result-math').value);
    const science = parseInt(document.getElementById('new-result-science').value);
    const english = parseInt(document.getElementById('new-result-english').value);
    const history = parseInt(document.getElementById('new-result-history').value);

    const student = sampleData.students.find(s => s.id === studentId);
    const total = math + science + english + history;
    const grade = calculateGrade(total);

    // Save to results data
    const yearKey = `year${year}`;
    if (!sampleData.results[yearKey]) {
        sampleData.results[yearKey] = {};
    }
    if (!sampleData.results[yearKey][term]) {
        sampleData.results[yearKey][term] = [];
    }

    // Remove existing result if any
    sampleData.results[yearKey][term] = sampleData.results[yearKey][term].filter(
        r => r.studentId !== studentId
    );

    // Add new result
    sampleData.results[yearKey][term].push({
        studentId: studentId,
        name: student.name,
        math: math,
        science: science,
        english: english,
        history: history,
        total: total,
        grade: grade
    });

    closeAddResultModal();
    updateTeacherResultsTable();
    showNotification(`Results added for ${student.name}`, 'success');
}

function closeAddResultModal() {
    const modal = document.getElementById('add-result-modal');
    if (modal) {
        modal.remove();
    }
}

function exportTeacherResults() {
    const teacher = sampleData.teachers.find(t => t.id === appState.currentUser.id);
    const selectedClass = document.getElementById('teacher-result-class').value;
    const year = document.getElementById('teacher-result-year').value;
    const term = document.getElementById('teacher-result-term').value;

    let students = sampleData.students.filter(s => {
        const teacherClasses = getTeacherAssignedClasses(teacher.name);
        return teacherClasses.includes(s.class) && 
               (selectedClass === 'all' || s.class === selectedClass);
    });

    const yearKey = `year${year}`;
    const results = sampleData.results[yearKey] && sampleData.results[yearKey][term];

    const data = students.map(student => {
        const result = results ? results.find(r => r.studentId === student.id) : null;
        return {
            'Student ID': student.id,
            'Name': student.name,
            'Class': student.class,
            'Mathematics': result ? result.math : '',
            'Science': result ? result.science : '',
            'English': result ? result.english : '',
            'History': result ? result.history : '',
            'Total': result ? result.total : '',
            'Grade': result ? result.grade : ''
        };
    });

    exportToCSV(data, `results_${selectedClass}_${term}_${year}.csv`);
    showNotification('Results exported successfully', 'success');
}

function filterTeacherResults() {
    const searchTerm = document.getElementById('teacher-student-search').value.toLowerCase();
    const rows = document.querySelectorAll('#teacher-results-table tbody tr');

    rows.forEach(row => {
        const studentName = row.cells[1].textContent.toLowerCase();
        const studentId = row.cells[0].textContent.toLowerCase();
        const shouldShow = studentName.includes(searchTerm) || studentId.includes(searchTerm);
        row.style.display = shouldShow ? '' : 'none';
    });
}

function enableBulkEdit() {
    const inputs = document.querySelectorAll('.score-input');
    inputs.forEach(input => {
        input.disabled = false;
        input.style.backgroundColor = '#fff9c4';
    });
    
    showNotification('Bulk edit mode enabled. You can now edit multiple scores.', 'info');
}

function viewStudentProgress(studentId) {
    const student = sampleData.students.find(s => s.id === studentId);
    if (student) {
        // Navigate to analysis section with student pre-selected
        navigateToSection('analysis');
        // In a real app, you would pre-select the student in the analysis dropdown
        setTimeout(() => {
            const studentSelect = document.getElementById('analysis-student');
            if (studentSelect) {
                studentSelect.value = studentId;
                updateAnalysis();
            }
        }, 500);
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




// New function for teacher analysis
function updateTeacherAnalysis() {
    const teacher = sampleData.teachers.find(t => t.id === appState.currentUser.id);
    if (!teacher) return;

    const assignedClasses = getTeacherAssignedClasses(teacher.name);
    
    // Update class dropdowns
    const analysisClass = document.getElementById('analysis-class');
    const resultClass = document.getElementById('result-class');
    
    if (analysisClass) {
        analysisClass.innerHTML = assignedClasses.map(className => 
            `<option value="${className}">${className}</option>`
        ).join('');
    }
    
    if (resultClass) {
        resultClass.innerHTML = '<option value="all">All Classes</option>' + 
            assignedClasses.map(className => `<option value="${className}">${className}</option>`).join('');
    }

      // Populate student dropdowns
    populateStudentDropdowns(assignedClasses);
    
    // Initialize analysis type
    updateAnalysisType();
    
    // Generate initial analysis
    updateTeacherAnalysisData();
}

function populateStudentDropdowns(assignedClasses) {
    const students = sampleData.students.filter(s => assignedClasses.includes(s.class));
    
    // Analysis student dropdown
    const analysisStudent = document.getElementById('analysis-student');
    if (analysisStudent) {
        analysisStudent.innerHTML = '<option value="">Select a student</option>' +
            students.map(student => 
                `<option value="${student.id}">${student.name} (${student.class})</option>`
            ).join('');
    }
    
    // Compare students dropdown
    const compareStudents = document.getElementById('compare-students');
    if (compareStudents) {
        compareStudents.innerHTML = students.map(student => 
            `<option value="${student.id}">${student.name} (${student.class})</option>`
        ).join('');
    }
}

// Enhanced teacher analysis data function
function updateTeacherAnalysisData() {
    const type = document.getElementById('analysis-type').value;
    
    if (type === 'student') {
        const studentId = document.getElementById('analysis-student').value;
        updateStudentAnalysisView(studentId);
    } else if (type === 'comparison') {
        const studentIds = Array.from(document.getElementById('compare-students').selectedOptions)
            .map(opt => opt.value);
        updateStudentComparisonView(studentIds);
    } else {
        updateClassAnalysisView();
    }
}


function updateStudentAnalysisView(studentId) {
    const student = sampleData.students.find(s => s.id === studentId);
    if (!student) return;
    
    const studentView = document.getElementById('student-analysis-view');
    if (!studentView) return;
    
    // Get student's results and analysis data
    const analysis = sampleData.analysis[studentId];
    const yearKey = 'year2024';
    const latestResults = sampleData.results[yearKey] && 
                         sampleData.results[yearKey]['term3'] && 
                         sampleData.results[yearKey]['term3'].find(r => r.studentId === studentId);
    
    studentView.innerHTML = `
        <div class="student-analysis-header">
            <h3>Student Analysis: ${student.name}</h3>
            <div class="student-basic-info">
                <span>ID: <strong id="analyzed-student-id">${student.id}</strong></span>
                <span>Class: <strong id="analyzed-student-class">${student.class}</strong></span>
                <span>Overall Grade: <strong id="analyzed-student-grade">${latestResults ? latestResults.grade : 'N/A'}</strong></span>
            </div>
        </div>
        
        <div class="student-performance-grid">
            ${analysis ? `
                <div class="performance-card">
                    <h4>Performance Trends</h4>
                    <div class="trend-cards">
                        <div class="trend-card">
                            <div class="trend-value ${analysis['term1-term2'].overall.includes('+') ? 'positive' : 'negative'}">
                                ${analysis['term1-term2'].overall}
                            </div>
                            <div class="trend-label">Term 1-2 Change</div>
                        </div>
                        <div class="trend-card">
                            <div class="trend-value ${analysis['term2-term3'].overall.includes('+') ? 'positive' : 'negative'}">
                                ${analysis['term2-term3'].overall}
                            </div>
                            <div class="trend-label">Term 2-3 Change</div>
                        </div>
                    </div>
                </div>
                
                <div class="performance-card">
                    <h4>Subject-wise Analysis</h4>
                    <div class="subject-analysis-grid">
                        ${analysis['term2-term3'].subjects.map(subject => `
                            <div class="subject-analysis-card ${subject.trend}">
                                <h5>${subject.subject}</h5>
                                <div class="subject-scores">
                                    <span class="previous-score">${subject.previous}</span>
                                    <span class="trend-arrow">→</span>
                                    <span class="current-score">${subject.current}</span>
                                </div>
                                <div class="subject-recommendation">
                                    ${subject.recommendation}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : `
                <div class="no-analysis-data">
                    <p>No detailed analysis available for ${student.name}.</p>
                    <p>Basic performance information is shown below.</p>
                </div>
            `}
            
            ${latestResults ? `
                <div class="performance-card">
                    <h4>Latest Results (Term 3)</h4>
                    <div class="results-breakdown">
                        <div class="result-item">
                            <span class="subject">Mathematics</span>
                            <span class="score">${latestResults.math}/100</span>
                            <span class="grade">${getGrade(latestResults.math)}</span>
                        </div>
                        <div class="result-item">
                            <span class="subject">Science</span>
                            <span class="score">${latestResults.science}/100</span>
                            <span class="grade">${getGrade(latestResults.science)}</span>
                        </div>
                        <div class="result-item">
                            <span class="subject">English</span>
                            <span class="score">${latestResults.english}/100</span>
                            <span class="grade">${getGrade(latestResults.english)}</span>
                        </div>
                        <div class="result-item">
                            <span class="subject">History</span>
                            <span class="score">${latestResults.history}/100</span>
                            <span class="grade">${getGrade(latestResults.history)}</span>
                        </div>
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}



// Make ranking items clickable
function makeRankingClickable() {
    document.querySelectorAll('.ranking-item').forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const studentId = this.getAttribute('data-student-id');
            analyzeStudent(studentId);
        });
    });
}


function updateClassAnalysisView() {
    const selectedClass = document.getElementById('analysis-class').value;
    const teacher = sampleData.teachers.find(t => t.id === appState.currentUser.id);
    
    if (!selectedClass || !teacher) return;
    
    // Get students from the selected class
    const students = sampleData.students.filter(s => s.class === selectedClass);
    
    // Calculate class statistics
    const classStats = calculateClassStatistics(students, selectedClass);
    
    // Update class analysis view
    updateClassAnalysisDisplay(classStats, students);
}


function calculateClassStatistics(students, className) {
    const totalStudents = students.length;
    const averageGPA = students.reduce((sum, student) => sum + student.gpa, 0) / totalStudents;
    const averageAttendance = students.reduce((sum, student) => sum + student.attendance, 0) / totalStudents;
    
    // Get recent results for the class
    const yearKey = 'year2024';
    const term = 'term3';
    const results = sampleData.results[yearKey] && sampleData.results[yearKey][term];
    
    let subjectAverages = {};
    if (results) {
        const classResults = results.filter(result => {
            const student = students.find(s => s.id === result.studentId);
            return student;
        });
        
        if (classResults.length > 0) {
            subjectAverages = {
                math: classResults.reduce((sum, result) => sum + result.math, 0) / classResults.length,
                science: classResults.reduce((sum, result) => sum + result.science, 0) / classResults.length,
                english: classResults.reduce((sum, result) => sum + result.english, 0) / classResults.length,
                history: classResults.reduce((sum, result) => sum + result.history, 0) / classResults.length
            };
        }
    }
    
    return {
        className,
        totalStudents,
        averageGPA: averageGPA.toFixed(2),
        averageAttendance: averageAttendance.toFixed(1),
        subjectAverages,
        topPerformers: students.filter(s => s.gpa >= 3.5).slice(0, 5),
        needAttention: students.filter(s => s.gpa < 2.0 || s.attendance < 80).slice(0, 5)
    };
}







function updateStudentComparisonView(studentIds) {
    const comparisonView = document.getElementById('class-analysis-view');
    if (!comparisonView || studentIds.length === 0) return;
    
    const students = studentIds.map(id => sampleData.students.find(s => s.id === id)).filter(Boolean);
    
    if (students.length === 0) return;
    
    comparisonView.innerHTML = `
        <div class="comparison-header">
            <h3>Student Comparison</h3>
            <p>Comparing ${students.length} students</p>
        </div>
        
        <div class="comparison-content">
            <div class="comparison-table-container">
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th>Student</th>
                            <th>Class</th>
                            <th>GPA</th>
                            <th>Attendance</th>
                            <th>Mathematics</th>
                            <th>Science</th>
                            <th>English</th>
                            <th>History</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${students.map(student => {
                            const yearKey = 'year2024';
                            const term = 'term3';
                            const results = sampleData.results[yearKey] && 
                                           sampleData.results[yearKey][term] && 
                                           sampleData.results[yearKey][term].find(r => r.studentId === student.id);
                            
                            return `
                                <tr>
                                    <td class="student-name">${student.name}</td>
                                    <td>${student.class}</td>
                                    <td>${student.gpa}</td>
                                    <td>${student.attendance}%</td>
                                    <td>${results ? results.math : 'N/A'}</td>
                                    <td>${results ? results.science : 'N/A'}</td>
                                    <td>${results ? results.english : 'N/A'}</td>
                                    <td>${results ? results.history : 'N/A'}</td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
            
            <div class="comparison-charts">
                <h4>Performance Comparison</h4>
                <div class="chart-grid">
                    <div class="chart-container">
                        <h5>GPA Comparison</h5>
                        <div class="bar-chart">
                            ${students.map(student => `
                                <div class="bar-wrapper">
                                    <div class="bar-label">${student.name}</div>
                                    <div class="bar" style="width: ${(student.gpa / 4) * 100}%">
                                        <span class="bar-value">${student.gpa}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="chart-container">
                        <h5>Attendance Comparison</h5>
                        <div class="bar-chart">
                            ${students.map(student => `
                                <div class="bar-wrapper">
                                    <div class="bar-label">${student.name}</div>
                                    <div class="bar" style="width: ${student.attendance}%">
                                        <span class="bar-value">${student.attendance}%</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Helper function to get grade from score
function getGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

// Make sure these functions are available globally
window.updateClassAnalysisView = updateClassAnalysisView;
window.updateStudentAnalysisView = updateStudentAnalysisView;
window.updateStudentComparisonView = updateStudentComparisonView;



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


// Enhanced updateTeacherAttendance function
function updateTeacherAttendance() {
    const teacher = sampleData.teachers.find(t => t.id === appState.currentUser.id);
    if (!teacher) return;

    const assignedClasses = getTeacherAssignedClasses(teacher.name);
    
    // Update class dropdowns - check if elements exist first
    const attendanceClass = document.getElementById('attendance-class');
    const overviewClass = document.getElementById('overview-class');
    
    if (attendanceClass) {
        attendanceClass.innerHTML = assignedClasses.map(className => 
            `<option value="${className}">${className}</option>`
        ).join('');
    }
    
    if (overviewClass) {
        overviewClass.innerHTML = assignedClasses.map(className => 
            `<option value="${className}">${className}</option>`
        ).join('');
    }
    
    // Update period dropdown based on teacher's subjects
    updatePeriodDropdown(teacher.name);
    
    // Load initial attendance data only if we're in the attendance section
    if (appState.currentSection === 'attendance') {
        updateAttendanceTable();
        updateAttendanceSummary();
    }
}

function updatePeriodDropdown(teacherName) {
    const periodSelect = document.getElementById('attendance-period');
    const teacherSubjects = getTeacherSubjects(teacherName);
    
    let periodOptions = '<option value="all">All Day</option>';
    
    teacherSubjects.forEach((subject, index) => {
        const periodNumber = index + 1;
        periodOptions += `<option value="period${periodNumber}">Period ${periodNumber} - ${subject}</option>`;
    });
    
    if (periodSelect) {
        periodSelect.innerHTML = periodOptions;
    }
}


function updateAttendanceTable() {
    const tbody = document.getElementById('attendance-table-body');
    const attendanceClass = document.getElementById('attendance-class');
    
    if (!tbody || !attendanceClass) {
        console.log('Attendance table elements not found');
        return;
    }
    
    const selectedClass = attendanceClass.value;
    if (!selectedClass) return;
    
    // Get students from selected class
    const students = sampleData.students.filter(s => s.class === selectedClass);
    
    tbody.innerHTML = students.map(student => `
        <tr class="attendance-row" data-student-id="${student.id}">
            <td>
                <input type="checkbox" class="student-attendance-checkbox" value="${student.id}">
            </td>
            <td>${student.id}</td>
            <td class="student-name">${student.name}</td>
            <td>
                <select class="attendance-status" onchange="updateAttendanceSummary()">
                    <option value="present">Present</option>
                    <option value="absent">Absent</option>
                    <option value="late">Late</option>
                    <option value="excused">Excused</option>
                </select>
            </td>
            <td>
                <input type="time" class="time-input" value="08:00">
            </td>
            <td>
                <input type="text" class="attendance-remarks" placeholder="Optional remarks...">
            </td>
            <td class="last-marked">-</td>
        </tr>
    `).join('');
    
    updateAttendanceSummary();
}

function updateAttendanceSummary() {
    const presentCountElement = document.getElementById('present-count');
    const absentCountElement = document.getElementById('absent-count');
    const lateCountElement = document.getElementById('late-count');
    const totalCountElement = document.getElementById('total-count');
    
    // Check if summary elements exist
    if (!presentCountElement || !absentCountElement || !lateCountElement || !totalCountElement) {
        return;
    }
    
    const presentCount = document.querySelectorAll('.attendance-status[value="present"]').length;
    const absentCount = document.querySelectorAll('.attendance-status[value="absent"]').length;
    const lateCount = document.querySelectorAll('.attendance-status[value="late"]').length;
    const totalCount = document.querySelectorAll('.attendance-row').length;
    
    presentCountElement.textContent = presentCount;
    absentCountElement.textContent = absentCount;
    lateCountElement.textContent = lateCount;
    totalCountElement.textContent = totalCount;
}

// Quick mark all as present
function quickMarkAllPresent() {
    document.querySelectorAll('.attendance-status').forEach(select => {
        select.value = 'present';
    });
    updateAttendanceSummary();
}

// Bulk actions
function applyBulkAction() {
    const action = document.getElementById('bulk-action').value;
    const selectedStudents = Array.from(document.querySelectorAll('.student-attendance-checkbox:checked'))
        .map(cb => cb.closest('.attendance-row'));
    
    if (selectedStudents.length === 0) {
        showNotification('Please select students to apply bulk action', 'warning');
        return;
    }
    
    selectedStudents.forEach(row => {
        const statusSelect = row.querySelector('.attendance-status');
        statusSelect.value = action;
    });
    
    updateAttendanceSummary();
    showNotification(`Marked ${selectedStudents.length} students as ${action}`, 'success');
}

// Save attendance
function saveAttendance() {
    const selectedClass = document.getElementById('attendance-class').value;
    const date = document.getElementById('attendance-date').value;
    const period = document.getElementById('attendance-period').value;
    
    const attendanceData = Array.from(document.querySelectorAll('.attendance-row')).map(row => {
        const studentId = row.getAttribute('data-student-id');
        const status = row.querySelector('.attendance-status').value;
        const time = row.querySelector('.time-input').value;
        const remarks = row.querySelector('.attendance-remarks').value;
        
        return {
            studentId,
            status,
            time,
            remarks,
            date,
            period,
            class: selectedClass,
            markedBy: appState.currentUser.id,
            timestamp: new Date().toISOString()
        };
    });
    
    // Save to your data structure (in real app, this would be API call)
    console.log('Saving attendance:', attendanceData);
    
    // Update last marked timestamps
    document.querySelectorAll('.last-marked').forEach(td => {
        td.textContent = new Date().toLocaleTimeString();
    });
    
    showNotification(`Attendance saved for ${selectedClass}`, 'success');
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




// ========== RECORD KEEPING FUNCTIONS ==========


function initializeRecordKeeping() {
    // Only initialize if user is a teacher
    if (!appState.currentUser || appState.currentUser.type !== 'teacher') {
        return;
    }
    
    setupRecordTabs();
    initializeEnhancedAttendance();
    setupRecordDateFields();
}

function setupRecordTabs() {
    const tabs = document.querySelectorAll('.record-tab');
    const contents = document.querySelectorAll('.record-tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            // Add active class to current tab and content
            this.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
        });
    });
}


function initializeEnhancedAttendance() {
    // Check if user is a teacher before proceeding
    if (!appState.currentUser || appState.currentUser.type !== 'teacher') {
        console.log('Enhanced attendance only available for teachers');
        return;
    }
    
    // Set current date
    const today = new Date().toISOString().split('T')[0];
    const recordDate = document.getElementById('record-date');
    if (recordDate) {
        recordDate.value = today;
    }
    
    // Load teacher's classes
    loadTeacherClassesForRecords();
    
    // Setup event listeners
    setupEnhancedAttendanceListeners();
    
    // Load sample data (replace with actual API calls)
    loadEnhancedAttendanceData();
}

function setupRecordDateFields() {
    // Set current date for all record keeping date fields
    const today = new Date().toISOString().split('T')[0];
    
    const recordDate = document.getElementById('record-date');
    if (recordDate) recordDate.value = today;
}

function getCurrentTeacher() {
    if (!appState.currentUser || appState.currentUser.type !== 'teacher') {
        return null;
    }
    return sampleData.teachers.find(t => t.id === appState.currentUser.id) || null;
}


function loadTeacherClassesForRecords() {
    // Add comprehensive null checks
    if (!appState.currentUser) {
        console.error('No current user found');
        return;
    }
    
    const teacher = sampleData.teachers.find(t => t.id === appState.currentUser.id);
    
    if (!teacher) {
        console.error(`Teacher not found with ID: ${appState.currentUser.id}`);
        return;
    }

    const assignedClasses = getTeacherAssignedClasses(teacher.name);
    const classSelect = document.getElementById('record-class');
    
    if (!classSelect) {
        console.error('Record class select element not found');
        return;
    }
    
    classSelect.innerHTML = assignedClasses.map(className => 
        `<option value="${className}">${className}</option>`
    ).join('');
    
    // Load students for the first class by default
    if (assignedClasses.length > 0) {
        loadStudentsForEnhancedAttendance(assignedClasses[0]);
    }
}

function loadStudentsForEnhancedAttendance(className) {
    const tbody = document.getElementById('attendance-table-body-enhanced');
    if (!tbody) return;
    
    const students = sampleData.students.filter(s => s.class === className);
    
    tbody.innerHTML = students.map(student => `
        <tr class="attendance-row-enhanced" data-student-id="${student.id}">
            <td>
                <input type="checkbox" class="student-attendance-checkbox-enhanced" value="${student.id}">
            </td>
            <td class="student-avatar">
                <img src="avatars/${student.id}.jpg" alt="${student.name}" onerror="this.style.display='none'">
            </td>
            <td>${student.id}</td>
            <td class="student-name">${student.name}</td>
            <td>
                <select class="attendance-status-enhanced" onchange="updateEnhancedAttendanceSummary()">
                    <option value="present">Present</option>
                    <option value="absent">Absent</option>
                    <option value="late">Late</option>
                    <option value="excused">Excused</option>
                </select>
            </td>
            <td>
                <input type="time" class="time-input-enhanced" value="08:00">
            </td>
            <td>
                <input type="text" class="attendance-remarks-enhanced" placeholder="Optional remarks...">
            </td>
            <td class="attendance-history">
                <span class="attendance-badge present">${student.attendance}%</span>
            </td>
            <td class="attendance-pattern">
                <i class="fas fa-chart-line" title="View attendance pattern"></i>
            </td>
        </tr>
    `).join('');
    
    updateEnhancedAttendanceSummary();
}




function setupEnhancedAttendanceListeners() {

  // Add null checks for all elements before adding event listeners
    
    const recordClass = document.getElementById('record-class');
    const bulkActionBtn = document.getElementById('apply-bulk-action-enhanced');
    const selectAllCheckbox = document.getElementById('select-all-enhanced');
    const quickMarkBtn = document.getElementById('quick-mark-all-present');
    const markAbsentBtn = document.getElementById('mark-common-absent');
    const saveDraftBtn = document.getElementById('save-attendance-draft');
    const submitFinalBtn = document.getElementById('submit-final-attendance');




    // Class change listener
    document.getElementById('record-class').addEventListener('change', function() {
        loadStudentsForEnhancedAttendance(this.value);
    });
    
    // Bulk actions
    document.getElementById('apply-bulk-action-enhanced').addEventListener('click', applyBulkActionEnhanced);
    document.getElementById('select-all-enhanced').addEventListener('change', toggleSelectAllEnhanced);
    
    // Quick actions
    document.getElementById('quick-mark-all-present').addEventListener('click', markAllPresent);
    document.getElementById('mark-common-absent').addEventListener('click', markCommonAbsent);
    document.getElementById('save-attendance-draft').addEventListener('click', saveAttendanceDraft);
    document.getElementById('submit-final-attendance').addEventListener('click', submitFinalAttendance);
    
    // Mobile actions
    document.querySelectorAll('.mobile-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const status = this.getAttribute('data-status');
            markSelectedWithStatus(status);
        });
    });
}


function updateEnhancedAttendanceSummary() {
    const presentCount = document.querySelectorAll('.attendance-status-enhanced[value="present"]').length;
    const absentCount = document.querySelectorAll('.attendance-status-enhanced[value="absent"]').length;
    const lateCount = document.querySelectorAll('.attendance-status-enhanced[value="late"]').length;
    const excusedCount = document.querySelectorAll('.attendance-status-enhanced[value="excused"]').length;
    const totalCount = document.querySelectorAll('.attendance-row-enhanced').length;
    
    // Update enhanced summary cards
    const presentElement = document.getElementById('present-count-enhanced');
    const absentElement = document.getElementById('absent-count-enhanced');
    const lateElement = document.getElementById('late-count-enhanced');
    const excusedElement = document.getElementById('excused-count-enhanced');
    const totalElement = document.getElementById('total-count-enhanced');
    
    if (presentElement) presentElement.textContent = presentCount;
    if (absentElement) absentElement.textContent = absentCount;
    if (lateElement) lateElement.textContent = lateCount;
    if (excusedElement) excusedElement.textContent = excusedCount;
    if (totalElement) totalElement.textContent = totalCount;
}

function toggleSelectAllEnhanced() {
    const checkboxes = document.querySelectorAll('.student-attendance-checkbox-enhanced');
    const selectAll = document.getElementById('select-all-enhanced');
    
    checkboxes.forEach(cb => {
        cb.checked = selectAll.checked;
    });
}

function applyBulkActionEnhanced() {
    const action = document.getElementById('bulk-action-enhanced').value;
    const selectedStudents = Array.from(document.querySelectorAll('.student-attendance-checkbox-enhanced:checked'))
        .map(cb => cb.closest('.attendance-row-enhanced'));
    
    if (selectedStudents.length === 0) {
        showNotification('Please select students to apply bulk action', 'warning');
        return;
    }
    
    selectedStudents.forEach(row => {
        const statusSelect = row.querySelector('.attendance-status-enhanced');
        statusSelect.value = action;
    });
    
    updateEnhancedAttendanceSummary();
    showNotification(`Marked ${selectedStudents.length} students as ${action}`, 'success');
}


function markAllPresent() {
    document.querySelectorAll('.attendance-status-enhanced').forEach(select => {
        select.value = 'present';
    });
    updateEnhancedAttendanceSummary();
    showNotification('All students marked as present', 'success');
}

function markCommonAbsent() {
    // This would mark students who are frequently absent
    // For demo, mark 2 random students as absent
    const rows = document.querySelectorAll('.attendance-row-enhanced');
    const absentCount = Math.min(2, rows.length);
    
    for (let i = 0; i < absentCount; i++) {
        const randomIndex = Math.floor(Math.random() * rows.length);
        const statusSelect = rows[randomIndex].querySelector('.attendance-status-enhanced');
        statusSelect.value = 'absent';
    }
    
  updateEnhancedAttendanceSummary();
    showNotification(`Marked ${absentCount} common absent students`, 'info');
}

function markSelectedWithStatus(status) {
    const selectedStudents = Array.from(document.querySelectorAll('.student-attendance-checkbox-enhanced:checked'))
        .map(cb => cb.closest('.attendance-row-enhanced'));
    
    if (selectedStudents.length === 0) {
        showNotification('Please select students first', 'warning');
        return;
    }
    
    selectedStudents.forEach(row => {
        const statusSelect = row.querySelector('.attendance-status-enhanced');
        statusSelect.value = status;
    });
    
    updateEnhancedAttendanceSummary();
    showNotification(`Marked ${selectedStudents.length} students as ${status}`, 'success');
}

function saveAttendanceDraft() {
    const selectedClass = document.getElementById('record-class').value;
    showNotification(`Attendance draft saved for ${selectedClass}`, 'success');
}

function submitFinalAttendance() {
    const selectedClass = document.getElementById('record-class').value;
    const date = document.getElementById('record-date').value;
    
    const attendanceData = Array.from(document.querySelectorAll('.attendance-row-enhanced')).map(row => {
        const studentId = row.getAttribute('data-student-id');
        const status = row.querySelector('.attendance-status-enhanced').value;
        const time = row.querySelector('.time-input-enhanced').value;
        const remarks = row.querySelector('.attendance-remarks-enhanced').value;
        
        return {
            studentId,
            status,
            time,
            remarks,
            date,
            class: selectedClass,
            markedBy: appState.currentUser.id,
            timestamp: new Date().toISOString()
        };
    });
    
    // Save to your data structure (in real app, this would be API call)
    console.log('Submitting final attendance:', attendanceData);
    showNotification(`Final attendance submitted for ${selectedClass}`, 'success');
}

function loadEnhancedAttendanceData() {
    // This would typically come from your backend
    const sampleData = {
        classAttendanceRate: "87%",
        frequentlyAbsent: 3,
        perfectAttendance: 15,
        patterns: {
            highAbsentDays: [
                "Monday: 12% absent rate",
                "Friday: 8% absent rate"
            ],
            lateComers: [
                "John Doe: 5 times this week",
                "Jane Smith: 3 times this week"
            ],
            perfectAttendance: [
                "Alice Johnson",
                "Bob Brown", 
                "Carol Davis"
            ]
        }
    };
    
    // Update analytics
    document.getElementById('class-attendance-rate').textContent = sampleData.classAttendanceRate;
    document.getElementById('frequently-absent').textContent = sampleData.frequentlyAbsent;
    document.getElementById('perfect-attendance').textContent = sampleData.perfectAttendance;
    
    // Update patterns
    updatePatternLists(sampleData.patterns);
}

function updatePatternLists(patterns) {
    const highAbsentDays = document.getElementById('high-absent-days');
    const lateComersList = document.getElementById('late-comers-list');
    const perfectAttendanceList = document.getElementById('perfect-attendance-list');
    
    if (highAbsentDays) {
        highAbsentDays.innerHTML = patterns.highAbsentDays.map(day => 
            `<div class="pattern-item">${day}</div>`
        ).join('');
    }
    
    if (lateComersList) {
        lateComersList.innerHTML = patterns.lateComers.map(late => 
            `<div class="pattern-item">${late}</div>`
        ).join('');
    }
    
    if (perfectAttendanceList) {
        perfectAttendanceList.innerHTML = patterns.perfectAttendance.map(student => 
            `<div class="pattern-item">${student}</div>`
        ).join('');
    }
}


function isSectionActive(sectionId) {
    const section = document.getElementById(sectionId);
    return section && section.classList.contains('active');
}

// Call this in your main initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeRecordKeeping();
    // ... your other initializations
});

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            
            // Hide all sections
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Show target section and set active link
            document.getElementById(target).classList.add('active');
            this.classList.add('active');
        });
    });
}










// Add this debug function to check the navigation
function debugNavigation() {
    console.log('=== NAVIGATION DEBUG ===');
    console.log('Current user type:', appState.currentUser?.type);
    console.log('Available sections for teacher:', isSectionAccessible('record-keeping', 'teacher'));
    
    const navItems = document.querySelectorAll('nav li');
    navItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        if (link) {
            const target = link.getAttribute('data-target');
            const isVisible = item.style.display !== 'none';
            console.log(`Nav item ${target}: ${isVisible ? 'visible' : 'hidden'}`);
        }
    });
    console.log('======================');
}


// Call this after login to see what's happening
// You can call debugNavigation() in the browser console to check



// ==================== GHANA EDUCATION SYSTEM IMPLEMENTATION ====================



// Function to show admin-specific features
function showAdminDashboard() {
    console.log('Admin dashboard loaded');
    
    // Update dashboard title for admin
    const dashboardTitle = document.querySelector('#dashboard h2');
    if (dashboardTitle) {
        dashboardTitle.textContent = 'Admin Dashboard';
    }
    
    // Check if admin widget already exists
    let adminWidget = document.querySelector('.admin-widget');
    if (!adminWidget) {
        // Add admin-specific widgets
        const adminWidgets = `
            <div class="widget admin-widget">
                <h3>System Overview</h3>
                <div class="admin-stats">
                    <div class="admin-stat">
                        <div class="stat-value" id="total-users">0</div>
                        <div class="stat-label">Total Users</div>
                    </div>
                    <div class="admin-stat">
                        <div class="stat-value" id="active-sessions">0</div>
                        <div class="stat-label">Active Sessions</div>
                    </div>
                </div>
            </div>
        `;
        
        // Insert admin widget into dashboard if dashboard-widgets exists
        const dashboardWidgets = document.querySelector('.dashboard-widgets');
        if (dashboardWidgets) {
            dashboardWidgets.insertAdjacentHTML('beforeend', adminWidgets);
        }
    }
    
    // Show monitoring widget for admin if it exists
    const monitoringWidget = document.getElementById('monitoring-widget');
    if (monitoringWidget) {
        monitoringWidget.style.display = 'block';
    }
    
    // Update student management section with Ghana classes
    initializeGhanaClasses();
    
    // Load sample students
    loadSampleStudents();
}

// Initialize Ghana classes in all dropdowns
function initializeGhanaClasses() {
    console.log('Initializing Ghana classes...');
    
    // Update student add modal
    const studentClassSelect = document.getElementById('new-student-class');
    if (studentClassSelect) {
        studentClassSelect.innerHTML = '';
        
        // Add all Ghana classes
        ghanaClasses.nursery.forEach(className => {
            const option = document.createElement('option');
            option.value = className.toLowerCase().replace(' ', '');
            option.textContent = className;
            studentClassSelect.appendChild(option);
        });
        
        ghanaClasses.primary.forEach(className => {
            const option = document.createElement('option');
            option.value = className.toLowerCase().replace(' ', '');
            option.textContent = className;
            studentClassSelect.appendChild(option);
        });
        
        ghanaClasses.jhs.forEach(className => {
            const option = document.createElement('option');
            option.value = className.toLowerCase().replace(' ', '');
            option.textContent = className;
            studentClassSelect.appendChild(option);
        });
    }
    
    // Update attendance class selector
    const attendanceClassSelect = document.getElementById('attendance-class');
    if (attendanceClassSelect) {
        attendanceClassSelect.innerHTML = '<option value="">Select Class</option>';
        
        [...ghanaClasses.nursery, ...ghanaClasses.primary, ...ghanaClasses.jhs].forEach(className => {
            const option = document.createElement('option');
            option.value = className.toLowerCase().replace(' ', '');
            option.textContent = className;
            attendanceClassSelect.appendChild(option);
        });
    }
    
    // Update results class selector
    const resultsClassSelect = document.getElementById('result-class');
    if (resultsClassSelect) {
        resultsClassSelect.innerHTML = '<option value="all">All Classes</option>';
        
        [...ghanaClasses.nursery, ...ghanaClasses.primary, ...ghanaClasses.jhs].forEach(className => {
            const option = document.createElement('option');
            option.value = className.toLowerCase().replace(' ', '');
            option.textContent = className;
            resultsClassSelect.appendChild(option);
        });
    }
    
    // Update timetable class selector
    const timetableClassSelect = document.getElementById('timetable-class');
    if (timetableClassSelect) {
        timetableClassSelect.innerHTML = '';
        
        // Only show JHS classes in timetable (as per your original design)
        ghanaClasses.jhs.forEach(className => {
            const option = document.createElement('option');
            option.value = className.replace(' ', '');
            option.textContent = className;
            timetableClassSelect.appendChild(option);
        });
    }
    
    // Update record keeping class selector
    const recordClassSelect = document.getElementById('record-class');
    if (recordClassSelect) {
        recordClassSelect.innerHTML = '<option value="">Select Class</option>';
        
        [...ghanaClasses.nursery, ...ghanaClasses.primary, ...ghanaClasses.jhs].forEach(className => {
            const option = document.createElement('option');
            option.value = className.toLowerCase().replace(' ', '');
            option.textContent = className;
            recordClassSelect.appendChild(option);
        });
    }
}

// Function to generate sample student data with Ghana classes
function generateSampleStudents() {
    const sampleStudents = [];
    const ghanaClassLevels = [...ghanaClasses.nursery, ...ghanaClasses.primary, ...ghanaClasses.jhs];
    
    ghanaClassLevels.forEach(className => {
        // Generate 3-8 students per class
        const numStudents = Math.floor(Math.random() * 6) + 3;
        
        for (let i = 1; i <= numStudents; i++) {
            const studentId = `STU${String(sampleStudents.length + 1).padStart(3, '0')}`;
            const firstName = ['Kwame', 'Ama', 'Kofi', 'Abena', 'Yaw', 'Akosua', 'Kwasi', 'Adwoa'][Math.floor(Math.random() * 8)];
            const lastName = ['Mensah', 'Appiah', 'Owusu', 'Agyemang', 'Asare', 'Boateng', 'Arthur', 'Amoah'][Math.floor(Math.random() * 8)];
            
            sampleStudents.push({
                id: studentId,
                name: `${firstName} ${lastName}`,
                className: className,
                status: Math.random() > 0.1 ? 'active' : 'inactive',
                dob: '2010-01-15',
                phone: `024-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
                email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@school.edu.gh`
            });
        }
    });
    
    return sampleStudents;
}

// Function to load and display sample students
function loadSampleStudents() {
    console.log('Loading sample students...');
    const sampleStudents = generateSampleStudents();
    displayStudentsByGhanaClass(sampleStudents);
}

// Function to display students by Ghana class
function displayStudentsByGhanaClass(students) {
    const studentsList = document.getElementById('students-list');
    if (!studentsList) {
        console.error('Students list container not found');
        return;
    }
    
    studentsList.innerHTML = '';
    
    // Group students by class
    const groupedStudents = {};
    
    students.forEach(student => {
        if (!groupedStudents[student.className]) {
            groupedStudents[student.className] = [];
        }
        groupedStudents[student.className].push(student);
    });
    
    // Sort classes in Ghana education order
    const sortedClasses = [...ghanaClasses.nursery, ...ghanaClasses.primary, ...ghanaClasses.jhs];
    
    // Display students grouped by class
    sortedClasses.forEach(className => {
        if (groupedStudents[className] && groupedStudents[className].length > 0) {
            // Create class section
            const classSection = document.createElement('div');
            classSection.className = 'class-section';
            classSection.innerHTML = `
                <h3 class="class-header">${className}</h3>
                <div class="class-students" id="${className.replace(' ', '-').toLowerCase()}-students">
                    <!-- Students will be added here -->
                </div>
            `;
            studentsList.appendChild(classSection);
            
            // Add students for this class
            const classStudentsContainer = document.getElementById(`${className.replace(' ', '-').toLowerCase()}-students`);
            groupedStudents[className].forEach(student => {
                const studentCard = createStudentCard(student);
                classStudentsContainer.appendChild(studentCard);
            });
        }
    });
    
    // Add event listeners to student action buttons
    addStudentActionListeners();
}

// Function to create student card
function createStudentCard(student) {
    const card = document.createElement('div');
    card.className = 'student-card';
    card.dataset.id = student.id;
    card.dataset.class = student.className;
    card.innerHTML = `
        <div class="student-info">
            <h4>${student.name}</h4>
            <p>ID: ${student.id}</p>
            <p>Class: ${student.className}</p>
            <p>Status: <span class="status-badge ${student.status}">${student.status}</span></p>
        </div>
        <div class="student-actions">
            <button class="btn-icon view-student" title="View Details" data-id="${student.id}">
                <i class="fas fa-eye"></i>
            </button>
            <button class="btn-icon edit-student" title="Edit" data-id="${student.id}">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn-icon delete-student" title="Delete" data-id="${student.id}">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
    return card;
}

// Add event listeners to student action buttons
function addStudentActionListeners() {
    // View student
    document.querySelectorAll('.view-student').forEach(button => {
        button.addEventListener('click', function() {
            const studentId = this.dataset.id;
            viewStudentDetails(studentId);
        });
    });
    
    // Edit student
    document.querySelectorAll('.edit-student').forEach(button => {
        button.addEventListener('click', function() {
            const studentId = this.dataset.id;
            editStudent(studentId);
        });
    });
    
    // Delete student
    document.querySelectorAll('.delete-student').forEach(button => {
        button.addEventListener('click', function() {
            const studentId = this.dataset.id;
            deleteStudent(studentId);
        });
    });
}

// Function to view student details
function viewStudentDetails(studentId) {
    alert(`Viewing details for student: ${studentId}\n\nThis would open a detailed view in a real application.`);
    // In a real app, this would open a modal with student details
}

// Function to edit student
function editStudent(studentId) {
    alert(`Editing student: ${studentId}\n\nThis would open an edit form in a real application.`);
    // In a real app, this would open the student modal in edit mode
}

// Function to delete student
function deleteStudent(studentId) {
    if (confirm(`Are you sure you want to delete student ${studentId}?`)) {
        const studentCard = document.querySelector(`.student-card[data-id="${studentId}"]`);
        if (studentCard) {
            studentCard.remove();
            alert(`Student ${studentId} deleted successfully.`);
        }
    }
}

// Function to filter students by class
function filterStudentsByClass(className) {
    const allClassSections = document.querySelectorAll('.class-section');
    const allStudentCards = document.querySelectorAll('.student-card');
    
    if (className === 'all') {
        // Show all class sections and all student cards
        allClassSections.forEach(section => {
            section.style.display = 'block';
        });
        allStudentCards.forEach(card => {
            card.style.display = 'flex';
        });
    } else {
        // Hide all class sections first
        allClassSections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Show only the selected class
        const selectedClassSection = document.querySelector(`.class-header:contains("${className}")`)?.parentElement;
        if (selectedClassSection) {
            selectedClassSection.style.display = 'block';
        }
        
        // Filter individual student cards (for search functionality)
        allStudentCards.forEach(card => {
            const studentClass = card.dataset.class;
            if (studentClass.toLowerCase().replace(' ', '') === className) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
}

// Function to export student data with Ghana classes
function exportStudentData() {
    const students = generateSampleStudents();
    let csvContent = "data:text/csv;charset=utf-8,";
    
    // Add headers
    csvContent += "ID,Name,Class,Status,Date of Birth,Phone,Email\n";
    
    // Add student data
    students.forEach(student => {
        const row = [
            student.id,
            student.name,
            student.className,
            student.status,
            student.dob,
            student.phone,
            student.email
        ];
        csvContent += row.join(",") + "\n";
    });
    
    // Create download link
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `students_ghana_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    
    link.click();
    document.body.removeChild(link);
    
    alert('Student data exported successfully!');
}

// Function to handle student search
function setupStudentSearch() {
    const searchInput = document.getElementById('student-search');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const studentCards = document.querySelectorAll('.student-card');
            
            studentCards.forEach(card => {
                const studentName = card.querySelector('h4').textContent.toLowerCase();
                const studentId = card.querySelector('p:nth-child(2)').textContent.toLowerCase();
                
                if (studentName.includes(searchTerm) || studentId.includes(searchTerm)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('School Management System loaded');
    
    // Setup student search
    setupStudentSearch();
    
    // Add event listener for class filter
    const classFilter = document.getElementById('class-filter');
    if (classFilter) {
        classFilter.addEventListener('change', function(e) {
            const selectedClass = e.target.value;
            filterStudentsByClass(selectedClass);
        });
    }
    
    // Add event listener for status filter
    const statusFilter = document.getElementById('status-filter');
    if (statusFilter) {
        statusFilter.addEventListener('change', function(e) {
            const selectedStatus = e.target.value;
            filterStudentsByStatus(selectedStatus);
        });
    }
    
    // Check if admin is logged in (for demo purposes)
    // In a real app, this would check session or localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const userType = urlParams.get('userType') || localStorage.getItem('userType');
    
    if (userType === 'admin') {
        showAdminDashboard();
    }
});

// Function to filter students by status
function filterStudentsByStatus(status) {
    const allStudentCards = document.querySelectorAll('.student-card');
    
    if (status === 'all') {
        allStudentCards.forEach(card => {
            card.style.display = 'flex';
        });
    } else {
        allStudentCards.forEach(card => {
            const statusElement = card.querySelector('.status-badge');
            const studentStatus = statusElement ? statusElement.textContent.toLowerCase() : '';
            
            if (studentStatus === status) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
}

// Helper function for contains selector (for older browsers)
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || 
                                Element.prototype.webkitMatchesSelector;
}

// Initialize Ghana classes on page load
initializeGhanaClasses();

// ==================== GHANA EDUCATION SYSTEM STUDENT GENERATION ====================

// Helper function to calculate age based on class
function calculateAgeForClass(className) {
    if (className.includes('Crèche') || className.includes('Nursery')) return 2 + Math.floor(Math.random() * 3);
    if (className.includes('KG')) return 4 + Math.floor(Math.random() * 2);
    if (className.includes('Class 1')) return 6 + Math.floor(Math.random() * 2);
    if (className.includes('Class 2')) return 7 + Math.floor(Math.random() * 2);
    if (className.includes('Class 3')) return 8 + Math.floor(Math.random() * 2);
    if (className.includes('Class 4')) return 9 + Math.floor(Math.random() * 2);
    if (className.includes('Class 5')) return 10 + Math.floor(Math.random() * 2);
    if (className.includes('Class 6')) return 11 + Math.floor(Math.random() * 2);
    if (className.includes('JHS 1')) return 12 + Math.floor(Math.random() * 2);
    if (className.includes('JHS 2')) return 13 + Math.floor(Math.random() * 2);
    if (className.includes('JHS 3')) return 14 + Math.floor(Math.random() * 2);
    return 10;
}

// Helper function to generate date of birth
function generateDOB(age) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    return `${birthYear}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

// Helper function to generate Ghanaian phone number
function generateGhanaianPhoneNumber() {
    const prefixes = ['024', '054', '055', '059', '020', '050'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const middle = Math.floor(Math.random() * 900) + 100;
    const end = Math.floor(Math.random() * 9000) + 1000;
    return `${prefix}-${middle}-${end}`;
}

// Helper function to generate email
function generateEmail(firstName, lastName) {
    const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
    const domain = domains[Math.floor(Math.random() * domains.length)];
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
}

// Helper function to generate guardian name
function generateGuardianName(studentLastName) {
    const guardianFirstNames = ['Kwame', 'Ama', 'Kofi', 'Abena', 'Yaw', 'Akosua', 'Kwasi', 'Adwoa', 'Esi', 'Kojo'];
    const firstName = guardianFirstNames[Math.floor(Math.random() * guardianFirstNames.length)];
    return `${firstName} ${studentLastName}`;
}

// Helper function to generate Ghanaian address
function generateGhanaianAddress() {
    const streets = ['Oxford Street', 'Ring Road', 'Independence Avenue', 'Liberation Road', 'University Avenue'];
    const areas = ['Accra', 'Kumasi', 'Takoradi', 'Tamale', 'Cape Coast', 'Tema', 'Ho', 'Sunyani'];
    const street = streets[Math.floor(Math.random() * streets.length)];
    const area = areas[Math.floor(Math.random() * areas.length)];
    const houseNumber = Math.floor(Math.random() * 100) + 1;
    return `House No. ${houseNumber}, ${street}, ${area}`;
}

// Helper function to generate enrollment date
function generateEnrollmentDate(className) {
    const currentYear = new Date().getFullYear();
    let enrollmentYear;
    
    if (className.includes('Crèche') || className.includes('Nursery 1')) {
        enrollmentYear = currentYear - 2;
    } else if (className.includes('Nursery 2') || className.includes('KG 1')) {
        enrollmentYear = currentYear - 1;
    } else if (className.includes('KG 2') || className.includes('Class 1')) {
        enrollmentYear = currentYear;
    } else {
        const classNumber = parseInt(className.match(/\d+/)?.[0]) || 1;
        enrollmentYear = currentYear - classNumber;
    }
    
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    return `${enrollmentYear}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

// Function to generate sample students with unique Ghanaian names
function generateSampleStudentsWithNames() {
    const sampleStudents = [];
    const ghanaClassLevels = [...ghanaClasses.nursery, ...ghanaClasses.primary, ...ghanaClasses.jhs];
    let studentCounter = 1;
    
    ghanaClassLevels.forEach(className => {
        const classNames = classStudentNames[className];
        
        classNames.forEach((studentName, index) => {
            const studentId = `STU${String(studentCounter).padStart(3, '0')}`;
            const age = calculateAgeForClass(className);
            const dob = generateDOB(age);
            
            sampleStudents.push({
                id: studentId,
                firstName: studentName.firstName,
                lastName: studentName.lastName,
                fullName: studentName.fullName,
                className: className,
                gender: studentName.gender,
                status: Math.random() > 0.1 ? 'active' : 'inactive',
                dob: dob,
                age: age,
                phone: generateGhanaianPhoneNumber(),
                email: generateEmail(studentName.firstName, studentName.lastName),
                guardianName: generateGuardianName(studentName.lastName),
                address: generateGhanaianAddress(),
                enrollmentDate: generateEnrollmentDate(className),
                gpa: (Math.random() * 2 + 2).toFixed(1), // Random GPA between 2.0 and 4.0
                attendance: Math.floor(Math.random() * 20 + 80) // Random attendance 80-100%
            });
            
            studentCounter++;
        });
    });
    
    return sampleStudents;
}

// Function to display students by Ghana class
function displayStudentsByGhanaClass(students) {
    const studentsList = document.getElementById('students-list');
    if (!studentsList) {
        console.error('Students list container not found');
        return;
    }
    
    studentsList.innerHTML = '';
    
    // Group students by class
    const groupedStudents = {};
    
    students.forEach(student => {
        if (!groupedStudents[student.className]) {
            groupedStudents[student.className] = [];
        }
        groupedStudents[student.className].push(student);
    });
    
    // Sort classes in Ghana education order
    const sortedClasses = [...ghanaClasses.nursery, ...ghanaClasses.primary, ...ghanaClasses.jhs];
    
    // Display students grouped by class
    sortedClasses.forEach(className => {
        if (groupedStudents[className] && groupedStudents[className].length > 0) {
            // Create class section
            const classSection = document.createElement('div');
            classSection.className = 'class-section';
            classSection.innerHTML = `
                <h3 class="class-header">${className} (${groupedStudents[className].length} students)</h3>
                <div class="class-students" id="${className.replace(' ', '-').toLowerCase()}-students">
                    <!-- Students will be added here -->
                </div>
            `;
            studentsList.appendChild(classSection);
            
            // Add students for this class
            const classStudentsContainer = document.getElementById(`${className.replace(' ', '-').toLowerCase()}-students`);
            groupedStudents[className].forEach(student => {
                const studentCard = createStudentCard(student);
                classStudentsContainer.appendChild(studentCard);
            });
        }
    });
    
    // Add event listeners to student action buttons
    addStudentActionListeners();
}

// Function to create student card (enhanced version)
function createStudentCard(student) {
    const card = document.createElement('div');
    card.className = 'student-card';
    card.dataset.id = student.id;
    card.dataset.class = student.className;
    card.innerHTML = `
        <div class="student-info">
            <div class="student-avatar">
                <i class="fas fa-user-circle"></i>
            </div>
            <div class="student-details">
                <h4>${student.fullName}</h4>
                <p><i class="fas fa-id-card"></i> ID: ${student.id}</p>
                <p><i class="fas fa-graduation-cap"></i> Class: ${student.className}</p>
                <p><i class="fas fa-user"></i> Gender: ${student.gender}</p>
                <p><i class="fas fa-birthday-cake"></i> Age: ${student.age}</p>
                <p><i class="fas fa-chart-line"></i> GPA: ${student.gpa}</p>
                <p><i class="fas fa-calendar-check"></i> Attendance: ${student.attendance}%</p>
                <p>Status: <span class="status-badge ${student.status}">${student.status}</span></p>
            </div>
        </div>
        <div class="student-actions">
            <button class="btn-icon view-student" title="View Details" data-id="${student.id}">
                <i class="fas fa-eye"></i>
            </button>
            <button class="btn-icon edit-student" title="Edit" data-id="${student.id}">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn-icon contact-student" title="Contact" data-id="${student.id}">
                <i class="fas fa-phone"></i>
            </button>
            <button class="btn-icon delete-student" title="Delete" data-id="${student.id}">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
    return card;
}

// Add event listeners to student action buttons
function addStudentActionListeners() {
    // View student
    document.querySelectorAll('.view-student').forEach(button => {
        button.addEventListener('click', function() {
            const studentId = this.dataset.id;
            viewStudentDetails(studentId);
        });
    });
    
    // Edit student
    document.querySelectorAll('.edit-student').forEach(button => {
        button.addEventListener('click', function() {
            const studentId = this.dataset.id;
            editStudent(studentId);
        });
    });
    
    // Contact student
    document.querySelectorAll('.contact-student').forEach(button => {
        button.addEventListener('click', function() {
            const studentId = this.dataset.id;
            contactStudent(studentId);
        });
    });
    
    // Delete student
    document.querySelectorAll('.delete-student').forEach(button => {
        button.addEventListener('click', function() {
            const studentId = this.dataset.id;
            deleteStudent(studentId);
        });
    });
}

// Function to view student details
function viewStudentDetails(studentId) {
    const sampleStudents = generateSampleStudentsWithNames();
    const student = sampleStudents.find(s => s.id === studentId);
    
    if (student) {
        alert(`Student Details:\n
Name: ${student.fullName}
ID: ${student.id}
Class: ${student.className}
Gender: ${student.gender}
Age: ${student.age}
Date of Birth: ${student.dob}
GPA: ${student.gpa}
Attendance: ${student.attendance}%
Status: ${student.status}
Phone: ${student.phone}
Email: ${student.email}
Guardian: ${student.guardianName}
Address: ${student.address}
Enrollment Date: ${student.enrollmentDate}`);
    }
}

// Function to contact student
function contactStudent(studentId) {
    const sampleStudents = generateSampleStudentsWithNames();
    const student = sampleStudents.find(s => s.id === studentId);
    
    if (student) {
        alert(`Contact Information for ${student.fullName}:\n
Phone: ${student.phone}
Email: ${student.email}
Guardian: ${student.guardianName}
Address: ${student.address}`);
    }
}

// Function to delete student
function deleteStudent(studentId) {
    if (confirm(`Are you sure you want to delete student ${studentId}?`)) {
        const studentCard = document.querySelector(`.student-card[data-id="${studentId}"]`);
        if (studentCard) {
            studentCard.remove();
            showNotification(`Student ${studentId} deleted successfully`, 'success');
        }
    }
}

// Function to display all student names in console (for debugging)
function displayAllStudentNames() {
    const sampleStudents = generateSampleStudentsWithNames();
    
    console.log('=== ALL GHANAIAN STUDENT NAMES BY CLASS ===');
    
    // Group by class
    const groupedByClass = {};
    sampleStudents.forEach(student => {
        if (!groupedByClass[student.className]) {
            groupedByClass[student.className] = [];
        }
        groupedByClass[student.className].push(student);
    });
    
    // Display each class
    Object.keys(groupedByClass).sort((a, b) => {
        const classOrder = [...ghanaClasses.nursery, ...ghanaClasses.primary, ...ghanaClasses.jhs];
        return classOrder.indexOf(a) - classOrder.indexOf(b);
    }).forEach(className => {
        console.log(`\n${className}:`);
        groupedByClass[className].forEach((student, index) => {
            console.log(`${index + 1}. ${student.fullName} (${student.gender}) - ID: ${student.id}`);
        });
    });
    
    console.log(`\n=== TOTAL STUDENTS: ${sampleStudents.length} ===`);
}

// Initialize Ghana classes on page load
initializeGhanaClasses();

// Function to initialize Ghana classes in dropdowns
function initializeGhanaClasses() {
    console.log('Initializing Ghana classes...');
    
    // Update student add modal
    const studentClassSelect = document.getElementById('new-student-class');
    if (studentClassSelect) {
        studentClassSelect.innerHTML = '';
        
        // Add all Ghana classes
        ghanaClasses.nursery.forEach(className => {
            const option = document.createElement('option');
            option.value = className.toLowerCase().replace(' ', '');
            option.textContent = className;
            studentClassSelect.appendChild(option);
        });
        
        ghanaClasses.primary.forEach(className => {
            const option = document.createElement('option');
            option.value = className.toLowerCase().replace(' ', '');
            option.textContent = className;
            studentClassSelect.appendChild(option);
        });
        
        ghanaClasses.jhs.forEach(className => {
            const option = document.createElement('option');
            option.value = className.toLowerCase().replace(' ', '');
            option.textContent = className;
            studentClassSelect.appendChild(option);
        });
    }
    
    // Update class filter dropdown in students section
    const classFilter = document.getElementById('class-filter');
    if (classFilter) {
        classFilter.innerHTML = '<option value="all">All Classes</option>';
        
        [...ghanaClasses.nursery, ...ghanaClasses.primary, ...ghanaClasses.jhs].forEach(className => {
            const option = document.createElement('option');
            option.value = className.toLowerCase().replace(' ', '');
            option.textContent = className;
            classFilter.appendChild(option);
        });
    }
}





// Global variable to track current active tab
let activeClassTab = 'all';

// Function to initialize student management section for admin
function initializeStudentManagement() {
    if (appState.currentUser?.type !== 'admin') {
        return; // Only show enhanced view for admin
    }
    
    // Generate sample students with Ghanaian names
    const sampleStudents = generateSampleStudentsWithNames();
    
    // Create class tabs and display students
    createClassTabs(sampleStudents);
    displayStudentsByGhanaClass(sampleStudents);
    
    // Setup event listeners
    setupStudentSearchAndFilters();
}

// Function to create class tabs
function createClassTabs(students) {
    const tabsContainer = document.getElementById('class-tabs');
    if (!tabsContainer) return;
    
    // Clear existing tabs
    tabsContainer.innerHTML = '';
    
    // Group students by class
    const groupedStudents = {};
    students.forEach(student => {
        if (!groupedStudents[student.className]) {
            groupedStudents[student.className] = [];
        }
        groupedStudents[student.className].push(student);
    });
    
    // Get all Ghana classes in order
    const allClasses = [...ghanaClasses.nursery, ...ghanaClasses.primary, ...ghanaClasses.jhs];
    
    // Create "All Students" tab
    const allTab = createClassTab('all', 'All Students', students.length, 'all');
    tabsContainer.appendChild(allTab);
    
    // Create tabs for each class
    allClasses.forEach(className => {
        const classStudents = groupedStudents[className] || [];
        if (classStudents.length > 0) {
            // Determine the level (nursery, primary, jhs)
            let level = '';
            if (ghanaClasses.nursery.includes(className)) level = 'nursery';
            else if (ghanaClasses.primary.includes(className)) level = 'primary';
            else if (ghanaClasses.jhs.includes(className)) level = 'jhs';
            
            const tab = createClassTab(className, className, classStudents.length, level);
            tabsContainer.appendChild(tab);
        }
    });
    
    // Add click event listeners to tabs
    setupTabClickListeners(students);
}

// Helper function to create a class tab
function createClassTab(className, displayName, studentCount, level = '') {
    const tab = document.createElement('button');
    tab.className = `class-tab ${level} ${className === 'all' ? 'active' : ''}`;
    tab.dataset.class = className;
    tab.innerHTML = `
        <span>${displayName}</span>
        <span class="student-count">${studentCount}</span>
    `;
    return tab;
}

// Setup tab click listeners
function setupTabClickListeners(students) {
    const tabs = document.querySelectorAll('.class-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get selected class
            const selectedClass = this.dataset.class;
            activeClassTab = selectedClass;
            
            // Filter and display students
            filterStudentsByClass(students, selectedClass);
            
            // Update URL or state if needed
            updateStudentViewState(selectedClass);
        });
    });
}

// Function to filter students by class
function filterStudentsByClass(students, className) {
    const studentsList = document.getElementById('students-list');
    if (!studentsList) return;
    
    // Clear current display
    studentsList.innerHTML = '';
    
    if (className === 'all') {
        // Show all students grouped by class
        displayStudentsByGhanaClass(students);
    } else {
        // Filter students for the selected class
        const filteredStudents = students.filter(student => 
            student.className.toLowerCase().replace(' ', '') === className.toLowerCase().replace(' ', '')
        );
        
        if (filteredStudents.length > 0) {
            // Create class section for the selected class
            const classSection = document.createElement('div');
            classSection.className = 'class-section';
            classSection.innerHTML = `
                <div class="class-header">
                    <h3>
                        <i class="fas fa-graduation-cap"></i>
                        ${className}
                        <span class="badge">${filteredStudents.length} students</span>
                    </h3>
                    <div class="class-stats">
                        <div class="class-stat">
                            <div class="class-stat-value">${calculateClassAverageGPA(filteredStudents)}</div>
                            <div class="class-stat-label">Avg GPA</div>
                        </div>
                        <div class="class-stat">
                            <div class="class-stat-value">${calculateClassAverageAttendance(filteredStudents)}%</div>
                            <div class="class-stat-label">Avg Attendance</div>
                        </div>
                    </div>
                </div>
                <div class="class-students" id="${className.replace(' ', '-').toLowerCase()}-students">
                    <!-- Students will be added here -->
                </div>
            `;
            studentsList.appendChild(classSection);
            
            // Add students for this class
            const classStudentsContainer = document.getElementById(`${className.replace(' ', '-').toLowerCase()}-students`);
            filteredStudents.forEach(student => {
                const studentCard = createStudentCard(student);
                classStudentsContainer.appendChild(studentCard);
            });
            
            // Add event listeners to student action buttons
            addStudentActionListeners();
        } else {
            studentsList.innerHTML = `
                <div class="no-students-message">
                    <i class="fas fa-user-graduate"></i>
                    <h3>No students found in ${className}</h3>
                    <p>Add students to this class using the "Add Student" button.</p>
                </div>
            `;
        }
    }
    
    // Update quick stats if it's the "All" tab
    if (className === 'all') {
        updateQuickStats(students);
    }
}

// Function to update quick stats bar
function updateQuickStats(students) {
    // Check if quick stats bar already exists
    let quickStatsBar = document.querySelector('.quick-stats-bar');
    if (!quickStatsBar) {
        quickStatsBar = document.createElement('div');
        quickStatsBar.className = 'quick-stats-bar';
        document.querySelector('.students-list').prepend(quickStatsBar);
    }
    
    // Calculate stats
    const totalStudents = students.length;
    const activeStudents = students.filter(s => s.status === 'active').length;
    const avgGPA = calculateOverallAverageGPA(students).toFixed(2);
    const avgAttendance = calculateOverallAverageAttendance(students);
    
    quickStatsBar.innerHTML = `
        <div class="quick-stat">
            <div class="quick-stat-icon">
                <i class="fas fa-users"></i>
            </div>
            <div class="quick-stat-value">${totalStudents}</div>
            <div class="quick-stat-label">Total Students</div>
        </div>
        <div class="quick-stat">
            <div class="quick-stat-icon">
                <i class="fas fa-user-check"></i>
            </div>
            <div class="quick-stat-value">${activeStudents}</div>
            <div class="quick-stat-label">Active</div>
        </div>
        <div class="quick-stat">
            <div class="quick-stat-icon">
                <i class="fas fa-chart-line"></i>
            </div>
            <div class="quick-stat-value">${avgGPA}</div>
            <div class="quick-stat-label">Avg GPA</div>
        </div>
        <div class="quick-stat">
            <div class="quick-stat-icon">
                <i class="fas fa-calendar-check"></i>
            </div>
            <div class="quick-stat-value">${avgAttendance}%</div>
            <div class="quick-stat-label">Avg Attendance</div>
        </div>
    `;
}

// Helper functions for calculations
function calculateClassAverageGPA(students) {
    if (students.length === 0) return '0.0';
    const total = students.reduce((sum, student) => sum + parseFloat(student.gpa), 0);
    return (total / students.length).toFixed(1);
}

function calculateClassAverageAttendance(students) {
    if (students.length === 0) return '0';
    const total = students.reduce((sum, student) => sum + parseInt(student.attendance), 0);
    return Math.round(total / students.length);
}

function calculateOverallAverageGPA(students) {
    if (students.length === 0) return 0;
    const total = students.reduce((sum, student) => sum + parseFloat(student.gpa), 0);
    return total / students.length;
}

function calculateOverallAverageAttendance(students) {
    if (students.length === 0) return 0;
    const total = students.reduce((sum, student) => sum + parseInt(student.attendance), 0);
    return Math.round(total / students.length);
}

// Enhanced student card creation
function createStudentCard(student) {
    const card = document.createElement('div');
    card.className = 'student-card';
    card.dataset.id = student.id;
    card.dataset.class = student.className;
    card.innerHTML = `
        <div class="student-info">
            <h4>${student.fullName}</h4>
            <div class="student-details">
                <p><i class="fas fa-id-card"></i> ID: ${student.id}</p>
                <p><i class="fas fa-graduation-cap"></i> Class: ${student.className}</p>
                <p><i class="fas fa-user"></i> Gender: ${student.gender}</p>
                <p><i class="fas fa-birthday-cake"></i> Age: ${student.age}</p>
                <p><i class="fas fa-chart-line"></i> GPA: ${student.gpa}</p>
                <p><i class="fas fa-calendar-check"></i> Attendance: ${student.attendance}%</p>
                <p><i class="fas fa-envelope"></i> ${student.email}</p>
                <p><i class="fas fa-phone"></i> ${student.phone}</p>
                <p><i class="fas fa-user-friends"></i> Guardian: ${student.guardianName}</p>
            </div>
        </div>
        <div class="student-actions">
            <button class="btn-icon view-student" title="View Details" data-id="${student.id}">
                <i class="fas fa-eye"></i>
            </button>
            <button class="btn-icon edit-student" title="Edit" data-id="${student.id}">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn-icon contact-student" title="Contact" data-id="${student.id}">
                <i class="fas fa-phone"></i>
            </button>
            <button class="btn-icon delete-student" title="Delete" data-id="${student.id}">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
    return card;
}

// Setup search and filter functionality
function setupStudentSearchAndFilters() {
    const searchInput = document.getElementById('student-search');
    const classFilter = document.getElementById('class-filter');
    const statusFilter = document.getElementById('status-filter');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterStudents();
        });
    }
    
    if (classFilter) {
        // Populate class filter dropdown
        classFilter.innerHTML = '<option value="all">All Classes</option>';
        const allClasses = [...ghanaClasses.nursery, ...ghanaClasses.primary, ...ghanaClasses.jhs];
        allClasses.forEach(className => {
            const option = document.createElement('option');
            option.value = className.toLowerCase().replace(' ', '');
            option.textContent = className;
            classFilter.appendChild(option);
        });
        
        classFilter.addEventListener('change', filterStudents);
    }
    
    if (statusFilter) {
        statusFilter.addEventListener('change', filterStudents);
    }
}

// Enhanced filter function
function filterStudents() {
    const searchTerm = document.getElementById('student-search').value.toLowerCase();
    const classFilterValue = document.getElementById('class-filter').value;
    const statusFilterValue = document.getElementById('status-filter').value;
    
    // Get all students
    const allStudents = generateSampleStudentsWithNames();
    
    // Filter students based on criteria
    const filteredStudents = allStudents.filter(student => {
        const matchesSearch = student.fullName.toLowerCase().includes(searchTerm) || 
                             student.id.toLowerCase().includes(searchTerm) ||
                             student.email.toLowerCase().includes(searchTerm);
        
        const matchesClass = classFilterValue === 'all' || 
                           student.className.toLowerCase().replace(' ', '') === classFilterValue;
        
        const matchesStatus = statusFilterValue === 'all' || 
                            student.status === statusFilterValue;
        
        return matchesSearch && matchesClass && matchesStatus;
    });
    
    // Update active tab display
    if (activeClassTab === 'all') {
        displayStudentsByGhanaClass(filteredStudents);
    } else {
        filterStudentsByClass(filteredStudents, activeClassTab);
    }
    
    // Update tab counts
    updateTabCounts(filteredStudents);
}

// Function to update tab counts
function updateTabCounts(filteredStudents) {
    const tabs = document.querySelectorAll('.class-tab');
    
    // Group students by class
    const groupedStudents = {};
    filteredStudents.forEach(student => {
        if (!groupedStudents[student.className]) {
            groupedStudents[student.className] = [];
        }
        groupedStudents[student.className].push(student);
    });
    
    // Update counts for each tab
    tabs.forEach(tab => {
        const className = tab.dataset.class;
        let count = 0;
        
        if (className === 'all') {
            count = filteredStudents.length;
        } else {
            count = groupedStudents[className] ? groupedStudents[className].length : 0;
        }
        
        const countElement = tab.querySelector('.student-count');
        if (countElement) {
            countElement.textContent = count;
            
            // Hide tab if no students in that class
            if (count === 0 && className !== 'all') {
                tab.style.display = 'none';
            } else {
                tab.style.display = 'flex';
            }
        }
    });
}

// Update the populateStudentsList function
function populateStudentsList() {
    const studentsList = document.getElementById('students-list');
    if (!studentsList) return;
    
    // Show/hide add student button based on user type
    const addStudentBtn = document.getElementById('add-student-btn');
    if (addStudentBtn) {
        addStudentBtn.style.display = appState.currentUser?.type === 'admin' ? 'block' : 'none';
    }
    
    // Load students based on user type
    if (appState.currentUser?.type === 'admin') {
        // Admin gets the enhanced view with tabs
        initializeStudentManagement();
    } else {
        // Other users get basic student list
        const sampleStudents = generateSampleStudentsWithNames();
        displayStudentsByGhanaClass(sampleStudents);
    }
}

// Update student view state
function updateStudentViewState(selectedClass) {
    // You can add functionality here to update URL or save state
    console.log(`Selected class: ${selectedClass}`);
    
    // Update page title
    const titlePrefix = selectedClass === 'all' ? 'All Students' : selectedClass;
    document.title = `${titlePrefix} - Student Management | School Management System`;
}

// Add these new CSS styles for better visual feedback
const style = document.createElement('style');
style.textContent = `
    .badge {
        background: #007bff;
        color: white;
        padding: 3px 10px;
        border-radius: 12px;
        font-size: 0.9rem;
        font-weight: 600;
    }
    
    .no-students-message {
        text-align: center;
        padding: 40px 20px;
        background: #f8f9fa;
        border-radius: 10px;
        border: 2px dashed #dee2e6;
    }
    
    .no-students-message i {
        font-size: 48px;
        color: #adb5bd;
        margin-bottom: 20px;
    }
    
    .no-students-message h3 {
        color: #6c757d;
        margin-bottom: 10px;
    }
    
    .no-students-message p {
        color: #6c757d;
    }
    
    /* Animation for tab switching */
    .class-section {
        animation: fadeIn 0.5s ease;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);


// ==================== LIVE DASHBOARD UPDATES ====================

class LiveDashboardUpdates {
    constructor() {
        this.updateInterval = null;
        this.isUpdating = false;
        this.startLiveUpdates();
    }

    startLiveUpdates() {
        // Update every 3 seconds
        this.updateInterval = setInterval(() => {
            if (appState.currentUser?.type === 'admin' && appState.currentSection === 'dashboard') {
                this.refreshDashboardData();
            }
        }, 3000);
    }

    stopLiveUpdates() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
            this.updateInterval = null;
        }
    }

    refreshDashboardData() {
        // Get current total students
        const totalStudents = sampleData.students.length;
        
        // Update the total students card
        this.updateTotalStudents(totalStudents);
        
        // Update other metrics
        this.updateTeacherCount();
        this.updateFeeStatus();
        this.updatePerformanceMetrics();
        
        // Show subtle notification
        this.showUpdateNotification();
    }

    updateTotalStudents(currentTotal) {
        const totalStudentsElement = document.getElementById('current-gpa');
        if (totalStudentsElement) {
            // Get previous value for animation
            const previousValue = totalStudentsElement.textContent;
            
            // Update the value
            totalStudentsElement.textContent = currentTotal;
            
            // Add highlight animation if value changed
            if (previousValue != currentTotal) {
                this.addHighlightEffect(totalStudentsElement);
                
                // Show change notification
                const change = currentTotal - parseInt(previousValue || 0);
                if (change > 0) {
                    showNotification(`📊 New student enrolled! Total: ${currentTotal} (+${change})`, 'success');
                }
            }
        }
    }

    updateTeacherCount() {
        const totalTeachers = sampleData.teachers.length;
        const teacherElement = document.getElementById('attendance');
        if (teacherElement) {
            const previousValue = teacherElement.textContent;
            teacherElement.textContent = totalTeachers;
            
            if (previousValue != totalTeachers) {
                this.addHighlightEffect(teacherElement);
            }
        }
    }

    updateFeeStatus() {
        const studentsOwing = this.calculateStudentsOwingFees();
        const feeElement = document.getElementById('upcoming-tests');
        if (feeElement) {
            const previousValue = feeElement.textContent;
            feeElement.textContent = studentsOwing;
            
            if (previousValue != studentsOwing) {
                this.addHighlightEffect(feeElement);
            }
        }
    }

    updatePerformanceMetrics() {
        const underperforming = this.calculateUnderperformingStudents();
        const performing = this.calculatePerformingStudents();
        
        const underperformingElement = document.getElementById('library-books');
        const performingElement = document.getElementById('performing-students');
        
        if (underperformingElement) {
            underperformingElement.textContent = underperforming;
        }
        
        if (performingElement) {
            performingElement.textContent = performing;
        }
    }

    calculateStudentsOwingFees() {
        let count = 0;
        sampleData.students.forEach(student => {
            const studentFees = sampleData.fees[student.id];
            if (studentFees) {
                const hasPendingFees = studentFees.some(fee => 
                    fee.status === 'pending' || fee.status === 'overdue'
                );
                if (hasPendingFees) count++;
            }
        });
        return count;
    }

    calculateUnderperformingStudents() {
        return sampleData.students.filter(student => student.gpa < 2.5).length;
    }

    calculatePerformingStudents() {
        return sampleData.students.filter(student => student.gpa >= 3.5).length;
    }

    addHighlightEffect(element) {
        // Add highlight class
        element.classList.add('dashboard-updated');
        
        // Remove highlight after animation
        setTimeout(() => {
            element.classList.remove('dashboard-updated');
        }, 1500);
    }

    showUpdateNotification() {
        // Optional: Show subtle indicator that dashboard updated
        const timestamp = new Date().toLocaleTimeString();
        const dashboardHeader = document.querySelector('.dashboard-header');
        
        let updateIndicator = document.getElementById('live-update-indicator');
        
        if (!updateIndicator) {
            updateIndicator = document.createElement('div');
            updateIndicator.id = 'live-update-indicator';
            updateIndicator.className = 'update-indicator';
            if (dashboardHeader) {
                dashboardHeader.appendChild(updateIndicator);
            }
        }
        
        updateIndicator.innerHTML = `<i class="fas fa-sync-alt"></i> Updated at ${timestamp}`;
        updateIndicator.classList.add('visible');
        
        setTimeout(() => {
            updateIndicator.classList.remove('visible');
        }, 2000);
    }

    // Method to simulate student enrollment (for demo purposes)
    simulateNewEnrollment() {
        // Only run in demo mode
        if (!this.isDemoMode()) return;
        
        // 10% chance to add a new student every update
        if (Math.random() < 0.1) {
            this.addRandomStudent();
        }
        
        // 5% chance to update existing student GPA
        if (Math.random() < 0.05) {
            this.updateRandomStudentGPA();
        }
    }

    isDemoMode() {
        // Check if we're in demo mode (you can set this flag)
        return true; // Set to false in production
    }

    addRandomStudent() {
        // Generate random Ghanaian student
        const ghanaianNames = {
            maleFirstNames: ['Kwame', 'Kofi', 'Kwasi', 'Kwadwo', 'Kwaku', 'Yaw'],
            femaleFirstNames: ['Ama', 'Abena', 'Akosua', 'Adwoa', 'Akua', 'Yaa'],
            lastNames: ['Mensah', 'Appiah', 'Owusu', 'Agyemang', 'Asare', 'Boateng']
        };

        const isMale = Math.random() > 0.5;
        const firstName = isMale ? 
            ghanaianNames.maleFirstNames[Math.floor(Math.random() * ghanaianNames.maleFirstNames.length)] :
            ghanaianNames.femaleFirstNames[Math.floor(Math.random() * ghanaianNames.femaleFirstNames.length)];
        const lastName = ghanaianNames.lastNames[Math.floor(Math.random() * ghanaianNames.lastNames.length)];
        const fullName = `${firstName} ${lastName}`;
        
        // Generate new student ID
        const newId = 'STU' + (sampleData.students.length + 1).toString().padStart(3, '0');
        
        // Available classes with Ghana education system
    const allClasses = [...ghanaClasses.nursery, ...ghanaClasses.primary, ...ghanaClasses.jhs];
    const randomClass = allClasses[Math.floor(Math.random() * allClasses.length)];

     // Calculate age based on class
    const age = calculateAgeForClass(randomClass);
    const dob = generateDOB(age);
        
       // Create new student with Ghanaian format
    const newStudent = {
        id: newId,
        name: fullName,
        fullName: fullName,
        firstName: firstName,
        lastName: lastName,
        gender: isMale ? 'Male' : 'Female',
        class: randomClass,
        className: randomClass,
        gpa: (Math.random() * 2 + 2).toFixed(1),
        attendance: Math.floor(Math.random() * 20 + 80),
        dob: dob,
        age: age,
        phone: generateGhanaianPhoneNumber(),
        email: generateEmail(firstName, lastName),
        guardianName: generateGuardianName(lastName),
        address: generateGhanaianAddress(),
        enrollmentDate: generateEnrollmentDate(randomClass),
        status: 'active'
    };
        
        // Add to sample data
        sampleData.students.push(newStudent);
        
        // Create parent account
        const parentId = `PARENT_${newId}`;
        sampleData.users[parentId] = {
            password: 'parent123',
            type: 'parent',
            userData: newId
        };
        
        // Initialize fees for new student
        sampleData.fees[newId] = [
            { date: new Date().toISOString().split('T')[0], description: 'Term 1 Tuition', amount: 400, status: 'pending', receipt: '' }
        ];

        
        
        // Log the enrollment
        console.log(`🎓 New student enrolled: ${fullName} (${newId}) - Class: ${randomClass}`);

         // Update the classStudentNames to track this student
    if (!classStudentNames[randomClass]) {
        classStudentNames[randomClass] = [];
    }
    classStudentNames[randomClass].push({
        firstName,
        lastName,
        fullName,
        gender: isMale ? 'Male' : 'Female'
    });
    
    console.log(`🎓 New student enrolled: ${fullName} (${newId}) - Class: ${randomClass}`);

     // Force immediate dashboard update
    if (appState.currentSection === 'dashboard') {
        updateDashboard();
        updateAdminDashboard();
    }

    // Show notification
    showNotification(`🎓 New student enrolled: ${fullName} (${randomClass})`, 'success');
    }

    updateRandomStudentGPA() {
        if (sampleData.students.length === 0) return;
        
        const randomIndex = Math.floor(Math.random() * sampleData.students.length);
        const student = sampleData.students[randomIndex];
        
        // Increase GPA by 0.1-0.3
        const oldGPA = parseFloat(student.gpa);
        const newGPA = Math.min(4.0, oldGPA + (Math.random() * 0.2 + 0.1));
        student.gpa = newGPA.toFixed(1);
        
        console.log(`📈 GPA updated: ${student.name} - ${oldGPA} → ${student.gpa}`);
    }
}

// Initialize live updates
let liveDashboard = null;

// Function to start live dashboard updates
function startLiveDashboardUpdates() {
    if (!liveDashboard) {
        liveDashboard = new LiveDashboardUpdates();
        console.log('🔄 Live dashboard updates started');
    }
}

// Function to stop live dashboard updates
function stopLiveDashboardUpdates() {
    if (liveDashboard) {
        liveDashboard.stopLiveUpdates();
        liveDashboard = null;
        console.log('⏹️ Live dashboard updates stopped');
    }
}

// Override the navigateToSection function to handle live updates
const originalNavigateToSection = navigateToSection;
navigateToSection = function(sectionId) {
    // Call original function
    originalNavigateToSection(sectionId);
    
    // Start/stop live updates based on section
    if (sectionId === 'dashboard' && appState.currentUser?.type === 'admin') {
        startLiveDashboardUpdates();
    } else {
        stopLiveDashboardUpdates();
    }
};

// Override handleLogout to stop updates
const originalHandleLogout = handleLogout;
handleLogout = function() {
    stopLiveDashboardUpdates();
    originalHandleLogout();
};