import Wrapper from './components/Wrapper'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer';
import NavTabs from './components/NavTabs'
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects';


function App() {
  return (
    <div>
      <Router>
        <div>
          <NavTabs />
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />

          </Wrapper>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
