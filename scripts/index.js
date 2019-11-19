const fetch = require('node-fetch')

const main = async () => {
  const response = await fetch('https://playground.amp.dev/amphtml-hint.json')
  const { amp } = await response.json()
  const AmpElementTagList = Object.keys(amp)
    .filter(tag => tag.toLowerCase().startsWith('amp-'))
    .map(tag => `'${tag.toLowerCase()}'`)
  console.log(`export type AmpElementTagType = ${AmpElementTagList.join(' | ')}`)
}

main()
