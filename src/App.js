import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="font-tangerine">
    <Navbar />
     <AppRouter />
    <Footer />
    </div>
    </BrowserRouter>
    
    
  );
}

export default App;
