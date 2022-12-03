// wasm import
import init, { add } from "./pkg/wasm_test.js";
init().then(() => {
    const element = document.createElement("p");
    element.textContent = `The online plugin uses the add API to do: 3 + 3 = ${add(3, 3)}`
    document.body.appendChild(element);
});
