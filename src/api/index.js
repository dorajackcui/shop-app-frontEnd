import axios from 'axios'

const API = axios.create({
  baseURL : 'http://localhost:5000'
})

//backend url : https://shop-app-cui.herokuapp.com
// http://localhost:5000



export const fetchProducts = () => API.get('/products')
export const getProductById =(id) => API.get(`/products/${id}`)

// export const createPost = (newPost) => API.post('/posts', newPost)
// export const updatePost = (id, updatePost) => API.patch(`/posts/${id}`, updatePost)
// export const deletePost = (id) => API.delete(`/posts/${id}`)
// export const likePost = (id) => API.patch(`/posts/${id}/likePost`, likePost)
