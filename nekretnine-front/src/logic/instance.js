import axios from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },

});

let token = window.sessionStorage.getItem("token");

if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default instance;