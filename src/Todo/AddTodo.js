import React, { useState} from "react";
import PropTypes from 'prop-types'

function useInputValue(defaultValue='') {
    const [value, setValue] = useState(defaultValue) //

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo({onCreate}){
    const input = useInputValue('')

    function submitHandler (event) {
        event.preventDefault()

        if(input.value().trim()){
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form  style={{marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} onSubmit={submitHandler}> 
            <input style={{width: '90%', height: '100%'}}{...input.bind} />
            <button style={{float: 'right'}} type='submit'>Add</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo