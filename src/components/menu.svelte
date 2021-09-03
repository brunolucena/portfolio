<script>
  import Container from 'src/components/container.svelte';
</script>

<div class="container">
  <Container>
    <nav>
      <ul>
        <li>
          <a href="/#">
            PORTFOLIO
          </a>
        </li>
        
        <li>
          <a href="/#">
            ABOUT
          </a>
        </li>
        
        <li>
          effect
        </li>
        
        <li>
          <a href="/#">
            BLOG
          </a>
        </li>
        
        <li>
          <a href="/#">
            GET IN TOUCH
          </a>
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
    ul {
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        list-style: none;
      }
    }
  }
</style>