myApp = new Vue({

    el: "#VueApp",
    data: {

        myDataValue: "",

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
        this.toDoList.push({text:valoreTesto.trim(), done: true,});
        this.myDataValue = " ";
        
        

        },

        doneEvent(indice){
        //WAY 1-1 

        // this.toDoList[indice].done = !this.toDoList[indice].done 
         
        // WAY 1-2

        this.toDoList[indice].done = this.toDoList[indice].done == true? false : true;
        
        //WAY 1-3

        if(this.toDoList[indice].done == true){
            this.toDoList[indice].done = false
        }   
        else if(this.toDoList[indice].done == false) {
            this.toDoList[indice].done = true
        }
        }
    },
})