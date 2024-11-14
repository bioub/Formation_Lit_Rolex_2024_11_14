import { LitElement, css, html, nothing } from 'lit';

export class MySelect extends LitElement {
  /** @type {import('lit').PropertyDeclarations} */
  static properties = {
    item: { type: String, reflect: true },
    items: { type: Array, reflect: true },
    _menuOpen: { type: Boolean, state: true },
  };

  constructor() {
    super();
    this.item = 'Monde';
    this.items = ['World', 'Monde', 'Mundo'];
  }

  openMenu() {
    this._menuOpen = !this._menuOpen;
  }

  selectItemAndCloseMenu(item) {
    this.item = item;
    this._menuOpen = false;
    this.dispatchEvent(new CustomEvent('item-updated', { detail: item }));
  }

  render() {
    return html`
      <div class="selected" @click=${this.openMenu}>${this.item}</div>
      ${this._menuOpen
        ? html`<div class="menu">
            ${this.items.map(
              (item) =>
                html`<div
                  class="item"
                  @click=${() => this.selectItemAndCloseMenu(item)}
                >
                  ${item}
                </div>`,
            )}
          </div>`
        : nothing}
    `;
  }

  static styles = css`
    .selected {
      border: 1px solid black;
      padding: 0.5rem;
      cursor: pointer;
    }
    .menu {
      border: 1px solid black;
    }
    .item {
      padding: 0.5rem;
      cursor: pointer;
    }
  `;
}

customElements.define('my-select', MySelect);