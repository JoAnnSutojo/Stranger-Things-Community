import axios from 'axios';

// init axios instance

/**
 *  Create a new instance of axios with a custom config
 */

const api = axios.create({ baseURL: 'http://localhost:8002' });

/**
 *  Check if there is a token provided before sending the request
 * If yes, then use that token with every request
 */

api.interceptors.request.use(
    (req) => {
        if(localStorage.getItem('auth')) {
            req.headers.Authorization = `Bearer ${
                JSON.parse(localStorage.getItem('auth')).token
            }`;
        }
    }
);

/**
 *  Auth requests
 */
/**
 * 
 * @param {formValues} user 
 * @returns {Promise<JSON>}
 */

export const signup = (user) => api.post('/user/signup', user);

/**
 * 
 * @param {formValues} user 
 * @returns {Promise<JSON>}
 */

 export const login = (user) => api.post('/user/signin', user);

 /**
  * Post requests
  */

 /**
  * @returns {Promise<JSON>}
  */
 export const fetchPosts = () => api.get('/posts/getposts');

 /**
  * @param {formValues} newPost
  * @returns {Promise<JSON>}
  */
 export const createPost = (newPost) => api.post('/posts/addpost', newPost);

 /**
  * @param {ObjectID} id
  * @param {*} updatedPost
  * @returns {Promise<JSON>}
  */
 export const updatePost = (id, updatedPost) => api.put(`/posts/editpost/${id}`, updatedPost);

 /**
  * @param {ObjectID} id
  * @returns {Promise<JSON>}
  */
 export const likePost = (id) => api.put(`/posts/likepost/${id}`);

 /**
  * @param {ObjectID} id
  * @returns {Promise<JSON>}
  */
 export const deletePost = (id) => api.delete(`/posts/removepost/${id}`);

 /**
 * Story requests
 */

  /**
  * @returns {Promise<JSON>}
  */
   export const fetchStories = () => api.get('/stories/getstories');

   /**
  * @param {formValues} newStory
  * @returns {Promise<JSON>}
  */
 export const createStory = (newStory) => api.post('/stories/createstory', newStory);

 /**
  * @param {ObjectID} id
  * @param {*} updatedStory
  * @returns {Promise<JSON>}
  */
  export const updateStory = (id, updatedStory) => api.put(`/stories/updatestory/${id}`, updatedStory);

  /**
  * @param {ObjectID} id
  * @returns {Promise<JSON>}
  */
 export const likeStory = (id) => api.put(`/stories/likestory/${id}`);

 /** 
 * @param {ObjectID} id
 * @returns {Promise<JSON>}
  */
 export const deleteStory = (id) => api.delete(`/stories/deletestory/${id}`);

