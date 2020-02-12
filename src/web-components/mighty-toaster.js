export class MightyToaster extends HTMLElement {

  constructor() {
      super();

      const shadowRoot = this.attachShadow({mode: 'open'});

      shadowRoot.innerHTML = `
            <style>
               #mighty-toast {
                visibility: hidden; 
                position: fixed;
                z-index: 1;
                top: 1rem;
                width: 100%;
                background-color: #FF00FF; 
                font-family: 'Bowlby One', cursive;
                text-align: center; 
                padding: 16px;
                }
               #mighty-toast.show {
                visibility: visible;
                }
            </style>
            <div id="mighty-toast"></div>
        `;

      this.toast = this.shadowRoot.querySelector('#mighty-toast');

    }

    connectedCallback() {
      console.log('connected')
    }

    disConnectedCallback() {
      console.log('disconnected')
    }

  set pop(value) {
      this.toast.classList.add('show');
      setTimeout(() => { 
        this.toast.classList.remove("show"); }, 3000);
  }

  get text() {
    return this.getAttribute('text');
  }

  set text(value) {
    this.toast.innerHTML = value;
    this.setAttribute('text', value);
  }

  get color() {
    return this.getAttribute('color');
  }

  set color(value) {
    this.toast.style.backgroundColor = value;
    this.setAttribute('color', value);
  }

  }
MightyToaster.observedAttributes = [ 'text', 'pop'];

customElements.define('mighty-toast', MightyToaster);

