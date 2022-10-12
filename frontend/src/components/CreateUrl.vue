<template>
	<div class="container">
		<div class="row">
			<div class="card col-md-12 bg-dark p-4">
				<h2>Create Url</h2>
				<form class="needs-validation" novalidate ref="form">
					<div class="row">
						<div class="form-group col-md-2">
							<label>Short Code <small>(Optional)</small></label>
							<input type="text" class="form-control" v-model="short" name="short" id="short"
								placeholder="abc123" pattern="[a-zA-Z0-9]*$" />
						</div>
						<div class="form-group col-md-9">
							<label>Full Url</label>
							<input type="url" class="form-control" v-model="full" name="full" id="full"
								placeholder="https://example.com" required/>
							<div class="invalid-feedback">
								Invalid Url!
							</div>
						</div>
						<div class="form-group col-md-1 p-0">
							<button type="button" @click='generateUrl()' class="btn btn-warning mt-4">Generate</button>
						</div>
					</div>
				</form>
			</div>
		</div>
		<div class="row" v-if="url">
			<div class="card col-md-12 bg-dark p-4 mt-4">
				<h2><a :href="url" class="link-light" target="_blank">{{url}}</a></h2>
			</div>
		</div>
	</div>
</template>

<script>
import { createUrl } from './../services/UrlService'

export default {
	name: 'CreateUrl',
	data() {
		return {
			short: '',
			full: '',
			url: null
		}
	},
	methods: {
		generateUrl() {
			this.$refs.form.classList.add('was-validated')

			if (!this.$refs.form.checkValidity())
				return

			const payload = {
				short: this.short,
				full: this.full
			}

			createUrl(payload)
			.then(response => {
				this.url = response.data.url
				this.$parent.$parent.$refs.alert.show('Url generated successfully!')
			})
			.catch(error => {
				this.$parent.$parent.$refs.alert.show(error.response.data, "danger")
			})
		},
	}
}
</script>