import { Badge } from '@/components/ui/badge'

type ChipListProps = {
  items: string[]
  variant?: 'default' | 'secondary' | 'outline' | 'success' | 'warning' | 'info'
}

export function ChipList({ items, variant = 'secondary' }: ChipListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge key={item} variant={variant}>
          {item}
        </Badge>
      ))}
    </div>
  )
}
