<template>
  <div id="app">
    <demo-header/>
    <router-view/>
    <demo-footer/>
  </div>
</template>

<script>
import DemoHeader from "@/components/Header";
import DemoFooter from "@/components/Footer";
export default {
  name: "App",
  components: {
    DemoHeader,DemoFooter
  }
};
</script>

<style>
html,body {
  width: 100%;
  height: 100%;
}
* {
  padding: 0;
  margin: 0;
}
ul li {
  list-style: none;
}
#app {
  position: relative;
  height: 100%;
  min-height: 1020px;
}
.clearfloat:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
.clearfloat {
  zoom: 1;
}
</style>
