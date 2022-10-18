import { TitleFrameDropdown } from "@components/frames/IconFrame"
import { SelectHook } from "@shared/elements/hooks"
import { CalendarHook } from "@shared/elements/hooks/calendarHook"


export const Publish = ({control}:any) => {

    return (
        <div>
            <TitleFrameDropdown title="Yayına Başlama Tarihi" />
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div>
              
                </div>
                <div>
                    <CalendarHook 
                        name=''
                        control={control} 
                        size='small'
                    />
                </div>
            </div>
            <TitleFrameDropdown title="Yayını Bitirme Tarihi" />
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div>
              
                </div>
                <div>
                    <CalendarHook 
                        name=''
                        control={control} 
                        size='small'
                    />
                </div>
            </div>
        </div>
    )
}