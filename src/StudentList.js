import React, { useState } from 'react';
 import './StudentList.css'

function StudentList({ students, onDelete }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter students based on search term
  const filteredStudents = students.filter((student) =>
    student.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="student-list">
      <h2>Student List</h2>
      <input
        type="text"
        placeholder="Search by Student Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Email Id</th>
            <th>Phone Number</th>
            <th>Father Name</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.studentId}>
              <td>{student.studentName}</td>
              <td>{student.emailId}</td>
              <td>{student.phoneNumber}</td>
              <td>{student.fatherName}</td>
              <td>{student.gender}</td>
              <td>
                <button onClick={() => onDelete(student.studentId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
