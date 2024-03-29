import { Calendar, Cash, CircleHalf, FilePlus, FileText, PinMap, Truck } from "@shared/icons"
import useDimensions from "@utils/useDimensions"
import React, { useEffect, useState } from "react";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import { useForm, SubmitHandler } from "react-hook-form";
import { View } from "../view";
import classNames from "classnames";
import { DoubleFrame } from "@components/frames/MainFrame";
import { Search } from "@shared/elements/searches";
import Turkiye from '@utils/dummy/turkiye.json'
import { definitions } from "@utils/dummy/definitions";
import { TagHook } from "@shared/elements/hooks/tagHook";
import {useSelector} from "react-redux";
import {useAppDispatch} from "stores/store";
import {filters, selectCargo} from "stores/slices/cargoSlice";
import { LoadingState } from "stores/types";
import { useScrollYPosition } from "@utils/hooks/usePosition";
import { FloatLabelHook, SelectHook } from "@shared/elements/hooks";
import { IconFrame, IconDropdown } from "@components/frames/IconFrame"
import { joiResolver } from "@hookform/resolvers/joi";
import { initial, tagItems } from "@utils/mock";
import { Tag } from "@shared/elements/tags";
import { Select } from "@shared/elements/selects";
import { yupResolver } from "@hookform/resolvers/yup";
import Outside from "@utils/useoutside";
import { FaSearch } from "react-icons/fa"
import { useFilter } from "stores/features/filter";
import FormLayout from "@layouts/FormLayout";
import { fetcher } from "@utils/helper";
import useSWR from "swr";
import { RentRadioHook } from "@shared/elements/hooks";
import { CalendarHook } from "@shared/elements/hooks/calendarHook";
import moment from "moment";
export type FilterValues = {
    name: string,
};

const initialValues = {
    name:'test',
}

export const CargoFilter = () => {
    const [ref, props]:any = useDimensions();
    const [param, setParam] = useState<any>({})
    const dispatch = useAppDispatch()
    const { cargoes, error, loading }:any = useSelector(selectCargo)
    const [selected,setSelected] = useState<any>([]);
    useEffect(()=>{
        dispatch(filters(param))
    },[])

    const content = (
        <DoubleFrame  id="cargoes" className="bottomize" >
            <Filter selected={selected} setSelected={setSelected} {...props} />
            <View 
                type='cargoes'
                forwardRef={ref}
                param={param}
                data={cargoes} 
                loading={loading==LoadingState.LOADING}
                empty={cargoes?.length<=0}
                error={error}
                selected={selected}
                setSelected={setSelected}
            />
        </DoubleFrame>
    )
    return content;
}

const Filter = ({x, selected,setSelected,save}:any) => {
    const y = useScrollYPosition();
    const form = useForm<any>({});
    const { register, control, handleSubmit, watch, setValue, formState: { errors, isDirty, dirtyFields } } = form;
    const dispatch = useAppDispatch()   

    const onSubmit: SubmitHandler<any> = data => {
            selected = [];
                const options:any = {}
                options.rent = {};
                let index = 0;
                let title = "";
                if(data.rent.type) {index++; selected.push({id:index,title:"Kiralama Tipi:" + data.rent.type}); options.rent.type = data.rent.type}
                if(data.rent.types.length > 0) {
                    index++;
                    data.rent.types.map((item:any,index:any)=>{
                        if(index===0) title = "Araç Tipi:";
                        title += item + "-";
                    })
                    selected.push({id:index,title:title})
                    options.rent.vehicle = data.rent.types
                }
                if(data.rent.features.length > 0) {
                    index++;
                    data.rent.features.map((item:any,index:any)=>{
                        if(index===0) title = "Araç Özellikleri:";
                        title += item + "-";
                    })
                    selected.push({id:index,title:title})
                    options.rent.features = data.rent.features
                }
                if(data.rent.options.length > 0) {
                    index++;
                    data.rent.options.map((item:any,index:any)=>{
                        if(index===0) title = "Donanım Özellikleri:";
                        title += item + "-";
                    })
                    selected.push({id:index,title:title})
                    options.rent.options = data.rent.options
                }
                if(data.load) {index++;selected.push({id:index,title:"Yükleme Yeri:" + data.load}); options.load = data.load}
                if(data.unload) {index++;selected.push({id:index,title:"Boşaltma Noktası:" + data.unload}); options.unload = data.unload}
                let date:String = "";
                if(data.date) {
                    index++;
                    date = moment(data.date[0]).format('DD.MM.YYYY');
                    if(!!data.date[1]) {
                        date = moment(data.date[0]).format('DD.MM.YYYY') + "-" + moment(data.date[1]).format('DD.MM.YYYY');
                    }
                    selected.push({id:index,title:"Yükleme Tarihi:" + date}); options.date = data.date
                }
                setSelected(selected)
                dispatch(filters(options))   
    };
    
    const onError = (errors:any) => {}
    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div 
                style={{
                    // @ts-ignore
                    left: x ? parseInt(x-300) : 0 // 245
                }}
                className={classNames(
                {'lg:fixed top-2 bottom-2': y>88},
                'filter z-30 invisible lg:visible',
                'top-4 left-0-md w-[18em] transition h-0'
            )} >
                    <div 
                    className={classNames(
                        y>88 ? 'screenize' :'bottomize',
                        'flex flex-col justify-between', 
                        'bg-gray-50 rounded-lg p-3'
                    )}>
                    <SimpleBar style={{ maxHeight: '80vh',  }} className='pb-1'>
                            <Search control={control} placeholder='İlan ara...' />
                            <h3 className='text-blue-600 text-base mt-3 font-medium '>Detaylı Arama</h3>
                            <div className='line h-[1px] bg-gray-200 w-full my-2 mb-3'></div>
                            <Location control={control} />
                            <Dates control={control} />
                            <Hiring control={control} />
                            <VehicleType control={control} />
                            <VehicleFeatures control={control} />
                            <VehicleOptions control={control} />
                        </SimpleBar>
                        <Footer />
                    </div>            
            </div>
        </form>
    )
}

export const Location = ({control}:any) => {
    const [status, setStatus] = React.useState(true);
  const [value, setValue] = React.useState('')

    return (
        <React.Fragment>
            <IconDropdown 
            status={status}
            setStatus={setStatus} 
            icon={<PinMap className="fill-yg-blue" width={19} />} title="Konum" />

            <div className={classNames({hidden:!status})}>
               <SelectHook
                    name="load" 
                    control={control} 
                    placeholder='Yükleme yeri'
                    size='small'
                    items={Turkiye}
                    id='value'
                    label='value'
                    className='mb-1 '
                    removable
                />

              
            <SelectHook
                    name="unload" 
                    control={control} 
                    placeholder='Boşaltma yeri'
                    size='small'
                    items={Turkiye}
                    id='value'
                    label='value'
                    className='my-1 mt-3'
                    removable

                />

                {/** 
                 <FloatLabelHook name="load" size='small' height='55px'  type="text" placeholder="Yükleme yeri" className='mb-2' control={control} />
                 <FloatLabelHook name="unload" size='small' height='55px'  type="text" placeholder="Boşaltma yeri" className='' control={control} />

                 <MultiSelectHook name="load" control={control} placeholder="Yükleme yeri"  />                 
                   <MultiSelectHook name="unload" control={control} placeholder="Boşaltma yeri"  />        
                 */}         
            </div>
        </React.Fragment>
    )
}

export const Dates = ({control}:any) => {
    const [status, setStatus] = React.useState(false);
    return (
        <React.Fragment>
            <IconDropdown 
             status={status}
             setStatus={setStatus} 
            icon={<Calendar className="fill-yg-blue" width={19} />} title="Tarih" />
            <div className={classNames({hidden:!status})}>
                <CalendarHook 
                            name='date' 
                            type="text" 
                            maxDate={new Date()} 
                            placeholder='Hangi aralıkta girmek istediğinizi seçiniz' 
                            control={control}
                            className=' bg-white'
                            size='medium'
                            selectionMode='range'
                        />
            </div>
        </React.Fragment>
    )
}

export const Hiring = ({control}:any) => {
    const [status, setStatus] = React.useState(false);
    return (
        <React.Fragment>
            <IconDropdown 
             status={status}
             setStatus={setStatus} 
            icon={<CircleHalf className="fill-yg-blue" width={15} />} title="Kiralama Tipi" />
            <div className={classNames({hidden:!status})}>
                <RentRadioHook 
                            name='rent.type'
                            control={control}
                        />
            </div>
        </React.Fragment>
    )
}

export const VehicleType = ({control}:any) => {
    const [status, setStatus] = React.useState(false);
    const [value, setValue] = React.useState('');
    return (
        <React.Fragment>
            <IconDropdown 
             status={status}
             setStatus={setStatus} 
            icon={<Truck className="fill-yg-blue" width={19} />} title="Araç Tipi" />
            <div className={classNames({hidden:!status})}>
            
                <TagHook 
                    name="rent.types" 
                    control={control} 
                    placeholder='Araç Tipi Seçiniz'
                    size='small'
                    id='_id'
                    label='name'
                    items={definitions.feature}
                    rotation='bottom-16'
                    removable
                />            
                {/** <MultiSelectHook name="type" control={control} placeholder="Araç Tipi Seçiniz"  /> */}
            </div>
        </React.Fragment>
    )
}

export const VehicleFeatures = ({control}:any) => {
    const [status, setStatus] = React.useState(false);
    const [value, setValue] = React.useState('');
    return (
        <React.Fragment>
            <IconDropdown 
             status={status}
             setStatus={setStatus} 
            icon={<FilePlus className="fill-yg-blue" width={19} />} title="Araç Özellikleri" />
            <div className={classNames({hidden:!status})}>
            <TagHook 
                name="rent.features" 
                control={control} 
                placeholder='Araç Özellikleri Seçiniz'
                size='small'
                id='_id'
                label='name'
                items={definitions.feature}
                rotation='bottom-16'
                removable
             />                 

            {/** <MultiSelectHook name="type" control={control} placeholder="Araç Tipi Seçiniz"  /> */}
            </div>
        </React.Fragment>
    )
}

export const VehicleOptions = ({control}:any) => {
    const [status, setStatus] = React.useState(false);
    return (
        <React.Fragment>
            <IconDropdown 
             status={status}
             setStatus={setStatus} 
            icon={<FileText className="fill-yg-blue" width={19} />} title="Donanım Özellikleri" />
            <div className={classNames({hidden:!status})}>
                 <TagHook 
                 name="rent.options" 
                 control={control} 
                 placeholder="Araç Tipi Seçiniz" 
                 size='small'
                 id='_id'
                 label='name'
                 items={definitions.feature}
                 rotation='bottom-16'
                 />                 
            </div>
        </React.Fragment>
    )
}

export const RangePrice = ({control}:any) => {
    const [status, setStatus] = React.useState(false);
    return (
        <React.Fragment>
            <IconDropdown 
             status={status}
             setStatus={setStatus} 
            icon={<Cash className="fill-yg-blue" width={21} />} title="Fiyat Aralığı" />
            <div className={classNames({hidden:!status})}>
                 <TagHook 
                 name="type" 
                 control={control} 
                 placeholder="Araç Tipi Seçiniz" 
                 size='small'
                 id='_id'
                 label='name'
                 items={definitions.feature}
                 rotation='bottom-16'
                 />                 
            </div>
        </React.Fragment>
    )
}

export const Footer = () => {

    return (
        <div className="flex flex-col">
            <button type="submit" className='button p-2 px-6 bg-yg-blue 
                border border-transparent hover:bg-yg-transparent
                hover:border-yg-blue hover:bg-transparent hover:text-yg-blue 
                text-white cursor-pointer text-sm mb-2 flex justify-center rounded-md'>Filtrele</button>
            <button className='button p-2 px-6 bg-yg-orange 
                border border-transparent hover:bg-yg-transparent
                hover:border-yg-orange hover:bg-transparent hover:text-yg-orange 
                text-white cursor-pointer text-sm flex justify-center rounded-md'>Temizle</button>
            
        </div>
    )
}