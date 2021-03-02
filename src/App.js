import './App.css';
import Navbars from "../src/Components/Navbar";
import Carousals from "../src/Components/Carousal"
import Cardss from "../src/Components/Cards"
import Footer from "../src/Components/Footer"
function App() {
  return (
    <div className="App">
      <div className="content">
            <Navbars />
            <Carousals />
            <Cardss />
            <Footer />
      </div>
    </div>
  );
}

export default App;
