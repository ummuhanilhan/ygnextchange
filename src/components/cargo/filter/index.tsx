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
            <SimpleBar style={{ maxHeight: height-160||400 }}>
              <form onSubmit={handleSubmit(onSubmit, onError)}>
                <Search control={control} />
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


export const Search = () => {
    return(
        <div className="search bg-white p-1 flex justify-between">
            <input type="text" className="bg-transparent border-0 w-full text-gray-500 px-1 outline-none" />
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

        </React.Fragment>
    )
}

