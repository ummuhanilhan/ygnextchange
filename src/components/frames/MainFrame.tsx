import classNames from "classnames"


export const Frame = ({children}:any) => {

    return(
      <div className="frame h-full bg-white p-3 rounded-lg mt-3">
      <div className='bg-yg-lightblue bg-gray-100- p-3 rounded-md h-full'>
        {children}
      </div>
    </div>
    )
  }

  
export const DoubleFrame = ({children, className, id}:any) => {

  return(
    <div id={id} className={classNames('frame bg-white p-3 rounded-md mt-3', className)}>
      {children}
  </div>
  )
}
