<script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>

  Vue.component('todo-footer',{
    template: '<p>This is another global child component</p>'
  });

  var app = new Vue({
    el: '#app',
    data: {
      message: 'This is a parant component'
    },

    
  });
