

export const Frame = ({children}:any) => {

    return(
      <div className="frame bg-white p-3 rounded-md mt-3">
      <div className='bg-yg-lightblue bg-gray-100- p-3 rounded-md h-full'>
        {children}
      </div>
    </div>
    )
  }

  
export const DoubleFrame = ({children}:any) => {

  return(
    <div className="frame bg-white p-3 rounded-md mt-3">
      {children}
  </div>
  )
}
