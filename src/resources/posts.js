import { posts } from './posts_data';
// import { travelPosts } from './travel_posts'

export const getPostData = (id) => {
  return posts.find((post) => post.id === id);
};

// export const getTravelPostsData = (id) => {
//   return travelPosts.find((post) => post.id === id)
// }
