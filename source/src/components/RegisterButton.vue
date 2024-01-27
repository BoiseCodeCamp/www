<template>
	<div class="my-5 py-4 register-button flex-column gap-4 bg-primary">
		<p class="text-center fs-3 text-light" v-if="title">
			{{ title }}
		</p>
		<RegisterForm v-if="showForm" />
		<router-link v-else class="btn btn-lg btn-light fs-4" :to="{ name: 'Register' }">
				{{ text }} <i class="mdi mdi-chevron-right"></i>
		</router-link>
	</div>
</template>

<script>
export default {
	props: {
		title: { type: String, default: '' },
		text: { type: String, default: 'Register to attend' },
		showForm: { type: Boolean, default: false },
	}

}
</script>


<style scoped lang="scss">
.register-button {
	min-height: 20vh;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
}
</style>