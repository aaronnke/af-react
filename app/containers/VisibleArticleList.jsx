import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getVisibleArticles, getIsFetching, getPage } from '../reducers';
import * as actions from '../actions';
import ArticleList from '../components/ArticleList';
import ArticleListLoading from '../components/ArticleListLoading';

class VisibleArticleListComponent extends Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.fetchData();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      this.fetchData();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  fetchData() {
    const { fetchArticles, category, page } = this.props;
    fetchArticles(page, category);
  }

  handleScroll() {
    const { isFetching } = this.props;
    if (isFetching) return;
    const windowHeight = window.innerHeight;
    const pageOffset = window.pageYOffset;
    const totalHeight = document.body.offsetHeight;
    if (pageOffset + windowHeight > totalHeight * 0.8) {
      this.fetchData();
    }
  }

  render() {
    const { isFetching, articles } = this.props;
    if (isFetching && !articles.length) {
      return <ArticleListLoading />;
    }

    return (
      <ArticleList
        articles={articles}
      />
    );
  }
}

const mapStateToProps = (state, { match }) => {
  let category = match.params.category || 'all';
  if (category.split('-').length > 1) {
    const catWords = category.split('-');
    category = catWords[0] + catWords[1][0].toUpperCase() + catWords[1].slice(1);
  }
  return {
    isFetching: getIsFetching(state, category),
    articles: getVisibleArticles(state, category),
    category,
    page: getPage(state, category),
  };
};

const VisibleArticleList = withRouter(connect(
  mapStateToProps,
  actions,
)(VisibleArticleListComponent));

export default VisibleArticleList;
