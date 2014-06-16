function storage_load () {
  var data = {};
  data.notes = new Notes();
  data.notes.items.push(
      {
        id: (new Date()).getTime(),
        title: 'ToDo', 
        text: '<p>You can start adding new note, and delete this one</p><sub>see upper left most menu</sub>', 
        size: '1'
      }
    );
  if(localStorage[storage_name()] == null){
    localStorage[storage_name()] = JSON.stringify(data);
  } else {
    data = storage_build_data(localStorage[storage_name()]);
  }
  return data;
}

function storage_save (data) {
  localStorage[storage_name()] = JSON.stringify(data);
}

function storage_build_data (data_string) {
  var data = JSON.parse(data_string);
  var data_return = {};
  data_return.notes = new Notes();
  for (var i = 0; i < data.notes.items.length; i++) {
    data_return.notes.items.push(data.notes.items[i]);
  };
  return data_return;
}

function storage_save_note (note) {
  var data = storage_load();
  data.notes.items.push(note);
  storage_save(data);
  return true;
}

function storage_drop_note (id) {
  var data = storage_load();
  data.notes.drop_by_id(id);
  storage_save(data);
  return true;
}

function storage_get_note (id) {
  var data = storage_load();
  return data.notes.find_by_id(id);
}

function storage_update_note (new_note) {
  var data = storage_load();
  var index = data.notes.find_by_id(new_note.id, true);
  data.notes.items[index] = new_note;
  storage_save(data);
  return true;
}