export const regex = {
    name: /^\S[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
    email: /^[^\s@]+@[^\s@]+\.(com|net|org|gov|com\.[a-z]{2})$/,
    address: /^\S[a-zA-Z0-9#_-\s]+$/,
    phone: /^\d{10}$/,
    message: /^\S(.{15,120})$/
}
