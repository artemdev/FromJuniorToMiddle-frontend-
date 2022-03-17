import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(
      8,
      'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters.',
    )
    .max(50, 'Too Long!')
    .required('Required'),
});

export default SignupSchema;
