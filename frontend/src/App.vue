<template>
	<div>
		<Dashboard />
		<Alert ref="alert"/>
	</div>
</template>

<script>

import Dashboard from './components/Dashboard.vue'
import Alert from './components/Alert.vue'
import { getFullUrl } from './services/UrlService'

export default {
	name: 'App',
	components: {
		Dashboard,
		Alert
	},
	methods: {
		getFullUrl() {
			if (location.pathname.substring(1))
				getFullUrl()
				.then(response => location = response.data.url)
				.catch(error => this.$refs.alert.show(error.response.data, "danger"))
		}
	},
	mounted() {
		this.getFullUrl()
	}
}
</script>

<style>
@import './assets/styles/main.css';
</style>