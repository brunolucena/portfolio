<script type="ts">
	import Container from 'src/components/container.svelte';
</script>

<section>
	<Container>
		<div class="content">
			<h2 class="maven-pro">Get In Touch</h2>

			<h4 class="maven-pro">In order to get in touch use the contact form below:</h4>

			<form>
				<input />
				<input />
				<input />
				<textarea />
			</form>
		</div></Container
	>
</section>

<style lang="scss">
	section {
		background-color: var(--dark-primary);
	}

	.content {
		padding: 50px 0;
	}

	h2 {
		color: #e0e0e0;
		font-size: 30px;
	}

	h4 {
		color: #e0e0e0;
		font-size: 18px;
		font-weight: 400;
	}

  form {
    margin-top: 20px;
  }
</style>
