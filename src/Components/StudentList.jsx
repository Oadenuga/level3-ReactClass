import React from 'react';
import { colors, commonStyles } from './theme.js';

const StudentList = ({ students }) => {
  const avgCgpa = students.length > 0 
    ? (students.reduce((acc, s) => acc + parseFloat(s.cgpa || 0), 0) / students.length).toFixed(2)
    : '0.00';

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      {/* Mini Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginBottom: '30px' }}>
        {[
          { label: 'Total Students', value: students.length },
          { label: 'Active', value: students.length },
          { label: 'Avg CGPA', value: avgCgpa },
          { label: 'Departments', value: '5' }
        ].map((stat, i) => (
          <div key={i} style={commonStyles.card}>
            <div style={{ fontSize: '11px', color: colors.textMuted, fontWeight: 'bold' }}>{stat.label}</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: colors.primary, marginTop: '5px' }}>{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Table Card */}
      <div style={commonStyles.card}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: `2px solid ${colors.border}`, color: colors.textMuted, fontSize: '13px' }}>
              <th style={{ padding: '12px' }}>NAME</th>
              <th style={{ padding: '12px' }}>CGPA</th>
              <th style={{ padding: '12px' }}>ID</th>
              <th style={{ padding: '12px' }}>LEVEL</th>
              <th style={{ padding: '12px' }}>DEPARTMENT</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr><td colSpan="5" style={{ textAlign: 'center', padding: '40px', color: colors.textMuted }}>No students found.</td></tr>
            ) : (
              students.map((s, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${colors.border}` }}>
                  <td style={{ padding: '12px' }}>{s.firstName} {s.lastName}</td>
                  <td style={{ padding: '12px' }}>{s.cgpa}</td>
                  <td style={{ padding: '12px' }}>{s.studentId}</td>
                  <td style={{ padding: '12px' }}>{s.level}</td>
                  <td style={{ padding: '12px' }}>{s.department}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;