<template>
  <div>
    <!-- {{ this.pupan }} -->

    <div v-for="value in objectName" :key="value.id">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   pupan: "hello duk",
      header1: ["test", "helo", "tree"],
      objectName: [
        {
          id: 1,
          test: "hello duk",
          test2: "ppppp",
        },
        {
          id: 2,
          test: "asdasd asdasd",
          test2: "asdsadasdasd",
        },
      ],
      arr: [123, 123123, 123123123213],
    };
  },
};
</script>

<style lang="scss" scoped></style>
