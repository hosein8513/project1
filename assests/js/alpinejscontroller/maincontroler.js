document.addEventListener('alpine:init', () => {
    Alpine.data('userdata', function(){
      return{  users: [],
        isloading: false,
        getusers() {
            this.isloading = true
            axios.get("https://jsonplaceholder.typicode.com/users")
                .then((res) => {
                    this.users = res.data;
                    this.isloading = false
                    console.log(res);
                });
        }
   } });
});
