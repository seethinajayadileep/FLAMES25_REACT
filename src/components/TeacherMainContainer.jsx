import TeacherSideBar from "./TeacherSideBar";
import React, { useState } from "react";
import  TeacherDashBoardQuestion from './TeacherDashboardQuestions'
import TeacherUploadQuestion from "./TeacherUploadQuestion";
import TeacherSubmissionButton from "./TeacherSubmissionButton";


function TeacherMainContainer({isClicked}){
  /* code for clicking nav bar*/
  const [display,setDisplay]=useState("dashboard");

const handleSideButton=(message)=>{
  console.log(message);

 if (message=="upload"){
  setDisplay(message);
 }
 else if(message=="submission"){
  setDisplay(message);
 }
 else{
  setDisplay(message);
 }
}
  let DisplayedContent;
  if (display === "upload") {
    DisplayedContent = <TeacherUploadQuestion />;
   
  } else if (display === "submission") {
    DisplayedContent = <TeacherSubmissionButton />;
     
  } else {
    DisplayedContent = <TeacherDashBoardQuestion />;
    
  }

  let element;
  if(isClicked){
    element=<TeacherSideBar ButtonClicked={handleSideButton}/>;
    
  }
  else{
    element=<div></div>;
    
  }
return (
   <div class="teacher-ai-main-container">
     {element}
     <div class="teacher-ai-main-content">
 {DisplayedContent}
 </div>
 </div>
)
}
export default TeacherMainContainer;