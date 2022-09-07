import { IconDropdown, IconFrame } from "@components/frames/IconFrame"
import { Calendar, Cash, CircleHalf, FilePlus, FileText, PinMap, Truck } from "@shared/icons"
import useDimensions from "@utils/useDimensions"
import React from "react";
import { FaSearch } from "react-icons/fa"
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { View } from "../view";
import { MultiSelectHook } from "@shared/elements/hooks";
import classNames from "classnames";
import Outside from "@utils/useoutside";

export type FilterValues = {
    name: string,
};

const initialValues = {
    name:'test',
}

export const CargoFilter = () => {

    return (
        <div id="cargoes" className="relative">
            <Filter />
           <View />
        </div>
    )
}

const Filter = ({}:any) => {
    const [ref, { height }]:any = useDimensions();
    const [sync, setSync] = React.useState(false);
    const form = useForm<FilterValues>({
        defaultValues: initialValues,
        // resolver: yupResolver(),
    });
    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = form;
    const onSubmit: SubmitHandler<FilterValues> = data => {
        console.log(data)
        alert(JSON.stringify(data))
    };
    const onError = (errors:any) => {
        console.log(errors)

    };
    return (
        <div className="filter bg-yukgetir-lightblue sticky top-4 left-0 h-0 p-1 rounded-md w-[15em]" ref={ref}>
            <SimpleBar style={{ maxHeight: '85vh',  }} className='pb-4'>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <Search control={control} />
                    <h3 className='text-blue-600 text-base mt-3 font-medium '>Detaylı Arama</h3>
                    <div className='line h-[1px] bg-gray-200 w-full my-2 mb-3'></div>
                    <Location control={control} />
                    <Dates control={control} />
                    <Hiring control={control} />
                    <VehicleType control={control} />
                    <VehicleFeatures control={control} />
                    <VehicleOptions control={control} />
                </form>
            </SimpleBar>
        </div>
    )
}


export const Search = ({control}:any) => {
    return(
        <div className="search bg-white py-3 px-2 flex justify-between rounded-md">
            <input type="text" className="bg-transparent h-full border-0 w-full text-gray-500 px-1 outline-none" />
            <FaSearch className="fill-yukgetir-blue mx-1" size={18} />
        </div>
    )
}

export const Location = ({control}:any) => {
    const [status, setStatus] = React.useState(false);
    return (
        <React.Fragment>
            <IconDropdown 
            status={status}
            setStatus={setStatus} 
            icon={<PinMap className="fill-yukgetir-blue" width={19} />} title="Konum" />

            <div className={classNames({hidden:!status})}>
                <MultiSelectHook name="load" control={control} placeholder="Yükleme yeri"  />                 
                <MultiSelectHook name="unload" control={control} placeholder="Boşaltma yeri"  />                 
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
            icon={<Calendar className="fill-yukgetir-blue" width={19} />} title="Tarih" />
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
            icon={<CircleHalf className="fill-yukgetir-blue" width={15} />} title="Kiralama Tipi" />
            <div className={classNames({hidden:!status})}>

            </div>
        </React.Fragment>
    )
}

export const VehicleType = ({control}:any) => {
    const [status, setStatus] = React.useState(false);
    return (
        <React.Fragment>
            <IconDropdown 
             status={status}
             setStatus={setStatus} 
            icon={<Truck className="fill-yukgetir-blue" width={19} />} title="Araç Tipi" />
            <div className={classNames({hidden:!status})}>
                <MultiSelectHook name="type" control={control} placeholder="Araç Tipi Seçiniz"  />                 
            </div>
        </React.Fragment>
    )
}

export const VehicleFeatures = ({control}:any) => {
    const [status, setStatus] = React.useState(false);
    return (
        <React.Fragment>
            <IconDropdown 
             status={status}
             setStatus={setStatus} 
            icon={<FilePlus className="fill-yukgetir-blue" width={19} />} title="Araç Özellikleri" />
            <div className={classNames({hidden:!status})}>
                <MultiSelectHook name="type" control={control} placeholder="Araç Tipi Seçiniz"  />                 
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
            icon={<FileText className="fill-yukgetir-blue" width={19} />} title="Donanım Özellikleri" />
            <div className={classNames({hidden:!status})}>
                 <MultiSelectHook name="type" control={control} placeholder="Araç Tipi Seçiniz"  />                 
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
            icon={<Cash className="fill-yukgetir-blue" width={21} />} title="Fiyat Aralığı" />
            <div className={classNames({hidden:!status})}>
                 <MultiSelectHook name="type" control={control} placeholder="Araç Tipi Seçiniz"  />                 
            </div>
        </React.Fragment>
    )
}

