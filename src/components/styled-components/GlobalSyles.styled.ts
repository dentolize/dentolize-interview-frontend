import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
}

:root {

  --input-color: #99A3BA;
  --input-border: #CDD9ED;
  --input-background: #fff;
  --input-placeholder: #CBD1DC;

  --input-border-focus: #275EFE;

  --group-color: var(--input-color);
  --group-border: var(--input-border);
  --group-background: #EEF4FF;

  --group-color-focus: #fff;
  --group-border-focus: var(--input-border-focus);
  --group-background-focus: #678EFE;
  --app-container: #f3f6fd;
  --main-color: #1f1c2e;
  --secondary-color: #4A4A4A;
  --link-color: #1f1c2e;
  --link-color-hover: #c3cff4;
  --link-color-active: #fff;
  --link-color-active-bg: #1f1c2e;
  --projects-section: #fff;
  --message-box-hover: #fafcff;
  --message-box-border: #e9ebf0;
  --more-list-bg: #fff;
  --more-list-bg-hover:  #f6fbff;
  --more-list-shadow: rgba(209, 209, 209, 0.4);
  --button-bg: #1f1c24;
  --search-area-bg: #fff;
  --star: #1ff1c2e;
  --message-btn: #fff;
}

.dark:root {
  --app-container: #1f1d2b;
  --app-container: #111827;
  --main-color: #fff;
  --secondary-color: rgba(255,255,255,.8);
  --projects-section: #1f2937;
  --link-color: rgba(255,255,255,.8);
  --link-color-hover: rgba(195, 207, 244, 0.1);
  --link-color-active-bg: rgba(195, 207, 244, 0.2);
  --button-bg: #1f2937;
  --search-area-bg: #1f2937;
  --message-box-hover: #243244;
  --message-box-border: rgba(255,255,255,.1);
  --star: #ffd92c;
  --light-font: rgba(255,255,255,.8);
  --more-list-bg: #2f3142;
  --more-list-bg-hover:  rgba(195, 207, 244, 0.1);
  --more-list-shadow: rgba(195, 207, 244, 0.1);
  --message-btn: rgba(195, 207, 244, 0.1);
}

html, body, #root {
  width: 100%;
  height: 100vh;
  margin: 0;
}

body {
  font-family: 'DM Sans', sans-serif;
  display: flex;
  justify-content: center;
  background-color: var(--app-container);
}

button, a {
  cursor: pointer;
  text-decoration: none;
}
button{
  background-color: none;
border: none;
}
`