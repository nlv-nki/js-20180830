
const PhoneService = {
  getPhones(callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', '/api/phones.json', true);

    xhr.send();

    xhr.onload = () => {
      if (xhr.status !== 200) {
        console.error( xhr.status + ': ' + xhr.statusText );
      } else {
        let phones = JSON.parse(xhr.responseText);

        callback(phones);
      }
    };
  },

  getPhone(phoneId) {
    return {};
  }
};

export default PhoneService;
