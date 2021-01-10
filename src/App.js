
import './App.css';
import Aboutme from './components/Aboutme'
import Header from './components/layouts/header';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

function App() {
  return (
    <div className="App">
      <Header/>
      <Aboutme/>
    </div>
  );
}

export default App;
