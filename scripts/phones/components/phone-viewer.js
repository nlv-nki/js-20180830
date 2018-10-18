import Component from '../../component.js'

export default class PhoneViewer extends Component{
  constructor({ element }) {
    super({ element });
  }

  show(phoneDetails) {
    this._phone = phoneDetails;
    this._render();

    super.show();
  }

  _render() {
    const { images, name, description } = this._phone;

    this._element.innerHTML = `
      <img class="phone" src="${ images[0] }">

      <button>Back</button>
      <button>Add to basket</button>
  
  
      <h1>${ name }</h1>
  
      <p>${ description }</p>
  
      <ul class="phone-thumbs">
        ${ images.map(image => `
          <li>
            <img src="${ image }">
          </li>
        `).join('')}
      </ul>
    `;
  }
}
