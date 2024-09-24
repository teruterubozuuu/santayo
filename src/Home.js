import "./Home.css";
import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="homeBg">
        <div className="home-container">
          <div className="home-content">
            <p className="desc">
              The best guide in finding the best carinderia places near CIIT
            </p>
            <p className="quote">"Tara, kain tayo!"</p>
            <Link to="/carinderias"><button className="exploreBtn">Explore Carinderias</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
