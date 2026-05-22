import {createRoot} from "react-dom/client"
const root = createRoot(document.getElementById("root"))

import "./style.css"

root.render(
    <>
        <Header />
        <Title />
        <Mylist />
        <Footer/>
    </>
)


function Header(){
    return(
        <img src="React logo.png" width="40px" alt="react logo"></img>
    )
}

function Title(){
    return(
      <h1>What does Muninn like?</h1>
    )

}

function Footer(){
    return(
        <p>@ 2026 Copyright Muninn development. All rights reserved.</p>
    )
}

function Mylist(){
 return (
  
        <ol>
            <li>Volleyball</li>
            <li>Gaming </li>
            <li>Karate</li>
            <li>Goth girls</li>
        </ol>   
 )
}