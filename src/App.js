import './App.css'
import Cards from './components/Cards/Cards.jsx'
import styled from 'styled-components'
import GlobalStyles from './globalStyles'
import { useState, useEffect } from 'react'
import Nav from './components/Nav/Nav'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";


function App () {
  const[characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = "lordkev@soyhenry.com";
	const password = "Startcraft23";

	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		!access && navigate("/");
	}, [access]);

	function login(userData) {
		if (userData.username === username && userData.password === password) {
			setAccess(true);
			navigate("/home");
		}
	}

  function onSearch (character) {
    const chars = [...characters];
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (chars.find((char) => char.id === data.id)) {
          window.alert("El personaje ya esta agregado");
        } else if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
     });
    };

    function onClose(id) {
      setCharacters(oldCharacters =>
        oldCharacters.filter(char => char.id !== id)
      );
    }

    function busquedaRamdon(){ 
      const ramdonId = Math.floor(Math.random() * 825)+1
      onSearch(ramdonId)
    }

    
  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === "/" ? null : <Nav onSearch={onSearch} busquedaRamdon={busquedaRamdon}/>}
      <GlobalStyles />

      
        <Routes>
        <Route path="/" element={<Form login={login} />}></Route>

          <Route
            path='/home'
            element={<Cards onClose={onClose} characters={characters}/>}
          
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
				  <Route path="/detail/:detailId" element={<Detail />} />
        </Routes>
    </div>
  )
}


export default App
