function StudentOverview(){
return (
    <>
    <div class="student-tab-content active" id="dashboard">
                <div class="student-content-header">
                    <h2>Dashboard Overview</h2>
                    <div class="student-quick-actions">
                        <button class="student-btn student-btn-primary" onclick="switchTab('assignments')">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                <line x1="16" y1="2" x2="16" y2="6"/>
                                <line x1="8" y1="2" x2="8" y2="6"/>
                                <line x1="3" y1="10" x2="21" y2="10"/>
                            </svg>
                            View Assignments
                        </button>
                    </div>
                </div>

                <div class="student-stats-grid">
                    <div class="student-stat-card">
                        <div class="student-stat-icon pending">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <polyline points="12,6 12,12 16,14"/>
                            </svg>
                        </div>
                        <div class="student-stat-info">
                            <h3 id="pendingAssignments">3</h3>
                            <p>Pending Assignments</p>
                        </div>
                    </div>
                    <div class="student-stat-card">
                        <div class="student-stat-icon submitted">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
                            </svg>
                        </div>
                        <div class="student-stat-info">
                            <h3 id="submittedAssignments">8</h3>
                            <p>Submitted</p>
                        </div>
                    </div>
                    <div class="student-stat-card">
                        <div class="student-stat-icon graded">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                                <path d="m9 12 2 2 4-4"/>
                            </svg>
                        </div>
                        <div class="student-stat-info">
                            <h3 id="gradedAssignments">6</h3>
                            <p>Graded</p>
                        </div>
                    </div>
                    <div class="student-stat-card">
                        <div class="student-stat-icon average">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26"/>
                            </svg>
                        </div>
                        <div class="student-stat-info">
                            <h3 id="averageScore">85%</h3>
                            <p>Average Score</p>
                        </div>
                    </div>
                </div>
                </div>
    </>
)
}
export default StudentOverview;