<!-- 本文件由 ./readme.make.md 自动生成，请不要直接修改此文件 -->

# upnp

upnp port mapping for deno

## import or export

```
import Upnp from 'https://deno.land/x/rmw_upnp@0.0.8/lib/index.js'
```

or export in your `deps.js`

```
export {default as Upnp} from 'https://deno.land/x/rmw_upnp@0.0.8/lib/index.js'
```

## use

see [src/index_test.coffee](./src/index_test.coffee) or [lib/index_test.js](./lib/index_test.js)  for example

coffeescript version

```coffee
import Upnp from './index.js'

do =>
  upnp = await Upnp()
  if not upnp
    console.log "UPNP not available"
    return

  # mapPort(protocol,internal,external,duration=0,description="")
  await upnp.mapPort(
    "UDP",8080,8080,0,"upnp test"
  )
  console.log await upnp.map()

```


javascript version

```javascript
// Generated by CoffeeScript 2.5.1
import Upnp from './index.js';

(async() => {
  var upnp;
  upnp = (await Upnp());
  if (!upnp) {
    console.log("UPNP not available");
    return;
  }
  // mapPort(protocol,internal,external,duration=0,description="")
  await upnp.mapPort("UDP", 8080, 8080, 0, "upnp test");
  return console.log((await upnp.map()));
})();

//# sourceMappingURL=index_test.js.map

```

output like below

```javascript
[
  {
    NewPortMappingDescription: "upnp test",
    NewProtocol: "UDP",
    NewInternalClient: "172.16.0.15",
    NewRemoteHost: "",
    NewInternalPort: 8080,
    NewExternalPort: 8080,
    NewEnabled: 1,
    NewLeaseDuration: 0
  }
]
```
