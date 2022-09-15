<template>
	<v-container class="container--fluid">
		<v-row class="text-center">
			<GmapMap :center="center" :zoom="11" style="width: 100%; height: calc(100vh - 64px)" ref="gmap"> </GmapMap>
		</v-row>
		<div style="position: fixed; top: 78px; right: 14px; z-index: 1500">
			<v-btn @click="setCursor('crosshair', $refs.gmap.$mapObject)" class="mr-2">crosshair</v-btn>
			<v-btn @click="setCursor('grab', $refs.gmap.$mapObject)">grab</v-btn>
		</div>
	</v-container>
</template>

<script>
export default {
	name: 'HelloWorld',

	data: () => ({
		center: {
			lat: 47.376332,
			lng: 8.547511
		}
	}),

	async mounted() {
		await this.$gmapApiPromiseLazy();
		this.$store.commit('SET_MAP_OBJECT', this.$refs.gmap.$mapObject);
	},

	methods: {
		setCursor(cursorType, mapObject) {
			mapObject.setOptions({ draggableCursor: cursorType });
		}
	}
};
</script>
