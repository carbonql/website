## Aggregate cluster-wide error and warning Events into a report

Search for all Kubernetes [Events][event] that are classified as `"Warning"` or
`"Error"`, and report them grouped by the type of Kubernetes object that caused
them.

In this example, there are warnings being emitted from both [Nodes][node] and
from [Pods][pods], so we group them together by their place of origin.

[event]: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.9/#event-v1beta1-events
[node]: https://kubernetes.io/docs/concepts/architecture/nodes/
[pod]: https://kubernetes.io/docs/concepts/workloads/pods/pod/
