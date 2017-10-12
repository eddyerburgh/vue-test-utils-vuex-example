<template>
  <div id="app">
    <Actions />
    <Getters />
    <Modules />
  </div>
</template>

<script>
import Actions from './components/Actions'
import Getters from './components/Getters'
import Modules from './components/Modules'

export default {
  name: 'app',
  components: {
    Actions,
    Getters,
    Modules
  }
}
</script>
