import axios from 'axios';

export const getPosts = (cb) => {
  return (dispatch) => {
    axios.get('/api/posts')
      .then(res => dispatch({ type: 'POSTS', posts: res.data }))
      .then(cb())
  }
}

export const addPost = (post) => {
  return (dispatch) => {
    axios.post('/api/posts', { post })
      .then(res => dispatch({ type: 'ADD_POST', post: res.data }))

  }
}

export const updatePost = (post) => {
  return (dispatch) => {
    axios.put(`/api/posts/${post.id}`, { post })
      .then(res => dispatch({ type: 'UPDATE_POST', post: res.data }))
  }
}

export const deletePost = (id) => {
  return (dispatch) => {
    axios.delete(`/api/posts/${id}`)
      .then(() => dispatch({ type: 'DELETE_POST', id }))
  }
}
