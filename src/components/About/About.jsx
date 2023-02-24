import styled from "styled-components";
import "./About.css";

const Divstyle = styled.div`
	backdrop-filter: blur(20px);
	width: 1500px;
	height: 1800px;
	margin-left: 250px;
	`

	const H1style = styled.h1`
	color: black;
	font-size: 50px;
	font-style: italic;
	`

	const H1Segundostyle = styled.h1`
	color: black;
	font-size: 40px;
	font-style: italic;
	text-align: start;
`

	const Pmayor = styled.p`
	color: black;
	justify-content: left;
	font-size: 30px;
	font-style: oblique;
	text-align: start;
	`

export default function About() {

	return (
		<Divstyle>
			<H1style>Hi, now, You are in the About! </H1style>
			<Pmayor>So, here there is a little history about me...</Pmayor>
			<H1Segundostyle>What is Lorem Ipsum?</H1Segundostyle>
			<Pmayor> 
				Lorem Ipsum is simply the dummy text of printers and text files. Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer used a gallery of type and mixed it up in such a way that he managed to make a specimen textbook. It not only survived 500 years, but also entered as filler text in electronic documents, remaining essentially the same as the original. It was popularized in the 1960s with the creation of "Letraset" sheets, which contained Lorem Ipsum passages, and more recently with desktop publishing software, such as Aldus PageMaker, which includes versions of Lorem Ipsum.
			</Pmayor>		
			<br></br>
			<H1Segundostyle>Why do we use it?</H1Segundostyle>
			<Pmayor>
				It is a long established fact that a reader will be distracted by the text content of a site while looking at its layout. The point of using Lorem Ipsum is that you have a more or less normal distribution of letters, as opposed to using text such as "Content here, content here". These texts make it look like a Spanish that can be read. Many desktop publishing packages and web page editors use Lorem Ipsum as their default text, and a search for "Lorem Ipsum" will return many websites that use this text if they are under development. Many versions have evolved over the years, sometimes by accident, sometimes on purpose (for example inserting humor and the like).
			</Pmayor>
			<br></br>
			<H1Segundostyle>Why do we use it?</H1Segundostyle>
			<Pmayor>
				It is a long established fact that a reader will be distracted by the text content of a site while looking at its design. The point of using Lorem Ipsum is that you have a more or less normal distribution of letters, as opposed to using text such as "Content here, content here". These texts make it look like a Spanish that can be read. Many desktop publishing packages and web page editors use Lorem Ipsum as their default text, and a search for "Lorem Ipsum" will return many websites that use this text if they are under development. Many versions have evolved over the years, sometimes by accident, sometimes on purpose (for example inserting humor and the like).
			</Pmayor>
			<br></br>
			<H1Segundostyle>Where can I get it?</H1Segundostyle>
			<Pmayor>
				There are many variations of Lorem Ipsum passages available, but most have been altered in some way, either by adding humor, or random words that don't seem the least bit believable. If you are going to use a Lorem Ipsum passage, you need to be sure that there is nothing embarrassing hidden in the middle of the text. All Lorem Ipsum generators found on the Internet tend to repeat predefined chunks when necessary, making this the only true (valid) generator on the Internet. It uses a dictionary of over 200 Latin words, combined with very useful sentence structures, to generate Lorem Ipsum text that looks reasonable. This generated Lorem Ipsum will always be free of repetitions, added humor or non-characteristic words of the language, etc.
			</Pmayor>
		</Divstyle>
	);
}