---
tags:
  - governance
  - persistent
  - volume
  - volumes
---

### List Pods and their ServiceAccount (possibly a unique user) by Secrets they use

Obtain all [Secrets][secret]. For each of these Secrets, obtain all [Pods][pod]
that use them.

Here we print (1) the name of the Secret, (2) the list of Pods that use it, and
(3) the [ServiceAccount][sa] that the Pod runs as (oftentimes this is allocated
to a single user).

[secret]: https://kubernetes.io/docs/concepts/configuration/secret/
[pv]: https://kubernetes.io/docs/concepts/storage/persistent-volumes/
[pod]: https://kubernetes.io/docs/concepts/workloads/pods/pod/
