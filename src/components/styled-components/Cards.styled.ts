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
	position: relative;
	background-color: rgba(0, 0, 0, 0.2);
	border-radius: 30px;
	text-align: center;
	padding: 20px 15px;
	box-shadow: 20px 20px 20px darken(rgba(0,2), 2%),
		-20px -20px 20px lighten(rgba(0,2), 2%);
	
		> section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		> p {
			margin: 1px;
		}
		
		}
		h3 {
		color: darken(rgba(0,2), 80%);
		font-weight: bold;
		margin: 30px 0;
	}

	}
}
`

export default BaseElement;