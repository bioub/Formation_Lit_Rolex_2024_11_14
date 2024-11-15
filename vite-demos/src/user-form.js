import { LitElement, html } from "lit";

export class UserFormElement extends LitElement {
  static properties = {
    user: { type: Object, state: true },
  };

  constructor() {
    super();
    this.user = {
      name: "romain",
      email: "romain.bohdanowicz@formation.tech",
      newsletter: true,
    };
  }

  /** @param {InputEvent} event  */
  updateProperty(event) {
    /** @type {HTMLInputElement} */
    const target = event.target;

    const value = target.type === "checkbox" ? target.checked : target.value;

    this.user = {
      ...this.user,
      [target.name]: value,
    }
  }

  /** @param {SubmitEvent} event */
  sendUserToBackend(event) {
    event.preventDefault();
    console.log(this.user);
  }

  render() {
    return html`
      <form @submit=${this.sendUserToBackend} >
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" name="name" value=${this.user.name} @input=${this.updateProperty}>
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" value=${this.user.email} @input=${this.updateProperty}>
        </div>
        <div>
          <label for="newsletter">Newsletter</label>
          <input type="checkbox" id="newsletter" name="newsletter" .checked=${this.user.newsletter} @click=${this.updateProperty}>
        </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    `;
  }
}

customElements.define("user-form", UserFormElement);