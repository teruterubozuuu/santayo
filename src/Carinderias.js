import sampleImage from './images/sample-img.png';
import { Link } from "react-router-dom";
import "./Carinderias.css";

function Carinderias() {
    const cards = [
        { id: 1, title: "Carinderia 1", image: sampleImage, description: "Description for carinderia 1." },
        { id: 2, title: "Carinderia 2", image:  sampleImage, description: "Description for carinderia 2." },
        { id: 3, title: "Carinderia 3", image:  sampleImage, description: "Description for carinderia 3." },
        { id: 4, title: "Carinderia 4", image:  sampleImage, description: "Description for carinderia 4." },
    ];

    return (
        <div>
            {/*
            <header className="carinderias-header">
                <h1>SANTAYO?</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/carinderias">Carinderias</Link></li>
                    </ul>
                    <button className="loginBtn">Login</button>
                </nav>
            </header>
            */}
            
        {/*ello! :DD since meron na tayong header component we don't need to create a header element na :3 thank you ! pogchamp !! */}
        
            <div className="card-container">
                {cards.map((card) => (
                    <Link to={`/card/${card.id}`} key={card.id} className="card">
                        <img src={card.image} alt={card.title} className="card-image" />
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Carinderias;
