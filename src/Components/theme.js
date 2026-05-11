export const colors = {
  background: '#f8fafc',
  cardBg: '#ffffff',
  primary: '#1e293b', // Slate Navy
  accent: '#3b82f6', 
  textMain: '#1e293b',
  textMuted: '#64748b',
  border: '#e2e8f0',
};

export const commonStyles = {
  card: {
    backgroundColor: colors.cardBg,
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    border: `1px solid ${colors.border}`,
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: `1px solid ${colors.border}`,
    fontSize: '14px',
    width: '100%',
    boxSizing: 'border-box'
  }
};