<template>
	<div v-if="isShow" :class="['alert alert-fixed',`alert-${color}`]">
		{{message}}
	</div>
</template>

<script>
export default {
	name: 'Alert',
	data() {
		return {
			isShow: false,
			message: "",
			timeout: null,
			showSeconds: 5
		}
	},
	methods: {
		show(message = "", color = "success") {
			this.message = message
			this.color = color
			this.isShow = true

			clearTimeout(this.timeout)

			this.timeout = setTimeout(() => this.hidden(), this.showSeconds * 1000)
		},
		
		hidden() {
			this.isShow = false
			clearTimeout(this.timeout)
		}
	}
}
</script>