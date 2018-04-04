<template>
  <div id="addmaintenance">
    <div>你的位置: 渠道管理 > {{position}}</div>
  </div>
</template>

<script>
  export default {
    name: "maintenance",
    data: function () {
      return ({
        position: this.$route.name
      })
    },
    methods: {}
  }
</script>

<style scoped>

</style>
