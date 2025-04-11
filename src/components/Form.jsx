import { useForm } from '../hook/useForm'
import './Form.css'

const initialValues = { name: '', email: '', address: '', phone: '', message: '' }

export function Form () {
    const { errors, inputsValue, handleSubmit, handleChange } = useForm(initialValues)

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nombre" value={inputsValue.name} onChange={handleChange}/>
            {errors.name && <p style= {{ color: '#b00' }}>{errors.name}</p>}

            <input type="email" name="email" placeholder="Correo" value={inputsValue.email} onChange={handleChange}/>
            {errors.email && <p style= {{ color: '#b00' }}>{errors.email}</p>}

            <input type="text" name="address" placeholder="Dirección" value={inputsValue.address} onChange={handleChange}/>
            {errors.address && <p style= {{ color: '#b00' }}>{errors.address}</p>}

            <input type="tel" name="phone" placeholder="Teléfono" value={inputsValue.phone} onChange={handleChange}/>
            {errors.phone && <p style= {{ color: '#b00' }}>{errors.phone}</p>}

            <textarea name='message' placeholder="Mensaje" value={inputsValue.message} onChange={handleChange}></textarea>
            {errors.message && <p style= {{ color: '#b00' }}>{errors.message}</p>}

            <button type="submit">Enviar</button>
        </form>
    )
}
