import Component from '../../component.js'

export default class PhoneCatalog extends Component {
  constructor({ element, phones }) {
    super({ element });

    this._phones = phones;

    this._render();

    this._element.addEventListener('click', (event) => {
      this._onPhoneClick(event);
    });

    this._element.addEventListener('click', (event) => {
      this._onAddClick(event);
    });
  }

  _onPhoneClick (event) {
    let phoneElement = event.target.closest('[data-element="phone"]');

    if (!phoneElement) {
      return;
    }

    this.emit('phoneSelected', phoneElement.dataset.phoneId);
  }

  _onAddClick (event) {
    let addButton = event.target.closest('[data-element="add-button"]');

    if (!addButton) {
      return;
    }

    let phoneElement = event.target.closest('[data-element="phone"]');

    this.emit('add', phoneElement.dataset.phoneId);
  }

  _render() {
    this._element.innerHTML = `
      <ul class="phones">
        ${ this._phones.map(phone => `
          <li
            class="thumbnail"
            data-element="phone"
            data-phone-id="${ phone.id }"
          >
            <a href="#!/phones/${ phone.id }" class="thumb">
              <img alt="${ phone.name }" src="${ phone.imageUrl }">
            </a>
  
            <div class="phones__btn-buy-wrapper">
              <a class="btn btn-success" data-element="add-button">
                Add
              </a>
            </div>
  
            <a href="#!/phones/${ phone.id }">${ phone.name }</a>
            <p>${ phone.snippet }</p>
          </li>
        `).join('') }
      </ul>
    `;
  }
}
