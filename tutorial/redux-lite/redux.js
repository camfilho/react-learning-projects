class Store {
  constructor(rootReducer) {
    this.rootReducer = rootReducer;
    this._state = {};
  }

  getState() {
    return Object.assign({}, this._state);
  }
}