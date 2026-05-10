import type { ReactNode } from 'react'

type SectionHeadingProps = {
  title: string
  description?: string
  action?: ReactNode
}

export function SectionHeading({
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0 space-y-1">
        <h2 className="break-words text-lg font-semibold leading-tight text-foreground sm:text-xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      {action ? (
        <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
          {action}
        </div>
      ) : null}
    </div>
  )
}
