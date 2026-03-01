import Product from "./Day-1/Props/product.jsx"
import ToggleDetails from "./Day-1/Toggle/ToggleDetails.jsx"
import UserDashboard from "./Day-1/UserDashboard/User.jsx"
import UserList from "./Day-2/Api-fetching.jsx"
import Counter from "./Day-2/Counter.jsx"
import Livesearch from "./Day-2/Livesearch.jsx"

const App = () => {
  return (
    <div>
      {/* <div>
        <h1>Day-1</h1>
        <h2>Task-1</h2>
      <Product/>
        <h2>Task-2</h2>
      <ToggleDetails/>
        <h2>task-3</h2>
      <UserDashboard/>
      </div> */}
      <div>
        <h1 className="text-3xl font-extrabold text-center mb-8">Day-2</h1>
        {/* <Counter/>
        <UserList/> */}
        <Livesearch/> 
      </div>
    </div>
  )
}
export default App