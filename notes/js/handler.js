function handler_init () {
  main_menu_add_note.onclick = handler_main_menu_add_note;
  main_menu_the_notes.onclick = handler_main_menu_the_notes;
  input_button_create.onclick = handler_input_button_create;
  button_cancel.onclick = handler_button_cancel;
  button_update.onclick = handler_button_update;
  button_new.onclick = handler_button_new;
}

function handler_main_menu_add_note () {
  change_active(main_menu_add_note, main_menu_the_notes);
  switch_fade(add_note, the_notes);
  input_text_title.focus();
}

function handler_main_menu_the_notes () {
  change_active(main_menu_the_notes, main_menu_add_note);
  switch_fade(the_notes, add_note, 50);
}

function handler_input_button_create (flag) {
  if (flag == null) flag = false;
  if(form_note.checkValidity()){
    var note = new Note(input_text_title, textarea_text, select_size);
    if(storage_save_note(note))create_note(note, true);
    reset_form(form_note, input_text_title);
    main_menu_the_notes.click();
  } else {
    input_submit_hidden.click();
  }
  if (flag) set_visible_create(true);
}

function handler_delete_note () {
  if (confirm("Are you sure?")) {
    var id = this.id.substr(5);
    if(storage_drop_note(id))remove_note(id);
  };
}

function handler_edit_note () {
  var note = storage_get_note(this.id.substr(5));
  update_note(note);
}

function handler_button_cancel () {
  reset_form(form_note, input_text_title);
  main_menu_the_notes.click();
  set_visible_create(true);
}

function handler_button_new () {
  handler_input_button_create(true);
}

function handler_button_update () {
  update_data_note(input_text_edit_hidden.value);
  reset_form(form_note, input_text_title);
  main_menu_the_notes.click();
  set_visible_create(true);
}