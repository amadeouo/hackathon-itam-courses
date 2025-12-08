import classes from './ButtonBack.module.css'
import {useNavigate} from "react-router-dom";

export const ButtonBack = () => {
  const navigate = useNavigate()

  return (
    <button
      className={classes.wrapper}
      onClick={() => {navigate(-1)}}
    >
      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.292893 6.65685C-0.0976311 7.04737 -0.0976311 7.68054 0.292893 8.07106L6.65685 14.435C7.04738 14.8255 7.68054 14.8255 8.07107 14.435C8.46159 14.0445 8.46159 13.4113 8.07107 13.0208L2.41421 7.36395L8.07107 1.7071C8.46159 1.31657 8.46159 0.683409 8.07107 0.292885C7.68054 -0.0976395 7.04738 -0.0976395 6.65685 0.292885L0.292893 6.65685ZM20 7.36395V6.36395H1V7.36395V8.36395H20V7.36395Z" fill="#3E3A40"/>
      </svg>
    </button>
  )
}