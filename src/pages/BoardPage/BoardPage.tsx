import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function BoardPage() {
  const { name } = useParams()

	useEffect(() => {
		if(!name) return
		
	},[name])

  return (
    <div>BoardPage {name}</div>
  )
}
