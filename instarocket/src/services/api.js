import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333"
  // baseURL: 'http://10.0.2.2:3333' // android studio emulator
  // baseURL: 'http://10.0.3.2:3333' // genymotion android
  // baseURL: 'http://meu_ip:3333' // via USB
});

export default api;
