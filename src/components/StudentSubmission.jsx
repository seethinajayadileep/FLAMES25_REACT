



function StudentSubmission(){
    // Sample data
let assignments = [
    {
        id: 1,
        title: "Linear Equations in Two Variables",
        subject: "mathematics",
        text: "Solve the system of linear equations: 2x + 3y = 7 and x - y = 1. Show all working steps and verify your solution.",
        maxMarks: 10,
        dueDate: "2024-01-25",
        status: "pending",
        submittedAnswer: null,
        score: null,
        feedback: null
    },
    {
        id: 2,
        title: "Photosynthesis Process",
        subject: "science",
        text: "Explain the process of photosynthesis in detail. Include the chemical equation, factors affecting the rate, and its importance in the ecosystem.",
        maxMarks: 15,
        dueDate: "2024-01-28",
        status: "pending",
        submittedAnswer: null,
        score: null,
        feedback: null
    },
    {
        id: 3,
        title: "Shakespeare's Hamlet Analysis",
        subject: "english",
        text: "Analyze the character development of Hamlet in Act 3, Scene 1. Discuss his internal conflict and how it drives the plot forward.",
        maxMarks: 20,
        dueDate: "2024-01-30",
        status: "pending",
        submittedAnswer: null,
        score: null,
        feedback: null
    },
    {
        id: 4,
        title: "World War II Impact",
        subject: "history",
        text: "Analyze the social and economic impact of World War II on global society. Discuss at least three major changes.",
        maxMarks: 18,
        dueDate: "2024-01-20",
        status: "submitted",
        submittedAnswer: "World War II had profound impacts on global society...",
        score: 14,
        feedback: 'Excellent work!'
    },
    {
        id: 5,
        title: "Quadratic Functions",
        subject: "mathematics",
        text: "Graph the quadratic function f(x) = x² - 4x + 3. Find the vertex, axis of symmetry, and x-intercepts.",
        maxMarks: 12,
        dueDate: "2024-01-15",
        status: "graded",
        submittedAnswer: "To graph f(x) = x² - 4x + 3, I'll find the key features...",
        score: 10,
        feedback: "Excellent work! Your graph is accurate and you correctly identified all key features. Consider showing more intermediate steps in your calculations."
    },
    {
        id: 6,
        title: "Cell Division",
        subject: "science",
        text: "Compare and contrast mitosis and meiosis. Explain their roles in growth and reproduction.",
        maxMarks: 16,
        dueDate: "2024-01-12",
        status: "graded",
        submittedAnswer: "Mitosis and meiosis are both types of cell division...",
        score: 14,
        feedback: "Good understanding of the basic concepts. Your comparison table was helpful. Try to include more details about the phases of each process."
    }
];

return (
     <div class="student-tab-content" id="submissions">
                <div class="student-content-header">
                    <h2>My Submissions</h2>
                </div>
                <div class="student-submissions-table-container">
                    <table class="student-submissions-table">
                        <thead>
                            <tr>
                                <th>Assignment</th>
                                <th>Subject</th>
                                <th>Submitted</th>
                                <th>Status</th>
                                <th>Score</th>
                                <th>Feedback</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="student-submissionsTableBody">
                          
     {
  assignments.map((assignment) => (

    <tr key={assignment.id}>
       
      <td>{assignment.title}</td>
      <td>{assignment.subject}</td>
      <td>{assignment.dueDate}</td>
      <td>
        <span className={`student-status-badge student-status-${assignment.status}`}>
          {assignment.status}
        </span>
      </td>
      <td>{assignment.score !== null ? `${assignment.score}/${assignment.maxMarks}` : '-'}</td>
      <td>{assignment.feedback ? 'Available' : 'Pending'}</td>
      <td>
        <button
          className="student-btn student-btn-secondary student-btn-sm"
          
          title="View"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>

        {assignment.status === 'graded' && assignment.feedback && (
          <button
            className="student-btn student-btn-primary student-btn-sm"
            
            title="Feedback"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>
        )}
      </td>
    </tr>
  ))
}

                        </tbody>
                    </table>
                </div>
            </div>
)
}
export default StudentSubmission;