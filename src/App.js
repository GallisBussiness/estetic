import './App.css';
import Navbar from './components/Navbar';
import { ChakraProvider } from "@chakra-ui/react"
import Footer from './components/Footer';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <ChakraProvider>
      <div className="font-tangerine">
    <Navbar />
     <AppRouter />
    <Footer />
    </div>
    </ChakraProvider>
    </BrowserRouter>
    
    
  );
}

export default App;
