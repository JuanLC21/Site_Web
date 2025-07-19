import { useState } from 'react'
import { fetchForm } from '../services/formData'
import { validation } from '../utils/formValidation'

export function useForm (initialValues) {
    const [inputsValue, setInputValue] = useState(initialValues)
    const [errors, setErrors] = useState({})

    function handleSubmit (ev) {
        ev.preventDefault()
        const newError = validation(inputsValue)

        if (Object.keys(newError).length === 0) {
            alert('Formulario enviado exitosamente')
            fetchForm(inputsValue)
            setInputValue(initialValues)
            setErrors({})
        } else setErrors(newError)
    }

    function handleChange (ev) {
        const { name, value } = ev.target
        setInputValue((prev) => ({ ...prev, [name]: value })) // Es mejor práctica hacerlo de esta forma. Garantiza el estado más actual.
    }

    return { errors, inputsValue, handleSubmit, handleChange }
}
// setInputValue({ ...inputsValue, [name]: value })
