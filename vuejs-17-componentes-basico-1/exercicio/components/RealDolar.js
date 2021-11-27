export default {
  name: "RealDolar",
  data () {
    return {
      real: 0
    }
  },
  filters: {
    numeroPreco(valor) {
      return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    }
  },
  methods: {
    puxarReal () {
      fetch("https://api.exchangeratesapi.io/latest?base=USD")
      .then(r => r.json())
      .then(r => {
        this.real = r.rates.BRL
      })
    }
  },
  created () {
    this.puxarReal()
  },
  template: `
    <p>U$ 1,00 vale: {{real | numeroPreco(real)}}</p>
  `
}