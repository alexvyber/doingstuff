import { Section } from "./section"

export function ToolsSection({ children, ...props }: React.ComponentProps<typeof Section>) {
  return (
    <Section {...props}>
      <ul className="flex flex-col gap-10">{children}</ul>
    </Section>
  )
}
