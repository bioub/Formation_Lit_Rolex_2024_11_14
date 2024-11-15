export class WindowClickController {
  listener;

  constructor(host, listener) {
    this.host = host;
    this.listener = listener;
    this.host.addController(this);

    // si dans le controller on veut mettre à jour le
    // composant lit directement on appelle :
    // this.host.requestUpdate();
  }

  hostConnected() {
    window.addEventListener('click', this.listener);
  }

  hostDisconnected() {
    window.removeEventListener('click', this.listener);
  }
}