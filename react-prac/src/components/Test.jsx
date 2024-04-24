import { useParams } from "react-router-dom"

const Test = () => {
  const params = useParams();

  return (
    <div>This is dynamic route - {params.id}</div>
  )
}

export default Test