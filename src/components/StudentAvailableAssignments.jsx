function StudentAvailableAssignments(){
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
        score: null,
        feedback: null
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
    <>
    <div class="tab-content" id="assignments">
                <div class="student-content-header">
                    <h2>Available Assignments</h2>
                    <div class="student-filter-controls">
                        <select id="filterSubject">
                            <option value="">All Subjects</option>
                            <option value="mathematics">Mathematics</option>
                            <option value="science">Science</option>
                            <option value="english">English</option>
                            <option value="history">History</option>
                        </select>
                        <select id="filterStatus">
                            <option value="">All Status</option>
                            <option value="pending">Pending</option>
                            <option value="submitted">Submitted</option>
                            <option value="graded">Graded</option>
                        </select>
                    </div>
                </div>
                <div class="student-assignments-grid" id="assignmentsGrid">
                   {
  assignments.map((assignment) => {
    const isUrgent = new Date(assignment.dueDate) < new Date(); // Example urgency check

    return (
      <div key={assignment.id} className={`assignment-card ${assignment.status}`}>
        <div className="student-assignment-header">
          <div>
            <h4 className="student-assignment-title">{assignment.title}</h4>
            <div className="student-assignment-meta">
              <span>Subject: {assignment.subject}</span>
              <span>Max Marks: {assignment.maxMarks}</span>
              {assignment.score !== null && (
                <span>Score: {assignment.score}/{assignment.maxMarks}</span>
              )}
            </div>
          </div>
          <span className={`student-assignment-status student-status-${assignment.status}`}>
            {assignment.status}
          </span>
        </div>

        <p className="student-assignment-text">{assignment.text}</p>

        <div className="student-assignment-footer">
          <span className={`student-due-date ${isUrgent ? 'urgent' : ''}`}>
            Due: {assignment.dueDate}
          </span>

          <div className="student-assignment-actions">
            {assignment.status === 'pending' ? (
              <button className="student-btn student-btn-primary" >
                Start
              </button>
            ) : assignment.status === 'graded' ? (
              <button className="student-btn student-btn-secondary" >
                View Feedback
              </button>
            ) : (
              <button className="student-btn student-btn-secondary" >
                View Submission
              </button>
            )}
          </div>
        </div>
      </div>
    );
  })
}

                </div>
            </div>
    </>
)
}
export default StudentAvailableAssignments