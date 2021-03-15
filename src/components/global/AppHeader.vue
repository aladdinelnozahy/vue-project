<template>
  <div class="header">
    <div class="logo">lelo view</div>
    <ul>
      <li>
        <router-link to="/" tag="li" exact><a>Home</a></router-link>
      </li>
      <li>
        <router-link to="/about" tag="li"><a>About</a></router-link>
      </li>
      <li>
        <router-link to="/blog" tag="li"><a> blog</a></router-link>
      </li>
      <li>
        <router-link to="/help" tag="li"><a>help</a></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Appheader"
};
</script>

<style lang="scss" scoped>
.header {
  background-color: rgba(34, 33, 33, 0.932);
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #c8ccc0;
  .logo {
    font-size: 20px;
    padding: 10px;
    float: left;
    text-align: center;
    width: 200px;
  }
  ul {
    float: right;
    padding: 10px;
    margin: 0;
    // width: calc(50% - 300px);
    li {
      // margin-left:5px;
      padding: 5px;
      display: inline-block;
      font-size: 10px;

      a {
        text-decoration: none;
        font-size: 18px;
        font-weight: bold;
        color: #c07723;
      }
      a:hover {
        color: black;
      }
    }
  }
}
</style>
