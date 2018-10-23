import Component from '../../component.js';

export default class PhoneFilters extends Component {
  constructor({ element }) {
    super({ element });

    this._on('change', 'sort-from', () => {
      let s = document.querySelector('[data-element="sort-from"]');
      let value = s.options[s.options.selectedIndex].value;
      this.emit('sort', value );
    });

    this._render();
  }

  _render() {
    this._element.innerHTML = `
      <p>
        Search:
        <input data-element="search-button"
          type="text"
        >
      </p>

      <p>
        Sort by:
        <select data-element="sort-from">
          <option value="name">Alphabetical</option>
          <option value="age">Newest</option>
        </select>
      </p>
    `;
  }
}
