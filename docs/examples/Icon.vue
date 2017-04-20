<template>
	<i :class="[theme.icon]" ></i>
</template>

<script>
	export default {
		props:{
			icon: {
				type: String,
				default: '',
			},
			meta: {
				type: String,
				default: '',
			},
			theme: {
				type: String,
				default: ''
			}
		}
	}
</script>