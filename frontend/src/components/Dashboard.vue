<template>
	<div>
		<Header />
		<div class="container">
			<div class="row pt-4">
				<CreateUrl />
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import Header from './Header.vue'
import CreateUrl from './CreateUrl.vue'
import Footer from './Footer.vue'

export default {
	name: 'Dashboard',
	components: {
		Header,
		CreateUrl,
		Footer
	}
}
</script>