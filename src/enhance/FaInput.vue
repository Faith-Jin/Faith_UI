<template>
  <div id="FaInput" class="fainput" v-on:mouseenter="mousemoveEvent" v-on:mouseleave="mouseleaveEvent">
    <span>账户名</span>
    <input type="text" v-model="username" @change="setUser" />
    <i v-show="iconState" class="iconfont icon-anniu_guanbi_o" v-on:click="clearValue" @click="setUser"></i>
  </div>
</template>

<script>
export default {
  name: 'FaInput',
  data () {
    return {
      username: '',
      iconState: false
    }
  },
  methods: {
    setUser: function () {
      if (this.username) {
        this.$emit('transferUser', this.username)
      }
    },
    clearValue: function () {
      this.username = ''
    },
    mousemoveEvent: function () {
      this.iconState = true
    },
    mouseleaveEvent: function () {
      this.iconState = false
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.fainput{
  display: inline-block;
  position: relative;
  font-size: 14px;
}
.fainput input{
  line-height: 26px;
}
.iconfont{
  font-size: 20px;
}
.icon-anniu_guanbi_o{
  position: absolute;
  right: 3px;
  bottom: 4px;
}
</style>
