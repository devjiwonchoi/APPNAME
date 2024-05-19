import type { DummyData } from '.'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Participants } from './participants'

export function GoalCard({ goal }: { goal: DummyData }) {
  const { title, streak, days, participants, endDate } = goal
  return (
    <Card className="mb-3 w-full rounded-[20px]">
      <CardHeader className="px-5">
        <span className="text-[#919191]">완료예정일</span>
        <span className="font-bold">{endDate}</span>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center space-y-2">
        {/* TODO: another component */}
        <div className="mb-4">
          <Image
            src="/paper-boat.png"
            alt="paper boat"
            width={165}
            height={165}
          />
        </div>
        <CardTitle>{title}</CardTitle>
        <div className="flex">
          <span className="font-bold">{streak}일째</span>
          <span className="text-[15px] font-bold text-[#8A8A8A]">
            /{days}일
          </span>
        </div>
        <Participants participants={participants} />
      </CardContent>
      <CardFooter className="flex justify-between px-5">
        <Button
          className="w-full rounded-[50px] bg-[#015BFA]"
          variant="default"
        >
          <span className="text-md font-bold">출석하기</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
