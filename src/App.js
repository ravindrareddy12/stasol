import React, { useState } from 'react';
import './App.css';
import StudentList from './StudentList';
import AddStudentModal from './AddStudentModal';
import sampleData from './SampleData.json';

function App() {
  const [students, setStudents] = useState(sampleData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddStudent = (formData) => {
  
    const newStudent = { studentId: `${students.length + 1}`, ...formData };
    setStudents([...students, newStudent]);
    setIsModalOpen(false);
  };

  const handleDelete = (studentId) => {
  
    const updatedStudents = students.filter((student) => student.studentId !== studentId);
    setStudents(updatedStudents);
  };

  return (
    <div className="App">
      <h1>Student Management System</h1>
      <button onClick={() => setIsModalOpen(true)}>Add Student</button>
      {isModalOpen && <AddStudentModal onSubmit={handleAddStudent} />}
      <StudentList students={students} onDelete={handleDelete} />
    </div>
  );
}

export default App;
