<template>
  <div class="about"></div>
  <h1>{{ pageName }}</h1>
  <h2>{{ pageDescription }}</h2>
</template>

<script>
export default {
  data: function() {
    return {
      pageName: "About Us",
      pageDescription: "This is About Us Page"
    };
  },
  name: " about"
};
</script>
