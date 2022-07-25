myApp = new Vue({

    el: "#VueApp",
    data: {

        toDoList: [

            {
                text: "we",
                done: true,
            },

            {
                text: "ciao",
                done: true,
            },

            {
                text: 'bella',
                done: true,
            }
        ]
    },

    methods: {

        eliminazione(indice){
            this.toDoList.splice(indice,1);
            
        },

        pushaElemento(valoreTesto){
          this.toDoList.push({text:valoreTesto, done: false,});
        },

        doneEvent(indice){
            this.toDoList[indice].done == true?this.done=false:this.done=true;
            console.log(this.done)
        }
    },
})