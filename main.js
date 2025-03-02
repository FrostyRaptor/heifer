import { moo } from "./moo.js";
import { say } from "cowsay";

const name = "Ethan";

console.log(say({text: moo(name)}));
