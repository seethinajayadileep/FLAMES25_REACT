function StudentRecentAssignments(){
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

                    <div class="student-recent-assignments">
                        <h3>Recent Assignments</h3>
                        <div class="student-assignment-list" id="recentAssignmentsList">
                         { assignments.map(assignment=>(
  <div class="student-assignment-item">
    <div class="student-assignment-info">
                <h5>{assignment.title}</h5>
                <p>{assignment.subject} • Due: {assignment.dueDate}</p>
            </div>
            <span className={`student-assignment-status student-status-${assignment.status}`}>{assignment.status}</span>
  </div>
                          ))}
                        </div>
                    </div>
                    
</>
    )
}
export default StudentRecentAssignments;