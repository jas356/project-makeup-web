
import { useState } from 'react';
import Header from './layout/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import ClassSignup from './components/ClassSignup.jsx';
import MakeupMembers from './components/MakeupMembers.jsx';
import Footer from './layout/Footer.jsx';
import './styles/App.css';

function App() {
  const [addMember, setAddMember] = useState("")
  const [getAllMakeupMembers, setGetAllMakeupMembers] = useState('')

  return (
   <>
   <Header />
   <Home />
   <About />
   <ClassSignup addMember={addMember} setAddMember={setAddMember}/>
   <MakeupMembers getAllMakeupMembers={getAllMakeupMembers} setGetAllMakeupMembers={setGetAllMakeupMembers}  />
   <Footer />
   </>
  );
}

export default App;
