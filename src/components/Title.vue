<template>
  <div></div>
</template>

<script>
export default {
  props: ['title'],
  created () {
    document.title = `Chillflix | ${this.title}`
  },
  watch: {
    title () {
      document.title = `Chillflix | ${this.title}`
    }
  }
}
</script>
