We could do Movie details by 3 methods!

1. Creating each component of each movie (for eg the-rider)
2. Like we did in this project , Storing Data in other file then importing it and using useHistory from react-router-dom
3. Ideal using API (fetching data)

Framer Motion
// 1. animate={{ opacity: 1, transition: { duration: 2 } }}
// initial={{ opacity: 0 }}
// 2. <motion.h2 variants={titleAnim} initial="hidden" animate="show">
// 3. Stagger (if you add a parent variant and you have bunch of children you can stagger them)

To Remove staggering on specific item add initial & animate on it
^^ <motion.img
variants={photoAnim}
initial="hidden"
animate="show"
src={home1}
alt="guy with a camera"
/>

// framer motion variants
const titleAnim = {
hidden: { opacity: 0 },
show: { opacity: 1, transition: { duration: 2 } },
};
const container = {
hidden: { x: 100 },
show: {
x: 0,
transition: {
duration: 0.75,
ease: 'easeOut',
staggerChildren: 1,
// when: 'afterChildren',
},
},
};
<motion.divvariants={container}
initial="hidden"
animate="show"
className="title">

</motion.div>

<------------------------------------>
Way to fix auto formatting in globalStyle
1 . import \* as styled from 'styled-components';

const GlobalStyles = styled.createGlobalStyle`

- {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }
  `;

export default GlobalStyles;

2./
import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`${css`
html,
body,
#root {
padding: 0px;
margin: 0px;
width: 100vw;
height: 100vh;
}
`}`;

We cannot add padding margin top and bottom on inline items(like <a></a> tag) then make it display:inline-block;
