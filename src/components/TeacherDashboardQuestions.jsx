function TeacherDashBoardQuestion(){
    // Teacher Dashboard JavaScript

// Sample data
const questions = [
    {
        id: 1,
        title: "Linear Equations in Two Variables",
        subject: "mathematics",
        text: "Solve the system of linear equations: 2x + 3y = 7 and x - y = 1. Show all working steps.",
        modelAnswer: "From equation 2: x = 1 + y. Substituting into equation 1: 2(1 + y) + 3y = 7...",
        maxMarks: 10,
        createdDate: "2024-01-15",
        submissions: 8,
        graded: 6
    },
    {
        id: 2,
        title: "Photosynthesis Process",
        subject: "science",
        text: "Explain the process of photosynthesis and write the chemical equation. Discuss the importance of chlorophyll.",
        modelAnswer: "Photosynthesis is the process by which plants convert light energy into chemical energy...",
        maxMarks: 15,
        createdDate: "2024-01-14",
        submissions: 12,
        graded: 10
    },
    {
        id: 3,
        title: "Shakespeare's Hamlet Analysis",
        subject: "english",
        text: "Analyze the character of Hamlet in Act 3, Scene 1. Discuss his internal conflict and decision-making process.",
        modelAnswer: "In Act 3, Scene 1, Hamlet's famous 'To be or not to be' soliloquy reveals...",
        maxMarks: 20,
        createdDate: "2024-01-13",
        submissions: 15,
        graded: 12
    }
];
return(
   <div>
            
            <div class="teacher-ai-tab-content active" id="dashboard">
                <div class="teacher-ai-content-header">
                    <h2>Dashboard Overview</h2>
                    <button class="teacher-ai-btn teacher-ai-btn-primary" onclick="openModal('addQuestionModal')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="8" x2="12" y2="16"/>
                            <line x1="8" y1="12" x2="16" y2="12"/>
                        </svg>
                        Add New Question
                    </button>
                </div>

                <div class="teacher-ai-stats-grid">
                    <div class="teacher-ai-stat-card">
                        <div class="teacher-ai-stat-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                <polyline points="14,2 14,8 20,8"/>
                            </svg>
                        </div>
                        <div class="teacher-ai-stat-info">
                            <h3 id="totalQuestions">12</h3>
                            <p>Total Questions</p>
                        </div>
                    </div>
                    <div class="teacher-ai-stat-card">
                        <div class="teacher-ai-stat-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                                <circle cx="9" cy="7" r="4"/>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                            </svg>
                        </div>
                        <div class="teacher-ai-stat-info">
                            <h3 id="totalSubmissions">45</h3>
                            <p>Total Submissions</p>
                        </div>
                    </div>
                    <div class="teacher-ai-stat-card">
                        <div class="teacher-ai-stat-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                                <path d="m9 12 2 2 4-4"/>
                            </svg>
                        </div>
                        <div class="teacher-ai-stat-info">
                            <h3 id="teacher-ai-gradedSubmissions">38</h3>
                            <p>Graded Submissions</p>
                        </div>
                    </div>
                </div>

                <div class="teacher-ai-questions-section">
                    <h3>Recent Questions</h3>
                    <div class="teacher-ai-questions-grid" id="questionsGrid">
                       {
                        questions.map(question=>(
                         <div class="teacher-ai-question-card">
                            <div class="question-card-header">
            <div>
                <h4 class="teacher-ai-question-title">{question.title}</h4>
                <div class="teacher-ai-question-meta">
                    <span>Subject: {question.subject}</span>
                    <span>Max Marks: {question.maxMarks}</span>
                    <span>Created: {question.createdDate}</span>
                </div>
            </div>
            <div class="teacher-ai-question-actions">
                <button class="teacher-ai-btn teacher-ai-btn-secondary btn-icon" onclick="editQuestion(${question.id})" title="Edit">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>
                </button>
                <button class="teacher-ai-btn teacher-ai-btn-secondary teacher-ai-btn-icon" onclick="deleteQuestion(${question.id})" title="Delete">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3,6 5,6 21,6"/>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        <line x1="10" y1="11" x2="10" y2="17"/>
                        <line x1="14" y1="11" x2="14" y2="17"/>
                    </svg>
                </button>
            </div>
        </div>
         <p class="teacher-ai-question-text">{question.text}</p>
        <div class="teacher-ai-question-stats">
            <span>{question.submissions} submissions</span>
            <span>{question.graded} graded</span>
        </div>

                            </div>
                        ))
                       }
                    </div>
                </div>
            </div>
   </div>

)
}
export default TeacherDashBoardQuestion;