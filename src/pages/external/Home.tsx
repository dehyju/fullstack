import { useEffect, useState } from "react"
import Banner from "../../components/global/banner"
function Home() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 4000); // match animation duration
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col flex-grow h-full justify-center items-center">
      {visible
        ?
        <Banner animation="fade-in-out" size="text-3xl md:text-5xl" />
        :

        <div className="flex flex-col fade-in">
          <h1 className="text-5xl font-bold">Stephen Leong</h1>
          <h2 className="text-3xl font-semibold text-gray-600">Student</h2>
        </div>
      }
    </div>
  )
}

export default Home