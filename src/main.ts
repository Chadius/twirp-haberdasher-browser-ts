import './style.css'
import { client } from "twirpscript";
import { MakeHat } from "../protos/service.pb"

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

client.baseURL = "http://localhost:8080";

const hat = await MakeHat({ inches: 12 });

console.log(hat);