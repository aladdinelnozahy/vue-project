<template>
  <div class="our-help">
    <h1>{{ pageName }}</h1>
    <h2>{{ pageDescription }}</h2>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      pageName: "Home",
      pageDescription: "This is Home Page"
    };
  },

  name: "help"
};
</script>
