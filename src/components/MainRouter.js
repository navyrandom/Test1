import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Counter from './Counter';

function MainRouter() {
  return (
    <Router>
      <nav style={{fontSize: '30px', textAlign:'center'}}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/counter'>Counter</Link>
        </li>
      </nav>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/counter' component ={Counter} />
      </Switch>
    </Router>
  );
}

export default MainRouter;