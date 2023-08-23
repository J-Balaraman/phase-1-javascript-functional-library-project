function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i]);
        }
      } else {
        for (const key in collection) {
          if (collection.hasOwnProperty(key)) {
            callback(collection[key]);
          }
        }
      }
      return collection;
}

function myMap(collection, callback) {
  if (Array.isArray(collection)) {
    return collection.map(callback);
  } else if (typeof collection === 'object' && collection !== null) {
    const collectionValues = Object.values(collection);
    return collectionValues.map(callback);
  } else {
    return [];
  }
}


function myReduce(collection, callback, acc) {
  if (Array.isArray(collection)) {
    if(acc === undefined){
      return collection.reduce(callback);
    } else {
      return collection.reduce(callback, acc);
    }
  } else if (typeof collection === 'object' && collection !== null) {
    const collectionValues = Object.values(collection);
    return collectionValues.reduce(callback);
  } else {
    return [];
  }
}

function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    return collection.find(predicate);
  } else if (typeof collection === 'object' && collection !== null) {
    const collectionValues = Object.values(collection);
    return collectionValues.find(predicate);
  } else {
    return [];
  }
}

function myFilter(collection, predicate) {
  if (Array.isArray(collection)) {
    return collection.filter(predicate);
  } else if (typeof collection === 'object' && collection !== null) {
    const collectionValues = Object.values(collection);
    return collectionValues.filter(predicate);
  } else {
    return [];
  }
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length
  } else if (typeof collection === 'object' && collection !== null) {
    const collectionValues = Object.values(collection);
    return collectionValues.length
  } else {
    return [];
  }
}

function myFirst(collection, n) {
  if (Array.isArray(collection)) {
    if (n === undefined) {
      return collection[0];
    } else {
      return collection.slice(0, n);
    }
  }
}

function myLast(collection, n) {
  if (Array.isArray(collection)) {
    if (n === undefined) {
      return collection[collection.length - 1];
    } else {
      return collection.slice(-n);
    }
  }
}

function myKeys(object) {
  const collectionValues = Object.keys(object);
  return collectionValues;
}

function myValues(object) {
  const collectionValues = Object.values(object);
  return collectionValues;
}