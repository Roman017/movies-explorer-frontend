class MainApi {
    constructor({baseURL, headers}) {
        this.baseURL = baseURL;
        this.headers = headers;
    }

    _checkResponse(response) {
        if(response.ok) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      }

    getMyUserData() {
        return fetch(`${this.baseURL}/users/me`, {
            method: 'GET',
            credentials: 'include',
            headers: this.headers,
        })
          .then(this._checkResponse)
    }

    patchMyUserData(data) {
        return fetch(`${this.baseURL}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            credentials: 'include',
            body: JSON.stringify({
                name: data.name,
                email: data.email,
              })
        })
          .then(this._checkResponse)
    }

    getSavedMovies() {
        return fetch(`${this.baseURL}/movies`, {
            method: 'GET',
            headers: this.headers,
            credentials: 'include',
        })
        .then(this._checkResponse)
    }

    createMovie(data) {
        return fetch(`${this.baseURL}/movies`, {
            method: 'POST',
            headers: this.headers,
            credentials: 'include',
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: data.image,
                trailer: data.trailer,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
                thumbnail: data.thumbnail,
                movieId: data.movieId, 
              })
        })
          .then(this._checkResponse)
    }

    deleteMovie(movieId) {
        return fetch(`${this.baseURL}/movies/${movieId}`, {
            method: 'DELETE',
            headers: this.headers,
            credentials: 'include',
        })
        .then(this._checkResponse)
    }

    createUser(data) {
        return fetch(`${this.baseURL}/signup`, {
            method: 'POST',
            headers: this.headers,
            credentials: 'include',
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                password: data.password,
            })
        })
        .then(this._checkResponse)
    }

    login(data) {
        return fetch(`${this.baseURL}/signin`, {
            method: 'POST',
            headers: this.headers,
            credentials: 'include',
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            })
        })
        .then(this._checkResponse)
    }

    logout() {
        return fetch(`${this.baseURL}/signout`, {
            method: 'GET',
            headers: this.headers,
            credentials: 'include',
        })
        .then(this._checkResponse)
    }
}

const mainApi = new MainApi({
    // baseURL: 'https://api.moredomains.nomoredomains.rocks',
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default mainApi;
