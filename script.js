// Comprehensive School Management System
// This file contains all the functionality for the system

// Sample data - In a real application, this would come from your Laravel backend
const sampleData = {
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
        term1: [
            { studentId: 'STU001', name: 'John Doe', math: 85, science: 78, english: 92, history: 75, total: 330, grade: 'B+' },
            { studentId: 'STU002', name: 'Jane Smith', math: 92, science: 88, english: 95, history: 90, total: 365, grade: 'A' },
            { studentId: 'STU003', name: 'Michael Johnson', math: 78, science: 82, english: 85, history: 80, total: 325, grade: 'B' },
            { studentId: 'STU004', name: 'Emily Davis', math: 88, science: 85, english: 90, history: 82, total: 345, grade: 'B+' },
            { studentId: 'STU005', name: 'Robert Wilson', math: 80, science: 75, english: 85, history: 78, total: 318, grade: 'B' }
        ],
        term2: [
            { studentId: 'STU001', name: 'John Doe', math: 88, science: 82, english: 94, history: 80, total: 344, grade: 'B+' },
            { studentId: 'STU002', name: 'Jane Smith', math: 95, science: 90, english: 96, history: 92, total: 373, grade: 'A' },
            { studentId: 'STU003', name: 'Michael Johnson', math: 82, science: 85, english: 88, history: 83, total: 338, grade: 'B+' },
            { studentId: 'STU004', name: 'Emily Davis', math: 90, science: 88, english: 92, history: 85, total: 355, grade: 'A-' },
            { studentId: 'STU005', name: 'Robert Wilson', math: 85, science: 80, english: 88, history: 82, total: 335, grade: 'B+' }
        ],
        term3: [
            { studentId: 'STU001', name: 'John Doe', math: 92, science: 85, english: 96, history: 85, total: 358, grade: 'A-' },
            { studentId: 'STU002', name: 'Jane Smith', math: 98, science: 92, english: 97, history: 94, total: 381, grade: 'A' },
            { studentId: 'STU003', name: 'Michael Johnson', math: 85, science: 88, english: 90, history: 85, total: 348, grade: 'B+' },
            { studentId: 'STU004', name: 'Emily Davis', math: 92, science: 90, english: 94, history: 88, total: 364, grade: 'A-' },
            { studentId: 'STU005', name: 'Robert Wilson', math: 88, science: 82, english: 90, history: 85, total: 345, grade: 'B+' }
        ]
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
    
    // Login form
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    
    // Accessibility controls
    document.getElementById('high-contrast-toggle').addEventListener('click', toggleHighContrast);
    document.getElementById('font-size-toggle').addEventListener('click', toggleFontSize);
    
    // Language selector
    document.getElementById('language').addEventListener('change', function() {
        changeLanguage(this.value);
    });
    
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
}

function loadInitialData() {
    // In a real application, this would load data from the backend
    console.log('Loading initial data...');
}

// Navigation and Section Management
function navigateToSection(sectionId) {
    if (appState.currentUser || sectionId === 'login') {
        showSection(sectionId);
        updateActiveNavLink(sectionId);
        appState.currentSection = sectionId;
    } else {
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

// Enhanced Authentication System
function handleLogin(e) {
    e.preventDefault();
    const studentId = document.getElementById('student-id').value.trim();
    const userType = document.getElementById('user-type').value;
    
    if (!studentId) {
        showNotification('Please enter your Student ID', 'error');
        return;
    }

    // Simple validation - in real app, this would be an API call
    if (userType === 'student') {
        const student = sampleData.students.find(s => s.id === studentId);
        if (student) {
            appState.currentUser = { 
                ...student, 
                type: 'student',
                loginTime: new Date().toISOString()
            };
            
            // Update UI
            updateDashboard();
            showNotification(`Welcome back, ${student.name}!`, 'success');
            navigateToSection('dashboard');
            addLogoutButton();
        } else {
            showNotification('Student ID not found. Please check your ID and try again.', 'error');
        }
    } else {
        // For demo purposes, allow any ID for other user types
        appState.currentUser = { 
            id: studentId, 
            name: `${userType.charAt(0).toUpperCase() + userType.slice(1)} User`, 
            type: userType,
            loginTime: new Date().toISOString()
        };
        
        showNotification(`Welcome, ${appState.currentUser.name}!`, 'success');
        updateDashboard();
        navigateToSection('dashboard');
        addLogoutButton();
    }
    
    // Store login state
    localStorage.setItem('currentUser', JSON.stringify(appState.currentUser));
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

function updateSectionData(sectionId) {
    switch(sectionId) {
        case 'dashboard':
            updateDashboard();
            break;
        case 'students':
            populateStudentsList();
            break;
        case 'results':
            updateResultsTable();
            break;
        case 'analysis':
            updateAnalysis();
            break;
        // Add other sections as needed
    }
}

// Check for existing login session on page load
function checkExistingLogin() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        try {
            appState.currentUser = JSON.parse(savedUser);
            // Verify the user still exists (in a real app, this would be an API call)
            if (appState.currentUser.type === 'student') {
                const studentExists = sampleData.students.find(s => s.id === appState.currentUser.id);
                if (!studentExists) {
                    localStorage.removeItem('currentUser');
                    appState.currentUser = null;
                    return;
                }
            }
            
            showNotification(`Welcome back, ${appState.currentUser.name}!`, 'success');
            navigateToSection('dashboard');
            addLogoutButton();
        } catch (e) {
            console.error('Error parsing saved user:', e);
            localStorage.removeItem('currentUser');
        }
    }
}

// Enhanced logout functionality
function addLogoutButton() {
    // Check if logout button already exists
    if (!document.getElementById('logout-btn')) {
        const logoutBtn = document.createElement('button');
        logoutBtn.id = 'logout-btn';
        logoutBtn.className = 'btn-secondary';
        logoutBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> Logout';
        logoutBtn.style.marginLeft = 'auto';
        logoutBtn.addEventListener('click', handleLogout);
        
        const headerActions = document.querySelector('.header-actions');
        if (headerActions) {
            headerActions.appendChild(logoutBtn);
        }
    }
}

function handleLogout() {
    appState.currentUser = null;
    localStorage.removeItem('currentUser');
    showNotification('You have been logged out successfully', 'info');
    navigateToSection('login');
    
    // Remove logout button
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.remove();
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
    
    if (appState.currentUser.type === 'student') {
        document.getElementById('student-name').textContent = appState.currentUser.name;
        document.getElementById('student-id-display').textContent = appState.currentUser.id;
        document.getElementById('student-class').textContent = appState.currentUser.class;
        document.getElementById('current-gpa').textContent = appState.currentUser.gpa;
        document.getElementById('attendance').textContent = `${appState.currentUser.attendance}%`;
        
        updateRecentResults();
        updateExamScheduleWidget();
        updateFeeStatusWidget();
        updateLibraryBooksWidget();
    }
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
                <button class="btn-primary">Edit</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function viewTeacher(teacherId) {
    const teacher = sampleData.teachers.find(t => t.id === teacherId);
    if (teacher) {
        alert(`Teacher Details:\nName: ${teacher.name}\nID: ${teacher.id}\nSubject: ${teacher.subject}\nEmail: ${teacher.email}\nExperience: ${teacher.experience}`);
    }
}

// Results Management
function updateResultsTable() {
    const term = document.getElementById('result-term').value;
    const classFilter = document.getElementById('result-class').value;
    
    let results = sampleData.results[term] || [];
    
    // Filter by class if needed
    if (classFilter !== 'all') {
        results = results.filter(result => {
            const student = sampleData.students.find(s => s.id === result.studentId);
            return student && student.class === classFilter;
        });
    }
    
    const tbody = document.querySelector('#results-table tbody');
    tbody.innerHTML = '';
    
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
                <button class="btn-primary" onclick="viewResultDetails('${result.studentId}', '${term}')">View</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function exportResults() {
    // In a real application, this would generate and download a file
    alert('Exporting results... This would download a file in a real application.');
}

function viewResultDetails(studentId, term) {
    const result = sampleData.results[term].find(r => r.studentId === studentId);
    if (result) {
        alert(`Result Details for ${result.name} (${term}):\nMathematics: ${result.math}\nScience: ${result.science}\nEnglish: ${result.english}\nHistory: ${result.history}\nTotal: ${result.total}\nGrade: ${result.grade}`);
    }
}

function updateRecentResults() {
    if (!appState.currentUser || appState.currentUser.type !== 'student') return;
    
    const recentResultsList = document.getElementById('recent-results-list');
    if (!recentResultsList) return;
    
    const latestResults = sampleData.results.term3.find(r => r.studentId === appState.currentUser.id);
    
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
    }
}

// Analysis
function updateAnalysis() {
    const studentId = document.getElementById('analysis-student').value;
    const period = document.getElementById('analysis-period').value;
    
    if (!studentId) {
        alert('Please select a student');
        return;
    }
    
    const analysis = sampleData.analysis[studentId] && sampleData.analysis[studentId][period];
    
    if (analysis) {
        // Update performance summary
        document.getElementById('overall-performance').innerHTML = 
            `<span class="trend ${analysis.overall.includes('+') ? 'up' : 'down'}">${analysis.overall}</span>`;
        document.getElementById('strongest-subject').textContent = analysis.strongest;
        document.getElementById('weakest-subject').textContent = analysis.weakest;
        document.getElementById('predicted-grade').textContent = analysis.predicted;
        
        // Update analysis table
        const tbody = document.querySelector('#analysis-table tbody');
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
        
        // Render simple chart
        renderSimpleChart(analysis.subjects);
    } else {
        alert('No analysis data available for the selected student and period.');
    }
}

function renderSimpleChart(subjects) {
    const chart = document.getElementById('comparison-chart');
    
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
    const classVal = document.getElementById('attendance-class').value;
    
    if (!date) {
        alert('Please select a date');
        return;
    }
    
    // In a real application, this would save to the backend
    alert(`Attendance marked for ${classVal} on ${date}`);
    
    // Update attendance table
    updateAttendanceTable(classVal);
}

function updateAttendanceTable(classVal) {
    const tbody = document.querySelector('#attendance-table tbody');
    tbody.innerHTML = '';
    
    const classStudents = sampleData.students.filter(s => s.class === classVal);
    
    classStudents.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>
                <select>
                    <option value="present">Present</option>
                    <option value="absent">Absent</option>
                    <option value="late">Late</option>
                </select>
            </td>
            <td><input type="text" placeholder="Remarks"></td>
        `;
        tbody.appendChild(row);
    });
}

function viewAttendanceReport() {
    alert('Opening attendance report...');
    // In a real application, this would show a detailed report
}

// Timetable
function updateTimetable() {
    const classVal = document.getElementById('timetable-class').value;
    const day = document.getElementById('timetable-day').value;
    
    const timetable = sampleData.timetable[classVal] && sampleData.timetable[classVal][day];
    const timetableGrid = document.getElementById('timetable-grid');
    
    if (timetable) {
        timetableGrid.innerHTML = `
            <div class="timetable-day">
                <h3>${day.charAt(0).toUpperCase() + day.slice(1)} - ${classVal}</h3>
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

function printTimetable() {
    window.print();
}

// Fee Management
function updateFeeData() {
    if (!appState.currentUser || appState.currentUser.type !== 'student') return;
    
    const feeData = sampleData.fees[appState.currentUser.id] || [];
    
    // Update fee summary
    const total = feeData.reduce((sum, fee) => sum + fee.amount, 0);
    const paid = feeData.filter(f => f.status === 'paid').reduce((sum, fee) => sum + fee.amount, 0);
    const pending = feeData.filter(f => f.status === 'pending').reduce((sum, fee) => sum + fee.amount, 0);
    const overdue = feeData.filter(f => f.status === 'overdue').reduce((sum, fee) => sum + fee.amount, 0);
    
    document.querySelector('.fee-summary .amount:nth-child(1)').textContent = `$${total}`;
    document.querySelector('.fee-summary .amount.paid').textContent = `$${paid}`;
    document.querySelector('.fee-summary .amount.pending').textContent = `$${pending}`;
    document.querySelector('.fee-summary .amount.overdue').textContent = `$${overdue}`;
    
    // Update fee history table
    const tbody = document.querySelector('#fee-table tbody');
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

function updateFeeStatusWidget() {
    if (!appState.currentUser || appState.currentUser.type !== 'student') return;
    
    const feeStatusWidget = document.getElementById('fee-status-widget');
    const feeData = sampleData.fees[appState.currentUser.id] || [];
    const pending = feeData.filter(f => f.status === 'pending' || f.status === 'overdue');
    
    if (feeStatusWidget) {
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
}

function recordPayment() {
    alert('Opening payment recording form...');
    // In a real application, this would open a form to record a payment
}

function sendFeeReminders() {
    alert('Sending fee reminders to parents...');
    // In a real application, this would send notifications/emails
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

// Initialize the students list when the page loads
window.onload = function() {
    populateStudentsList();
};