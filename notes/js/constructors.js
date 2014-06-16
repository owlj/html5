function Notes () {
  this.items  = new Array();
  this.find_by_id = function(id, return_index){
    if(return_index == null)return_index = false;
    for(var i = 0; i < this.items.length; i++){
      if(this.items[i].id == id){
        if(return_index)return i;
        return this.items[i];
      }
    }
  };
  this.drop_by_id = function(id){
    var index = this.find_by_id(id, true);
    this.items.splice(index, 1);
  };
}

function Note () {
  var id = null;
  if(arguments[3] == null)id = (new Date()).getTime();
  else id = arguments[3];
  var title   = arguments[0];
  var text    = arguments[1];
  var size    = arguments[2];
  this.id     = get_value(id);
  this.title  = get_value(title);
  this.text   = get_value(text);
  this.size   = get_value(size);
}