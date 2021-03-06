class LayoutHeader extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.render();
    }
  
    disconnectedCallback() {
        
    }

    render() {
        this.innerHTML = `<div class="header-container">
            <div class="header">
                <div class="logo">
                    <img src="/img/data-transfer.svg" alt="TgCloud" />
                    TgCloud
                </div>
                <div class="menu">
                    <a href="/">Files</a>
                    <a href="/upload">Upload</a>
                </div>
            </div>
        </div>`;
    }
  }

customElements.define('layout-header', LayoutHeader);
