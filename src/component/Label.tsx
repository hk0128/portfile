import './Label.css'

interface LabelInterface {
  name: string
}

function Label(props: LabelInterface) {
    return (
      <span className={`labelStyle ${props.name}`}>{props.name}</span>
    )
  }
  
export default Label
