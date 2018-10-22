
const PhoneService = {
  getPhones() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', '/api/phones.json', false);

    xhr.send();

    if (xhr.status !== 200) {
      console.error( xhr.status + ': ' + xhr.statusText );
      return [];
    }

    return JSON.parse(xhr.responseText);
  },

  getPhone(phoneId) {
    return {};
  }
};

export default PhoneService;
