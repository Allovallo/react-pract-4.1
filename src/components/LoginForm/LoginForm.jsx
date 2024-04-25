import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import { object, string } from 'yup';

const schema = object({
  login: string().required('Login, please!!!'),
  password: string().min(6).max(12).required(),
});

const InitialValues = {
  login: '',
  password: '',
};

const Input = styled(Field)`
  color: #2a2a2a;
`;

export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik initialValues={InitialValues} validationSchema={schema} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Input type="text" name="login" />
          <ErrorMessage name="login" component="div" />
        </label>
        <label htmlFor="password">
          Password
          <Input type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
