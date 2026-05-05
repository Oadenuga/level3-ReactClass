import React, { useState } from 'react'

export const Newcomponent = () => {
  const [collection, setCollection] = useState([]);

  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [level, setLevel] = useState("");

  const handleDetails = () => {
    if (!studentName || !course || !level) {
      return alert("all fields are to be filled");
    }

    const details = {
      studentName,
      course,
      level,
    };

    console.log(details);

    setCollection([...collection, details])
    console.log(collection);
    
  };

  return (
    <>
      <div>
        <input
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Entername"
          type="text"
        />
        <br />
        <input
          onChange={(e) => setCourse(e.target.value)}
          placeholder="Enter Course"
          type="text"
        />
        <br />
        <input
          onChange={(e) => setLevel(e.target.value)}
          placeholder="Enter Level"
          type="text"
        />
        <br />
        <button onClick={handleDetails}>Submit</button>
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Student Name</th>
              <th>Course</th>
              <th>Level</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {collection.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.studentName}</td>
                <td>{student.course}</td>
                <td>{student.level}</td>
                <td>
                  <button onClick={() => alert(`Edit student: ${student.studentName}`)}>Edit</button>
                  <button onClick={() => setCollection(collection.filter((_, i) => i !== index))}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};