---
to: "<%= module ? `app/${module}/pages/${name}.tsx` : `app/pages/${name}.tsx` %>"
---

import { DefaultPage } from 'blitz'

import { BaseLayout } from '@layouts/base-layout'

import { serverSideProps } from '@utils/page'

export interface <%= Name %>Props {}

const <%= Name %>: DefaultPage<<%= Name %>Props> = () => {
  return <></>
}

<%= Name %>.getLayout = (page, { cookies }) => (
  <BaseLayout title="<%= Name %>" description="<%= Name %> Page" cookies={cookies}>
    {page}
  </BaseLayout>
)

export default <%= Name %>

export const getServerSideProps = serverSideProps()
