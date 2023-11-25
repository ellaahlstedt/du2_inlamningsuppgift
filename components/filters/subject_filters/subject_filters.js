
function render_subject_filters(parent)
{
  // Funktionen tar emot en referens till förälderelementet.
  // Den skapar en container för alla filter-element för "subject".
  // Se language_filters.js  

  const container = document.createElement("div");
  container.id = "subject_filters";
  parent.append(container);
  
  for (let subject of SUBJECTS)
  {
    render_filter_element(container, subject.name);
  }
}