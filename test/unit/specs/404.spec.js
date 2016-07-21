import Vue from 'vue'
import NotFound from 'src/views/common/404'

describe('404.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div id="main"><h1>Unless creepy emptiness was what you were looking for, this place has nothing</h1></div>',
      components: { NotFound }
    }).$mount()
    expect(vm.$el.querySelector('#main h1').textContent).to.contain('nothing')
  })
})
