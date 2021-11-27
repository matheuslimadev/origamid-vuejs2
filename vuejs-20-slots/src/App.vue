<template>
  <div id="app">
    <modal-principal>
      <!-- <template #header>
        <h4>Teste Header</h4>
      </template>
      <template #default>
        <p>Cheguei via Slot</p>
        <button>Comprar</button>
      </template>
      <template #footer>
        <p>Este é o footer</p>
      </template> -->
      <template v-slot:header="propSlot">
        {{propSlot.logo}}
        <h4>Teste Header</h4>
      </template>
      <template v-slot:default>
        <p>Cheguei via Slot</p>
        <button>Comprar</button>
      </template>
      <template v-slot:footer="propSlot">
        {{propSlot.bixuuu.nome}}
        <p>Este é o footer</p>
      </template>
    </modal-principal>  
  </div>
</template>

<script>
import ModalPrincipal from './components/ModalPrincipal'

export default {
  name: 'App',
  components: {
    ModalPrincipal
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
