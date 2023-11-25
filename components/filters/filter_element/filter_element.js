function render_filter_element (parent, text)
{
  const container = document.createElement("div");
  parent.append(container);
  container.classList.add("filter_element");

  container.innerHTML = `
    <div class="check_container">
      <div class="check_mark"></div>
    </div>
    <div class="text">${text}</div>
  `;

  container.addEventListener("click", function () 
  {
    container.classList.toggle("checked");    
    update_programme_list();
  });
}