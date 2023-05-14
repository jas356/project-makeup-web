
import { useState } from 'react';
import ClassSignup from './components/ClassSignup.jsx';
import ContactUs from './components/ContactUs.jsx';
import Home from './components/Home.jsx';
import MakeupMembers from './components/MakeupMembers.jsx';
import Footer from './layout/Footer.jsx';
import About from './components/About.jsx';
import Header from './layout/Header.jsx';
import './styles/App.css';

function App() {
  const [addMember, setAddMember] = useState("")
  return (
   <>
   <Header />
   <Home />
   <About />
   <ClassSignup addMember={addMember} setAddMember={setAddMember}/>
   <MakeupMembers />
   <ContactUs />
   <Footer />
   </>
  );
}

export default App;
