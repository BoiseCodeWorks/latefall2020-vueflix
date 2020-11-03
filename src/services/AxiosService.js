import Axios from 'axios'

export const movieApi = Axios.create({
  baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=545c6ef058e65396849dfbbf381cbca3&page=1&include_adult=false&query=',
  timeout: 3000
})

export const todosApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/darryl/todos',
  timeout: 3000
})
