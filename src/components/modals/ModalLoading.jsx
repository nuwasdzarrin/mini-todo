import React from "react";
import { ThreeDots } from  'react-loader-spinner'

const ModalLoading = () => {
  return (
      <div className={'todModal'}>
        <div className={'wrapper'}>
          <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#fff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{zIndex: 10}}
              wrapperClassName=""
              visible={true}
          />
        </div>
        <div className={'layerDark'}/>
      </div>

  )
}

export default ModalLoading