import './App.css';
import HomeScreen from './screens/HomeScreen';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AboutScreen from './screens/AboutScreen';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeScreen />} exact />
        <Route path='/about' element={<AboutScreen />} exact />
      </Routes>
    </Router>
  );
}

export default App;
