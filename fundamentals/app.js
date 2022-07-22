Vue.createApp({
    data(){

        return {
            name:'Jhonatan'
        }
    },
    computed: {
        fullName(){
            return `${this.name}  Oliveira`
        }
    },
    watch: {
        name(){
            alert("CHANGED")
        }
    },
    methods: {
        sayHello(){
            // alert("HELLO")
        },
        log(){
            console.log("LOGANDO");
        }
    },
    mounted() {
        this.sayHello()
    },

}).mount('#app')