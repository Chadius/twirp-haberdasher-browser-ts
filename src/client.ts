import { client } from "twirpscript";
import { MakeHat } from "../protos/service.pb"

client.baseURL = "http://localhost:8080";

const hat = async () => {await MakeHat({ inches: 12 })};

console.log(hat);