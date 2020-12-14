export type RouteEntry = {
  href: string
  label: string
  children?: RouteEntry[]
}
export type Routes = Array<RouteEntry>
