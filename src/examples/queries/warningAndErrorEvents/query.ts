import {client, query} from "carbonql";
import * as carbon from "carbonql";

const c = client.Client.fromFile(<string>process.env.KUBECONFIG);
const warningsAndErrors = c.core.v1.Event
  .list()
  // Get warning and error events, group by `kind` that caused them.
  .filter(e => e.type == "Warning" || e.type == "Error")
  .groupBy(e => e.involvedObject.kind);

// Print events.
warningsAndErrors.forEach(events => {
  console.log(`kind: ${events.key}`);
  events.forEach(e =>
    console.log(`  ${e.type}  (x${e.count})  ${e.involvedObject.name}\n  \t   Message: ${e.message}`));
});
