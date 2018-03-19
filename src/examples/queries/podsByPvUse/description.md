---
tags:
  - governance
  - persistent
  - volume
  - volumes
---

### List Pods grouped by PersistentVolumes they use

Obtain all `"Bound"` [PersistentVolumes][pv] (PVs). Then, obtain all [Pods][pod]
that use those PVs. Finally, print a small report listing the PV and all Pods
that reference it.

[pv]: https://kubernetes.io/docs/concepts/storage/persistent-volumes/
[pod]: https://kubernetes.io/docs/concepts/workloads/pods/pod/
