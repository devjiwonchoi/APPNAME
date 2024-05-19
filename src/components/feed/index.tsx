import { GoalCard } from '@/components/feed/goal-card'

export type DummyData = {
  id: number
  title: string
  days: number
  startDate: string
  endDate: string
  streak: number
  participants: {
    userId: number
    username: string
    profileImage: string
  }[]
}

const dummyData = [
  {
    id: 1,
    title: '트월킹 연습',
    // TODO: change value name?
    days: 60, // level
    startDate: '2024.05.18',
    endDate: '2024.07.17', // compute when stored
    streak: 17, // compute from server
    participants: [
      {
        userId: 0,
        username: 'devjiwonchoi',
        profileImage: 'https://github.com/devjiwonchoi.png',
      },
      {
        userId: 1,
        username: 'ggkim0614',
        profileImage: 'https://github.com/ggkim0614.png',
      },
    ],
  },
  {
    id: 2,
    title: '책 읽기',
    days: 30,
    startDate: '2024.05.18',
    endDate: '2024.06.17',
    streak: 10,
    participants: [
      {
        userId: 0,
        username: 'devjiwonchoi',
        profileImage: 'https://github.com/devjiwonchoi.png',
      },
      {
        userId: 1,
        username: 'ggkim0614',
        profileImage: 'https://github.com/ggkim0614.png',
      },
    ],
  },
]

export function Feed() {
  const data = dummyData
  return (
    <section className="flex flex-col items-center justify-between">
      {data.map((goal) => (
        <GoalCard key={goal.id} goal={goal} />
      ))}
    </section>
  )
}
