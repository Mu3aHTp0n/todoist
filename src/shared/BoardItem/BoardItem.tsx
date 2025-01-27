import { Link } from "react-router-dom";
import Button from "../Button/Button";

interface Props {
    title: string,
    link: string,
}

export default function BoardItem({title, link}: Props) {
  return (
    <Link to={`/boards/${link}`}>
        <Button text={title} handleClick={() => null}/>
    </Link>        
  )
}
