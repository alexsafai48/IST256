import { LitElement, html, css } from 'https://unpkg.com/lit@3/index.js?module';

class MyCard extends LitElement {
  static properties = {
    title: { type: String },
    description: { type: String },
    image: { type: String },
    link: { type: String },
    altBg: { type: Boolean, attribute: 'alt-bg' }
  };

  constructor() {
    super();
    this.title = 'Robot Card';
    this.description = 'ROBOT card';
    this.image = '';
    this.link = '';
    this.altBg = false;
  }

  static styles = css`
    .card {
      max-width: 400px;
      border: 2px solid #000;
      padding: 16px;
      margin: 16px;
      font-family: Arial, sans-serif;
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

    .alt-bg {
      background-color: #00487C;
      color: white;
    }

    @media (max-width: 500px) {
      .card {
        transform: scale(0.95);
      }
    }
  `;

  render() {
    return html`
      <section class="card ${this.altBg ? 'alt-bg' : ''}">
        <img src="${this.image}" alt="robot image" />
        <h2>${this.title}</h2>
        <p>${this.description}</p>
        <a href="${this.link}" class="details-button">Details</a>
      </section>
    `;
  }
}

customElements.define('my-card', MyCard);
