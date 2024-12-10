<template>
	<div class="my-5 py-4 register-button flex-column gap-4 bg-primary" v-if="register">
		<p class="text-center fs-3 text-light" v-if="title">
			{{ title }}
		</p>
		<!-- <RegisterForm v-if="showForm" /> -->
		<a :href="register" target="_blank" class="btn btn-lg btn-light fs-4">
			{{ text }} <i class="mdi mdi-chevron-right"></i>
		</a>
	</div>
</template>

<script>
import { AppState } from '../AppState.js';

export default {
	props: {
		title: { type: String, default: '' },
		text: { type: String, default: 'Register to attend' },
		showForm: { type: Boolean, default: false },
	},

	setup() {
		return {
			register: AppState.register
		}
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