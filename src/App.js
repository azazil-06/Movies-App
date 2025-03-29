import logo from './logo.svg';
import './App.css';
import Moviedetails from './COMPONENTS/Moviedetails';
import Search from './COMPONENTS/Search';
import Navbar from './COMPONENTS/Navbar';
import Movies from './COMPONENTS/Movies';

function App() {
  return (
    <div>
      <Navbar />
      <Moviedetails />
      <Search />
      <Movies />
      
    </div>
  );
}

export default App;
