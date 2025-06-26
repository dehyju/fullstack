import { useState } from "react"
type Project = {
  id: number,
  name: string
}

const Portfolio = () => {
  const [portfolio, updatePortfolio] = useState<Project[]>([])
  return (
    <div className="flex flex-col items-center flex-grow fade-in">
      <h1 className="text-3xl font-bold md:text-4xl">My projects:</h1>
      {portfolio.length > 0
        ? portfolio.map(project => (
          <div key={project.id}>
            <h1>{project.name}</h1>
          </div>
        ))
        :
        <div className="flex flex-col items-center justify-center mt-2">
          <h1 className="text-2xl text-gray-600">Projects coming soon...</h1>
        </div>
      }
    </div>
  )
}

export default Portfolio