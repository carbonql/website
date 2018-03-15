## Diff last two rollouts of an application

Search for a [Deployment][deployment] named `"nginx"`, and obtain the last 2
revisions in its rollout history. Then use the `jsondiffpatch` library to diff
these two revisions.

> NOTE: a history of rollouts is not retained by default, so you'll need to
> create the deployment with [`.spec.revisionHistoryLimit`](link to docs) set to
> a number larger than 2.

[deployment]: https://kubernetes.io/docs/concepts/workloads/controllers/deployment/
