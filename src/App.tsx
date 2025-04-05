
import { useEffect } from "react"
import RoutesController from "./routes"

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[])
  return (
     <RoutesController />
  )
}

export default App