<template>
  <div class="modal">
    <slot name="header" :logo="logo"></slot>
    <h1>Esse é o Modal</h1>
    <slot></slot>
    <slot name="footer" :bixuuu="animal"></slot>
  </div>
</template>

<script>
export default {
  name: "ModalPrincipal",
  data() {
    return {
      logo: "techno",
      animal: {
        nome: "papagaio"
      }
    }
  }
}
</script>

<style>

</style>