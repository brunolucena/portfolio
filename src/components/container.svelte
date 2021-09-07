<script>
  export const maxWidth = '1200px';
</script>

<div class="container" style="--maxWidth:{maxWidth}">
  <slot></slot>
</div>

<style lang="scss">
  .container {
    max-width: var(--maxWidth);
    width: 100%;
    margin: 0 auto;
    padding: 0 10px;
  }
</style>