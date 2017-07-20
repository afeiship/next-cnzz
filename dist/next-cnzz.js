(function () {

  var global = global || window || self || this;

  var nx = global.nx || require('next-js-core2');
  var NxCnzz = nx.declare('nx.Cnzz', {
    methods:{
      init: function(){
        if(!global._czc){
          nx.error('_czc api must be import.');
        }
        this.$track = global._czc;
      },
      push: function(){
        var args = nx.toArray( arguments );
        this.$track.push( args );
        return this.$track;
      },
      event: function(inOptions){
        var options = nx.mix({ value: 0, nodeid:null },inOptions );
        return this.push([
          "_trackEvent",
          options.category,
          options.action,
          options.label,
          options.value,
          options.nodeid
        ]);
      },
      pageView: function(inOptions){
        var options = nx.mix({ referer_url:'' },inOptions );
        return this.push([
          "_trackPageview",
          options.content_url,
          options.referer_url
        ]);
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxCnzz;
  }

}());
