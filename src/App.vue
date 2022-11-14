<template>
  <Header/>
  <router-view>

  </router-view>
  {{data}}

  <div @click="click();">클릭</div>
{{count}}
  <Footer/>


</template>

<script>

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import data from "@/assets/data";
export default {
  name: 'App',
  data(){
    return{
      data:data,
      comment : '내용 변경',
      count : '0'
    }
  },
  components: {
    Footer,
    Header : Header,
  },
  methods:{
    click(){
      this.comment = data
      this.count++


    },
  }
}
</script>

<style>

</style>
