<template>
<div class="container">
  <input type="text" class="newTodo mt-5" placeholder="Ajouter une tâche" v-model="newTodo" @keyup.enter="addTodo">

  <table class="todo-list mt-5">
    <tr class="todo mt-5" v-for="todo in todos" :class="{completed: todo.completed}">
      <input type="checkbox" v-model="todo.completed">
        <label class="p-2" :class="{completed:todo.completed}">{{todo.name}}</label>
          <td class="text-right pr-5"><a href="#" type button class="deleteTodo" @click.prevent="deleteTodo(todo)" aria-label="Close">
            <span aria-hidden="true">×</span></a></td>
    </tr>
  </table>

  <button class="mt-5" v-show="completed" @click.prevent="deleteTotal">supprimer taches</button>
  <button class="mt-5" @click.prevent="deleteTotal1">Tout supprimer</button>

</div>
</template>

<script>
import { TweenLite, TweenMax } from 'gsap'

export default {
  ////////////creation d'un tableau todos vide
  data() {
    return {
      todos: []
    }
  },
/////////////////push les nouvelles taches(newTodo) dans un tableau (todos)
  methods: {

    addTodo() { //methode qui dit de mettre la tache dans tableau todos
      this.todos.push({
        completed: false, //input pas completé
        name: this.newTodo
      })
      this.newTodo = '' //remet a zero le imput
    },
/////////////////////////supprime les taches 1 par 1
    deleteTodo(todo) {
      this.todos =
        this.todos.filter(i => i !== todo)
    },
//////////////////////////////fonction supprime les taches compltées
    deleteTotal() {
      TweenLite.to("button", 1, {rotation:360})
      this.todos = this.todos.filter(todo => !todo.completed)
    },
///////////////////////:supprime toutes les taches sans coches
    deleteTotal1() {
      TweenLite.to("button", 1, {rotation:360})
      this.todos = this.todos.filter(todo => todo.todos)
    }
  },

  computed: {
////////////////////affiche le bouton tout supprimer quand une des chek se coche
    completed() {
      return this.todos.filter(todo => todo.completed).length
    },

    remaining() {
      return this.todos.filter(todo => !todo.completed).length
///////prend dans le tableau les taches non completées
    }
  }
}
</script>

<style>

button {
  width: 150px;
  line-height: 50px;
  text-align: center;
  vertical-align: middle;
  color: white;
  text-decoration: none;
  background: black;
  opacity: 0.9;
  border-radius: 10px;
}

.completed {
  /*taches cochees*/
  text-decoration: line-through;
  z-index: 900;
}

.newTodo {
  width: 400px;
  height: 50px;
}

.container {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.todo {
  margin: 10px 0 50px 0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
              0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

table {
  width: 100%;
}

tr {
  border: thick black;
  border-radius: 10px;
}
</style>
