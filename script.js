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
        { id: 'EXM003', subject: 'English', class: '10A', date: '2024-04-19', time: '9:00 AM', duration: '2 hours' }
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
    notifications: document.getElementById('notifications')
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
        student: ['dashboard', 'results', 'analysis', 'attendance', 'timetable', 'fees', 'library', 'exams', 'behavior', 'resources', 'notifications'],
        teacher: ['dashboard', 'students', 'teachers', 'results', 'analysis', 'attendance', 'timetable', 'exams', 'behavior', 'resources', 'notifications'],
        parent: ['dashboard', 'parent-portal', 'results', 'attendance', 'fees', 'behavior', 'notifications'],
        admin: ['dashboard', 'students', 'teachers', 'results', 'analysis', 'attendance', 'timetable', 'fees', 'library', 'exams', 'behavior', 'resources', 'parent-portal', 'reports', 'notifications']
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
}

function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            navigateToSection(target);
        });
    });

    // Teacher management
    const addTeacherBtn = document.getElementById('add-teacher-btn');
    if (addTeacherBtn) {
        addTeacherBtn.addEventListener('click', addTeacher);
    }
    
    // Login form
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    
    // Accessibility controls
    document.getElementById('high-contrast-toggle').addEventListener('click', toggleHighContrast);
    document.getElementById('font-size-toggle').addEventListener('click', toggleFontSize);
    
    // Language selector
    document.getElementById('language').addEventListener('change', function() {
        changeLanguage(this.value);
    });

     // Results management
    document.getElementById('result-term').addEventListener('change', updateResultsTable);
    document.getElementById('result-class').addEventListener('change', updateResultsTable);
    document.getElementById('export-results').addEventListener('click', exportResults);
    
    // ADD THIS LINE RIGHT HERE:
    document.getElementById('result-year').addEventListener('change', updateResultsTable);

    function addTeacher() {
    alert('Opening add teacher form...');
    // In a real application, this would open a form to add a new teacher

    // Attendance event listeners
document.getElementById('attendance-class').addEventListener('change', updateAttendanceTable);
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



















    
    // Student management
    document.getElementById('add-student-btn').addEventListener('click', showStudentModal);
    document.getElementById('student-search').addEventListener('input', filterStudents);
    document.getElementById('class-filter').addEventListener('change', filterStudents);
    document.getElementById('status-filter').addEventListener('change', filterStudents);
    
    // Results management
    document.getElementById('result-term').addEventListener('change', updateResultsTable);
    document.getElementById('result-class').addEventListener('change', updateResultsTable);
    document.getElementById('export-results').addEventListener('click', exportResults);
    
    // Analysis
    document.getElementById('analysis-student').addEventListener('change', updateAnalysis);
    document.getElementById('analysis-period').addEventListener('change', updateAnalysis);
    document.getElementById('generate-analysis').addEventListener('click', updateAnalysis);
    
    // Attendance
    document.getElementById('mark-attendance').addEventListener('click', markAttendance);
    document.getElementById('view-report').addEventListener('click', viewAttendanceReport);
    
    // Timetable
    document.getElementById('timetable-class').addEventListener('change', updateTimetable);
    document.getElementById('timetable-day').addEventListener('change', updateTimetable);
    document.getElementById('print-timetable').addEventListener('click', printTimetable);
    
    // Fees
    document.getElementById('record-payment').addEventListener('click', recordPayment);
    document.getElementById('send-reminders').addEventListener('click', sendFeeReminders);
    
    // Library
    document.getElementById('book-search').addEventListener('input', searchBooks);
    
    // Exams
    document.getElementById('add-exam').addEventListener('click', addExam);
    
    // Behavior
    document.getElementById('add-behavior-record').addEventListener('click', addBehaviorRecord);
    
    // Resources
    document.querySelectorAll('.resource-category').forEach(btn => {
        btn.addEventListener('click', function() {
            filterResources(this.getAttribute('data-category'));
        });
    });
    document.getElementById('upload-resource').addEventListener('click', uploadResource);
    
    // Parent Portal
    document.getElementById('select-child').addEventListener('change', updateChildProgress);
    document.getElementById('message-teacher').addEventListener('click', messageTeacher);
    document.getElementById('schedule-meeting').addEventListener('click', scheduleMeeting);
    
    // Reports
    document.getElementById('generate-report').addEventListener('click', generateReport);
    
    // Notifications
    document.getElementById('send-announcement').addEventListener('click', sendAnnouncement);
    
    // Modal
    document.querySelector('.close').addEventListener('click', closeModal);
    document.getElementById('student-form').addEventListener('submit', addNewStudent);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('student-modal');
        if (e.target === modal) {
            closeModal();
        }
    });
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
    }
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
    
    const upcomingExams = sampleData.exams.filter(e => e.class === student.class).length;
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
    updateRecentResults();
    updateExamScheduleWidget();
    updateFeeStatusWidget();
    updateLibraryBooksWidget();
    updateAssignmentsWidget(student);
    updateTimetableWidget(student);
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
    const day = document.getElementById('timetable-day').value;
    
    // FIX: Add safe string conversion
    const safeClassVal = String(classVal || '');
    const safeDay = String(day || '');
    
    const timetable = sampleData.timetable[safeClassVal] && sampleData.timetable[safeClassVal][safeDay];
    const timetableGrid = document.getElementById('timetable-grid');
    
    if (timetable) {
        timetableGrid.innerHTML = `
            <div class="timetable-day">
                <h3>${safeDay.charAt(0).toUpperCase() + safeDay.slice(1)} - ${safeClassVal}</h3>
                ${timetable.map(period => `
                    <div class="timetable-period">
                        <div class="period-time">${period.time}</div>
                        <div class="period-details">
                            <div class="subject">${period.subject}</div>
                            <div class="teacher">${period.teacher}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    } else {
        timetableGrid.innerHTML = '<p>No timetable available for the selected class and day.</p>';
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
    console.log('Printing timetable...');
    window.print();
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

// Exam Management
function updateExamSchedule() {
    const examCalendar = document.getElementById('exam-calendar');
    const upcomingExamsList = document.getElementById('upcoming-exams-list');
    
    if (examCalendar) {
        examCalendar.innerHTML = `
            <div class="exam-month">
                <h3>April 2024</h3>
                <div class="exam-days">
                    ${sampleData.exams.map(exam => `
                        <div class="exam-day">
                            <div class="exam-date">${exam.date.split('-')[2]}</div>
                            <div class="exam-details">
                                <div class="exam-subject">${exam.subject}</div>
                                <div class="exam-time">${exam.time}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    if (upcomingExamsList) {
        upcomingExamsList.innerHTML = sampleData.exams.map(exam => `
            <div class="upcoming-exam">
                <h4>${exam.subject}</h4>
                <p>Date: ${exam.date}</p>
                <p>Time: ${exam.time}</p>
                <p>Duration: ${exam.duration}</p>
            </div>
        `).join('');
    }
}

function updateExamScheduleWidget() {
    if (!appState.currentUser || appState.currentUser.type !== 'student') return;
    
    const examScheduleWidget = document.getElementById('exam-schedule-widget');
    const upcomingExams = sampleData.exams.slice(0, 3); // Show next 3 exams
    
    if (examScheduleWidget) {
        examScheduleWidget.innerHTML = upcomingExams.map(exam => `
            <div class="exam-widget-item">
                <div class="exam-subject">${exam.subject}</div>
                <div class="exam-date">${exam.date}</div>
            </div>
        `).join('');
    }
}

function addExam() {
    alert('Opening add exam form...');
    // In a real application, this would open a form to add a new exam
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
    const resourcesGrid = document.getElementById('resources-grid');
    if (!resourcesGrid) return;
    
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
    const term = document.getElementById('result-term').value;
    const results = sampleData.results[term] || [];
    exportToCSV(results, `results_${term}.csv`);
    showNotification(`Results exported successfully for ${term}`, 'success');
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










