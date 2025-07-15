import StudentHeader from "../components/StudentHeader";
import './StudentDashBoard.css';
import StudentOverview from "../components/StudentOverview";
import StudentRecentAssignments from "../components/StudentRecentAssignments";
import StudentDeadline from "../components/StudentDeadlines";
import StudentSideBar from "../components/StudentSideBar";
import StudentAvailableAssignments from "../components/StudentAvailableAssignments";
import StudentSubmission from "../components/StudentSubmission";
import StudentProgress from "../components/StudentProgress";
import React, { useState } from 'react';
function StudentDashBoard(){
     
     const [toggleState, setToggleState] = useState(0);
      const SideBar=()=>{
        setToggleState(prev => (prev === 0 ? 1 : 0));
     
      }
      const [display,setDisplay]=useState("Dashboard");
      
      function handleSideBar(message){
          setDisplay(message);
          
      }
      let displayContent;
      if(display=="Dashboard"){
          displayContent=<div class=""><StudentOverview/> <div class=""><StudentRecentAssignments/><h1 class="student-space"></h1><StudentDeadline/></div></div>;
      }
     else if(display=="Assignments"){
          displayContent=<StudentAvailableAssignments/>
     }
     else if(display=="Submission"){
          displayContent=<StudentSubmission/>;
     }
     else{
          displayContent=<StudentProgress/>
     }
return (
    <>
    <div class="student-body">

    <StudentHeader onButtonClick={SideBar}/>
    <div class="student-main-container">
    {toggleState === 1 && <StudentSideBar ButtonClicked={handleSideBar} />}
    <div class="student-main-content">
     <div class="student-dashboard-sections">
{displayContent}
     </div>
     </div>
     </div>
    </div>
    </>
)
}
export default StudentDashBoard;