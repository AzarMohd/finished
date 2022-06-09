import './App.css';
import Screen from './components/Screen';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Screen1 from './components/Screen1/Screen1';
import {Routes,Route,Navigate} from "react-router-dom"; 

function App() {
  return (
    <div>
    <Routes>
    <Route exact path="/" element={<Screen />}/>
    <Route exact path="/screens" element={<Screen1 />}/>
    <Route path="/" element={<Navigate replace to="/" />} />
    </Routes>
      
      
    </div>
  );
}

export default App;
