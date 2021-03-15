<template>
  <div>
    <h1>Welcome to our fruits collection</h1>
    <button class="add" v-b-modal.modal-1>Add new fruit <i class="fas fa-plus"></i></button>
   
    <div class="hello">
      <ul v-for="item in fruits" :key="item.id" class="list">
        <li>
          <div
            class="image"
            :style="{ 'background-image': 'url(' + item.image + ')' }"
          ></div>
        </li>
        <li>
          <h2>{{ item.name }}</h2>
        </li>

        <li>
          <button class="more" @click="seeMore(item)">More details</button
          ><button class="delete" @click="removeFruit(item)">Delete</button>
        </li>
      </ul>

      
    </div>
    <modalAdd />
      <modalDetail :datas="datas" :ModalDetail="ModalDetail"/>

          <b-modal ref="modal-remove" centered hide-footer hide-header class="mb-3">
      <div class="d-block text-center">
        <h3>The fruit has been removed to the list!</h3>
      </div>
  
    </b-modal>
  </div>
</template>

<script>
import modalAdd from "@/components/ModalAdd.vue";
import modalDetail from "@/components/ModalDetail.vue";



export default {
  name: "HelloWorld",
 
  data() {
    return {
     datas:{},
      ModalDetail: false,
    };
  },
  components: {
    modalAdd,
    modalDetail
  },

  /* Calling api request from store */
    created() {
 this.$store.dispatch("getFruits");
  }, 

  methods: {

      /* Function called on button "More details" */
    seeMore(item) {
      this.ModalDetail = true;
      this.datas = item;
    },

     /* Function called on button "Delete" */
      removeFruit(item) {
     this.$store.dispatch("removeFruit", item);
      this.$refs["modal-remove"].show();
    }, 

  }, 

   /* Getting data from store */
   computed: {
    fruits() {
    return this.$store.state.fruits
    }
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/cards.scss";

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
