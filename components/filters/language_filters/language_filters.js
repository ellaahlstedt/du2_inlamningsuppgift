
function render_language_filters(parent)
{
  const container = document.createElement("div");
  container.id = "language_filters";
  parent.append(container);
  
  for (let language of LANGUAGES)
  {
    render_filter_element(container, language.name);
  }
}