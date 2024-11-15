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
    // window.addEventListener('click', this.log);
  }

  addName() {
    this._itemsFromApp = [...this._itemsFromApp, 'New'];
  }

  /** @param {CustomEvent} event */
  updateName(event) {
    this._nameFromApp = event.detail;
  }

  log(event) {
    // target: element qui a déclenché l'événement mais on ne passe pas les shadowRoot (ici my-app si on écoute au niveau de window)
    console.log('target', event.target);
    // currentTarget: element qui écoute l'événement (ici window, là où on a appelé addEventListener)
    console.log('currentTarget', event.currentTarget);
    // path: liste des éléments qui ont reçu l'événement (de la cible à la racine, en traversant les shadowRoot)
    console.log('composedPath', event.composedPath());
  }

  render() {
    return html`
     <div>
        <h1 .className=${"test"}>Demos</h1>
        <input>
        <my-hello></my-hello>
        <my-hello name="Romain"></my-hello>
        <my-hello name=${this._nameFromApp}></my-hello>
        <my-select .items=${this._itemsFromApp} item=${this._nameFromApp} @item-updated=${this.updateName}></my-select>
        <user-form></user-form>
      </div>
    `
  }
}

customElements.define('my-app', MyApp)
