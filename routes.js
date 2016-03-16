/*
Router.configure({
  layoutTemplate: "body"
})
*/

Router.route(
  '/', {template: 'home'}
);

Router.route('/edit/:id', {
  name: "edit",
  template: "home",
  data: function() {
    console.log(this.params.id);
    return Data.findOne({"_id":this.params.id});
  }
});
