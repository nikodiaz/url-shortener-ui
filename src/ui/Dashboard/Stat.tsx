import { FC } from "react"

interface Props {
  title: string
  stat: number
  color: "green" | "blue" | "red"
}

const Stat: FC<Props> = ({ title, stat, color }) => {

  const COLORS = {
    blue: "text-blue-600",
    green: "text-green-600",
    red: "text-red-600"
  }

  const colorClass = COLORS[color]

  return (
    <div className="p-6 text-xl font-semibold bg-white rounded-lg shadow-md">
      <h2 className="text-gray-700">{title}</h2>
      <p className={`${colorClass} font-bold text-3xl`}>{stat}</p>
    </div>

  )
}

export default Stat
