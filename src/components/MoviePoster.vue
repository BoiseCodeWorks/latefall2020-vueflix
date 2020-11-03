<template>
  <div class="movie-poster" @click="selectMovie()">
    <img :src="`https://image.tmdb.org/t/p/w500${state.movie.poster_path}`" alt="">
    <h5>{{state.movie.title}}</h5>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { movieService } from '../services/MovieService'
export default {
  name: 'movie-poster',
  props: {
    movieData: Object
  },
  setup (props) {
    const state = reactive({
      movie: computed(() => props.movieData)
    })
    return {
      state,
      selectMovie () {
        movieService.selectMovie(state.movie)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
