
//import { useState } from 'react';
import Header from './layout/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import ClassSignUp from './components/ClassSignUp.jsx';
import MakeupMembers from './components/MakeupMembers.jsx';
import Footer from './layout/Footer.jsx';
import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import NavLine from './layout/NavLine.jsx';

function App() {
 // const [addMember, setAddMember] = useState("")
  //const [getAllMakeupMembers, setGetAllMakeupMembers] = useState('')

  return (
   <>
   <NavLine />
   <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/makeup-member-classes' element={<ClassSignUp />}></Route>
        <Route path='/makeup-members' element={<MakeupMembers/>}></Route>
      </Routes>

   <Footer />
   </>
  );
}

export default App;
