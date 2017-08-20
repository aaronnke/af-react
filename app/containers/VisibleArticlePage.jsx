import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getArticle } from '../reducers';
import * as actions from '../actions';
import ArticlePage from '../components/ArticlePage';

class VisibleArticlePageComponent extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { id, article, fetchArticle } = this.props;
    if (!article) {
      fetchArticle(id);
    }
  }

  render() {
    const { article } = this.props;
    if (!article) {
      return (
        <div>Loading..</div>
      );
    }
    return (
      <ArticlePage
        {...article}
      />
    );
  }
}

const mapStateToProps = (state, { match }) => {
  const articleId = match.params.articleId;
  return {
    id: articleId,
    article: getArticle(state, articleId),
  };
};

const VisibleArticlePage = withRouter(connect(
  mapStateToProps,
  actions,
)(VisibleArticlePageComponent));

export default VisibleArticlePage;
