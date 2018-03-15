import {client, query} from "carbonql";
import * as carbon from "carbonql";

const c = client.Client.fromFile(<string>process.env.KUBECONFIG);
const podLogs = c.core.v1.Pod
  .list("default")
  // Retrieve logs for all pods, filter for logs with `ERROR:`.
  .flatMap(pod =>
    carbon.core.v1.pod
      .getLogs(c, pod)
      .filter(({logs}) => logs.includes("ERROR:"))
    )
  // Group logs by name, but returns only the `logs` member.
  .groupBy(
    ({pod}) => pod.metadata.name,
    ({logs}) => logs)

// Print all the name of the pod and its logs.
podLogs.subscribe(logs => {
  console.log(logs.key);
  logs.forEach(console.log)
});
