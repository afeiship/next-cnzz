# next-cnzz
> Cnzz track api based on next.

## usage:
```js
  var $track = new nx.Cnzz();
  $track.event({
    category: 'category',
    action: 'test',
    label:'test'
  });

  $track.pageView({
    content_url:''
  });

  $track.push(['xx','yy','zz'])
```

## resources:
+ http://open.cnzz.com/a/api/apilist/

