import { FloatLabelHook } from "@shared/elements/hooks"
import { InputHook } from "@shared/elements/hooks/inputHook"
import classNames from "classnames"


export const TitleFrame = ({children, title, className}:any) => {

    return(
      <div className={classNames('frame w-full', className)}>
        <div className='border-0 border-b-[1px] border-yg-blue py-1 mb-2'>
          <h3 className="text-yg-blue text-lg">{title}</h3>
        </div>
        {children}
    </div>
    )
  }


  export const TitleFrameCovered = ({title, name, placeholder, type, control, ...rest}:any) => {
    return(
      <div className="frame w-full">
      <div className='border-0 border-b-[1px] border-yg-blue py-1 mb-2'>
        <h3 className="text-yg-blue text-lg">{title}</h3>
      </div>

        {!type && type=='text' || 
        <InputHook 
          name={name} 
          type="text" 
          placeholder={placeholder} 
          control={control}
          {...rest}
          className=' bg-white'
          size='medium'
        />}
    </div>
    )
  }
