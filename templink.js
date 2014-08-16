Tempalink = new Meteor.Collection('tempalink');

if (Meteor.isClient) {

  Template.hello.events({
    'submit form': function (event, template) {
      event.preventDefault();  
      var text = $('textarea').val();
      tempalink_id = Tempalink.insert({
        text: text,
        views: 0
      });
      $('form').append('<input type="text" value="http://localhost:3000/' + tempalink_id + '"/>');
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
