import "./Header.css"

function Header(props){
    return(
        <>
            <header>
                <div className="header-container"> {/*Container for website name and login button*/}
                    <h1 className="website-name">SANTAYO?</h1>
                    <div className="nav-bar">
                        <ul> {/*navigation bar*/}
                            <li>Home</li>
                            <li>About</li>
                            <li>Carinderias</li>
                        </ul>
                        <button className="loginBtn">Login</button>
                    </div> 
                </div> 
               
            </header>
        </>
    );
}

export default Header;