<template>
  <div id="app">
    <p>{{ foo }}</p>
    <button @click="foo = 'baz'">Change it</button>
  </div>
</template>

<script>


export default {
  name: 'watchExampleVM',
  data: function () {
    return {
      foo: 'bar'
    }
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
    }
  },
  methods: {

  }
}
</script>


<style scoped>

</style>
