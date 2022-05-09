Vue.config.devtools = true;
const app = new Vue (
    {
        el: "#root",
        data: {
            todo:[
                {
                    text:"Lavare la macchina",
                    done: false,
                },
                {
                    text:"Lavare il bagno",
                    done: false,
                },
                {
                    text:"Fare esercizio del pomeriggio",
                    done: true,
                },
                {
                    text:"Andare in palestra",
                    done: false,
                },
                {
                    text:"Comprare il latte",
                    done: false,
                },
            ],
            newItem:""
        },
        methods:{
            removeTodo: function(index){
                this.todo.splice(index,1);
            },
            addTodo: function(){
                const objectItem={
                    text: this.newItem,
                    done: false
                }
                this.todo.push(objectItem);
                this.newItem="";
            },
            changeStatus: function(index){
                this.todo[index].done = !this.todo[index].done
            }
        }
})