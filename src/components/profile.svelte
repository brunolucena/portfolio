<script lang="ts">
	import Container from 'src/components/container.svelte';
	import Hexagon from 'src/components/hexagon-grid/hexagon.svelte';
	import Icon from '@iconify/svelte';
</script>

<section name="profile">
	<Container>
		<div class="content">
			<div class="left">
				<Hexagon
					fullWidth
					hexagon={{
						id: 'logo',
						image: {
							alt: 'Bruno Lucena',
							src: '/images/bruno-lucena.png'
						},
						text: 'Front-End Life',
						title: 'Bruno Lucena'
					}}
				/>
			</div>

			<div>
				<h2 class="maven-pro">Bruno Lucena</h2>

				<h3 class="maven-pro">Front-End & React Developer</h3>

				<p>
					Hi, I'm Bruno Lucena, a Front-End & React Developer from Brazil. <br />
					I've started working as developer 7+ years ago and felt in love with Front-End really fast.
					<br />
					If you're also passionate with Front-End, follow me on social media and subscribe to my blog.
				</p>

				<div class="social-media">
					<a
						class="icon-container"
						href="https://www.linkedin.com/in/bruno-lucena/"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Icon color="#7A63FF" icon="cib:linkedin-in" />
					</a>

					<a
						class="icon-container"
						href="https://www.instagram.com/brunoa_lucena/"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Icon color="#7A63FF" icon="cib:instagram" />
					</a>
				</div>
			</div>
		</div>
	</Container>
</section>

<style lang="scss">
	$primary-color: #7a63ff;

	section {
		padding: 15px 0;
		background-color: var(--primary);

		.content {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 50px 20px;
			border-left: 1px solid rgba(0, 0, 0, 0.2);
			border-right: 1px solid rgba(0, 0, 0, 0.2);

			> * {
				&:not(:first-child) {
					margin-left: 20px;
				}
			}

			.left {
				position: relative;
				top: -25px;
				width: 100%;
				max-width: 200px;
			}
		}

		h2 {
			color: #fff;
			font-size: 30px;
		}

		h3 {
			color: var(--secondary);
			font-size: 18px;
			font-weight: 400;
		}

		p {
			margin-top: 20px;
			color: #fff;
		}

		.social-media {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			margin-top: 35px;
		}

		.icon-container {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 5px;
			background-color: #fff;
			transition: all 0.2s ease-out;

			&:hover {
				background-color: darken(#fff, 10%);
			}

			&:not(:first-child) {
				margin-left: 5px;
			}
		}
	}
</style>
