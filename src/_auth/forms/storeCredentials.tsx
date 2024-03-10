type User = {
  email: string;
  password: string;
  userType: 'admin' | 'student' | 'lecturer';
};

export const storeCredentials = (user: User): boolean => {
  try {
    const existingUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    existingUsers.push(user);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const checkCredentials = (email: string, password: string): User | null => {
  const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
  return users.find(user => user.email === email && user.password === password) || null;
};
