export const storeCredentials = (email: string, password: string): boolean => {
  try {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const checkCredentials = (email: string, password: string): boolean => {
  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('password');

  return email === storedEmail && password === storedPassword;
};
