import {Client} from "carbonql";

const c = Client.fromFile(<string>process.env.KUBECONFIG);
const loadBalancers = c.core.v1.Service
  .list()
  // Type services with `.spec.type` set to `"LoadBalancer"` are exposed to the
  // Internet publicly.
  .filter(svc => svc.spec.type == "LoadBalancer");

// Print.
loadBalancers.forEach(
  svc => console.log(`${svc.metadata.namespace}/${svc.metadata.name}`));
