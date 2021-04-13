import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email must be valid')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export default SignupSchema;
