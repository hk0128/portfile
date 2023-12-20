import './Label.css'

function Label(props:any) {
    return (
      <span className={`labelStyle ${props.name}`}>{props.name}</span>
    )
  }
  
export default Label
