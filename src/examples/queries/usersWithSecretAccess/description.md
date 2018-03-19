---
tags:
  - governance
  - rbac
---

### Find users and ServiceAccounts with access to Secrets

Inspect every Kubernetes RBAC [Role][role] for rules that apply to
[Secrets][secret]. Using this, find every RBAC [RoleBinding][rolebinding] that
references each of these ruels, and list users and [ServiceAccounts][sa] that
they bind to.

> NOTE: This query does not query for [ClusterRoles][clusterroles], which means
> that cluster-level roles granting access to secrets are not taken into account
> in this query.

[role]: https://kubernetes.io/docs/admin/authorization/rbac/#role-and-clusterrole
[rolebinding]: https://kubernetes.io/docs/admin/authorization/rbac/#rolebinding-and-clusterrolebinding
[secret]: https://kubernetes.io/docs/concepts/configuration/secret/
[clusterrole]: https://kubernetes.io/docs/admin/authorization/rbac/#role-and-clusterrole
[sa]: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
