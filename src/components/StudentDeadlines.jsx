import React from 'react';

// Utility to get days until due date
function getDaysUntilDue(dueDate) {
  const due = new Date(dueDate);
  const today = new Date();
  const diff = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
  return diff;
}

function StudentDeadline() {
  const assignments = [
    {
      id: 1,
      title: "Linear Equations in Two Variables",
      subject: "mathematics",
      text: "...",
      maxMarks: 10,
      dueDate: "2025-07-15",
      status: "pending",
      submittedAnswer: null,
      score: null,
      feedback: null,
    },
    {
      id: 2,
      title: "Photosynthesis Process",
      subject: "science",
      text: "...",
      maxMarks: 15,
      dueDate: "2025-07-15",
      status: "pending",
      submittedAnswer: null,
      score: null,
      feedback: null,
    },
    {
      id: 3,
      title: "Shakespeare's Hamlet Analysis",
      subject: "english",
      text: "...",
      maxMarks: 20,
      dueDate: "2025-07-15",
      status: "pending",
      submittedAnswer: null,
      score: null,
      feedback: null,
    },
    {
      id: 4,
      title: "World War II Impact",
      subject: "history",
      text: "...",
      maxMarks: 18,
      dueDate: "2024-01-20",
      status: "submitted",
      submittedAnswer: "...",
      score: null,
      feedback: null,
    },
    {
      id: 5,
      title: "Quadratic Functions",
      subject: "mathematics",
      text: "...",
      maxMarks: 12,
      dueDate: "2024-01-15",
      status: "graded",
      submittedAnswer: "...",
      score: 10,
      feedback: "...",
    },
    {
      id: 6,
      title: "Cell Division",
      subject: "science",
      text: "...",
      maxMarks: 16,
      dueDate: "2024-01-12",
      status: "graded",
      submittedAnswer: "...",
      score: 14,
      feedback: "...",
    },
  ];

  // Filter top 5 upcoming pending assignments
  const upcomingAssignments = assignments
    .filter(a => a.status === 'pending')
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .slice(0, 5);

  return (
    <div className="student-upcoming-deadlines">
      <h3>Upcoming Deadlines</h3>
      <div className="student-deadline-list">
        {upcomingAssignments.length === 0 ? (
          <p>No upcoming pending assignments.</p>
        ) : (
          upcomingAssignments.map(assignment => {
            const daysUntilDue = getDaysUntilDue(assignment.dueDate);
            const isUrgent = daysUntilDue <= 2;

            return (
              <div key={assignment.id} className="student-deadline-item">
                <div className="student-deadline-info">
                  <h5>{assignment.title}</h5>
                  <p>
                    {assignment.subject} • {daysUntilDue} day{daysUntilDue !== 1 ? "s" : ""} left
                  </p>
                </div>
                <span
                  className={`student-deadline-status ${
                    isUrgent ? "student-status-urgent" : "student-status-pending"
                  }`}
                >
                  {isUrgent ? "Urgent" : "Upcoming"}
                </span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default StudentDeadline;
