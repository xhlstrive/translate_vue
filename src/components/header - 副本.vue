<template>
	<div>
		<header>{{meg}}</header>
	</div>
</template>
<script>
	export default {
		name:'app_head',
		props: [
			'meg'
		],
		mounted () {
			console.log(this.meg)
		}
	}
</script>
<style>
	header {
		background-color: #000;
	}
</style>