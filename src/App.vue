<template>
<div class="container-fluid text-center">
  <h1 ><img style="height: 50px" alt="Vue logo" src="./assets/logo.png">ueFlix</h1>
  <query/>
  <div class="row">
    <results/>
    <selectedMovie/>
  </div>
</div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Results from './components/Results'
import Query from './components/Query'
import SelectedMovie from './components/SelectedMovie'
export default {
  name: 'App',
  setup () {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Results, Query, SelectedMovie }

}
</script>
