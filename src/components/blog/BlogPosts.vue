<template>
  <div class="post-box">
    <span class="post-views">10</span>
    <h3 class="post-title">Blog Post Title</h3> 
    <span class="post-date">15-3-2021</span>
    <p class="post-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente id recusandae reiciendis fugit ipsa, totam alias unde adipisci veritatis, vel natus, quam quia. Ab autem animi eos commodi est inventore. lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet</p>
    <div class="row">
      <div class="col-sm-6">
        <span class="post-author">Post Author</span>
      </div>
      <div class="col-sm-6 text-right">
        <span class="post-category">Category Name</span>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: "post",

};
</script>

<style lang="scss" scoped>
@mixin post-footer {
    padding:6px 10px;
    border-radius: 5px;
    color: #fff;
}
.post-box{
  padding:20px;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  position: relative;
  text-align:left;
    
  .post-views{
    position: absolute;
    top: 5px;
    right: 5px;
    background-color:#ffc107;
    border-radius: 4px;
    padding: 1px 5px;
    color: white;
    text-align: center;
    font-weight: bold;


  }
  .post-date{
    color: #888;
    display: block;
    padding: 0 0 5px;
    font-size: 14px; 
  }
  .post-content {
    line-height:1.5;
    color:#666;
  }
  .post-author{
    background-color: #607D8B;
    @include post-footer;
  
  }

  .post-category{
    background-color: #E91E63;
    @include post-footer;
  }
}

</style>