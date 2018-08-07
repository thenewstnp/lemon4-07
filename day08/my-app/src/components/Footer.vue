<template>
  <div class="footer">
      <h1>底部</h1>
  </div>
</template>

<script>
export default {
  name: "DemoFooter",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 160px;
  line-height: 160px;
  text-align: center;
  color: #fff;
  background: rgb(57, 55, 85);
}
h1{
    font-weight: 400;
}
</style>
