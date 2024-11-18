class simpleMap {
  constructor() {
    this._items = [];
  }

  set(key, value) {
    this._items.push([key, value]);
  }

  get(key) {
    let keyValPair = this._items.find(function (val) {
      return val[0] === key;
    });
    return keyValPair[1];
  }

  delete(key) {
    let foundIdx = this._items.findIndex((pair) => {
      return pair[0] === key;
    });
    this._items.splice(foundIdx, 1);
  }

  has(key) {
    return this._items.some((val) => {
      return val[0] === key;
    });
  }

  keys() {
    return this._items.map((val) => {
      return val[0];
    });
  }

  values() {
    return this._items.map((val) => {
      return val[1];
    });
  }

  entries() {
    return this._items;
  }
}

class HashMap {
  constructor() {
    this._items = [];
  }

  hash(key, arrayLen) {
    const H_PRIME = 37;

    const hash = Array.from(key).reduce(
      (accum, char) => accum * H_PRIME + char.charCodeAt(),
      0
    );
    return hash % arrayLen;
  }

  set(k, v) {
    const hashedKey = this.hash(k, 10);
    if (this._items[hashedKey]) {
      this._items[hashedKey].push([k, v]);
    } else {
      this._items[hashedKey] = [[k, v]];
    }
  }

  get(k) {
    const hashedKey = this.hash(k, 10);
    if (this._items[hashedKey]) {
      let found = this._items[hashedKey].find((val) => {
        return val[0] === k;
      });

      if (found) return found[1];
    }
    return undefined;
  }

  has(k) {
    const hashedKey = this.hash(k, 10);
    if (this._items[hashedKey]) {
      let found = this._items[hashedKey].some((pair) => {
        return pair[0] === k;
      });
      return found;
    }
    return false;
  }

  delete(k) {
    const hashedKey = this.hash(k, 10);
    if (this._items[hashedKey]) {
      let arr = this._items[hashedKey];
      let removeIDX = arr.findIndex((pair) => {
        return pair[0] === k;
      });
      if (removeIDX !== -1) {
        this._items[hashedKey].splice(removeIDX, 1);
      }
    }
  }

  keys() {
    let finalArr = [];
    for (let bin of this._items) {
      if (bin) {
        for (let pair of bin) {
          finalArr.push(pair[0]);
        }
      }
    }
    return finalArr;
  }

  values() {
    let finalArr = [];
    for (let bin of this._items) {
      if (bin) {
        for (let pair of bin) {
          finalArr.push(pair[1]);
        }
      }
    }
    return finalArr;
  }

  entries() {
    let finalArr = [];
    for (let bin of this._items) {
      if (bin) {
        for (let pair of bin) {
          finalArr.push(pair);
        }
      }
    }
    return finalArr;
  }
}

module.exports = { HashMap };
