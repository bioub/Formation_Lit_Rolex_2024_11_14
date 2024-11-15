import { LitElement, css, html } from 'lit';

export class UsersFilterComponent extends LitElement {
  static properties = {
    filter: { type: String },
  };

  constructor() {
    super();
    this.filter = '';
  }

  updateFilter(event) {
    this.filter = event.target.value;
    this.dispatchEvent(
      new CustomEvent('filter-changed', { detail: this.filter }),
    );
  }

  render() {
    return html`
      <input
        type="text"
        placeholder="Filter users"
        value=${this.filter}
        @input=${this.updateFilter}
      />
    `;
  }

  static styles = css`
    input {
      box-sizing: border-box;
      width: 100%;
      padding: 0.5em;
      margin-bottom: 1em;
    }
  `;
}

customElements.define('my-users-filter', UsersFilterComponent);
