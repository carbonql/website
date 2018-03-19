---
tags:
  - governance
  - service
  - services
  - load
  - balancer
---

### Find Services publicly exposed to the Internet

Kubernetes [Services][service] can expose a [Pod][pod] to Internet traffic by
setting the `.spec.type` to `"LoadBalancer"` (see documentation for
[ServiceSpec][svcSpec]). Other Service types (such as `"ClusterIP"`) are
accessible only from inside the cluster.

This query will find all Services whose type is `"LoadBalancer"`, so they can be
audited for access and cost (since a service with `.spec.type` set to
`"LoadBalancer"` will typically cause the underlying cloud provider to boot up a
dedicated load balancer).

[service]: https://kubernetes.io/docs/concepts/services-networking/service/
[pod]: https://kubernetes.io/docs/concepts/workloads/pods/pod/
[svcSpec]: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.9/#servicespec-v1-core
