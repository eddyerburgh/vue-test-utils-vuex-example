<template>
  <div>
    <p v-if="inputValue">{{inputValue}}</p>
    <p v-if="clicks">{{clicks}}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

export default{
    computed: mapGetters([
      'clicks',
      'inputValue'
    ])
  }
</script>
