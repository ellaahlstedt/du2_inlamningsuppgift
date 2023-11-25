// Koden i denna fil behöver du endast förstå om du vill jobba för VG i projektet.
// Den ingår inte i redovisningen av inlämningsuppgiften.

function render_sorter_list (parent)
{
  const container = document.createElement("div");
  container.id = "sorter_list";
  parent.append(container);

  container.innerHTML = `
    <h1>Sortering</h1>
    <div></div>
  `;

  const sorter_element_container = container.querySelector("div");
  render_sort_element(sorter_element_container, "Sortera enligt Sun Index", true);
  render_sort_element(sorter_element_container, "Sortera enligt Entry Grade", false);
  render_sort_element(sorter_element_container, "Sortera enligt Success Rate", false);
}

function reset_sort_elements ()
{
  const sort_elements = document.querySelectorAll("#sorter_list div > *");
  for (let sort_element of sort_elements)
  {
    sort_element.classList.remove("checked");
  }
}