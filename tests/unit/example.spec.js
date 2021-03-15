
import { mount } from "@vue/test-utils";
import ModalAdd from "@/components/ModalAdd.vue";
import App from "@/App.vue";


describe('Mounted App', () => {
  const wrapper = mount(App);

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})


describe("ModalAdd.vue", () => {


  it('fail add new fruit', () => {
    const wrapper = mount(ModalAdd);

    wrapper.setData({ guess: "15" })
    const button = wrapper.find('button')
    button.trigger('click')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.success).toBe(false)
      done()
    })
   
  })



  it('success add new fruit',  () => {
    const wrapper = mount(ModalAdd);

     wrapper.setData({    
      datas: {
      isFruit: true,
      name: "Test", 
      price: "45", 
      description: "Very great", 
      taste: "sweet", 
      color:"", 
      expires: "", 
      image: ""

    } })
    console.log(wrapper.vm.datas)
    const button = wrapper.find('button')
    button.trigger('click')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.success).toBe(true)
      done()
    })
    
  })
});



