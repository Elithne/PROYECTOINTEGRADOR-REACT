import './App.css';
import Footer from './Footer';

function App() {
  const name = "John";
  const hello = <h1>Hello, {name}!</h1>;
  const mensaje = `Hello, ${name}`;

  return (
    <>
      <h1 id="un-id" className="una-clase">{mensaje}</h1>
      <Footer></Footer>
    </>
  )
}

export default App
