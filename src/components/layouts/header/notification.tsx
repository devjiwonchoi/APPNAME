'use client'
import { BellIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'

export function Notification() {
  return (
    <Button variant="outline" size="icon">
      <BellIcon className="h-4 w-4" />
    </Button>
  )
}
