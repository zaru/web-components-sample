import './list.js'

const app = document.querySelector('#app')
app.innerHTML = `
<h1>Micro Frontend</h1>
<favorite-list></favorite-list>
<artist-list></artist-list>
<my-relation artist="キングヌー"></my-relation>
<blue-buy></blue-buy>
`

app.addEventListener('clickArtist', e => {
  const artist = e.detail.artist
  document.querySelector('my-relation').setAttribute('artist', artist)
})
