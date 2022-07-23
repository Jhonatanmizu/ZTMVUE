const vm = Vue.createApp({
    data(){
        return {
            name:"Jhonatan",
            perspective:100,
            rotateX:0 ,
            rotateY:0 ,
            rotateZ:0

        }
    },
    methods: {
        reset(){
            this.perspective = 100;
            this.rotateX = 0;
            this.rotateY =0 ;
            this.rotateZ = 0;
        },
        copy(){
            const el = document.createElement('textarea')
            el.setAttribute('readonly','')
            el.style.position = 'absolute'
            el.style.left = "-99999px"
            el.value = `transform: ${this.box.transform}`
            console.log(this.$refs.container);

            document.body.appendChild(el)

            el.select()
            document.execCommand('copy')
            document.body.removeChild(el)
            // this.$refs.box.hidden = true
        }
    },
    computed: {
        box(){
            return {
                transform:`
                    perspective(${this.perspective}px)
                    rotateX(${this.rotateX}deg)
                    rotateY(${this.rotateY}deg)
                    rotateZ(${this.rotateZ}deg)
                `,

            }
        }
    },
})
vm.mount("#app")