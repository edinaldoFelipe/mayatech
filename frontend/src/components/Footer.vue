<template>
	<footer>
		<strong class="text-warning">{{company}}</strong> - Copyright © {{year}}
	</footer>
</template>

<script>

export default {
	name: 'Footer',
	data() {
		return {
			year: (new Date).getFullYear(),
			company: process.env.VUE_APP_COMPANY_NAME
		}
	}
}
</script>