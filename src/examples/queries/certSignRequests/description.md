---
tags:
  - governance
  - certificate
  - certificates
  - certificatesigningrequests
  - security
---

### Audit all Certificates, including status, user, and requested usages

Retrieve all [CertificateSigningRequests][csr] in all namespaces. Group them by
status (_i.e._, `"Pending"`, `"Approved"` or `"Denied"`), and then for each,
report (1) the status of the request, (2) group information about the requesting
user, and (3) the requested usages for the certificate.

[csr]: https://kubernetes.io/docs/tasks/tls/managing-tls-in-a-cluster/#step-1-create-a-certificate-signing-request
