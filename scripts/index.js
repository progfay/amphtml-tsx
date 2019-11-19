const fetch = require('node-fetch')

const main = async () => {
  const response = await fetch('https://playground.amp.dev/amphtml-hint.json')
  const { amp } = await response.json()
  console.log(Object.keys(amp))
}

main()
