import { Calendar, Cash, CircleHalf, FilePlus, FileText, PinMap, Truck } from "@shared/icons"
import useDimensions from "@utils/useDimensions"
import React, { useEffect } from "react";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import { useForm, SubmitHandler } from "react-hook-form";
import { View } from "../view";
import classNames from "classnames";
import { DoubleFrame } from "@components/frames/MainFrame";
import { Search } from "@shared/elements/searches";
import Turkiye from '@utils/dummy/turkiye.json'
import { initial, tagItems } from "@utils/mock";
import { Tag } from "@shared/elements/tags";
import { Select } from "@shared/elements/selects";
import { IconFrame, IconDropdown } from "@components/frames/IconFrame"
import { FloatLabelHook, SelectHook } from "@shared/elements/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import Outside from "@utils/useoutside";
import { FaSearch } from "react-icons/fa"
import { TagHook } from "@shared/elements/hooks/tagHook";
import { definitions } from "@utils/dummy/definitions";
import { useScrollYPosition } from "@shared/elements/hooks/usePosition";
import { useFilter } from "stores/features/filter";


export type FilterValues = {
    name: string,
};

const initialValues = {
    name:'test',
}


export const CargoFilter = () => {
    const [ref, props]:any = useDimensions();
   
    const content = (
        <DoubleFrame  id="cargoes" className="bottomize" >
            <Filter {...props} />
            <View type='cargoes'  forwardRef={ref}   />
        </DoubleFrame>
    )
 
    return content;
}

const Filter = ({ x }:any) => {
    const {setFilter}:any = useFilter(state=>state);
    const [sync, setSync] = React.useState(false);
    const y = useScrollYPosition();
 
    const form = useForm<FilterValues>({
        defaultValues: {
            ...initial,
            ...initialValues
        },
        // resolver: yupResolver(),
    });
    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = form;
    const onSubmit: SubmitHandler<FilterValues> = (data:any) => {
        setFilter({
            ...data,
        })
        console.log(
            'load:', data.load,
            'unload:', data.unload,
            'total:', data.fee?.total,
            'price:', data.price,
            'features:', data.rent?.features,
            'options:', data.rent?.options,
            'vehicle:', data.rent?.vehicle, 
            'type:', data.rent?.type
        )
    };
    const onError = (errors:any) => console.log(errors)

    return (
        <div 
            style={{
                // @ts-ignore
                left: parseInt(x-300) // 245 
            }}
            className={classNames(
            {'lg:fixed top-2 bottom-2': y>88},
            'filter z-30 invisible lg:visible',
            'top-4 left-0-md w-[18em] transition h-0'
        )} >
                <form 
                onSubmit={handleSubmit(onSubmit, onError)} 
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
                </form>            
        </div>
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
                    id='label'
                    label='value'
                    className='mb-1 '
                />

              
            <SelectHook
                    name="unload" 
                    control={control} 
                    placeholder='Boşaltma yeri'
                    size='small'
                    items={Turkiye}
                    id='label'
                    label='value'
                    className='my-1 mt-3'
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