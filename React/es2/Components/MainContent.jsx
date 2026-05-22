import ReactLogo2 from "./react-logo2.png"

export default function MainContent(){

   return(

    <main>
   <h1 className="subtitle">Fun facts about React</h1>

   <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200k stars on Github</li>
        <li>Is maintained by Meta</li>
        <li>Power thousands of enterpreise apps, including mobile apps</li>
        
   </ul>
   <img src={ReactLogo2} alt="reactLogo2" className="react-logo2"></img>
    </main>

)
}