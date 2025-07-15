function StudentProgress(){
    return (
        <>
        <div class="student-tab-content" id="progress">
                <div class="student-content-header">
                    <h2>Academic Progress</h2>
                </div>
                <div class="student-progress-section">
                    <div class="student-progress-cards">
                        <div class="student-progress-card">
                            <h4>Overall Performance</h4>
                            <div class="student-progress-circle">
                                <div class="student-circle-progress" data-progress="85">
                                    <span class="student-progress-value">85%</span>
                                </div>
                            </div>
                            <p>Excellent performance across all subjects</p>
                        </div>
                        
                        <div class="student-subject-progress">
                            <h4>Subject-wise Performance</h4>
                            <div class="student-subject-bars">
                                <div class="student-subject-bar">
                                    <div class="student-subject-info">
                                        <span>Mathematics</span>
                                        <span>88%</span>
                                    </div>
                                    <div class="student-progress-bar">
                                        <div class="student-progress-fill" style={{width: '88%'}}></div>
                                    </div>
                                </div>
                                <div class="student-subject-bar">
                                    <div class="student-subject-info">
                                        <span>Science</span>
                                        <span>92%</span>
                                    </div>
                                    <div class="student-progress-bar">
                                        <div class="student-progress-fill" style={{width: '92%'}}></div>
                                    </div>
                                </div>
                                <div class="student-subject-bar">
                                    <div class="student-subject-info">
                                        <span>English</span>
                                        <span>79%</span>
                                    </div>
                                    <div class="student-progress-bar">
                                        <div class="student-progress-fill" style={{width: '79%'}}></div>
                                    </div>
                                </div>
                                <div class="student-subject-bar">
                                    <div class="student-subject-info">
                                        <span>History</span>
                                        <span>85%</span>
                                    </div>
                                    <div class="student-progress-bar">
                                        <div class="student-progress-fill" style={{width: '85%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="student-achievements">
                        <h4>Recent Achievements</h4>
                        <div class="student-achievement-list">
                            <div class="student-achievement-item">
                                <div class="student-achievement-icon">🏆</div>
                                <div class="student-achievement-info">
                                    <h5>Top Performer</h5>
                                    <p>Scored highest in Mathematics test</p>
                                </div>
                                <div class="student-achievement-date">Jan 15</div>
                            </div>
                            <div class="student-achievement-item">
                                <div class="student-achievement-icon">⭐</div>
                                <div class="student-achievement-info">
                                    <h5>Perfect Score</h5>
                                    <p>100% in Science assignment</p>
                                </div>
                                <div class="student-achievement-date">Jan 10</div>
                            </div>
                            <div class="student-achievement-item">
                                <div class="student-achievement-icon">🎯</div>
                                <div class="student-achievement-info">
                                    <h5>Consistent Performance</h5>
                                    <p>5 consecutive assignments above 80%</p>
                                </div>
                                <div class="student-achievement-date">Jan 5</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default StudentProgress;