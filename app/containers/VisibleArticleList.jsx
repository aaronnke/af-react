import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLatestArticles } from '../reducers';
import * as actions from '../actions';
import ArticleList from '../components/ArticleList';

class VisibleArticleListComponent extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { fetchLatestArticles } = this.props;
    fetchLatestArticles().then(() => console.log('done!'));
  }

  render() {
    const { articles } = this.props;
    return (
      <ArticleList
        articles={articles}
      />
    );
  }
}

const mapStateToProps = state => ({
  articles: getLatestArticles(state, 'all'),
});

const VisibleArticleList = connect(mapStateToProps, actions)(VisibleArticleListComponent);

export default VisibleArticleList;
