<template>
  <div id="addmaintenance">
    <div>你的位置: 导航一 > {{position}}</div>
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
    mounted: function () {
      this.sendRouteToParent()
    },
    methods: {
      sendRouteToParent: function(){
        var _this = this;
        _this.$emit("listenToChildEvent", _this.$route.name);
      }
    }
  }
</script>

<style scoped>

</style>
