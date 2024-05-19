import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Participants } from './participants'

export function GoalCard() {
  return (
    <Card className="w-full rounded-[20px]">
      <CardHeader className="px-5">
        <span className="text-[#919191]">완료예정일</span>
        <span className="font-bold">2024.05.18</span>
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
        <CardTitle>트월킹 연습</CardTitle>
        <div className="flex">
          <span className="font-bold">17일째</span>
          <span className="text-[15px] font-bold text-[#8A8A8A]">/60일</span>
        </div>
        <Participants />
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
