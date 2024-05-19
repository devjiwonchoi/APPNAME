import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function Participants() {
  return (
    <div className="flex">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/devjiwonchoi.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}
