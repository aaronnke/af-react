import { schema } from 'normalizr';

export const article = new schema.Entity('articles');
export const arrayOfArticles = new schema.Array(article);

export const category = new schema.Entity('categories');
export const arrayOfCategories = new schema.Array(category);
