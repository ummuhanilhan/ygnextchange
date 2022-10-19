import { TitleFrameDropdown } from "@components/frames/IconFrame"
import { TitleFrame } from "@components/frames/TitleFrame"
import { SelectHook } from "@shared/elements/hooks/selectHook";
import { CalendarHook } from "@shared/elements/hooks/calendarHook"
import { definitions } from "@utils/dummy/definitions"


export const Publish = ({control}:any) => {

    return (
        <div>
                <TitleFrame title="Araç Modeli">
                </TitleFrame>

            <TitleFrameDropdown title="Yayına Başlama Tarihi" />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                    <SelectHook 
                        name="publish.start" 
                        control={control} 
                        placeholder="Yükleme Şeklini Seçiniz" 
                        size='small'
                        items={definitions.load}
                        id='_id'
                        label='name'
                    />
                    <CalendarHook 
                        name='publish.start_date'
                        control={control} 
                        size='small'
                    />
            </div>
            <TitleFrameDropdown title="Yayını Bitirme Tarihi" />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                <SelectHook 
                        name="publish.end" 
                        control={control} 
                        placeholder="Yükleme Şeklini Seçiniz" 
                        size='small'
                        items={definitions.load}
                        id='_id'
                        label='name'
                    />
                    <CalendarHook 
                        name=''
                        control={control} 
                        size='small'
                    />
            </div>
        </div>
    )
}