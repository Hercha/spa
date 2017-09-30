var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      form: {
          new_message: ''
      },
      google:   'https://google.com'
    },
    methods: {
        // updateMessage: function($event){
        //     $event.preventDefault();

        //     this.message = this.form.new_message;
        //     this.form.new_message = '';
        // }
        updateMessage: function(){
            this.message = this.form.new_message;
            this.form.new_message = '';
        }
    }
});

// setTimeout(function(){
//     app.message = 'Hi';
// }, 2000);