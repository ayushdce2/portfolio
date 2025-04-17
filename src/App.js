import TopHeader from "./components/TopHeader";
import MidContent from "./components/MidContent";
import Footer from "./components/Footer";
import "./components/assets/css/home.css";
import "./components/assets/css/homeresponsive.css";
import "./components/assets/css/common.css";
import './App.css';
import "./components/assets/css/animation.css";

function App() {
  return (
    
    <>
    <div className="main ">
        <TopHeader/>
        <MidContent/>
        <Footer/>
        
    </div>
    </>
  );
}

export default App;
