<script lang="ts">
	import Container from 'src/components/container.svelte';
</script>

<div class="container">
	<Container>
		<nav>
			<ul>
				<li>
					<a href="/#portfolio"> PORTFOLIO </a>
				</li>

				<li>
					<a href="/#about"> ABOUT </a>
				</li>

				<li>
					<a href="/" class="no-padding">
						<img alt="logo" src="/logo/Original.svg" />
					</a>
				</li>

				<li>
					<a href="/#blog"> BLOG </a>
				</li>

				<li>
					<a href="/#get-in-touch"> GET IN TOUCH </a>
				</li>
			</ul>
		</nav>
	</Container>
</div>

<style lang="scss">
	.container {
		background-color: #323232;
		color: #fff;
	}

	nav {
		padding: 10px 0;

		ul {
			display: flex;
			justify-content: center;
			align-items: center;

			li {
				list-style: none;
			}
		}

		a {
			display: inline-block;
			padding: 20px 25px;
			color: #fff;
			text-decoration: none;
			transition: all 0.1s ease-out;
			font-weight: 700;

			&:hover {
				color: var(--primary);
			}

			&.no-padding {
				padding: 0;
			}
		}

		img {
			margin: 0 100px;
			height: 70px;
			z-index: 200;
		}
	}
</style>
