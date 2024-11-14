import { LitElement, html } from 'lit'

export class MySelect extends LitElement {
  /** @type {import('lit').PropertyDeclarations} */
  static properties = {
    items: { type: Array, reflect: true }
  }

  constructor() {
    super()
    this.items = ['World', 'Monde', 'Mundo'];
  }
  
  render() {
    return html`
      <div>Select, ${this.items}!</div>
    `
  }
}

customElements.define('my-select', MySelect)
