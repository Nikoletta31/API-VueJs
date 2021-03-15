<template>
  <div>
    <b-modal
      ref="modal-1"
      id="modal-1"
      class="modal1"
      title="Add new fruit"
      hide-footer
    >
      <b-form>
        <b-container>
          <b-row>
            <b-col class="md6">
        <b-form-group id="input-group-1" label="Name:" label-for="input-1">
          <b-form-input
            id="input-1"
          
            placeholder="Enter fruit's name"
            v-model="datas.name"
            required
          ></b-form-input>
        </b-form-group>
         </b-col><b-col class="md6">
        <b-form-group id="input-group-2" label="Price:" label-for="input-2">
          <b-form-input
            id="input-2"
            
            placeholder="Enter fruit's price"
            v-model="datas.price"
            required
          ></b-form-input>
        </b-form-group>
   </b-col></b-row>

   
<b-row><b-col class="md6">
        <b-form-group id="input-group-4" label="Taste:" label-for="input-4">
          <b-form-input
            id="input-4"
            
            placeholder="Enter fruit's taste"
            v-model="datas.taste"
            required
          ></b-form-input>
        </b-form-group>
</b-col><b-col class="md6">
                <b-form-group id="input-group-6" label="Color:" label-for="input-6">
          <b-form-input
            id="input-6"
            
            placeholder="Enter fruit's color"
            v-model="datas.color"
          
          ></b-form-input>
        </b-form-group>
</b-col></b-row>
     <b-form-group
          id="input-group-3"
          label="Description:"
          label-for="input-3"
        >
          <b-form-textarea
            id="input-3"
          
            placeholder="Enter fruit's description"
            v-model="datas.description"
            required
          ></b-form-textarea>
        </b-form-group>
              <b-form-group id="input-group-5" label="Image URL:" label-for="input-5">
          <b-form-input
            id="input-5"
            
            placeholder="Enter fruit's image's URL"
            v-model="datas.image"
          
          ></b-form-input>
        </b-form-group>


          
    <b-form-group label="Expires date:" label-for="input-7">
    <b-form-datepicker id="input-7" v-model="datas.expires" class="mb-2"></b-form-datepicker>
 </b-form-group>
 </b-container>
      </b-form>
      <button class="addFruit" block @click="addNew">Add new fruit</button>
      <button class="closeModal" block @click="hideModal">Close Me</button>
    </b-modal>

    <b-modal ref="modal-add" centered hide-footer hide-header>
      <div class="d-block text-center">
        <h3>The fruit has been added to the list!</h3>
      </div>
  
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "modalAdd",
  props: ["ModalNew"],
  data() {
    return {
      text: false,
      something: [], 
      datas: {
        isFruit: true,
        name: "", 
        price: "", 
        description: "", 
        taste: "", 
        color:"", 
        expires: "", 
        image: ""

      }, 
      success: null,
    };
  },
  created() {},

  methods: {
    hideModal() {
      this.$refs["modal-1"].hide();
    },
  async  addNew() {
      this.$refs["modal-1"].hide();
      this.success = await this.$store.dispatch("addNewFruit", this.datas);
      console.log(this.success)
      this.$refs["modal-add"].show();
      this.datas = {}
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/modalAdd.scss";
</style>
