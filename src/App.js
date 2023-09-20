import './App.css';
import { Link, Outlet } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Hello Netherlands!!</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}


export function About(){
  return(
    <div>
      <h2>About us</h2>
      <Outlet />
    </div>
  );
}

export function History(){
  return(
    <div>
      <h2>About history</h2>
    </div>
  );
}


export function Contact(){
  return(
    <div>
      <h2>Contact us</h2>
    </div>
  );
}

 export function App() {
  return (
   <Home />
  );
}
