<template>
  <div class="header">
      <nav>
        <ul class="clearfloat">
          <li v-for="(link, index) in links" :key="index">
            <router-link :to="link.url" exact>{{link.title}}</router-link>
          </li>
        </ul>
      </nav>
  </div>
</template>

<script>
export default {
  name: "DemoHeader",
  data() {
    return {
      links: [
        {
          title: "首页",
          url: "/"
        },
        {
          title: "电视剧",
          url: "/tv"
        },
        {
          title: "电影",
          url: "/movie"
        },
        {
          title: "综艺",
          url: "/show"
        },
        {
          title: "动漫",
          url: "/comic"
        },
        {
          title: "动画片",
          url: "/channel/shaoer"
        },
        {
          title: "搞笑",
          url: "/channel/amuse"
        },
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  width: 100%;
  background: rgb(57, 55, 85);
}
ul li {
  float: left;
}
ul li a{
  display: block;
  padding: 0 20px;
  margin: 0 10px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  text-decoration: none;
}
ul li a:nth-child(1) {
  padding-left: 0;
  margin-left: 0;
}
ul li .router-link-active{
  color: rgb(48, 164, 253);
}
</style>
