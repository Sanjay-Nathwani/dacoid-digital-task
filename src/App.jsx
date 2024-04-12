import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./components/Layout"
import TrackGoal from "./pages/TrackGoal"
import GetBurn from "./pages/GetBurn"
import Register from "./pages/Register"
import Login from "./pages/Login"
import GoalsList from "./pages/GoalsList"
import WorkoutTracker from "./pages/WorkoutTracker"
import WorkoutSchedule from "./pages/WorkoutSchedule"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><TrackGoal /></Layout>} />
        <Route path="/get-burn" element={<Layout><GetBurn /></Layout>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/your-goals" element={<GoalsList />} />
        <Route path="/tracker" element={<WorkoutTracker />} />
        <Route path="/schedule" element={<WorkoutSchedule />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
