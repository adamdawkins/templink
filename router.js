Router.map(function() {
  this.route('hello', {path: '/'});
  this.route('no-more-link', {path: '/no/more-link'});
  this.route('tempalink', {
    path: '/:_id',
    onBeforeAction: function (pause) {
      var tempalink_id = this.params._id;
      Tempalink.update(tempalink_id,
        {
          $inc: {views: 1}
        }
      , function () {
        tempalink = Tempalink.findOne(tempalink_id);
        if(tempalink.views > 1) {
          Tempalink.remove(tempalink_id);
          Router.go('/no/more-link');
        }
      });
    },
    data: function () {
     var tempalink = Tempalink.findOne(this.params._id);
      return tempalink;
    }
  });
});
