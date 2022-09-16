<template>
	<v-app>
		<v-app-bar app color="primary" dark>
			<span class="mr-2">Other component</span>
			<v-btn @click="setCursor('crosshair', mapObject)" class="mr-2">crosshair</v-btn>
			<v-btn @click="setCursor('grab', mapObject)">grab</v-btn>
		</v-app-bar>

		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'App',

	data: () => ({}),

	computed: {
		...mapGetters(['mapObject'])
	},

	methods: {
		setCursor(cursorType, mapObject) {
			mapObject.setOptions({ draggableCursor: cursorType });
		}
	}
};
</script>
