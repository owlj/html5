function create_note (note, created_effect) {
  if(created_effect == null)created_effect = false;
  var root = document.createElement('div');
  var root_img = document.createElement('div');
  var table_left = document.createElement('div');
  var table_right = document.createElement('div');
  var well = document.createElement('div');
  var header = document.createElement('h4');
  var content = document.createElement('p');
  var edit = document.createElement('img');
  var close = document.createElement('img');

  root.className = get_size_classes()[note.size-1];
  root.id = 'note_'+note.id;
  if(created_effect)root.style.display = 'none';
  root_img.className = "note_button_group";
  table_left.className = "note_button_left";
  table_right.className = "note_button_right";
  well.className = "well";
  header.className = "note_title";
  header.id = "header_"+note.id;
  header.innerHTML = note.title;
  content.id = "content_"+note.id;
  content.innerHTML = note.text;
  edit.className = "icons_smaller";
  edit.id = 'edit_'+note.id;
  edit.title = 'Edit';
  edit.src = "assets/images/icons/edit.png";
  edit.onclick = handler_edit_note;
  close.className = "icons_smaller";
  close.src = "assets/images/icons/close.png";
  close.id = 'call_'+note.id;
  close.title = 'Delete';
  close.onclick = handler_delete_note;

  table_right.appendChild(close);
  table_left.appendChild(edit);
  root_img.appendChild(table_left);
  root_img.appendChild(table_right);
  well.appendChild(root_img);
  well.appendChild(header);
  well.appendChild(content);
  root.appendChild(well);
  the_notes.insertBefore(root, the_notes.firstChild);
  if(created_effect)fade_in(root, 2000);
}

function remove_note (id) {
  fade_out(document.getElementById('note_'+id), 1000);
  setTimeout(function(){
    document.getElementById('note_'+id).remove();
  }, 1000);
}

function update_view_note (note) {
  var root = document.getElementById('note_'+note.id);
  var header = document.getElementById('header_'+note.id);
  var content = document.getElementById('content_'+note.id);
  root.className = get_size_classes()[note.size-1];
  header.innerHTML = note.title;
  content.innerHTML = note.text;
}