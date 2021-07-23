import React, { useState, useEffect} from "react";
import axios from 'axios';
import { Link, Route } from "react-router-dom";
import Form from './Form';
import { reach } from 'yup';
import formSchema from "./formSchema"
import styled from 'styled-components'
import './App.css';
import img from './Assets/Pizza.jpg';

const initialFormValues = {
  name: "",
  size: "",
  mushrooms: false,
  olives: false,
  pineapple: false,
  jalapeno: false,
  anchovies: false,
  candy: false,
  onions: false,
  pepper: false,
  sausage: false,
  garlic: false,
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

  //Posts pizza to orders URL after submission
  const postPizza = newPizza => {
      axios.post("https://reqres.in/api/orders", newPizza)
        .then(response => {
          setPizza(newPizza)
          console.log(pizza)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          setFormValues(initialFormValues)
        })
  }

  //Creates a new state which initializes pizza properties to the current form values
  const submitForm = () => {
      const newPizza = {
          name: formValues.name.trim(),
          size: formValues.size.trim(),
          special: formValues.special.trim(),
      }
      postPizza(newPizza);
  }

  //Validates inputs when called and updates form values
  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  //Makes sure the inputs are valid and requirements are adhered every time a form value is updated.
  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  //Validates form values and display errors if inputs are not valid.
  const validate = (name, value) => {
    reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  return (
    <div className = "pizzaApp">
        <header>
            <h1 className = "companyName">Lambda Eats</h1>
        </header>
        <MainContent>
            <Route exact path = '/'>
              <Link id = "order-pizza" to = '/pizza'>Pizza?</Link>
            </Route>
        </MainContent>

        <Route path = '/pizza'>
          <Form
            values = {formValues}
            submit = {submitForm}
            input = {inputChange}
            disabled = {disabled}
            errors = {formErrors}
          />
        </Route>
    </div>
  );
};

export default App;

//Styled Components

const MainContent = styled.div`
  border: 1px solid black;
  height: 33vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url(${img});
  background-size: cover;
`
