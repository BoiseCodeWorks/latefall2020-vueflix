<template>
  <div class="selected-movie col-6" v-if="movie.id">
    <h1>Selected Movie:</h1>
    <moviePoster :movieData="movie"/>
    <p>{{movie.overview}}</p>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import MoviePoster from './MoviePoster'
export default {
  name: 'selected-movie',
  setup () {
    return {
      movie: computed(() => AppState.selectedMovie)
    }
  },
  components: { MoviePoster }
}
</script>

<style lang="scss" scoped>

</style>
