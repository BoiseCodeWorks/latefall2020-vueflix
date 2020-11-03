import { movieApi } from './AxiosService'
import { AppState } from '../AppState'

class MovieService {
  async getMovies (query) {
    try {
      const res = await movieApi.get(query)
      AppState.movies = res.data.results
    } catch (error) {
      console.error(error)
    }
  }

  selectMovie (movie) {
    AppState.selectedMovie = movie
  }
}

export const movieService = new MovieService()
