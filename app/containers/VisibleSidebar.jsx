import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getVisibleArticles } from '../reducers';
import * as actions from '../actions';
import Sidebar from '../components/Sidebar';

class VisibleSidebarComponent extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { fetchPopularArticles } = this.props;
    fetchPopularArticles();
  }

  render() {
    const { articles } = this.props;
    if (!articles.length) {
      return <p>Loading..</p>;
    }
    return (
      <Sidebar
        articles={_.dropRight(articles, 5)}
      />
    );
  }
}

const mapStateToProps = state => ({
  articles: getVisibleArticles(state, 'popular'),
});

const VisibleSidebar = connect(
  mapStateToProps,
  actions,
)(VisibleSidebarComponent);

export default VisibleSidebar;
