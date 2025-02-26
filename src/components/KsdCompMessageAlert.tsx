import React from 'react'
import"../_dist/KsdCompMessageAlert.css"
import KsdCompConfirmIcon from './icons/KsdCompConfirmIcon';
import KsdCompCloseIcon from './icons/KsdCompCloseIcon';

interface MessageProps extends React.HTMLProps<HTMLParagraphElement> {
    id?: string;
    variant?:"success" | "fail" | "warning"
  }

const KsdCompMessageAlert = ({...props}: MessageProps) => {

  return (
    <p {...props} className={`message-container ${props.className?props.className:""}  message-${props.variant ? props.variant : "success"}
  } `} >
        {props.variant==="success"?<KsdCompConfirmIcon className='icon-message'/>:<KsdCompCloseIcon className='icon-message' />} {props.children}
    </p>
  )
}

export default KsdCompMessageAlert