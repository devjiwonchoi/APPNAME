import type { DummyData } from '.'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function Participants({
  participants,
}: {
  participants: DummyData['participants']
}) {
  return (
    <div className="flex">
      {participants.map((participant) => (
        <Avatar key={participant.userId}>
          <AvatarImage src={participant.profileImage} />
          <AvatarFallback>{participant.username}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  )
}
