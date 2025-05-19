import { createFileRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export const Route = createFileRoute("/")({
  component: App,
})

function App() {
  return (
    <div>
      <ModeToggle/>
    </div>
  )
}