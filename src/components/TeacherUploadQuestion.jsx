function TeacherUploadQuestion(){
return (
    <div class="teacher-ai-tab-content" id="upload">
                <div class="teacher-ai-content-header">
                    <h2>Upload New Question</h2>
                </div>
                <div class="teacher-ai-upload-form-container">
                    <form class="teacher-ai-upload-form" id="uploadForm">
                        <div class="teacher-ai-form-group">
                            <label for="questionTitle">Question Title</label>
                            <input type="text" id="questionTitle" name="questionTitle" required/>
                        </div>
                        <div class="teacher-ai-form-group">
                            <label for="teacher-questionText">Question Text</label>
                            <textarea id="questionText" name="questionText" rows="6" required></textarea>
                        </div>
                        <div class="teacher-ai-form-group">
                            <label for="modelAnswer">Model Answer</label>
                            <textarea id="modelAnswer" name="modelAnswer" rows="8" required></textarea>
                        </div>
                        <div class="teacher-ai-form-group">
                            <label for="maxMarks">Maximum Marks</label>
                            <input type="number" id="maxMarks" name="maxMarks" min="1" max="100" required/>
                        </div>
                        <div class="teacher-ai-form-group">
                            <label for="subject">Subject</label>
                            <select id="subject" name="subject" required>
                                <option value="">Select Subject</option>
                                <option value="mathematics">Mathematics</option>
                                <option value="science">Science</option>
                                <option value="english">English</option>
                                <option value="history">History</option>
                                <option value="geography">Geography</option>
                            </select>
                        </div>
                        <div class="teacher-ai-form-actions">
                            <button type="button" class="teacher-ai-btn teacher-ai-btn-secondary" onclick="resetForm()">Reset</button>
                            <button type="submit" class="teacher-ai-btn teacher-ai-btn-primary">Upload Question</button>
                        </div>
                    </form>
                </div>
            </div>
)
}
export default TeacherUploadQuestion;
