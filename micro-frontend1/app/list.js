(() => {
  const list = [
    'フジファブリック',
    'キングヌー'
  ]

  class ArtistMenu extends HTMLElement {
    constructor() {
      super()
      const shadowRoot = this.attachShadow({ mode: 'open' })
      const artist = this.textContent
      this.addEventListener('click', () => { this.clickArtist(artist) })
      shadowRoot.innerHTML = `
      <style>
        li {
          cursor: pointer;
          text-decoration: underline;
        }
        li:hover {
          text-decoration: none;
        }
      </style>
      <li>${artist}</li>
      `
    }

    get app() {
      return document.querySelector('#app')
    }

    clickArtist(artist) {
      console.log(`clicked ${artist}`)
      this.app.dispatchEvent(new CustomEvent('clickArtist', {
        detail: { artist: artist }
      }))
    }

  }
  customElements.define('artist-menu', ArtistMenu)

  class ArtistList extends HTMLElement {
    constructor() {
      super()
      const shadowRoot = this.attachShadow({ mode: 'open' })
      shadowRoot.innerHTML = `
      <style>
      </style>
      <ul>
      ${list.map(data => `<artist-menu>${data}</artist-menu>`).join('')}
      </ul>
      `
    }
  }
  customElements.define('artist-list', ArtistList)
})()
