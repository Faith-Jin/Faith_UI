<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <!-- 事件接收需在组件上 -->
    <fa-button @fabtnclick='textClick' @fabtnchange="textClick">Display button</fa-button>
    <p>接收计数{{title}}</p>
    <FaInput @transferUser="getUser"></FaInput>
    <p>账户名为：{{user}}</p>
  </div>
</template>

<script>
import FaButton from './enhance/FaButton'
import FaInput from './enhance/FaInput'

export default {
  name: 'App',
  data () {
    return {
      title: 0,
      user: ''
    }
  },
  components: {
    FaButton,
    FaInput
  },
  watch: {
    title: function (newValue, oldValue) {
      console.log(newValue, oldValue)
    }
  },
  methods: {
    textClick: function (mes) {
      this.title = mes
    },
    getUser: function (msg) {
      this.user = msg
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
