import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';

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
    <Formik initialValues={InitialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Input type="text" name="login" />
        </label>
        <label htmlFor="password">
          Password
          <Input type="password" name="password" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
