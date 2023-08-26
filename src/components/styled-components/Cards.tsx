import styled from "styled-components";


const BaseElement = styled.div`
.container{
	display: flex;
	justify-content: center;
	align-items: center;
flex-wrap: wrap;
gap: 12px;
padding-top: 1em;
font-family: "Fredoka", sans-serif";
}
.card {
	background-color: rgba(0, 0, 0, 0.2);
	border-radius: 30px;
	text-align: center;
	padding: 20px 15px;
	box-shadow: 20px 20px 20px darken(rgba(0,2), 2%),
		-20px -20px 20px lighten(rgba(0,2), 2%);
	h3 {
		color: darken(rgba(0,2), 80%);
		font-weight: bold;
		margin: 30px 0;
	}
	p {
		margin: 10px auto;
		// max-width: 80%;
	}
	
	}
}
`

export default BaseElement;