// src/App.jsx
import React from 'react';
import withAuthorization from './hoc/withAuthorization';
import AdminPanel from './components/AdminPanel';
import AccessDenied from './components/AccessDenied';

const AdminPanelWithAuth = withAuthorization(AdminPanel, ['admin']);

const App = () => {
  const currentUser = {
    name: 'Иван Иванов',
    roles: ['user'],
  };

  return <AdminPanelWithAuth currentUser={currentUser} />;
};

export default App;
