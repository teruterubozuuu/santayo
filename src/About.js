import "./About.css"
import joyDev from "./images/joy.png"
import kcDev from "./images/kc.png"
import jupiDev from "./images/jupi.png"
import clarisseDev from "./images/clarisse.png"

function About(){
    return(
        <>
        <div className="about-container">
            <div className="about-content">
            
                <h1>About Santayo?</h1>
                <p>
                Santayo? is an innovative platform designed to showcase the rich variety of delectable and affordable local dishes served in the carinderias 
                surrounding CIIT College of Arts and Technology. Our goal is to help both locals and CIITzens discover the best spots to eat, relax, 
                and hang out with friends. Whether you're in the mood for a quick, hearty meal between classes or looking for a cozy place to enjoy local
                Filipino cuisine, Santayo? offers a comprehensive guide to the top carinderias in the area.
                    
                </p>
                <h1 className="devTitle">The Developers</h1>
                <div>
                    <div className="devpic-container">
                        <div className="devpic-wrapper">
                            <img src={joyDev} alt="Dev Pic" className="devpics"></img>
                            <div><label>Joylynne Esportuno</label></div>
                        </div>
                        <div className="devpic-wrapper" >
                            <img src={kcDev} alt="Dev Pic" className="devpics"></img>
                            <div><label>Krizha Cortez</label></div>
                        </div >
                        <div className="devpic-wrapper">
                            <img src={jupiDev} alt="Dev Pic" className="devpics"></img>
                            <div><label>Jethro Lagmay</label></div>
                        </div>
                        <div className="devpic-wrapper">
                            <img src={clarisseDev} alt="Dev Pic" className="devpics"></img>
                            <div><label>Clarisse Lapid</label></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default About