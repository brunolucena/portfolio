<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { Hexagon } from './models';

	export let hexagon: Hexagon;
</script>

<li class="hex">
	<div class="hex-in">
		<div class="hex-link">
			{#if hexagon.image}
				<img alt={hexagon.image.alt} src={hexagon.image.src} />
			{:else if hexagon.icon}
				<div class="svg">
					<Icon color="#323232" height="100%" icon={hexagon.icon} width="100%" />
				</div>
			{/if}

			<h1>
				{hexagon.title}
			</h1>

			<p>
				{hexagon.text}
			</p>
		</div>
	</div>
</li>

<style lang="scss">
	.hex {
		position: relative;
		visibility: hidden;
		outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
	}
	.hex::after {
		content: '';
		display: block;
		padding-bottom: 86.602%; /* =  100 / tan(60) * 1.5 */
	}
	.hex-in {
		position: absolute;
		width: 96%;
		padding-bottom: 110.851%; /* =  width / sin(60) */
		margin: 0 2%;
		overflow: hidden;
		visibility: hidden;
		outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
		-webkit-transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
		-ms-transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
		transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
	}
	.hex-in * {
		position: absolute;
		visibility: visible;
		outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
	}
	.hex-link {
		display: block;
		width: 100%;
		height: 100%;
		text-align: center;
		color: #fff;
		overflow: hidden;
		-webkit-transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
		-ms-transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
		transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
	}

	/*** HEX CONTENT **********************************************************************/
	.hex img,
	.hex .svg {
		left: -100%;
		right: -100%;
		width: auto;
		height: 100%;
		margin: 0 auto;
		-webkit-transform: rotate3d(0, 0, 0, 0deg);
		-ms-transform: rotate3d(0, 0, 0, 0deg);
		transform: rotate3d(0, 0, 0, 0deg);
	}

	.hex h1,
	.hex p {
		width: 100%;
		padding: 5%;
		box-sizing: border-box;
		background-color: rgba(0, 128, 128, 0.8);
		font-weight: 300;
		-webkit-transition: -webkit-transform 0.2s ease-out, opacity 0.3s ease-out;
		transition: transform 0.2s ease-out, opacity 0.3s ease-out;
	}
	.hex h1 {
		bottom: 50%;
		padding-top: 50%;
		font-size: 1.5em;
		z-index: 1;
		-webkit-transform: translate3d(0, -100%, 0);
		-ms-transform: translate3d(0, -100%, 0);
		transform: translate3d(0, -100%, 0);
	}
	.hex h1::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 45%;
		width: 10%;
		text-align: center;
		border-bottom: 1px solid #fff;
	}
	.hex p {
		top: 50%;
		padding-bottom: 50%;
		-webkit-transform: translate3d(0, 100%, 0);
		-ms-transform: translate3d(0, 100%, 0);
		transform: translate3d(0, 100%, 0);
	}

	/*** HOVER EFFECT  **********************************************************************/
	.hex-link:hover h1,
	.hex-link:focus h1,
	.hex-link:hover p,
	.hex-link:focus p {
		-webkit-transform: translate3d(0, 0, 0);
		-ms-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}

	/*** HEXAGON SIZING AND EVEN ROW INDENTATION *****************************************************************/
	@media (min-width: 1201px) {
		/* <- 5-4  hexagons per row */

		.hex {
			width: 20%; /* = 100 / 5 */
		}
		.hex:nth-child(9n + 6) {
			/* first hexagon of even rows */
			margin-left: 10%; /* = width of .hex / 2  to indent even rows */
		}
	}

	@media (max-width: 1200px) and (min-width: 901px) {
		/* <- 4-3  hexagons per row */
		.hex {
			width: 25%; /* = 100 / 4 */
		}
		.hex:nth-child(7n + 5) {
			/* first hexagon of even rows */
			margin-left: 12.5%; /* = width of .hex / 2  to indent even rows */
		}
	}

	@media (max-width: 900px) and (min-width: 601px) {
		/* <- 3-2  hexagons per row */
		.hex {
			width: 33.333%; /* = 100 / 3 */
		}
		.hex:nth-child(5n + 4) {
			/* first hexagon of even rows */
			margin-left: 16.666%; /* = width of .hex / 2  to indent even rows */
		}
	}

	@media (max-width: 600px) {
		/* <- 2-1  hexagons per row */
		.hex {
			width: 50%; /* = 100 / 3 */
		}
		.hex:nth-child(3n + 3) {
			/* first hexagon of even rows */
			margin-left: 25%; /* = width of .hex / 2  to indent even rows */
		}
	}
</style>
