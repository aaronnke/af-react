import React from 'react';
import '../css/ArticleList.css';
import '../css/ArticleListLoading.css';

const ArticleListLoading = () => {
  const loader = [1, 2, 3];
  const articles = loader.map(id => (
    <div key={id} className="ArticleCard">
      <div className="loading ArticleCard__image--loading ArticleCard__image" />
      <div className="ArticleCard__container">
        <div className="ArticleCard__info">
          <div className="loading ArticleCard__info__category--loading
            ArticleCard__info__category"
          />
          <div className="loading ArticleCard__info__clock--loading
            ArticleCard__info__clock"
          />
        </div>
        <div className="loading ArticleCard__title--loading
          ArticleCard__title"
        />
        <div className="loading ArticleCard__excerpt--loading--top
          ArticleCard__excerpt--loading ArticleCard__excerpt"
        />
        <div className="loading ArticleCard__excerpt--loading--bottom
          ArticleCard__excerpt--loading ArticleCard__excerpt"
        />
      </div>
    </div>
  ));
  return (
    <div className="ArticleList--loading ArticleList">
      {articles}
    </div>
  );
};

export default ArticleListLoading;
