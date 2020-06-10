import React from 'react';
import './App.css';
import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import CustomSelect from './CustomSelect.js';

export default function App() {

  const options = [
    {label: "Marcelo Camelo", value: "1"},
    {label: "Rodrigo Amarante", value: "2"},
    {label: "Rodrigo Barba", value: "3"},
    {label: "Bruno Medina", value: "4"}
  ]

  const initialValues = {
    name: ""
  }

  const validationSchema = yup.object().shape({
    name: yup.object({
      label: yup.string().required(),
      value: yup.string().required("Name is a required field"),
    })
  });

  function handleSubmit(values) {
      alert(JSON.stringify(values));
  }

  return (
    <div className="container">
      <div className="form-container">
        <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={validationSchema}>
          <Form>
            <CustomSelect name="name" options={options} />
            <Field type="submit" className="btn" value="Send"/>
          </Form>
        </Formik>
      </div>
    </div>
  )
}