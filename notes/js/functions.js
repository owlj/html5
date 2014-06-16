function change_active (el_active, el) {
  el_active.className = 'active';
  el.className = '';
}

function load_all_notes () {
  var data = storage_load();
  for(var i = 0; i < data.notes.items.length; i++){
    create_note(data.notes.items[i]);
  }
}

function update_note (note) {
  main_menu_add_note.click();
  input_text_title.value = note.title;
  textarea_text.value = note.text;
  select_size.selectedIndex = note.size;
  input_text_edit_hidden.value = note.id;
  set_visible_create(false);
}

function update_data_note (id) {
  var note = new Note(input_text_title, textarea_text, select_size, input_text_edit_hidden);
  if (storage_update_note(note)) update_view_note(note);
}

function set_visible_create (flag) {
  if(flag){
    form_group_create.style.display = 'block';
    form_group_edit.style.display = 'none';
  } else {
    form_group_create.style.display = 'none';
    form_group_edit.style.display = 'block';
  }
}