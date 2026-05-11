import React, { useState } from 'react';
import { colors, commonStyles } from './theme.js';

const RegisterStudent = ({ onAddStudent }) => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', cgpa: '', studentId: '', level: '', department: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(formData);
    setFormData({ firstName: '', lastName: '', cgpa: '', studentId: '', level: '', department: '' });
  };

  return (
    <div style={{ ...commonStyles.card, maxWidth: '600px', margin: '0 auto' }}>
      <h3 style={{ color: colors.primary, marginBottom: '20px' }}>Register New Student</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
          <input style={commonStyles.input} placeholder="First Name" onChange={e => setFormData({...formData, firstName: e.target.value})} value={formData.firstName} />
          <input style={commonStyles.input} placeholder="Last Name" onChange={e => setFormData({...formData, lastName: e.target.value})} value={formData.lastName} />
        </div>
        <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
          <input style={commonStyles.input} type="number" placeholder="CGPA" onChange={e => setFormData({...formData, cgpa: e.target.value})} value={formData.cgpa} />
          <input style={commonStyles.input} placeholder="Student ID" onChange={e => setFormData({...formData, studentId: e.target.value})} value={formData.studentId} />
        </div>
        <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
            <input style={commonStyles.input} type="text" placeholder="Department" onChange={e => setFormData({...formData, department: e.target.value})} value={formData.department} />
            <input style={commonStyles.input} type="number" placeholder="level" onChange={e => setFormData({...formData, level: e.target.value})} value={formData.level} />

        </div>
        <button type="submit" style={{ 
          width: '100%', padding: '12px', backgroundColor: colors.primary, color: 'white', 
          border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' 
        }}>
          Register Student
        </button>
      </form>
    </div>
  );
};

export default RegisterStudent;