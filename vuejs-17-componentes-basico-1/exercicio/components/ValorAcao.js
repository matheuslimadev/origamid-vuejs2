import RealDolar from "./RealDolar.js"

export default {
  name: "ValorAcao",
  data () {
    return {
      acao: 0
    }
  },
  methods: {
    puxarAcao () {
      fetch("https://api.iextrading.com/1.0/stock/aapl/quote")
      .then(r => r.json())
      .then(r => {
        this.acao = r
      })
    }
  },
  created () {
    this.puxarAcao()
  },
  components: {
    RealDolar
  },
  template: `
    <div>
      <p>Valor da Apple: {{acao}}</p>
      <real-dolar></real-dolar>
    </div>
  `
}