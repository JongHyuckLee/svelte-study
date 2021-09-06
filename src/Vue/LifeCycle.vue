<template>
  <div>라이프 싸이클</div>
</template>

<script>
export default {
  name: "LifeCycle",
  beforeCreate() {
    console.log("before Create");
  },
  created() {
    console.log("create");
  },
  beforeMount() {
    console.log("before Mount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("before Update");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("before Destroy");
  },
  destroyed() {
    console.log("destroy");
  }
}
</script>

<style scoped>

</style>