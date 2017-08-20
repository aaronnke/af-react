import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import '../css/App.css';
import NavBar from '../components/NavBar';
import VisibleArticleList from '../containers/VisibleArticleList';
import VisibleArticlePage from '../containers/VisibleArticlePage';

const App = () => (
  <Router>
    <div className="App">
      <NavBar />
      <div className="Main">
        <Switch>
          <Route exact path="/" component={VisibleArticleList} />
          <Route exact path="/:category" component={VisibleArticleList} />
          <Route path="/:category/:articleId" component={VisibleArticlePage} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
