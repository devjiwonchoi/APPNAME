'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export function BottomNav() {
  const pathname = usePathname()
  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-around border-t-[1px] bg-white px-4 py-5">
      <Link className="flex flex-col items-center gap-1" href="#">
        <Image src="/home.svg" alt="home" width={24} height={24} />
        <span className="text-[10px] font-bold text-[#CECECE]">Home</span>
      </Link>
      <Link className="flex flex-col items-center gap-1" href="#">
        <Image src="/flag.svg" alt="goals" width={24} height={24} />
        <span className="text-[10px] font-bold text-[#CECECE]">Goals</span>
      </Link>
      <Link className="flex flex-col items-center gap-1" href="#">
        <Image src="/profile.svg" alt="profile" width={24} height={24} />
        <span className="text-[10px] font-bold text-[#CECECE]">Profile</span>
      </Link>
    </div>
  )
}
