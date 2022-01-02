import React from 'react'
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const InputField = ({ label, ...props }) => {
  
  const [field, meta] = useField(props);

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="mt-3 ">
            <label htmlFor={props.id || props.name} className='h5'>{label}</label>
            
            <div className="col ">
              <input className="text-input form-control" {...field} {...props} />
            </div>
          </div>
          
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            {meta.touched && meta.error ? (
            <div className="error alert alert-danger mt-2">{meta.error}</div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

const Login = () => {
  
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(8, 'Must be at least 8 characters')
            .required('Required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log('sup')
        }}
      >
        <Form>
          <div className="container mt-5 mb-5 col-md-4 card">
              <div className="row">
                  <div className="col">
                      <InputField
                          label="Email Address"
                          name="email"
                          type="email"
                          placeholder="your@mail.com"
                      />
                  </div>
              </div>
              <div className="row">
                  <div className="col">
                      <InputField
                          label="Password"
                          name="password"
                          type="password"
                          placeholder="Min 8 chars"
                      />
                  </div>
              </div>
              <div className="row">
                <div className="col-4 offset-4 mt-4 pb-4" >
                  <button type="submit" className='btn btn-danger col-12'>Login</button>
                </div>
              </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export default Login;
