var Ajax = {
  get: function(url) {
    return new RSVP.Promise(function(resolve, reject) {
      var client = new XMLHttpRequest();
      client.open('GET', url);
      client.onreadystatechange = handler;
      client.responseType = 'json';
      client.setRequestHeader('Accept', 'application/json');
      client.send();

      function handler() {
        _handler.call(this, resolve, reject);
      }
    });
  },

  put: function(url, data) {
    return new RSVP.Promise(function(resolve, reject) {
      var client = new XMLHttpRequest();
      client.open('PUT', url);
      client.onreadystatechange = handler;
      client.responseType = 'json';
      client.setRequestHeader('Accept', 'application/json');
      client.setRequestHeader('Content-Type', 'application/json');
      client.send(JSON.stringify(data));

      function handler() {
        _handler.call(this, resolve, reject);
      }
    });
  }

};

function _handler(resolve, reject) {
  if (this.readyState === this.DONE) {
    if (this.status === 200) {
      resolve(this.response);
    } else {
      reject(this);
    }
  }
}

export default Ajax;
