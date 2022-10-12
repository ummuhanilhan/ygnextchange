import { SelectHook } from "@shared/elements/hooks"
import { CalendarHook } from "@shared/elements/hooks/calendarHook"


export const Publish = ({control}:any) => {

    return (
        <div>
            <h3>Yayına Başlama Tarihi</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div>
                    <SelectHook 
                        name=''
                        control={control} 
                    />
                </div>
                <div>
                    <CalendarHook 
                        name=''
                        control={control} 
                    />
                </div>
            </div>
            <h3>Yayını Bitirme Tarihi</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div>
                    <SelectHook 
                        name=''
                        control={control} 
                    />
                </div>
                <div>
                    <CalendarHook 
                        name=''
                        control={control} 
                    />
                </div>
            </div>
        </div>
    )
}