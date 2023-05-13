
import ClassSignup from './components/ClassSignup.jsx';
import ContactUs from './components/ContactUs.jsx';
import Home from './components/Home.jsx';
import MakeupMembers from './components/MakeupMembers.jsx';
import Footer from './layout/Footer.jsx';
import About from './components/About.jsx';
import Header from './layout/Header.jsx';
import './styles/App.css';

function App() {
  return (
   <>
   <Header />
   <Home />
   <About />
   <ClassSignup />
   <MakeupMembers />
   <ContactUs />
   <Footer />
   </>
  );
}

export default App;
