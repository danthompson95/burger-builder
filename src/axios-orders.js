import axios from "axios"

const instance = axios.create({
  baseURL: "https://dt95-burger-builder.firebaseio.com/"
})

export default instance
