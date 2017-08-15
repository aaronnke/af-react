import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLatestArticles, getCategories } from '../reducers';
import * as actions from '../actions';
import ArticleList from '../components/ArticleList';

class VisibleArticleListComponent extends Component {
  static getCategoryName(categoryId, categories) {
    return categories[categoryId].name;
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { fetchInitialData } = this.props;
    fetchInitialData();
  }

  render() {
    const { articles, categories } = this.props;
    const sanitizedArticles = articles.map(article => ({ ...article, category: VisibleArticleListComponent.getCategoryName(article.categories[0], categories) }));
    return (
      <ArticleList
        articles={sanitizedArticles}
      />
    );
  }
}

const mapStateToProps = state => ({
  articles: getLatestArticles(state, 'all'),
  categories: state.categories,
  // articles: [
  //   {
  //     image: 'https://images.asia.finance/contents/images/20170727173036/Graduate-Article-Part-1-.jpg',
  //     title: 'Employability Issues among Singaporean Graduates: Part 1 Academic Over Vocational Prowess',
  //     categories: [1, 2],
  //     readingTime: 3,
  //     excerpt: '<p>Reasons behind the issue at hand Unnecessary stigma Times are changing It made perfect sense in</p>',
  //   },
  //   {
  //     image: 'https://images.asia.finance/contents/images/20170727112929/shutterstock_325137572-1.jpg',
  //     title: 'Debunking 3 Common Credit Myths: Couples Edition',
  //     categories: [2],
  //     readingTime: 7,
  //     excerpt: '<p>Whether you’re planning a wedding or already married, it’s critical for you to understand how marriage</p>',
  //   },
  // ],
  // categories: {
  //   1: {
  //     id: 1,
  //     name: 'Career Guidance',
  //   },
  //   2: {
  //     id: 2,
  //     name: 'Personal Finance',
  //   },
  // },
});

const VisibleArticleList = connect(mapStateToProps, actions)(VisibleArticleListComponent);

export default VisibleArticleList;
