document.addEventListener('alpine:init', () => {
   Alpine.data('userdata', function() {
    return {
        mainusers: [],
        users: [],
        pageusers: [],
        isloading: false,
        showaddmodal: false,
        pagecount: 1,
        itemscount: 4,
        currentpage: 1,
        newuserinfo:{
name:"",
username:"",
email:"",
        },
        getusers() {
            this.isloading = true
            axios.get("https://jsonplaceholder.typicode.com/users")
                .then((res) => {
                    this.mainusers = res.data;
                    this.users = res.data;
                    this.pagination(); // الان شناخته می‌شود
                    console.log(res);
                })
                .finally(() => {
                    this.isloading = false
                })
        },
        pagination() {
            this.pagecount = Math.ceil(this.users.length / this.itemscount);
            let start = (this.currentpage * this.itemscount) - this.itemscount;
            let end = this.currentpage * this.itemscount;
            this.pageusers = this.users.slice(start, end);
        },
        nextpage(){
            this.currentpage++
            if (this.currentpage > this.pagecount){
                this.currentpage = this.pagecount
            }
         this.pagination()   
        },
        prevpage(){
            this.currentpage--
            if (this.currentpage < 1)this.currentpage = 1
            this.pagination()
        },
        handlechangeitemscount(e){
            this.itemscount = e.value
            if(this.itemscount < 1) this.itemscount = 1
            if(this.itemscount > this.users.length) this.itemscount = this.users.length
            this.pagination()

        },
        handlechange(e){
            setTimeout(()=>{
this.users = this.mainusers.filter(user=>user.name.includes(e.value) || user.
username.includes(e.value) || user.email.includes(e.value))
this.currentpage = 1
this.pagination()
            },100)

        },
        handlesubmitadduserform(){
            console.log(this.newuserinfo);
              axios.post("https://jsonplaceholder.typicode.com/users" , this.newuserinfo,)
                .then((res) => {
                   if(res.status === 201){
this.mainusers.push(res.data)
this.showaddmodal = false
this.handleresetform()
                    this.pagination();} // الان شناخته می‌شود
                M.toast({html: 'کاربر با موفقیت ایجاد شد', classes: 'rounded green'});     
                })
                .finally(() => {
                    this.isloading = false
                })
        },
        handleresetform(){
            this.newuserinfo = {
                name:"",
                username:"",
                email:"",
            }
        }

        
    }
})})
