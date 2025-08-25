import React from 'react';
import './AdmissionProcedure.css';

const AdmissionProcedure = () => {
  return (
    <div className="admission-procedure-page-container">
      <div className="main-title-bar">
        <h2>ADMISSION PROCEDURE</h2>
      </div>

      <div className="procedure-content">
        <h3 className="list-title">LIST OF DOCUMENTS REQUIRED AT THE TIMES OF ADMISSION:</h3>
        <p className="intro-text">
          The applicants shall be required to produce following documents in Original along with one set of self-attested photocopies at the time of admission:
        </p>
        <ol className="document-list">
          <li>Class X Board Examinations Certificate (Self-Attested Photocopy)</li>
          <li>Class X Marks-sheet (Self-Attested Photocopy)</li>
          <li>Class XII Marks-sheet (Self-Attested Photocopy)</li>
          <li>Class XII Provisional Certificate (Self-Attested Photocopy) & Original Certificate</li>
          <li>Character Certificate (recent)</li>
          <li>SC/ST/PWD Certificate (in the name of the candidate) issued by the competent authority (also show original certificate)</li>
          <li>OBC (Non Creamy Layer) Certificate (in the name of the Candidate) issued by competent authority.</li>
          <li>Transfer Certificate from school/College as well as Migration Certificate from Board/University is required from those students who have passed senior secondary exams</li>
          <li>At least Five passport size photographs</li>
          <li>Photocopy of Address proof like Aadhar Card, also show original at the time of student seeking admission.</li>
        </ol>
      </div>
    </div>
  );
};

export default AdmissionProcedure;
