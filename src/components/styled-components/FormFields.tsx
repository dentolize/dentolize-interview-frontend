import styled from "styled-components";


const BaseElement = styled.div`
.field-wrapper{
display: flex;
flex-wrap: wrap;
 margin-bottom: .5em;
&:last-child {
    margin-bottom: 0;
}
.icon {
    align-self: center;
    fill: rgba(0,0,0,0.5);
    position: relative;
    width: 15px;
    height: 15px;
    padding: .5em .5em;
    &:after {
        content: '*';
        color: red;
        position: absolute;
        top: 0;
        left: 0;
    }
}
 
> section {
    display: flex;
    flex: 1;
    input {
        inner-shadow: none;
        transition: .3s;
        flex-grow: 1;
        color: rgba(0,0,0,0.5);
        font-weight: 300;
        padding: .35em .5em;
        background-color: #fff;
        border: 1px solid #aaa;
        border-radius: 8px;
        &::placeholder{
            opacity: 0.9;
            font-weight: bold;

        }
    }
}
}`

export default BaseElement;