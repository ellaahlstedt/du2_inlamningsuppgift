
// Med detta anrop skapar vi HTML-strukturen.
// Returvärdet ger oss referenser till viktiga HTML-element.
const structure_containers = render_structure();

// Använd returvärdet av render_structure(), där finns referenser till alla HTML-element (parents)
// som behövs för att rendera komponenterna:
// - header
// - city_filters
// - subject_filters
// - level_filters
// - language_filters
// - sorter_list
// - programme_list

// Så här renderas header med hjälp av returvärdet av render_structure:
render_header(structure_containers.header);

// Här ska resten av render_funktionerna anropas (listan av komponenter finns ovan).
render_city_filters(structure_containers.left);

render_subject_filters(structure_containers.right_top);

render_level_filters(structure_containers.right_top);

render_language_filters(structure_containers.right_top);

render_sorter_list(structure_containers.right_top);

render_programme_list(structure_containers.right_bottom, PROGRAMMES);
