import { XCircle } from "@shared/icons"


export const FloatLabel = ({
    name,
    title,
    placeholder    
}:any) => {

    const handle = () => {
        
    }

    return (
        <div className="floatlabel">
            <div className="field">
                <input
                    type={name=='password'?'password':'text'}
                    name={name}
                    id={name}
                    placeholder={placeholder} 
                     
                />
                <label htmlFor={name}>{title}</label>
            </div>
            <XCircle className="icon" onClick={handle} />
        </div>
    )
}

 
