Template.peopleTable.helpers({
  people: function() {
    return Data.find();
  }
});

/*
Template.peopleForm.helpers({
  person: function() {
    return Data.findOne({"_id":"dmhBnfvN89R6xb4eW"})
  }
})
*/
