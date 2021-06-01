// Global Style
import GlobalStyle from './components/GlobalStyle';

// Import Pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import Nav from './components/Nav';
import MovieDetail from './pages/MovieDetail';
// Router
import { Switch, Route, useLocation } from 'react-router-dom';

// Animation
import { AnimatePresence } from 'framer-motion';
function App() {
  // Gives us key of each page which help in page transition
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      {/* Switch stops as it finds the first matching route*/}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          {/* Route doesnt have to be exact. for eg  localhost:3000/work will render about as as it sees '/' then goes to next /work then render work.We use switch to make them stop.. */}
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
