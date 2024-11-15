export class FetchController {
  /**
   * @param {import('lit').LitElement} host 
   * @param {string} url 
   */
  constructor(host, url) {
    this.host = host;
    this.host.addController(this);
    this.url = url
    this.data = null;
    this.loading = false;
    this.abortController = new AbortController();
  }

  async hostConnected() {
    try {
      this.loading = true;
      const res = await fetch(this.url, {
        signal: this.abortController.signal,
      });
      this.data = await res.json();
      this.loading = false;
      this.host.requestUpdate();
    } catch (error) {
      if (error.name !== 'AbortError') {
        throw error;
      }
    }
  }

  hostDisconnected() {
    this.abortController.abort();
  }
}