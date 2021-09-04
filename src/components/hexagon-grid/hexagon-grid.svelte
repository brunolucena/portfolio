<script lang="ts">
	import Hexagon from './hexagon.svelte';
	
	import type { Hexagon as IHexagon } from './models';

	export let hexagons: IHexagon[] = [];
</script>

<ul class="hex-grid">
	{#each hexagons as hexagon (hexagon.id)}
		<Hexagon hexagon={hexagon} />
	{/each}
</ul>

<style>
	.hex-grid {
		display: flex;
		flex-wrap: wrap;
		width: 90%;
		margin: 0 auto;
		overflow: hidden;
		font-size: 15px;
		list-style-type: none;
	}

	/*** HEXAGON SIZING AND EVEN ROW INDENTATION *****************************************************************/
	@media (min-width: 1201px) {
		/* <- 5-4  hexagons per row */
		.hex-grid {
			padding-bottom: 4.4%;
		}
	}

	@media (max-width: 1200px) and (min-width: 901px) {
		/* <- 4-3  hexagons per row */
		.hex-grid {
			padding-bottom: 5.5%;
		}
	}

	@media (max-width: 900px) and (min-width: 601px) {
		/* <- 3-2  hexagons per row */
		.hex-grid {
			padding-bottom: 7.4%;
		}
	}

	@media (max-width: 600px) {
		/* <- 2-1  hexagons per row */
		.hex-grid {
			padding-bottom: 11.2%;
		}
	}

	@media (max-width: 400px) {
		.hex-grid {
			font-size: 13px;
		}
	}
</style>
