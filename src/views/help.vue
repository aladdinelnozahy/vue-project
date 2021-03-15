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
      pageName: "Help Us",
      pageDescription: "This is Help Page"
    };
  },

  name: "help"
};
</script>
