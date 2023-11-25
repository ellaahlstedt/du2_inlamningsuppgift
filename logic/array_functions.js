
function array_average (a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return ("" + (sum/a.length)).substring(0, 4);
}

function array_random_element (a) {
  const random_index = get_random_number(a.length);
  return a[random_index];
}

function array_find (a, test_function) {
  // Loopar igenom arrayen a och anropar funktionen test_function med varje element i a som argument.
  // Loopen (och funktionen) avbryts när ett test_function returnerar true.
  // Funktionen returnerar elementet i a för vilken test_function returnerade true.
  for(let i=0; a.length>i; i++) {
    let temp = test_function(a[i]);
    if (temp == true) {
      console.log(a[i]);
      return a[i];
    }
  }
}

function array_filter (a, test_function) {
  // Loopar igenom arrayen a och anropar funktionen test_function med varje element i a som argument.
  // Funktionen returnerar en ny array med alla elementet i a för vilka test_function returnerade true.
  let cities = [];
  // console.log(a);

  for(let i=0; a.length>i; i++){
    let temp = test_function(a[i]);
    if(temp == true) {
      cities.push(a[i]);
    }
  }
  return cities;
}

function array_each (a, callback) {
  // Loopar igenom arrayen a och anropar funktionen callback med varje element i a som argument.
}

function array_map (a, transform_function) {
  // Loopar igenom arrayen a och anropar funktionen transform_function med varje element i a som argument.
  // Funktionen returnerar en ny array med returvärdet av varje anrop av transform_function.
  let result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(transform_function(a[i]));
  }
  return result;
}
