import Header from "./Header";
import Home from "./Home";
import bgImg from "./images/bg-img.png"

function App() {
  return (
    <div>
      <Header></Header>
      <Home bg={bgImg}></Home>
    </div>
  );
}

export default App;
