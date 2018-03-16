---
tags:
  - governance
---

### Distinct versions of `mysql` container in cluster

Search all running Kubernetes [Pods][pod] for containers that have the string
`"mysql"` in their image name. Report only distinct image names.

[pod]: https://kubernetes.io/docs/concepts/workloads/pods/pod/
