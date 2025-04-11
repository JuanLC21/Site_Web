import { messages } from './errorMessages'
import { regex } from './regexValidation'

export function validation (inputs) {
    const errors = {}

    if (!regex.name.test(inputs.name)) errors.name = messages.name
    if (!regex.email.test(inputs.email)) errors.email = messages.email
    if (!regex.address.test(inputs.address)) errors.address = messages.address
    if (!regex.phone.test(inputs.phone)) errors.phone = messages.phone
    if (!regex.message.test(inputs.message)) errors.message = messages.message

    return errors
}
