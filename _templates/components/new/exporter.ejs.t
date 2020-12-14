---
to: "<%= module ? `app/${module}/components/${name}/index.ts` : `app/components/${name}/index.ts` %>"
---

export * from './<%= name %>'
