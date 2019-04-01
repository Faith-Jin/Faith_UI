<template>
  <div id="FaButton" class="fa_button">
    <button @click='clickEvent' :class='classes'>
      <slot></slot>--点击计数{{events}}
    </button>
  </div>
</template>

<script>
import { isString } from 'lodash'
export default {
  name: 'FaButton',
  data: function () {
    return {
      tagName: 'button',
      events: 0
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    events: function () {
      this.$emit('fabtnchange', this.events)
    }
  },
  computed: {
    classes: function () {
      return this.type && isString(this.type) ? this.type : 'default'
    }
  },
  methods: {
    clickEvent: function () {
      this.events++
      this.$emit('fabtnclick', this.events)
    }
  }
}
</script>
