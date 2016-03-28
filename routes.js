/*
Router.configure({
  layoutTemplate: "body"
})
*/

Router.route('/', {
  name: 'home',
  template: 'home'
  }
);

Router.route('/edit/:_id', {
  name: 'edit',
  template: 'updateForm',
  data: function() {
    // Template.instance().him.set(who);
    // var him = Template.instance().him.get();
    // console.log("This is he in the router: " + him);
    console.log("router : " + this.params._id);
    var who = this.params._id;
    return Data.findOne({"_id":who});
  }
});
/*
Router.route('/delete/:_id', {
  name: 'delete',
  template: 'deleteForm',
  data: function() {
    return Data.findOne({"_id":this.params._id});
  }
});
*/
