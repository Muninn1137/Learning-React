import {createRoot} from "react-dom/client"
const root = createRoot(document.getElementById("root"))

import "./style.css"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"
//import Header from "./Header" -- aggiungendo l'export all'Header file

root.render(
    <>
        <Header />
        <MainContent />       
        <Footer/>
    </>
)





