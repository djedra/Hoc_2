import React from 'react';

const AdminPanel = ({ currentUser }) => {
  return <div>Добро пожаловать, {currentUser.name}. Это админ-панель.</div>;
};

export default AdminPanel;
