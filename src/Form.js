import React from 'react'

function Form(props) {
    const { values, submit, input, disabled, errors } = props;

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        const { name, value, type, checked } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        input(name, valueToUse)
    }

    return (
        <form id = "pizza-form" onSubmit = {onSubmit}>
            <header>
                <h1>Build Your Own Pizza</h1>
            </header>
            <div>
                <label>Name
                    <input
                        value = {values.name}
                        onChange = {onChange}
                        name = 'name'
                        type = 'text'
                    />
                </label>

                <label>Size
                    <select
                        onChange = {onChange}
                        value = {values.size}
                        name = "size"
                    >
                        <option value = ''>- Select an option -</option>
                        <option value = 'monster'>Monster</option>
                        <option value = 'large'>Large</option>
                        <option value = 'medium'>Medium</option>
                        <option value = 'small'>Small</option>
                        <option value = 'petite'>Petite</option>
                    </select>
                </label>

                <div className = 'formCheckboxes'>
                    <h2>Toppings</h2>

                    <label>Mushrooms
                        <input
                            type='checkbox'
                            name='mushrooms'
                            onChange = {onChange}
                            checked = {values.mushrooms}
                        />
                    </label>

                    <label>Olives
                        <input
                            type='checkbox'
                            name='olives'
                            onChange = {onChange}
                            checked = {values.olives}
                        />
                    </label>

                    <label>Pineapple
                        <input
                            type='checkbox'
                            name='pineapple'
                            onChange = {onChange}
                            checked = {values.pineapple}
                        />
                    </label>

                    <label>Jalapeno
                        <input
                            type='checkbox'
                            name='jalapeno'
                            onChange = {onChange}
                            checked = {values.jalapeno}
                        />
                    </label>
                    
                    <label>Anchovies
                        <input
                            type='checkbox'
                            name='anchovies'
                            onChange = {onChange}
                            checked = {values.anchovies}
                        />
                    </label>

                    <label>Candy
                        <input
                            type='checkbox'
                            name='candy'
                            onChange = {onChange}
                            checked = {values.candy}
                        />
                    </label>

                    <label>Onions
                        <input
                            type='checkbox'
                            name='onions'
                            onChange = {onChange}
                            checked = {values.onions}
                        />
                    </label>

                    <label>Pepper
                        <input
                            type='checkbox'
                            name='pepper'
                            onChange = {onChange}
                            checked = {values.pepper}
                        />
                    </label>

                    <label>Sausage
                        <input
                            type='checkbox'
                            name='sausage'
                            onChange = {onChange}
                            checked = {values.sausage}
                        />
                    </label>

                    <label>Garlic
                        <input
                            type='checkbox'
                            name='garlic'
                            onChange = {onChange}
                            checked = {values.garlic}
                        />
                    </label>
                </div>

                <label>Special
                    <input 
                        value = {values.special}
                        onChange = {onChange}
                        name = 'special'
                        type = 'text'
                    />
                </label>

                <div className = "formSubmit">
                    <h2>Add your Pizza</h2>

                    <button disabled = {disabled}>Submit</button>

                    <div className='errors'>
                        <div>{errors.name}</div>
                        <div>{errors.size}</div>
                        <div>{errors.special}</div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;