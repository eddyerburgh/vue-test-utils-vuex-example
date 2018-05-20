<template>
  <div>
    <button @click="moduleActionClick()">Click</button>
    <p>{{moduleClicks}}</p>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

export default{
    methods: {
      ...mapActions([
        'moduleActionClick'
      ])
    },

    computed: mapGetters([
      'moduleClicks'
    ])
  }
</script>
