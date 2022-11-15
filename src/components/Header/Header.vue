<template>
  <div>
    <div :class="[isActive ? theme : '-Dark' ,'section' ]" @click="toggleClass" ref="themes">{{isActive}} </div>

  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return{
      isActive: true
    }
  },
  methods: {
    toggleClass() {
      const el = this.$refs.themes;

      this.isActive = !this.isActive;
      console.log(el)
    }
  }
}
</script>

<style>
.section{width:500px; height:100px; border: 1px  solid; background:#fff;}
.section.-Dark{background: #333;}
</style>