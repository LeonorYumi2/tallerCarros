import axios from 'axios'

//Crear un cliente de axios configurado con:
//baseURL : La URL de la APIk, tomada de variables de entorno EXPO
//headers: indicar que el contenido es JSON 

export const client = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    headers: {'Content-Type': 'application/json'},
})