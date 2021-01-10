
import './App.css';
import Aboutme from './components/Aboutme';
import Header from './components/layouts/header';
import Projects from './components/Projects';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter,Route} from 'react-router-dom';
import Contactme from './components/Contactme';

function App() {
  return (
    <div className="App">
      <>
      <Header/>
      <BrowserRouter>
        <Route exact path="/" component={Aboutme}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/contactme" component={Contactme} />
      </BrowserRouter>
      </>
    </div>
  );
}

export default App;
