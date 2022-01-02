import React from 'react'
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

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

const Team = () => {
  
  return (
    <>
      <Formik
        initialValues={{
          search: '',
          photo:{},
          weight:'',
          height:'',
          name:'',
          alias:'',
          eyes:'',
          hair:'',
          workplace:'',
          team: {}
        }}
        validationSchema={Yup.object({
          search: Yup.string()
            .required('Required')
        })}
        onSubmit={ async (values, { setSubmitting }) => {
            const res = await axios.get(`https://superheroapi.com/api/10226227880308048/search/batman`)
          
          
        }}
      >
        <Form>
          <div className="container mt-5 mb-5 col-sm-4">
              <div className="row">
                  <div className="col-sm-10">
                      <InputField
                          label="Search your hero!"
                          name="search"
                          type="text"
                      />
                  </div>
                  <div className="col-sm-2  mt-5" >
                  <button type="submit" className='btn btn-danger col-10 offset-1'>Search</button>
                </div>
              </div>
              
              <div className="row">
                
              </div>
          </div>
          <div className="container card">
              <div className="row">
                  <div className="col">
                  hero1
                  </div>
              </div>
              <div className="row">
                  <div className="col">
                  hero1
                  </div>
              </div>
              <div className="row">
                  <div className="col">
                  hero1
                  </div>
              </div>
              <div className="row">
                  <div className="col">
                  hero1
                  </div>
              </div>
              <div className="row">
                  <div className="col">
                  hero1
                  </div>
              </div>
              <div className="row">
                  <div className="col">
                  hero1
                  </div>
              </div>
          </div>
          
           
        </Form>
      </Formik>
    </>
  );
};

export default Team;