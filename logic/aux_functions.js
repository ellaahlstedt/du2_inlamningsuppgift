function get_random_number (max, min = 0) {
  // Returns a random number between min (inclusive) and max (exclusive)

  // Du behöver inte förstå det matematiska uttrycket nedan.
  // Du måste dock förstå hur denna funktion används i array_random_element (array_functions.js)
  return min + Math.floor( max * Math.random() );
}

