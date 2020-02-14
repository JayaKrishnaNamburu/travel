import { posts } from "./posts";

export const getPostData = id => {
  return posts.filter(post => post.id === id)[0];
};
