import { useEffect, useState } from "react"
import Banner from "../../components/global/banner"
function Home() {
  const [visible, setVisible] = useState(() => {
    // Show animation only if it hasn't been shown in this session
    return !sessionStorage.getItem("bannerShown");
  });

  useEffect(() => {
    if (visible) {
      const timeout = setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem("bannerShown", "true"); // Store that it's been shown
      }, 4000); // match animation duration

      return () => clearTimeout(timeout);
    }
  }, [visible]);

  return (
    <div className={`flex flex-col flex-grow h-full ${visible ? "justify-center" : ""} items-center`}>
      {visible
        ?
        <Banner animation="fade-in-out" size="text-3xl md:text-5xl" />
        :

        <div className="flex flex-col w-full items-center fade-in">
          <h1 className="text-5xl font-bold">Stephen Leong</h1>
          <h2 className="text-3xl font-semibold text-gray-600">Aspiring SWE</h2>
          <div className="flex flex-col mt-3 max-w-3xl gap-y-2">
            <h3 className="text-xl font-medium">About me</h3>
            <p>
              Currently the DX Assistant at Loughborough Students' Union studying computer science at Loughborough University. 
              Collaborated in teams in modules and at the SU with drive and encouragement. 
            </p>
            <h3 className="text-xl font-medium">Impact at the LSU</h3>
            <p>
              I help set up the LSU's Sidekick service using Directus, Docker, Redis and Traefik on our cloud servers.
              This allowed for us to create mailing list using flows and I set up its automations for the freshers' marketing strategy
            </p>
          </div>
        </div>
      }
    </div>
  )
}

export default Home