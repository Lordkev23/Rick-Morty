import React from "react";
import styled from "styled-components"
import { connect, useDispatch } from "react-redux";
import { filtrarPersonajes, ordenarPersonajes } from "../../redux/actions.js";
 

	const GoodDiv = styled.div`
	backdrop-filter: blur(25px);
	width: 400px;
	height: 2500px;
	margin-left: 740px;
	`

    const DivCard = styled.div`
    margin-top: 3%;
    background-color: #c2c2cccf;
    border-radius: 10px;
    border: solid 2px;
    &:hover{
       background-color: #9b9badcf;
    border-radius: 10px;
    border: solid 2px;
    }
    
    `
    const Botonse = styled.button`
    color:white;
    background-color: red;
    border-radius: 10%;
    &:hover{
    color:white;
    background-color: #b50404;
    border-radius: 10%;
    }
    `
    const Imgcard = styled.img`
    display: flex;
    justify-content: center;
    border-radius: 30%;
    border: solid 1px;
    
    &:hover{
       display: flex;
    justify-content: center;
    border-radius: 30%;
    border: solid 1px;
       -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -o-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1)
    }
    `
    const H2styled = styled.h3`
    display: flex;
    justify-content: center;
    `
    const Blikes = styled.button`
    &:hover{
    
    -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -o-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1)
    }
    `    

const Favorites = (props) =>{

	const dispatch = useDispatch();

	function handleFilter(e) {
		dispatch(filtrarPersonajes(e.target.value));
	}
   return(
    <div>
			<h1>Favorites</h1>
			<div>
				<select
					name="order"
					onChange={e => dispatch(ordenarPersonajes(e.target.value))}
				>
					<option value="default" disabled>
						Select...
					</option>
					<option value="Ascendente">Ascendente</option>
					<option value="Descendente">Descendente</option>
				</select>
				<select name="gender" id="" onChange={handleFilter}>
					<option value="" disabled>
						Select...
					</option>
					<option value="All">All</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Genderless">Genderless</option>
					<option value="unknown">Unknown</option>
				</select>
			</div>

			<div>
			<GoodDiv>
				{props.myFavorites?.map(character => (
					<div>
						<h3>
							{character.name} - {character.id}
						</h3>
						<img src={character.image} alt="" />
					</div>
				))}
			</GoodDiv>
			</div>

		</div>
	);
}

function mapStateToProps(state) {
	return {
		myFavorites: state.myFavorites,
	};
}

export default connect(mapStateToProps)(Favorites);