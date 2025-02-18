import { LitElement, html, css } from 'lit';
import { ref } from 'lit/directives/ref.js';
import "@haxtheweb/meme-maker/meme-maker.js";

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card"
    this.image = "data:image/jpeg;base64,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"
    this.link = "https://hax.psu.edu/";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
      a {
        text-decoration: none;
      }
      .card {
        background-color: orange;
        padding: 16px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        max-width: 500px;
        display: flex;
        flex-direction: column;
        align-items: center; /* Center the image horizontally */
        justify-content: center; /* Center the image vertically */
      }
      .card meme-maker {
        max-width: 100%;
        border-radius: 8px 8px 0 0;
      }
      .card h3 {
        margin: 0;
        padding: 16px 0;
        text-align: center;
      }
      .card p {
        padding: 0 16px;
      }
      .center {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      max-width: 200px;
      }
      button {
  background-color: blue;
  color: white;
  font-size: 20px;
  border-radius: 10%;
      }
      button:focus,
      button:hover {
    background-color: yellow;
      }
      body {
  background-color: white;
}
h3{
  font-family:verdana;
}
h1,h2 {
  color: black;
  background-color: #f7c250;
  color: black;
  background-color: #f7c250;
  border: 5px solid #555;
  border-color: #f7c250;
  font-family:verdana;
  
}
meme-maker {
  border: 5px solid #555;
  border-color: #f7c250;
  width: 300px; 
  height: 400px;
  object-fit: cover; 

}
p {
  color: black;
  background-color: #f7c250;
  border: 5px solid #555;
  border-color: #f7c250;
  font-family:verdana;
  
}
.btn {
    display: block;
    font-size: 16px;
    padding: 12px;
    margin: 8px;
  }
  :host([fancy]) .card {
    background-color: #000000;
    color: #f7c250;
  }
  





      
    `;
  }
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }
  toggleFancy() {
    this.fancy = !this.fancy;
  }
  

  render() {
    return html`
    <div id = "cardlist">
    <button @click="${this.toggleFancy}">Toggle Fancy</button>
      <div class="card">
        <h1 class="cardheader"><b>${this.title}</b></h1>
          <meme-maker top-text="Cat Nation" bottom-text="Catso" image-url=${this.image} alt=${this.title}></meme-maker>
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Description</summary>
            <div>
              <slot></slot>
                <p>This is a Cat</p>
            <a href=${this.link} target="_blank">
              <button class="btn"><em>Details</em></button>
            </a>
        </div>
        </details>
      </div>
    </div>`;
  }

  static get properties() {
    return {
      fancy: { type: Boolean, reflect: true},
      title: { type: String },
      image: { type: String },
      link: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
