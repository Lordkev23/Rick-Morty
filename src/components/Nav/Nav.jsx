 import SearchBar from "../SearchBar/SearchBar";
 import styled from "styled-components";
 import RamdonPerson from "../RamdonPerson/ramdonPerson";
 import { Link } from 'react-router-dom';


 const SpanStyle = styled.span`
 color: black;
 font-weight: bolder;
 font-style: oblique;
 margin:15px;
 font-size: 35px;
 `
 const DivNav = styled.nav`
 display: flex;
 flex-direction:row;
 justify-content: center;
 margin-left:50px;
 border-radius: 10%;
 border: 2px solid #222121;
 border-left: 1px solid #222121;
 border-right: 1px solid #222121;
 background-color: #b8b8b868;
 font-size: 30px
`

 export default function Nav(props){
    return (
        <DivNav>

            <Link to={"/home"}>
				<SpanStyle>Home</SpanStyle>
			</Link>
            
			<Link to={"/about"}>
				<SpanStyle>About</SpanStyle>
			</Link>

            <Link to={"/favorites"}>
				<SpanStyle>Favorites</SpanStyle>
			</Link>

             <SearchBar onSearch={props.onSearch} element={<RamdonPerson busquedaRamdon={props.busquedaRamdon}/>} /> 
            <RamdonPerson busquedaRamdon={props.busquedaRamdon}/>
        </DivNav>
    )
 }
