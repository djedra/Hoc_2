// hoc/withAuthorization.jsx
import React from 'react';
import AccessDenied from '../components/AccessDenied';

const withAuthorization = (WrappedComponent, allowedRoles) => ({
  currentUser,
  ...rest
}) => {
  if (!currentUser || !currentUser.roles.some(role => allowedRoles.includes(role))) {
    return <AccessDenied />;
  }

  return <WrappedComponent currentUser={currentUser} {...rest} />;
};

// Варианты экспорта:
// Default экспорт
export default withAuthorization;

// Именованный экспорт
// export { withAuthorization };
