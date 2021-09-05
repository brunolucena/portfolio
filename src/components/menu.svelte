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
					<img alt="logo" src="images/logo.png" />
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
		position: relative;
		padding-top: 10px;
		z-index: 100;

		&:after {
			content: '';
			position: absolute;
			top: 100%;
			left: 50%;
			transform: translateX(-50%);
			border-top: 30px solid #323232;
			border-bottom: 20px solid transparent;
			border-right: 55px solid transparent;
			border-left: 55px solid transparent;
			z-index: 100;
		}

		&:before {
			content: '';
			position: absolute;
			top: 100%;
			left: 50%;
			background-color: #fff;
			transform: translateX(-50%);
			height: 25px;
			width: 164px;
			z-index: 50;
		}

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
				color: #2eb398;
			}
		}

		img {
			position: relative;
			top: 5px;
			margin: 0 20px;
			height: 60px;
			z-index: 200;
		}
	}
</style>
