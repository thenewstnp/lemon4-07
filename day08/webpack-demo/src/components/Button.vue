<template>
    <div class="button">
        <div><input type="text" v-model.trim="value1" class="item"></div>
        <div><input type="text" v-model.trim="value2" class="item"></div>
        <div><button class="btn-item" @click="run">{{value}}</button></div>
    </div>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      value: "提交",
      value1: "",
      value2: ""
    };
  },
  methods: {
    run() {
      if(this.value1 && this.value2) {
          alert(this.value1 + this.value2);
      }else {
          return;
      }
    }
  }
};
</script>

<style scoped>
.button .btn-item {
  width: 120px;
  height: 40px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  background: crimson;
  color: #fff;
  border-radius: 4px;
}

.button .btn-item:hover {
background: #ff0000;
}

.button .item {
  width: 300px;
  height: 40px;
  font-size: 16px;
  outline: none;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  color: #000;
  box-sizing: border-box;
  padding-left: 10px;
}
</style>