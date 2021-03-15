<template>
  <div class="our-BLOG">
    <h1>{{ pageName }}</h1>
    <h2>{{ pageDescription }}</h2>
    <br /><br />
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="sidebar">
            <BlogSidebar />
          </div>
        </div>
        <div class="col-md-8">
          <div class="posts-area">
            <BlogPosts v-for="post in posts" 
            :key="post.id" 
            :views="post.views" 
            :title="post.title" 
            :date="post.date"
            :content="post.content"
            :author="post.author"
            :category="post.category"
            
            
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPosts from "@/components/blog/BlogPosts.vue";
import BlogSidebar from "@/components/blog/BlogSidebar.vue";
import jsonposts from "../json/blog_posts.json";
export default {
  data: function() {
    return {
      pageName: "blog",
      pageDescription: "This is Contact Us Page",
      posts: jsonposts
    };
  },
  name: "blog",
  components: {
    BlogPosts,
    BlogSidebar
  }
};
</script>
