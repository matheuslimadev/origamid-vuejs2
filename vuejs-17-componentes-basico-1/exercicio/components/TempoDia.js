export default {
  name: "TempoDia",
  data () {
    return {
      tempo: {}
    }
  },
  template: `
    <p>Temperatura máximo no Rio de Janeiro: {{tempo}} °C</p>
  `,
  methods: {
    puxarTempo () {
      fetch("https://www.metaweather.com/api/location/455825/")
      .then(r => r.json())
      .then(r => {
        this.tempo = r.consolidated_weather[0].max_temp.toFixed(1) //toFixed(2) função para reduzir número após o ponto
      })
    }
  },
  created () {
    this.puxarTempo()
  } 
}