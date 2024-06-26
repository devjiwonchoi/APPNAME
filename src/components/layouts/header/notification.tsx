'use client'
import Image from 'next/image'
// import { BellIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'

export function Notification() {
  return (
    <Button
      onClick={() => {
        console.log('Notification button clicked')
      }}
      variant="ghost"
      size="icon"
    >
      {/* <BellIcon className="h-6 w-6" /> */}
      <Image
        src="/notification.svg"
        alt="notification"
        width={24}
        height={24}
      />
    </Button>
  )
}
