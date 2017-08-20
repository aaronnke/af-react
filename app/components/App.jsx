import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import '../css/App.css';
import VisibleArticleList from '../containers/VisibleArticleList';
import VisibleArticlePage from '../containers/VisibleArticlePage';

const App = () => (
  <Router>
    <div className="App">
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <div className="Main">
        <Switch>
          <Route exact path="/" component={VisibleArticleList} />
          <Route path="/:category/:articleId" component={VisibleArticlePage} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
