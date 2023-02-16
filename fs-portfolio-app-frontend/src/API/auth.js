import axios from "axios";

axios.defaults.withCredentials = true

export async function onRegistration(registrationData) {
    return await axios.post(
        'http://localhost:3023/users/',
        registrationData
    )
}
export async function onLogin(loginData) {
    return await axios.post(
        'http://localhost:3023/users/login',
        loginData
    )
}
export async function onLogout() {
    return await axios.get(
        'http://localhost:3023/users/logout'
    )
}
export async function fetchProtectedInfo() {
    return await axios.get(
        'http://localhost:3023/users/protected'
    )
}

export async function fetchUsersData() {
    return await axios.get(
        'http://localhost:3023/users'
    )
}
