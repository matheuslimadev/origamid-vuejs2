export default {
  name: "BotaoContador",
  data () {
    return {
      count: 0
    }
  },
  template: `<button @click="count++">Contador Aqui {{count}}</button>`
}