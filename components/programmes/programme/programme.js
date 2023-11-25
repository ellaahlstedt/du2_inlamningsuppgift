
function render_programme (parent, programme)
{
  const container = document.createElement("div");
  container.classList.add("programme");
  container.id = programme.id;
  parent.append(container);

  const university = array_find(UNIVERSITIES, function (x) { return x.id === programme.universityID; });
  const city = array_find(CITIES, function (x) { return x.id === university.cityID; });
  const country = array_find(COUNTRIES, function (x) { return x.id === city.countryID; });
  const language = array_find(LANGUAGES, function (x) { return x.id === programme.languageID; });
  const subject = array_find(SUBJECTS, function (x) { return x.id === programme.subjectID; });
  const level = array_find(LEVELS, function (x) { return x.id === programme.levelID; });
  
  container.innerHTML = `
    <div>
      <h1>${programme.name}</h1>
      <div class="university">${university.name}</div>
      <div class="city_country">${city.name}, ${country.name}</div>
      <div class="level_subject_language">${level.name}, ${subject.name}, ${language.name}</div>
    </div>
    <div class="more_info">
      <button>Show more</button>
      <div class="extra_info">
        <div>Average entry grade: <span class="entry-grade">${array_average(programme.entryGrades)}</span></div>
        <div>Success rate: <span class="success-rate">${array_average(programme.successRate)}</span>%</div>
        <div>Exchange ratio: <span class="exchange-ratio">${programme.exchangeStudents}</span>/<span>${programme.localStudents}</span></div>
      </div>
    </div>
    <div class="bottom_programme">
      <div>${city.name}'s Sun-Index: <span class="sun-index">${city.sun}</span></div>
    </div>
  `;

  const image_path = array_random_element(city.imagesNormal);
  container.style.backgroundImage = `url(./media/geo_images/${image_path})`;

  // Extra (optional): Lägg till koden som behövs för att knappen "More Info" ska fungera.
  // Du måste också uppdatera CSS-koden. Här i JS får du endast lägga till eller ta bort en CSS-klass.
}