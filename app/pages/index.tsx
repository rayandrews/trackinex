import { DefaultPage } from 'blitz'

import { serverSideProps } from '@utils/page'
import { getDefaultLayout } from '@utils/layout'
// import logout from "app/auth/mutations/logout"
// import { useCurrentUser } from "app/hooks/useCurrentUser"
// import { Suspense } from "react"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

// const UserInfo = () => {
//   const currentUser = useCurrentUser()
//   const [logoutMutation] = useMutation(logout)

//   if (currentUser) {
//     return (
//       <>
//         <button
//           className="button small"
//           onClick={async () => {
//             await logoutMutation()
//           }}
//         >
//           Logout
//         </button>
//         <div>
//           User id: <code>{currentUser.id}</code>
//           <br />
//           User role: <code>{currentUser.role}</code>
//         </div>
//       </>
//     )
//   } else {
//     return (
//       <>
//         <Link href="/signup">
//           <a className="button small">
//             <strong>Sign Up</strong>
//           </a>
//         </Link>
//         <Link href="/login">
//           <a className="button small">
//             <strong>Login</strong>
//           </a>
//         </Link>
//       </>
//     )
//   }
// }

const Home: DefaultPage = () => {
  return <></>
}

Home.getLayout = getDefaultLayout({
  title: 'Home',
  description: 'Home Page',
})

export default Home

export const getServerSideProps = serverSideProps()
