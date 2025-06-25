import logo from "../../assets/logo.svg"
function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center text-5xl gap-x-4">
        <img className="flex h-[2em] rounded-2xl" src={logo}/>
        <h1 className="text-[1.1em]"><span className="font-bold">Stephen</span>Leong</h1>   
      </div>
    </div>
  )
}

export default Home