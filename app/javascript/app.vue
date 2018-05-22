<template lang="pug">
  div#app
    p  {{ message }}
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue1111!',
    };
  },
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
