import React, {useContext} from 'react'
import { Formik, Form, useField } from 'formik';
import HeroContext from '../context/hero/heroContext';
import Team from './Team'
import * as Yup from 'yup';
import axios from 'axios';
import './search.css';

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



const Search = () => {
  
  const heroContext = useContext(HeroContext);

  const {getResults, clearResults, getImages, addHero,  results, images} = heroContext

  const handleClick = (e, results) => {
    
    addHero(e)
    console.log(e.target.id)
    clearResults()
    
  }

  return (
    <>
      <Formik
        initialValues={{
          search: '' 
        }}
        validationSchema={Yup.object({
          search: Yup.string()
            .required('Required')
        })}
        onSubmit={ async (values, {setSubmitting}) => {
              clearResults()

              const res = await axios.get(`https://superheroapi.com/api/10226227880308048/search/${values.search}`)
            
              const results = res.data.results;

              if(results!==undefined){
                getResults(results);
              }else{
                console.log('aca hay un error troesma')
                
              }
        }}
      >
        <Form>
          <div className="container mt-5 mb-5">
              <div className="row">
                  <div className="col-12 col-md-6 offset-md-3">
                      <InputField
                          label="Search your hero!"
                          name="search"
                          type="text"
                      />
                  </div>
              </div>
              <div className="row">
                <div className="col-10 col-md-2 offset-1 offset-md-5 mt-5" >
                  <button type="submit" className='btn btn-danger col-12'>Search</button>
                </div>
              </div>
          </div>
        
          {results!==null&&<div className="container card col-xl-4 col-md-8">
            {results.map( hero => (
                <a href="#!" key={hero.id} id={hero.id} className='' onClick={handleClick} >
                <div  className="row p-2 unclick">
                  <div className="col-2 unclick">
                    <img src="https://2.bp.blogspot.com/--zo-lg55-Vw/UDu2A4IcMXI/AAAAAAAAVr4/wT13Qe2UNZc/s1600/batman-150x180.jpg" alt="" className='col-10 unclick'/>
                  </div>
                  <div className="col-6 mt-lg-4 mt-md-3 mt-1 unclick">
                    <p  className='h6'>{hero.name}</p>
                  </div>
                </div>
                </a>
              ) )}
          </div>}
                               
        </Form>
      </Formik>
      <Team />
    </>
  );
};

export default Search;


