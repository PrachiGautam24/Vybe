// Utility functions for form validation

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  // At least 6 characters
  return password.length >= 6;
};

export const validateRequired = (value) => {
  return value && value.trim() !== '';
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
};

export const getValidationErrors = (fields) => {
  const errors = {};

  Object.keys(fields).forEach((key) => {
    const value = fields[key];
    
    switch (key) {
      case 'email':
        if (!validateEmail(value)) {
          errors[key] = 'Invalid email address';
        }
        break;
      case 'password':
        if (!validatePassword(value)) {
          errors[key] = 'Password must be at least 6 characters';
        }
        break;
      case 'phone':
        if (!validatePhone(value)) {
          errors[key] = 'Invalid phone number';
        }
        break;
      default:
        if (!validateRequired(value)) {
          errors[key] = `${key} is required`;
        }
    }
  });

  return errors;
};
