We could do Movie details by 3 methods!

1. Creating each component of each movie (for eg the-rider)
2. Like we did in this project , Storing Data in other file then importing it and using useHistory from react-router-dom
3. Ideal using API (fetching data)

Framer Motion
// 1. animate={{ opacity: 1, transition: { duration: 2 } }}
// initial={{ opacity: 0 }}
// 2. <motion.h2 variants={titleAnim} initial="hidden" animate="show">
// 3. Stagger (if you add a parent variant and you have bunch of children you can stagger them)

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
