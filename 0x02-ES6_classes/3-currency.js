export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof (value) === 'string') {
      this._name = value;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof (value) === 'string') {
      this._code = value;
    } else {
      throw TypeError('Code must be a string');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
