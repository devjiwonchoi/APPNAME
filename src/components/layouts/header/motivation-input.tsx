'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function MotivationInput() {
  return (
    <div className="relative">
      <Input
        className="rounded-[44px] border-none bg-[#F8F8F8] placeholder:text-black"
        type="text"
        placeholder="이제는 더 이상 물러날 곳이 없다"
      />
      <Button
        className="absolute bottom-0 right-0 top-0 mr-2"
        onClick={() => {
          console.log('Motivation Input button clicked')
        }}
        variant="ghost"
        size="icon"
      >
        <Image src="/search.svg" alt="search" width={24} height={24} />
      </Button>
    </div>
  )
}
