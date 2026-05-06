import * as React from 'react'

import { cn } from '@/lib/utils'

const Avatar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex size-10 shrink-0 items-center justify-center rounded-md bg-secondary text-sm font-semibold text-secondary-foreground',
      className,
    )}
    {...props}
  />
))
Avatar.displayName = 'Avatar'

export { Avatar }
