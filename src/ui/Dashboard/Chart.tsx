import { ChangeEvent, FC, useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"


export type Link = {
  _id: string;
  originalUrl: string;
  shortUrl: string;
  qrCode: string;
  user: string;
  visits: number;
  visitsByDate: { date: string; count: number }[];
  createdAt: string;
  __v: number;
}

type Period = '7days' | '1month' | '1year'

interface Props {
  links: Link[]
}

const Chart: FC<Props> = ({ links }) => {

  const processData = (data: any[], period: Period) => {
    const now = new Date()
    const periodDays = period === "7days" ? 7 : period === "1month" ? 30 : 365
    const startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - periodDays + 1)

    const dateFormat: { [key in Period]: Intl.DateTimeFormatOptions } = {
      "7days": { weekday: "short" },
      "1month": { day: "numeric" },
      "1year": { month: "short" },
    }

    const chartData = []
    let currentDate = new Date(startDate)
    for (let i = 0; i < periodDays; i++) {
      const dateString = currentDate.toISOString().split("T")[0]

      const visitsForDate = data.reduce((sum, url) => {
        const visitForDate = url.visitsByDate.find((visit: any) => visit.date.startsWith(dateString))
        return sum + (visitForDate ? visitForDate.count : 0)
      }, 0)

      chartData.push({
        date: currentDate.toLocaleString("es-ES", dateFormat[period]),
        visits: visitsForDate,
      })

      currentDate.setDate(currentDate.getDate() + 1)
    }
    return chartData
  };


  const [period, setPeriod] = useState<Period>('1month')
  const [chartData, setChartData] = useState(processData(links, period))

  useEffect(() => {
    setChartData(processData(links, period))
  }, [period, links])

  const handlePeriodChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPeriod(e.target.value as Period)
  }

  return (
    <div className="p-4 md:p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <h2 className="text-gray-700 text-2xl font-bold">Visitas por período</h2>
        <select
          className="outline-none bg-white p-2 rounded-lg border border-gray-200"
          value={period}
          onChange={handlePeriodChange}>
          <option value="7days">Últimos 7 días</option>
          <option value="1month">Último mes</option>
          <option value="1year">Último año</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date"
            tick={{ fontSize: 12 }}
            interval={'equidistantPreserveStart'}
          />
          <YAxis width={20} allowDecimals={false} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Bar dataKey="visits" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
