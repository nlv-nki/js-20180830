import Component from '../../component.js';

export default class PhoneFilters extends Component {
  constructor({ element }) {
    super({ element });

    this._on('change', 'sort-from', () => {
      let select = document.querySelector('[data-element="sort-from"]');
      let value = select.value;
      this.emit('sort', value );
    });

    this._render();
  }

  sort(data, value) {

    if (value === 'name') {
      data.sort( (item1,item2) => {
        if (item1.name < item2.name) return -1;
        if ( item1.name > item2.name) return 1;
      })
    }

    else if (value === 'age') {
      data.sort( (item1,item2) =>  (item1 > item2) ? 1 : -1)
    }
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
