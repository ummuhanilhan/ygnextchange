import { FloatLabelHook } from "@shared/elements/hooks"


export const TitleFrame = ({children, title}:any) => {

    return(
      <div className="frame w-full">
        <div className='border-0 border-b-[1px] border-yukgetir-blue py-1 mb-2'>
          <h3 className="text-yukgetir-blue text-lg">{title}</h3>
        </div>
        {children}
    </div>
    )
  }


  export const TitleFrameCovered = ({title, name, placeholder, type, control, ...rest}:any) => {
    return(
      <div className="frame w-full">
      <div className='border-0 border-b-[1px] border-yukgetir-blue py-1 mb-2'>
        <h3 className="text-yukgetir-blue text-lg">{title}</h3>
      </div>

        {!type && type=='text' || <FloatLabelHook name={name} type="text" placeholder={placeholder}  control={control} {...rest} />}
    </div>
    )
  }