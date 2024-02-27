import React from 'react'

const Modal = ({Active, setActive, children}) => {
  return (
    <div onClick={() => setActive(false)}  className={Active ? "modal active" : "modal"}>
        <div onClick={e => e.stopPropagation()} className={Active ? "modal_content active" : "modal_content"}>
            {children}
        </div>
    </div>
  )
}

export default Modal