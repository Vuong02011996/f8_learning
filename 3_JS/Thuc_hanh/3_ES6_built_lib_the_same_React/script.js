import { attach } from "./store.js";
import App from "./component/App.js"

// truyền component và root element vào acttach
// Function app sẽ return component cần thêm vào root.
attach(App, document.querySelector("#root"))
