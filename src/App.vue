<template>
  <div :class="`app theme-${themeName}`">
    <change-theme/>
  </div>
</template>

<script>
  import changeTheme from '@/components/ChangeTheme'

  export default {
    name: 'App',
    components: {changeTheme},
    data() {
      return {
        themeName: 'blue',
      }
    },
    provide() {
      return {
        themeNameK: this.themeName,
        turnColorK: this.turnColor
      }
    },
    methods: {
      turnColor() {
        this.themeName === 'blue' ? this.themeName = 'red' : this.themeName = 'blue'
      }
    }
  }
</script>

<style lang="scss">
  .app.theme-blue button {
    background-color: blue;
    color: white;
  }

  .app.theme-red button {
    background-color: red;
    color: white;
  }
</style>
