import './App.css';
import Navbar from './components/Navbar';
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <div className="font-tangerine">
    <Navbar />
    </div>
    </ChakraProvider>
    
  );
}

export default App;
