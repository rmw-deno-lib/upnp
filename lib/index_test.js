// Generated by CoffeeScript 2.5.1
import Upnp from './index.js';

(async() => {
  var i, ref, results, upnp;
  upnp = (await Upnp());
  if (!upnp) {
    console.log("UPNP not available");
    return;
  }
  // mapPort(protocol,internal,external,duration=0,description="") -> local ip
  console.log((await upnp.mapPort("UDP", 8080, 8080, 0, "upnp test")));
  ref = upnp.map();
  results = [];
  for await (i of ref) {
    results.push(console.log(i));
  }
  return results;
})();

//# sourceMappingURL=index_test.js.map
