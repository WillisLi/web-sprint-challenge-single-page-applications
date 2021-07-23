import React, { useState, useEffect} from "react";
import axios from 'axios';
import { Link, Route } from "react-router-dom";
import Form from './Form';
import { reach } from 'yup';
import formSchema from "./formSchema"

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

  const postPizza = newPizza => {
      axios.post("https://reqres.in/api/orders", newPizza)
        .then(response => {
          console.log(response.data)
          setPizza(newPizza)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          setFormValues(initialFormValues)
        })
  }

  const submitForm = () => {
      const newPizza = {
          name: formValues.name.trim(),
          size: formValues.size.trim(),
          special: formValues.special.trim(),
      }
      postPizza(newPizza);
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

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
        <div className = "mainContent">
            <Route exact path = '/'>
              <Link id = "order-pizza" to = '/pizza'>Pizza?</Link>
            </Route>
        </div>

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


