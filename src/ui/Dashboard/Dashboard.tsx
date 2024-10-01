import { useEffect, useState } from "react"
import { totalLinksByUser, totalVisitsByUser } from "../../lib/requests"
import Chart from "./Chart"
import Stat from "./Stat"

const Dashboard = () => {
  const [totalVisits, setTotalVisits] = useState<number>(0)
  const [links, setLinks] = useState([])
  const [loading, setLoading] = useState<boolean>(true)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const visitRes = await totalVisitsByUser()
        setTotalVisits(visitRes.totalVisits)

        const linksRes = await totalLinksByUser()
        setLinks(linksRes.links)
      } catch (error) {
        console.error("Error fetching data", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <section className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Stat title="Visitas totales" stat={totalVisits} color="blue" />
        <Stat title="Enlaces guardados" stat={links ? links.length : 0} color="green" />
      </div>
      {!loading && links.length > 0 && (
        <Chart links={links} />
      )}
    </section>
  )
}

export default Dashboard
