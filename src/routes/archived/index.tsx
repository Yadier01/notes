import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/archived/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/archived/"!</div>
}
