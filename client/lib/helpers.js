Template.peopleTable.helpers({
  people: function() {
    return Data.find();
  }
});

Template.updateForm.helpers({
  person: function(e) { 
    // var him = Template.instance().him.get();
    // console.log("This is he in the helper: " + him);
    // var who = Data.findOne({"_id":"dmhBnfvN89R6xb4eW"});
    console.log("helper " + e);
    var who = Data.findOne({"_id":e});
    if (who) {
      // Template.instance().formType.set('update');
      // var formType = Template.instance().formType.get();
      // console.log(formType);
      // return Data.findOne({"_id":who});
      return who;
    }
    // return Data.findOne({"_id":"dmhBnfvN89R6xb4eW"});
    return null;
  },

/*
  formType: function() {
    var formType = Template.instance().formType.get();
    return formType;
  }
*/
});

/*
Template.updateForm.onCreated( function() {
  this.formType = new ReactiveVar('insert');
  console.log(this.formType);
  this.him = new ReactiveVar('');
  console.log(this.him);
})
*/
