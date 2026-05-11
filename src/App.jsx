import React, { useState } from 'react';
import StudentList from './Components/StudentList.jsx';
import RegisterStudent from './Components/RegisterStudent.jsx'
import { colors } from './Components/theme.js';

function App() {
  const [students, setStudents] = useState([]);
  const [view, setView] = useState('list');

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
    setView('list'); // Switch back to list after adding
  };

  return (
    <div style={{ backgroundColor: colors.background, minHeight: '100vh', padding: '40px' }}>
      <nav style={{ maxWidth: '1000px', margin: '0 auto 30px auto', display: 'flex', gap: '10px' }}>
        <button onClick={() => setView('list')} style={navBtnStyle(view === 'list')}>Students</button>
        <button onClick={() => setView('add')} style={navBtnStyle(view === 'add')}>Add Student</button>
      </nav>

      {view === 'list' ? (
        <StudentList students={students} />
      ) : (
        <RegisterStudent onAddStudent={addStudent} />
      )}
    </div>
  );
}

const navBtnStyle = (isActive) => ({
  padding: '10px 20px',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  fontWeight: '600',
  backgroundColor: isActive ? '#1e293b' : '#e2e8f0',
  color: isActive ? 'white' : '#64748b'
});

export default App;