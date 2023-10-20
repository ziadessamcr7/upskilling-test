import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import About from './About/About';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return <>

    <Header />

    <About />

    <Services />

    <Testimonial />

    <Contact />

    <Footer />

    <Toaster />

  </>
}

export default App;
