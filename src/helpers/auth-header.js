export const authHeader = () => {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    return {Authorization: 'Bearer ' + user.access_token};
  } else {
    return {};
  }
};

export const loginHeader = (userName, password) => {
  // return authorization header of user name and password
  return {
    Authorization: 'Basic ' + btoa(userName + ':' + password),
    'Content-Type': 'application/json'
  };
};
