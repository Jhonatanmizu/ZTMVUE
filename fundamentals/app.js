Vue.createApp({
    data(){

        return {
            name:'Jhonatan'
        }
    },
    methods: {
        sayHello(){
            alert("HELLO")
        }
    },
    mounted() {
        this.sayHello()
    },
    
}).mount('#app')