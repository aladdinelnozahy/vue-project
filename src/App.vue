<template>
  <appHeader />
  <router-view />
</template>
<script>
import AppHeader from "@/components/global/AppHeader.vue";
export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>
