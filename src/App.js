import './App.css';
import "tailwindcss/tailwind.css"
import Cart from './components/Cart/Cart';
import Header from './components/Cart/Header/Header';
import Service from './components/Service/Service';
function App() {
  return (
    <div>
         <Cart/>
         <Header />
         <Service/>
    </div>
  );
}

export default App;
