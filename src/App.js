import React, { useState, useEffect} from "react";
import axios from 'axios';
import { Link, Route } from "react-router-dom";
import Form from './Form';
import { reach } from 'yup';

const initialFormValues = {
  name: "",
  size: "",
  topping1: false,
  topping2: false,
  special: "",
}

const initialFormErrors = {
  name: '',
  size: '',
  special: '',
}

const App = () => {
  const [pizza, setPizza] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true);

  const submitForm = () => {
      const newPizza = {
          name: formValues.name.trim(),
          size: formValues.size.trim(),
          special: formValues.special.trim(),
      }
      setPizza([newPizza])
      setFormValues(initialFormValues);
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const validate = (name, value) => {
    reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  return (
    <div className = "pizzaApp">
        {/* <Form
            values = {formValues}
            submit = {submitForm}
            input = {inputChange}
        /> */}
        <header>
            <h1 className = "companyName">Lambda Eats</h1>
        </header>
        <div className = "mainImage">
            <Link id = "order-pizza" to = '/'>Pizza?</Link>
        </div>
    </div>
  );
};
export default App;
