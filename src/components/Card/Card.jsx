import styled from "styled-components"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { connect } from "react-redux";
import { agregarFavorito, removerFavorito } from "../../redux/actions.js";

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

function Card(props) {
   const [isFav, setIsFav] = useState(false);

	useEffect(() => {
		props.myFavorites.forEach(fav => {
			if (fav.id === props.id) {
				setIsFav(true);
			}
		});
	}, [props.myFavorites]);

	function handleFavorite() {
		if (isFav) {
			setIsFav(false);
			props.removeFav(props.id);
		} else {
			setIsFav(true);
			props.addFav(props);
		}
	}

   return (
      <DivCard>
      <Botonse onClick={() => props.onClose(props.id)}>X</Botonse>
      {isFav ? (
                     <button onClick={handleFavorite}>❤️</button>
                  ) : (
                     <button onClick={handleFavorite}>🤍</button>
                  )}
      <Link to={`/detail/${props.id}`} > 
         <H2styled>{props.name}</H2styled>
      </Link>

      <H2styled>{props.species}</H2styled>
      <H2styled>{props.gender}</H2styled>
      <Imgcard src={props.image} alt="" />
      

   </DivCard>
);
   }
   function mapStateToProps(state) {
      return {
         myFavorites: state.myFavorites,
      };
   }
   
   function mapDispatchToProps(dispatch) {
      return {
         addFav: personaje => dispatch(agregarFavorito(personaje)),
         removeFav: id => dispatch(removerFavorito(id)),
      };
   }
   
   export default connect(mapStateToProps, mapDispatchToProps)(Card);