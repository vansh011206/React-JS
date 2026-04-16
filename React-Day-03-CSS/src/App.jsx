import Button from "./Components/Button/Button"
import Navbar from "./Components/Navbar/Navbar"
import Card from "./Components/Card/Card"

const App = () => {
  return (
    <div>
      <Navbar />
      <Button />
      
      <Card
        logo="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_logo.svg"
        company="Microsoft"
        postedAt="6 days ago"
        title="Interaction Designer"
        tags={["Full-Time", "Mid Level"]}
        salary="$110/hr"
        location="Noida, India"
      />
    </div>
  )
}

export default App


