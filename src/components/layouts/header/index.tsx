import { Notification } from './notification'

export function Header() {
  return (
    <header className="flex items-center justify-between pt-[71px]">
      <h1 className="text-3xl font-extrabold">홈</h1>
      <Notification />
    </header>
  )
}
