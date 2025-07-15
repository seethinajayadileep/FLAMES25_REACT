function TeacherSubmissionButton(){
    const submissions = [
    {
        id: 1,
        studentName: "Alice Johnson",
        questionTitle: "Linear Equations in Two Variables",
        subject: "mathematics",
        submittedDate: "2024-01-16",
        status: "graded",
        score: 8
    },
    {
        id: 2,
        studentName: "Bob Smith",
        questionTitle: "Photosynthesis Process",
        subject: "science",
        submittedDate: "2024-01-15",
        status: "pending",
        score: null
    },
    {
        id: 3,
        studentName: "Carol Davis",
        questionTitle: "Shakespeare's Hamlet Analysis",
        subject: "english",
        submittedDate: "2024-01-14",
        status: "reviewed",
        score: 18
    },
    {
        id: 4,
        studentName: "David Wilson",
        questionTitle: "Linear Equations in Two Variables",
        subject: "mathematics",
        submittedDate: "2024-01-16",
        status: "graded",
        score: 9
    },
    {
        id: 5,
        studentName: "Emma Brown",
        questionTitle: "Photosynthesis Process",
        subject: "science",
        submittedDate: "2024-01-15",
        status: "pending",
        score: null
    }
];
 return (
    <>
    <div class="teacher-ai-tab-content" id="submissions">
                <div class="teacher-ai-content-header">
                    <h2>Student Submissions</h2>
                    <div class="teacher-ai-filter-controls">
                        <select id="filterSubject">
                            <option value="">All Subjects</option>
                            <option value="mathematics">Mathematics</option>
                            <option value="science">Science</option>
                            <option value="english">English</option>
                        </select>
                        <select id="filterStatus">
                            <option value="">All Status</option>
                            <option value="pending">Pending</option>
                            <option value="graded">Graded</option>
                            <option value="reviewed">Reviewed</option>
                        </select>
                    </div>
                </div>
                <div class="teacher-ai-submissions-table-container">
                    <table class="teacher-ai-submissions-table">
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Question</th>
                                <th>Subject</th>
                                <th>Submitted</th>
                                <th>Status</th>
                                <th>Score</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="teacher-ai-submissionsTableBody">
                          
                            {
                                submissions.map(submission=>(
                                     <tr>
                                   <td>{submission.studentName}</td>
                                    <td>{submission.questionTitle}</td>
                                        <td>{submission.subject}</td>
                                        <td>{submission.submittedDate}</td>
                            <td><span className={`teacher-ai-status-badge teacher-ai-status-${submission.status}`}>
    {submission.status}
  </span></td>
                                        <td>{submission.score !== null ? submission.score + '/20' : '-'}</td>
                                        <td>
            <button class="teacher-ai-btn teacher-ai-btn-secondary teacher-ai-btn-icon" onclick="viewSubmission(${submission.id})" title="View">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                </svg>
            </button>
            <button class="teacher-ai-btn teacher-ai-btn-primary teacher-ai-btn-icon" onclick="gradeSubmission(${submission.id})" title="Grade">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
            </button>
        </td>
                                           </tr>
                                ))
                            }
                        
                        </tbody>
                    </table>
                </div>
            </div>
       

    </>
 )
}
export default TeacherSubmissionButton;
