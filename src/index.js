import {controller} from '@github/catalyst'

class IndexElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 'hey'
  }
}

function execute() {
  console.log('ok')
}

execute();

window.customElements.register('index', IndexElement)

