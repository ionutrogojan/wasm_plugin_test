// wasm import
import init, { add } from "./pkg/wasm_test.js";
init().then(() => {
    const element = document.createElement("p");
    element.textContent = `The plugin1 uses the add API to do: 1 + 1 = ${add(1, 1)}`
    document.body.appendChild(element);
});