import { LitElement, html, css } from 'https://unpkg.com/lit@3/index.js?module';

class MyCard extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      link: { type: String },
      fancy: { type: Boolean, reflect: true },
      label: { type: String }
    };
  }

  constructor() {
    super();
    this.title = 'Robot Card';
    this.image = '';
    this.link = '';
    this.fancy = false;
    this.label = 'Description';
  }

  static styles = css`
    :host {
      display: inline-block;
      --my-card-fancy-bg: pink;
      --my-card-fancy-border: fuchsia;
      --my-card-fancy-shadow: red;
    }

    :host([fancy]) .card {
      background-color: var(--my-card-fancy-bg);
      border: 2px solid var(--my-card-fancy-border);
      box-shadow: 10px 5px 5px var(--my-card-fancy-shadow);
    }

    .card {
      max-width: 400px;
      border: 2px solid #000;
      padding: 16px;
      margin: 16px;
      font-family: Arial, sans-serif;
      transition: all 0.3s ease;
    }

    .card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .details-button {
      display: inline-block;
      margin-top: 12px;
      padding: 10px 16px;
      border: 1px solid #000;
      text-decoration: none;
      color: black;
    }

    details summary {
      text-align: left;
      font-size: 20px;
      padding: 8px 0;
      cursor: pointer;
    }

    details[open] summary {
      font-weight: bold;
    }
    
    details div {
      border: 2px solid black;
      text-align: left;
      padding: 8px;
      height: 70px;
      overflow: auto;
    }

    @media (max-width: 500px) {
      .card {
        transform: scale(0.95);
      }
    }
  `;

  openChanged(e) {
    if (e.target.getAttribute('open') !== null) {
      this.fancy = true;
    } else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <section class="card">
        <img src="${this.image}" alt="${this.title}" />
        <h2>${this.title}</h2>
        
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>${this.label}</summary>
          <div>
            <slot></slot>
          </div>
        </details>

        <a href="${this.link}" class="details-button">Details</a>
      </section>
    `;
  }
}

customElements.define('my-card', MyCard);