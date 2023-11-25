
function render_programme_list(parent, programmes)
{
  const container = document.createElement("div");
  container.id = "programme_list";
  parent.append(container);

  container.innerHTML = `
    <p class="feedback"></p>
    <ol></ol>
  `;

  update_programme_list(programmes);
}

function update_programme_list ()
{
  const container = document.querySelector("#programme_list");
  const list_dom = container.querySelector("ol");
  const feedback_dom = container.querySelector(".feedback");

  const programmes = filter_programmes();

  list_dom.innerHTML = "";
  feedback_dom.style.display = "block";

  if (programmes === undefined)
  {
    feedback_dom.textContent = "Show programmes by selecting from the filters";    
  }
  else if (programmes.length === 0)
  {
    feedback_dom.textContent = "No programmes for this combination of filters";    
  }
  else
  {
    feedback_dom.style.display = "none";
    for (let programme of programmes)
    {
      render_programme(list_dom, programme);
    }
    
    sort_programme_list();
  }
  
}