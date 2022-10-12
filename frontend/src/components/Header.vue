<template>
	<header class="bg-dark text-center text-warning p-4">
		<h1>
			{{appName}}
		</h1>
	</header>
</template>

<script>

export default {
	name: 'Header',
	data() {
		return {
			appName: process.env.VUE_APP_NAME
		}
	}
}
</script>