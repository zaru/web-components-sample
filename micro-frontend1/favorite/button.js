(() => {
  class FavoriteButton extends HTMLElement {

    connectedCallback() {
      this.render()
      this.addEventListener('click', () => { this.addToFavorite(this.title) })
    }

    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
    }

    render() {
      this.shadowRoot.innerHTML = `
      <button type="button">fav</button>
      `
    }

    addToFavorite(title) {
      console.log('title=', title)
      this.dispatchEvent(new CustomEvent('favorite:add', {
        bubbles: true,
        composed: true,
        detail: {
          title: title
        }
      }))
    }

    get title() {
      return this.getAttribute('title')
    }
  }
  customElements.define('favorite-button', FavoriteButton)
})()
