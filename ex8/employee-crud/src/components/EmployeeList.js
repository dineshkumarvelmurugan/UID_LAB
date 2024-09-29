import React from 'react';
import './EmployeeList.css';

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.empId}</td>
              <td>{employee.empName}</td>
              <td>{employee.designation}</td>
              <td>
                <button onClick={() => onEdit(employee)} className="edit-btn">Edit</button>
                <button onClick={() => onDelete(employee._id)} className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;

