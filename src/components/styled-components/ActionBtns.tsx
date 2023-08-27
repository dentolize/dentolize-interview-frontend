import styled from "styled-components";


const BaseElement = styled.div`
.btn-wrapper{
    display: flex;
    justify-content: center;
}
.btn-wrapper.right{
	justify-content: flex-end;
}
.btn-wrapper.left{
	justify-content: flex-start;

}

button,a {
margin: 10px 0;
padding: .35em 1em;
transition: .1s;
box-shadow:  0 30px 60px -30px rgba(0, 0, 0, .5);
cursor: pointer;
border: 1px solid rgba(0, 0, 0, .5);
background-color: #fff;
transition: .3px;
border-radius: 8px;
color: rgba(0, 0, 0, .5);


&:enabled:hover {
    background-color: rgba(0, 0, 0, .1);
    color: #fff;
}
&.btn-not-filled {
    border-color: rgba(0, 0, 0, .5);
    color: rgba(0, 0, 0, .5);
    &:enabled:hover {
        background-color: rgba(0, 0, 0, .1);
        color: rgba(0, 0, 0, .5);
        border-color: rgba(0, 0, 0, .5);
    }
}
&.btn--filled {
    background-color: rgba(0, 0, 0, .5);
    border-color: rgba(0, 0, 0, .5);
    color: #fff;
    &:enabled:hover {
        background-color: rgba(0, 0, 0, .1);
        color: rgba(0, 0, 0, .5);
        border-color: rgba(0, 0, 0, .5);
    }
}
&:disabled {
    background-color: #ecf0f1;
    border-color: #bdc3c7;
    color: #6a6a6a;
}
} 
`

export default BaseElement;