---
tags:
  - governance
  - quota
  - namespace
  - namespaces
---

### List all Namespaces with no hard memory quota specified

Retrieve all Kubernetes [Namespaces][ns]. Filter this down to a set of
namespaces for which there is either (1) no [ResourceQuota][rq] governing
resource use of that Namespace; or (2) a ResourceQuota that does not specify a
hard memory limit.

[ns]: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
[rq]: https://kubernetes.io/docs/concepts/policy/resource-quotas/
