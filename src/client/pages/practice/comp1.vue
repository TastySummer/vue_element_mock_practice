<template>
	<div id="to-list-example">
		<input placeholder="Add a todo" v-model="newTodoText" v-on:keyup.enter="addNewTodo">
		<ul>
			<li is="todo-item" v-for="(item, index) in todos" v-bind:key="item.id" v-bind:title="item.title" v-on:remove="todos.splice(index,1)"></li>
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue'

	Vue.component('todo-item', {
	  template: '\
	    <li>\
	      {{ title }}\
	      <button v-on:click="$emit(\'remove\')">X</button>\
	    </li>\
	  ',
	  props: ['title']
	});
	
	export default {
		name: "comp1",
		data: function(){
			return {
				newTodoText: '',
				todos: [{
					id: 1,
					title: 'Do the dishes',
				}, {
					id: 2,
					title: 'Take out the trash',
				}, {
					id: 3,
					title: 'Mow the lawn'
				}],
				nextTodoId: 4
			}
		},
		methods: {
			addNewTodo: function () {
				this.todos.push({
					id: this.nextTodoId++,
					title: this.newTodoText
				})
				this.newTodoText = ''
			}
		}
	}
</script>