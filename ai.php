<?php

use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\ResultController;
use App\Http\Controllers\AnalysisController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\TimetableController;
use App\Http\Controllers\FeeController;
use App\Http\Controllers\LibraryController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\BehaviorController;
use App\Http\Controllers\ResourceController;
use App\Http\Controllers\ParentController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\NotificationController;

// Authentication
Route::post('/login', [StudentController::class, 'login']);

// Student routes
Route::get('/students', [StudentController::class, 'index']);
Route::post('/students', [StudentController::class, 'store']);
Route::get('/students/{id}', [StudentController::class, 'show']);
Route::put('/students/{id}', [StudentController::class, 'update']);

// Teacher routes
Route::get('/teachers', [TeacherController::class, 'index']);
Route::get('/teachers/{id}', [TeacherController::class, 'show']);

// Result routes
Route::get('/results', [ResultController::class, 'index']);
Route::get('/results/{studentId}/{term}', [ResultController::class, 'getStudentResults']);
Route::post('/results', [ResultController::class, 'store']);

// Analysis routes
Route::get('/analysis/{studentId}', [AnalysisController::class, 'getStudentAnalysis']);
Route::get('/analysis/{studentId}/compare', [AnalysisController::class, 'compareResults']);

// Attendance routes
Route::get('/attendance', [AttendanceController::class, 'index']);
Route::post('/attendance', [AttendanceController::class, 'mark']);
Route::get('/attendance/report', [AttendanceController::class, 'report']);

// Timetable routes
Route::get('/timetable/{class}', [TimetableController::class, 'getClassTimetable']);

// Fee routes
Route::get('/fees/{studentId}', [FeeController::class, 'getStudentFees']);
Route::post('/fees/payment', [FeeController::class, 'recordPayment']);

// Library routes
Route::get('/books', [LibraryController::class, 'index']);
Route::get('/books/borrowed', [LibraryController::class, 'getBorrowedBooks']);
Route::post('/books/borrow', [LibraryController::class, 'borrowBook']);

// Exam routes
Route::get('/exams', [ExamController::class, 'index']);
Route::post('/exams', [ExamController::class, 'store']);

// Behavior routes
Route::get('/behavior/{studentId}', [BehaviorController::class, 'getStudentBehavior']);
Route::post('/behavior', [BehaviorController::class, 'store']);

// Resource routes
Route::get('/resources', [ResourceController::class, 'index']);
Route::post('/resources', [ResourceController::class, 'store']);
Route::post('/resources/upload', [ResourceController::class, 'upload']);

// Parent routes
Route::get('/parent/children', [ParentController::class, 'getChildren']);
Route::get('/parent/progress/{childId}', [ParentController::class, 'getChildProgress']);

// Report routes
Route::post('/reports/generate', [ReportController::class, 'generate']);

// Notification routes
Route::get('/notifications', [NotificationController::class, 'index']);
Route::post('/notifications', [NotificationController::class, 'send']);