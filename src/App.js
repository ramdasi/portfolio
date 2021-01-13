
import './App.css';
import Aboutme from './components/Aboutme';
import Header from './components/layouts/header';
import Projects from './components/Projects';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter,Route} from 'react-router-dom';
import Contactme from './components/Contactme';
import Footer from './components/layouts/footer'
function App() {
  return (
    <div className="App">
      <>
      
      <BrowserRouter>
        <Header/>
        <Route exact path="/" component={Aboutme}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/contactme" component={Contactme} />
        <Footer/>
      </BrowserRouter>
      </>
    </div>
  );
}

export default App;
