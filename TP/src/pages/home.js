import { LitElement, html } from 'lit';

export class HomeComponent extends LitElement {
  static properties = {
    _name: { type: String, state: true },
  };

  constructor() {
    super();
    this._name = 'Romain';
  }

  updateName(event) {
    this._name = event.target.value;
  }

  render() {
    return html`
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <div>
        <input type="text" placeholder="Enter your name" value=${this._name} @input=${this.updateName} />
      </div>
      <p>Hello ${this._name}!</p>
    `;
  }
}

customElements.define('my-home', HomeComponent);
