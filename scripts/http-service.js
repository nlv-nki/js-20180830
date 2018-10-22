
const HttpService = {
  sendRequest(url, {
    method = 'GET',
    successCallback = () => {},
    errorCallback = (error) => { console.error(error) },
  }) {
    let xhr = new XMLHttpRequest();

    xhr.open(method, url, true);

    xhr.send();

    xhr.onload = () => {
      if (xhr.status !== 200) {
        errorCallback( xhr.status + ': ' + xhr.statusText );
      } else {
        let data = JSON.parse(xhr.responseText);

        successCallback(data);
      }
    };
  }
};

export default HttpService;
