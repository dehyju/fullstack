import logo from "../../assets/logo.svg"
function Home() {
  return (
    <div className="flex flex-col items-center">
      <img className="flex rounded-3xl" src={logo}/>
    </div>
  )
}

export default Home