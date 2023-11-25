// Koden i denna fil behöver du endast förstå om du vill jobba för VG i projektet.
// Den ingår inte i redovisningen av inlämningsuppgiften.

function render_sort_element (parent, text, is_on)
{
  const container = document.createElement("button");
  parent.append(container);
  container.classList.add("sort_element");
  container.classList.add("interactive");
  if (is_on) container.classList.add("checked");

  container.innerHTML = `
    <div class="check_container">
      <div class="check_mark"></div>
    </div>
    <div class="text">${text}</div>
    <button class="direction interactive">(asc)</button>
  `;

  container.addEventListener("click", function () 
  {
    reset_sort_elements();
    container.classList.add("checked");
    sort_programme_list();
  });
  
  container.querySelector("button.direction").addEventListener("click", function () 
  {
    const dir = container.querySelector("button.direction").textContent;
    if (dir === "(asc)")
    {
      container.querySelector("button.direction").textContent = "(desc)";
    }
    else
    {
      container.querySelector("button.direction").textContent = "(asc)";
    }
  });
}