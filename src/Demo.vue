<template>
  <div>
    {{ n }}
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 0,
    }
  },
  methods: {
    add() {
      this.n += 1
    }
  },
  created() {
    console.log('实例出现在内存中')
  },
  mounted() {
    console.log('实例出现在页面中')
  },
  updated() {
    console.log('实例更新了')
  },
  destroyed() {
    console.log('实例消亡了')
  }
}
</script>

<style scoped>
</style>