import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Education from "./Pages/Education/Education";
import Project from "./Pages/Project/Project";
import Tech from "./Pages/Tech/Tech";
import Workexp from "./Pages/Workexp/Workexp";
import Layout from "./component/Layout/Layout";
import Mobilenav from "./component/MobileNav/Mobilenav";
import Footer from './Pages/Footer/Footer.js'
import ScrollToTop from "react-scroll-to-top";
import './App.css';
function App() {
  return (
    <>
      <Mobilenav />
      <Layout />
      <div className="container">
        <About />
        <Education />
        <Tech />
        <Project />
        <Workexp />
        <Contact />
        <Footer/>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }} />
    </>
  )
}

export default App;
