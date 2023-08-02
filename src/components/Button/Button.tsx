
interface ButtonProps {
  textButton: string,
  actionOnClick: () => void
}

const Button = ({textButton, actionOnClick}: ButtonProps): React.ReactElement => {
  return(
    <button className="button" onClick={actionOnClick}>{textButton}</button>
  )
} 

export default Button;
