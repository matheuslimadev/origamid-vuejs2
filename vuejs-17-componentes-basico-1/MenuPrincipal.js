import BotaoContador from "./BotaoContador.js"

export default {
  name: "MenuPrincipal",
  data () {
    return {

    }
  },
  template: `
  <div>
    <ul>
       <li>Home</li>
       <li>Contato</li>
       <li>Sobre</li>
    </ul>
    <botao-contador></botao-contador>
    <botao-contador></botao-contador>
    <botao-contador></botao-contador>
    <botao-contador></botao-contador>
  </div>
  `,
  components: {
    BotaoContador
  }
}