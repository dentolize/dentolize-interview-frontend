import styled from "styled-components";

export const HeaderWrapper = styled.div`
  
  
  &-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 24px;
  position: relative;
  
  &-left, &-right {
    display: flex;
    align-items: center;
  }
  
  &-left { flex-grow: 1; } 
  
  &-right button {
    margin-left: 10px; 
  }
}


&-name {
  color: var(--main-color);
  margin: 0;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  margin: 0 32px;
}
}

.mode-switch {
background-color: transparent;
border: none;
padding: 0;
color: var(--main-color);
display: flex;
justify-content: center;
align-items: center;
}



.add-btn {
color: #fff;
background-color: var(--button-bg);
padding: 0;
border: 0;
border-radius: 50%;
width: 32px;
height: 32px;
display: flex;
align-items: center;
justify-content: center;
}

.notification-btn {
color: var(--main-color);
padding: 0;
border: 0;
background-color: transparent;
height: 32px;
display: flex;
justify-content: center;
align-items: center;
}

.profile-btn {
padding: 0;
border: 0;
background-color: transparent;
display: flex;
align-items: center;
padding-left: 12px;
border-left: 2px solid #ddd;

img {
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 4px;
}

span {
  color: var(--main-color);
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
}
}

`