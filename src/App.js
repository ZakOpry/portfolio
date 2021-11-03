import './AppStyles.css'
import AboutMe from './components/AboutMe';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import SideBar from './components/SideBar';
import TopNavBar from './components/TopNavBar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import YouBrew from './components/YouBrew';
import InstagramClone from './components/InstagramClone';
import GuitarMaster from './components/GuitarMaster';
import Portfolio from './components/Portfolio.js'

function App() {
  return (
    <Router>
<Switch>
    
    <>
      <TopNavBar/>

      <Route exact path='/'>
     <AboutMe/> 
     </Route>

    <Route path = '/projects'>
      <Projects/>
      </Route>

      <Route path = '/contact'>
        <Contact/>
        </Route>

      <Route path = '/youbrew'>
      <YouBrew/>
        </Route>

      <Route path= '/instagramclone'>
      <InstagramClone/>
      </Route>

      <Route path='/guitarmaster'>
        <GuitarMaster/>
      </Route>

      <Route path='/portfolio'>
        <Portfolio/>
      </Route>      

    </>
   </Switch>
    </Router>
  );
}

export default App;
