<template>
  <div>
    <b-modal
      v-model="ModalDetail"
      size="lg"
      ref="modal1"
      class="m-5 p-5"
      title="Detail fruit"
      hide-footer
      hide-header
    >
      <b-container class="mt-2 mb-4 p-4">
        <b-row class="mb-5"><b-col class="sm10 md10 lg10"></b-col>
        <b-col class="mr-2">
          <i class="fas fa-times fa-lg" @click="hideModal"></i>
          </b-col>
          </b-row>
        <b-row>
          <b-col class="sm6 md6 lg6">
        <img :src="datas.image" style="width:100%"/>
          </b-col>
          <b-col class="sm6 md6 lg6">
            <div class="priceFlex">
              <h2>{{ datas.name }}</h2>
              <p class="price">{{ datas.price }} €</p>
            </div>
            <p class="descr">{{ datas.description }}</p>
             <div class="color-show">

             <div class="flex">  
               <p class="p">Taste:</p>
            <span>{{ datas.taste }} </span>
            </div>


           <div class="flex">
              <p class="p">Color:</p>
            <div  class="color" :style="{ 'background-color':  datas.color  }"></div>
            
            </div>

       
            </div>
                <div class="flex">
              <p class="p">Expires:</p>
             <span>{{ datas.expires }}</span>
             </div>
           
          </b-col></b-row
        >
      </b-container>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "modalDetail",
  props: ["ModalDetail", "datas"],
  data() {
    return {};
  },
 
   /* Close function for top icon */

  methods: {
    hideModal() {
      this.$refs["modal1"].hide();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/modalDetail.scss";
</style>
