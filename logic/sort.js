// Koden i denna fil behöver du endast förstå om du vill jobba för VG i projektet.
// Den ingår inte i redovisningen av inlämningsuppgiften.

function sort_programme_list ()
{
  // 
  // Om du vill jobba mot VG i projektet:
  //    Du måste hitta information om metoden sort() på egen hand.
  //    Här ser ni hur den kan användas. Det finns många tutorials på nätet
  //    och det är viktigt att lära sig hämta information på egen hand.

  const active_sort_dom = document.querySelector(".sort_element.checked");
  const sort_aspect_text = active_sort_dom.querySelector(".text").textContent;

  const sort_direction_text = active_sort_dom.querySelector(".direction").textContent;
  const sort_direction = sort_direction_text.includes("asc") ? "asc" : "desc";

  let sorterings_function;
  if (sort_aspect_text.includes("Sun"))
  {
    sorterings_function = function (a, b)
    {
      const a_value = parseInt(a.querySelector(".sun-index").textContent);
      const b_value = parseInt(b.querySelector(".sun-index").textContent);
      return (sort_direction === "asc") ? a_value - b_value : b_value - a_value;
    }
  }
  if (sort_aspect_text.includes("Entry"))
  {
    sorterings_function = function (a, b)
    {
      const a_value = parseInt(a.querySelector(".entry-grade").textContent);
      const b_value = parseInt(b.querySelector(".entry-grade").textContent);
      return (sort_direction === "asc") ? a_value - b_value : b_value - a_value;
    }
  }
  if (sort_aspect_text.includes("Success"))
  {
    sorterings_function = function (a, b)
    {
      const a_value = parseInt(a.querySelector(".success-rate").textContent);
      const b_value = parseInt(b.querySelector(".success-rate").textContent);
      return (sort_direction === "asc") ? a_value - b_value : b_value - a_value;
    }
  }

  const programme_doms = Array.from(document.querySelectorAll(".programme"));

  programme_doms.sort(sorterings_function);

  for (let programme_dom of programme_doms)
  {
    document.querySelector("#programme_list ol").append(programme_dom);
  }
}