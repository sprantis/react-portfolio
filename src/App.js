// Referencing code from Module 20
// import logo from './logo.svg';
import './App.css';
// Import Header and Footer from the components folder
import Header from './components/Header';
import Footer from './components/Footer';


// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning another default HTML from it.
export default function App() {
  return (
    <div className="App">
        <Header />
        <Footer />
    </div>

  );
}
