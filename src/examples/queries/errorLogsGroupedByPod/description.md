---
tags:
  - ops
  - logs
  - error
  - errors
---

### Find all Pod logs containing `"ERROR:"`

Retrieve all [Pods][pod] in the `"default"` namespace, obtain their logs, and
filter down to only the Pods whose logs contain the string `"Error:"`. Return
the logs grouped by Pod name.

[pod]: https://kubernetes.io/docs/concepts/workloads/pods/pod/
