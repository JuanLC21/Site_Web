import { useForm } from '../hooks/useForm'
import './Form.css'

const initialValues = { name: '', email: '', address: '', phone: '', message: '' }

export function Form () {
    const { errors, inputsValue, handleSubmit, handleChange } = useForm(initialValues)

    return (
        <form className='form' onSubmit={handleSubmit}>
            <label htmlFor='name'>Nombre</label>
            <input type='text' name='name' id='name' autoComplete='name' className='form__input' value={inputsValue.name} onChange={handleChange}/>
            {errors.name && <p className='form__error-message' >{errors.name}</p>}

            <label htmlFor='email'>Correo</label>
            <input type='email' name='email' id='email' autoComplete='email' className='form__input' value={inputsValue.email} onChange={handleChange}/>
            {errors.email && <p className='form__error-message' >{errors.email}</p>}

            <label htmlFor='address'>Dirección</label>
            <input type='text' name='address' id='address' autoComplete='street-address' className='form__input' value={inputsValue.address} onChange={handleChange}/>
            {errors.address && <p className='form__error-message' >{errors.address}</p>}

            <label htmlFor='phone'>Teléfono</label>
            <input type='tel' name='phone' id='phone' autoComplete='tel' className='form__input' value={inputsValue.phone} onChange={handleChange}/>
            {errors.phone && <p className='form__error-message' >{errors.phone}</p>}

            <label htmlFor='message'>Mensaje</label>
            <textarea name='message' id='message' autoComplete='off' placeholder='Escribe aquí' value={inputsValue.message} onChange={handleChange}></textarea>
            {errors.message && <p className='form__error-message' >{errors.message}</p>}

            <button type='submit' className='form__button'>Enviar</button>
        </form>
    )
}
