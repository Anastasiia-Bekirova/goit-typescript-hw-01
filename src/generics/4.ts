type UserPro = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<UserPro>): Partial<UserPro> {
  return initialValues;
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});


