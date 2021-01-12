import 'bootstrap/dist/css/bootstrap.css'
import HeaderComponent from './components/HeaderComponent.js'
import { BrowserRouter as Router ,Switch , Route } from 'react-router-dom'
import HomeComponent from './components/HomeComponent.js';
import AboutComponent from './components/AboutComponent.js';
import ServicesComponent from './components/ServicesComponent.js';
import ContactComponent from './components/ContactComponent.js';

function App() {
  return (
    <div>
      <HeaderComponent/>
      
    </div>
  );
}

export default App;
