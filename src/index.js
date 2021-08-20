
exports.min = function min (array) {
  if ( array === undefined || array.length === 0 ) {
    return 0;
  };

  let minNumber = array[0];
  for ( let i = 0; i < array.length - 1; i++ ) {
      if ( minNumber < array[i+1] ) {
          minNumber = minNumber;
      } else {
          minNumber = array[i+1];
      }
  }

    return minNumber ;
}

exports.max = function max (array) {
  if ( array === undefined || array.length === 0 ) {
    return 0;
  };

  let maxNumber = array[0];
  for ( let i = 0; i < array.length - 1; i++ ) {
      if ( maxNumber > array[i+1] ) {
          maxNumber = maxNumber;
      } else {
          maxNumber = array[i+1];
      }
  }

    return maxNumber ;
}

exports.avg = function avg (array) {
  if ( array === undefined || array.length === 0 ) {
    return 0;
  };

  let avgNumber = 0;
  let sum = 0;
  for ( let i = 0; i < array.length; i++ ) {
      sum += array[i];
  }
  avgNumber = sum / array.length;
  return avgNumber ;
}
