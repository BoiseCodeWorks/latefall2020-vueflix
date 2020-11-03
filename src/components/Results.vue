<template>
  <div class="results col-6" v-if="movies.length">
      <h3>Results:</h3>
    <moviePoster v-for="movie in movies" :movieData="movie" :key="movie.id"/>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import MoviePoster from './MoviePoster'
export default {
  name: 'results',
  setup () {
    return {
      movies: computed(() => AppState.movies)
    }
  },
  components: { MoviePoster }
}
</script>

<style lang="scss" scoped>

</style>
