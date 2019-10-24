(() => {

  const list = [
    { artist: 'フジファブリック', title: '桜の季節' },
    { artist: 'フジファブリック', title: '陽炎' },
    { artist: 'フジファブリック', title: '赤黄色の金木犀' },
    { artist: 'フジファブリック', title: '銀河' },
    { artist: 'フジファブリック', title: '虹' },
    { artist: 'フジファブリック', title: '茜色の夕日' },
    { artist: 'キングヌー', title: '白日' },
    { artist: 'キングヌー', title: '飛行艇' },
    { artist: 'キングヌー', title: '傘' },
    { artist: 'キングヌー', title: 'Slumberland' },
    { artist: 'キングヌー', title: 'Flash!!!' },
    { artist: 'キングヌー', title: 'Sorrows' },
    { artist: 'キングヌー', title: 'Hitman' },
    { artist: 'キングヌー', title: 'Don\'t Stop the Clocks' },
  ]

  const relation = (artist, limit = 3) => {
    const copy = list.filter(data => data.artist === artist).slice()
    return [...Array(limit)].map(() => copy.splice(Math.floor(Math.random() * copy.length), 1)[0])
  }

  class Recommend extends HTMLElement {
    static get observedAttributes() {
      return ['artist']
    }

    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.render()
    }

    render() {
      this.shadowRoot.innerHTML = `
      <style>
        div {
          background: aliceblue;
          border-radius: 3px;
          padding: 20px;
        }
      </style>
      <div>
        <h2>Relation</h2>
        <ul>
        ${relation(this.artist).map(data => this.template(data)).join('')}
        </ul>
      </div>
      `
    }

    template(data) {
      return `<li>${data.title}<favorite-button title="${data.title}"></favorite-button></li>`
    }

    get artist() {
      return this.getAttribute('artist')
    }

    attributeChangedCallback(attr, oldValue, newValue) {
      this.render()
    }
  }
  customElements.define('my-relation', Recommend)
})()
