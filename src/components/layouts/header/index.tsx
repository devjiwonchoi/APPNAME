import { MotivationInput } from './motivation-input'
import { Notification } from './notification'

export function Header() {
  return (
    <header className="pt-[71px]">
      <div className="mb-2 flex items-center justify-between px-2 py-[2.5px]">
        <h1 className="text-3xl font-extrabold">홈</h1>
        <Notification />
      </div>
      <MotivationInput />
    </header>
  )
}
