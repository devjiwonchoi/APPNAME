'use client'
import { BellIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'

export function Notification() {
  return (
    <Button variant="ghost" size="icon">
      <BellIcon className="h-6 w-6" />
    </Button>
  )
}
