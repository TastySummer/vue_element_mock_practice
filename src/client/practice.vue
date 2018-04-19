<template>
	<div id="practice">
		<p v-once>Message: {{reverseMessage}}</p>
		<p v-once>Message2: {{reversedMessage()}}</p>
		<p v-html="rawHtml"></p>
		<button v-bind:id="dynamicId" v-bind:disabled="!isButtonDisabled">
			<a v-bind:href="url" v-on:click.prevent="toggle">
				切换
			</a>
		</button>
		<span v-if="!ok">{{ number+1 }}</span>
		<span>{{ok?'YES':'NO'}}</span>
		<div v-bind:class="classObject">aaaaa</div>
		<div v-if="type === 'A'">
			A
		</div>
		<div v-else-if="type === 'B'">
			B
		</div>
		<div v-else-if="type === 'C'">
			C
		</div>
		<div v-else>
			Not A/B/C
		</div>
		<template v-if="loginType === 'username'">
			<label>Username</label>
			<input placeholder="Enter your username" key="username-input">
		</template>
		<template v-else>
			<label>Email</label>
			<input placeholder="Enter your email address" key="email-input">
		</template>
		<ul id="example-1">
			<li v-for="(item, index) in items">
				{{parentMessage}}-{{index}}-{{ item.message }}
			</li>
		</ul>
		<ul>
			<li v-for="(value, key, index) in object">
				{{index}}.{{key}}-{{value}}
			</li>
		</ul>
		<ul>
			<li v-for="n in evenNumbers">{{n}}</li>
		</ul>
	</div>
</template>



<script>
	export default {
		name: "practice",
		data: function () {
			return ({
				message: 'Hello world!',
				rawHtml: '<span style="color: red">This should be red.</span>',
				dynamicId: 'aaa',
				isButtonDisabled: true,
				number: 0,
				ok: '123',
				id: [],
				url:'https://cn.vuejs.org/v2/guide/syntax.html',
				doSomething: function(){
					console.log(111111)
				},
				isActive: true,
				error: {
					type: 'fatal'
				},
				type: 'D',
				loginType: 'username',
				clickTimes: 0,
				parentMessage: 'Parent',
				items: [{ 
					message: 'Foo' 
				},{ 
					message: 'Bar' 
				}],
				object: {
					firstName: 'John',
					lastName: 'Doe',
					age: 30
				},
				numbers: [ 1, 2, 3, 4, 5 ]
			})
		},
		computed: {
			reverseMessage: function(){
				return this.message.split('').reverse().join('');
			},
			classObject: function(){
				return {
					'active': this.isActive,
					'text-danger': this.error && this.error.type === 'fatal'
				}
			},
			evenNumbers: function(){
				return this.numbers.filter(function(number){
					return number%2 === 0
				})
			}
		},
		methods: {
			reversedMessage: function () {
				return this.message.split('').reverse().join('')
			},
			toggle: function(){
				var _this = this;
				var loginType = ['username','email']
				_this.clickTimes ++;
				var index = _this.clickTimes%2;
				_this.loginType = loginType[index];
			}
		}
	}
</script>

<style scoped>
	.active{
		font-weight: bold;
		font-size: 16px
	}

	.text-danger{
		color: red
	}

</style>
