class MyContent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
        div {
          background: aliceblue;
          border-radius: 3px;
          padding: 20px;
        }
      </style>
      <div>${this.innerHTML}</div>
      `;
  }
}

customElements.define('my-content', MyContent);
