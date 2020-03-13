import basePath from './axios';

class HttpService {
  constructor() {
    let service = basePath;
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = error => {
    console.log(error);
    localStorage.removeItem('token');
    if (error.response && error.response.status === 401) {
      this.redirectTo(document, '/login');
    }
    return Promise.reject(error);
  };

  redirectTo = (document, path) => {
    document.location = path;
  };

  post(path, payload, callback) {
    return this.service
      .request({
        method: 'POST',
        url: path,
        data: payload,
      })
      .then(response => callback(response));
  }

  get(path, callback) {
    return this.service
      .request({
        method: 'GET',
        url: path,
      })
      .then(response => callback(response));
  }

  patch(path, payload, callback) {
    return this.service
      .request({
        method: 'PATCH',
        url: path,
        data: payload,
      })
      .then(response => callback(response));
  }

  delete(path, payload, callback) {
    return this.service
      .request({
        method: 'DELETE',
        url: path,
        data: payload,
      })
      .then(response => {
        console.log(response);
        callback(payload);
      });
  }
}

export default HttpService;
