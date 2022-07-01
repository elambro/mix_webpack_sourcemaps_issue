<template>
    <h2 class="header">This should be purple.</h2>
</template>

<script>
export default {
  name: "MyComponent"
}
</script>

<style scoped lang="less">

 @import './variables.less';
 @import './mixins.less';

  .header {
      color: @purple;
  }

</style>