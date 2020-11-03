<template>
  <div class="Query">
  <form @submit.prevent="getMovies()">
    <label for="query">Query</label>
    <input type="text" class="form-control" name="query" placeholder="Search..." v-model="state.query">
    <button class="btn btn-primary btn-block" type="submit">Search</button>
  </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { movieService } from '../services/MovieService'

export default {
  name: 'Query',
  setup () {
    const state = reactive({
      query: ''
    })
    return {
      state,
      getMovies () {
        movieService.getMovies(state.query)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
