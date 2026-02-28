import Product from "./Day-1/Props/product.jsx"
import ToggleDetails from "./Day-1/Toggle/ToggleDetails.jsx"
import UserDashboard from "./Day-1/UserDashboard/User.jsx"

const App = () => {
  return (
    <div>
      <div>
        <h2>Task-1</h2>
      <Product/>
      </div>

      <div>
        <h2>Task-2</h2>
      <ToggleDetails/>
      </div>
      <div>
        <h2>task-3</h2>
      <UserDashboard/>
      </div>
    </div>
  )
}
export default App    