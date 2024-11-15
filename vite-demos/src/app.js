import './hello.js';
import './select.js';
import './user-form.js'

import { LitElement, html } from 'lit'

export class MyApp extends LitElement {
  static properties = {
    _nameFromApp: { type: String, state: true },
    _itemsFromApp: { type: Array, state: true }
  }

  constructor() {
    super()
    this._nameFromApp = 'App';
    this._itemsFromApp = ['App', 'Appli', 'Aplicación'];
  }

  addName() {
    this._itemsFromApp = [...this._itemsFromApp, 'New'];
  }

  /** @param {CustomEvent} event */
  updateName(event) {
    this._nameFromApp = event.detail;
  }

  render() {
    return html`
      <h1 .className=${"test"}>Demos</h1>
      <my-hello></my-hello>
      <my-hello name="Romain"></my-hello>
      <my-hello name=${this._nameFromApp}></my-hello>
      <my-select .items=${this._itemsFromApp} item=${this._nameFromApp} @item-updated=${this.updateName}></my-select>
      <user-form></user-form>
    `
  }
}

customElements.define('my-app', MyApp)
