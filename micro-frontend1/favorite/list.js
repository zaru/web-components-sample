(() => {
  const state = {
    list: []
  }

  class FavoriteList extends HTMLElement {
    connectedCallback() {
      this.render()
      window.addEventListener('favorite:add', (e) => this.addToList(e))
    }

    disconnectedCallback() {
      window.removeEventListener('favorite:add', (e) => this.addToList(e))
    }

    addToList(e) {
      state.list.push(e.detail.title)
      this.render()
    }

    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
    }

    render() {
      this.shadowRoot.innerHTML = `
      <h2>Favorite List</h2>
      <ul>
      ${state.list.map(data => `<li>${data}</li>`).join('')}
      </ul>
      `
    }

  }
  customElements.define('favorite-list', FavoriteList)
})()
