<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import Contact from 'src/components/contact.svelte';
	import Container from 'src/components/container.svelte';
	import HexagonGrid from 'src/components/hexagon-grid/hexagon-grid.svelte';
	import Profile from 'src/components/profile.svelte';
	import type { Hexagon } from 'src/components/hexagon-grid/models';

	const hexagons: Hexagon[] = [
		{ id: '1', icon: 'cib:react', text: 'Text', title: 'Titlte' },
		{ id: '2', icon: 'akar-icons:nextjs-fill', text: 'Text', title: 'Titlte' },
		{ id: '3', icon: 'cib:svelte', text: 'Text', title: 'Titlte' },
		{ id: '4', icon: 'cib:javascript', text: 'Text', title: 'Titlte' },
		{ id: '5', icon: 'cib:typescript', text: 'Text', title: 'Titlte' },
		{ id: '6', icon: 'cib:html5', text: 'Text', title: 'Titlte' },
		{ id: '7', icon: 'cib:css3', text: 'Text', title: 'Titlte' },
		{ id: '8', icon: 'cib:sass', text: 'Text', title: 'Titlte' },
		{ id: '9', icon: 'akar-icons:nextjs-fill', text: 'Text', title: 'Titlte' },
		{ id: '10', icon: 'cib:svelte', text: 'Text', title: 'Titlte' },
		{ id: '11', icon: 'cib:javascript', text: 'Text', title: 'Titlte' },
		{ id: '12', icon: 'cib:react', text: 'Text', title: 'Titlte' },
		{ id: '13', icon: 'cib:react', text: 'Text', title: 'Titlte' },
		{ id: '14', icon: 'cib:react', text: 'Text', title: 'Titlte' }
	];
</script>

<svelte:head>
	<title>Bruno Lucena Portfolio</title>
</svelte:head>

<div>
	<div class="content-container">
		<Container>
			<main class="content">
				<HexagonGrid {hexagons} />
			</main>
		</Container>
	</div>

	<Profile />

	<Contact />
</div>

<style lang="scss">
	.content-container {
		padding: 11px 0;
	}
	
	.content {
		position: relative;
		margin: 0 -20px;
		padding: 70px 0;

		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			height: 1px;
			width: 100%;
			margin: 0 10px;
			background-color: #e4e9eb;
		}

		&:after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			height: 1px;
			width: 100%;
			margin: 0 10px;
			background-color: #e4e9eb;
		}
	}
</style>
