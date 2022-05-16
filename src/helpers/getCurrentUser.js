// eslint-disable-next-line import/prefer-default-export
export const getCurrentUser = () => {
  const token = localStorage.getItem('userToken');
  let currentUserInfo;
  if (token) {
    const decoded = jwtDecode(token);
    let roleName;
    switch (decoded.role) {
      case 1:
        roleName = 'Admin';
        break;
      case 2:
        roleName = 'Travel-Admin';
        break;
      case 3:
        roleName = 'Manager';
        break;
      case 4:
        roleName = 'Accommodation-Supplier';
        break;
      case 5:
        roleName = 'Requester';
        break;
      default:
        roleName = undefined;
    }
    currentUserInfo = {
      names: decoded.names,
      roleName,
      roleId: decoded.role,
    };
  }
  return currentUserInfo;
};
