

export const Frame = ({children}:any) => {

    return(
      <div className="frame bg-white p-3 rounded-md ">
      <div className='bg-yukgetir-lightblue bg-gray-100- p-3 rounded-md h-full'>
        {children}
      </div>
    </div>
    )
  }