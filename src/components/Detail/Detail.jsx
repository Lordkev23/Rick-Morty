import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const DivStyle = styled.div`
backdrop-filter: blur(25px);
width: 500px;
height: 250px;
margin-left: 750px;
`
const Boton = styled.button`
   background-color: #efb810;
   color: white;
   width: 80px;
   height: 33px;
`

export default function Detail() {
	const { detailId } = useParams();
	const navigate = useNavigate();
	const [character, setCharacter] = useState({});

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
			.then(response => response.json())
			.then(char => {
				if (char.name) {
					setCharacter(char);
				} else {
					window.alert("No hay personajes con ese ID");
				}
			})
			.catch(err => {
				window.alert("Error", err);
			});

		return setCharacter({});
	}, [detailId]);

	return (
		<div>
			<div>
				<Boton onClick={() => navigate("/home")}>Volver</Boton>
			</div>
		
		<DivStyle>	
			<h1>NOMBRE: {character.name}</h1>
			<h2>STATUS: {character.status}</h2>
			<h2>ESPECIE: {character.species}</h2>
			<h2>GENERO: {character.gender}</h2>
			<h2>ORIGIN: {character.origin?.name}</h2>
		</DivStyle>
		
		</div>
	);
}