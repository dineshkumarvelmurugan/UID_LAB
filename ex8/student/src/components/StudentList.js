import React from "react";
import axios from "axios";
import "../styles.css"; // Import CSS

const StudentList = ({ students, fetchStudents, selectStudent }) => {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/students/${id}`);
    fetchStudents();
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Grade</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student._id}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.course}</td>
            <td>{student.grade}</td>
            <td className="action-buttons">
              <button onClick={() => selectStudent(student)}>Edit</button>
              <button onClick={() => handleDelete(student._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
