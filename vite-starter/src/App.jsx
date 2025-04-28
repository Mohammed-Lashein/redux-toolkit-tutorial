import { Toaster, toast } from 'sonner';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';

function App() {
  return <main>
    <Navbar/>
    <Toaster position='top-right' richColors/>
    <CartContainer/>
  </main>;
}
export default App;
