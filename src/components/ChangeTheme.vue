<template>
  <button @click="turnColorK">当前主题色：{{themeNameK}}，换肤</button>
</template>

<script lang="ts">
  export default {
    name: 'ChangeTheme',
    inject: ['themeNameK', 'turnColorK'],
  };
</script>