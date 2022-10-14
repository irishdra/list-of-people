export const formRegisterOptions = {
  firstName: {required: 'First Name is required'},
  lastName: {required: 'Last Name is required'},
  phone: {required: 'Phone is required'},
  gender: {required: 'Gender is required'},
  age: {
    required: 'Age is required',
    min: {
      value: 10,
      message: 'Age must have at least 10 years',
    },
  },
};
