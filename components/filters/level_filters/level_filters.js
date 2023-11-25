
function render_level_filters(parent)
{
  // Funktionen tar emot en referens till förälderelementet.
  // Den skapar en container för alla filter-element för "level".
  // Se language_filters.js
  const container = document.createElement("div");
  container.id = "level_filters";
  parent.append(container);
  
  for (let level of LEVELS)
  {
    render_filter_element(container, level.name);
  }
}