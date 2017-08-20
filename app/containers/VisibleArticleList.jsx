import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getVisibleArticles, getIsFetching } from '../reducers';
import * as actions from '../actions';
import ArticleList from '../components/ArticleList';
import ArticleListLoading from '../components/ArticleListLoading';

class VisibleArticleListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };

    this.fetchData = this.fetchData.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.fetchData();
    window.addEventListener('scroll', this.handleScroll);
  }

  fetchData() {
    const { fetchArticles, filter } = this.props;
    fetchArticles(this.state.page, filter);
  }

  handleScroll() {
    const windowHeight = window.innerHeight;
    const pageOffset = window.pageYOffset;
    const totalHeight = document.body.offsetHeight;
    if (pageOffset + windowHeight >= totalHeight * 0.8) {
      this.setState(prevState => ({
        page: prevState.page + 1,
      }));
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

const mapStateToProps = (state) => {
  const filter = 'all';
  return {
    isFetching: getIsFetching(state, filter),
    articles: getVisibleArticles(state, filter),
    filter,
  };
};

const VisibleArticleList = withRouter(connect(
  mapStateToProps,
  actions,
)(VisibleArticleListComponent));

export default VisibleArticleList;
