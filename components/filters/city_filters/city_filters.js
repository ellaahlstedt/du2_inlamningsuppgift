function render_city_filters (parent)
{
  const container = document.createElement("div");
  container.id = "city_filters";
  parent.append(container);
  
  for (country of COUNTRIES)
  {
    const country_container = document.createElement("div")
    container.append(country_container);
    country_container.classList.add("country_container");

    country_container.innerHTML = `
      <h1>${country.name}</h1>
      <div class="city_container"></div>
    `;

    const city_container = country_container.querySelector(".city_container");
    const cities_in_country = array_filter(CITIES, function (city) { return city.countryID === country.id });
    for (city of cities_in_country)
    {
      render_filter_element(city_container, city.name);
    }
  }
}