import {createRoot} from "react-dom/client"
const root = createRoot(document.getElementById("root"))

import App from "./Components/App"
import "./style.css"

root.render(<App/>)