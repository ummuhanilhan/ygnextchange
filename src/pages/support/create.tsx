import { IconFrame } from "@components/frames/IconFrame";
import { Frame } from "@components/frames/MainFrame";
import PrivateLayout from "@layouts/PrivateLayout";
import { FileUploadHook } from "@shared/elements/hooks/uploadHook";
import { Message } from "@shared/icons";
import classNames from "classnames";
import { SubmitHandler, useForm } from "react-hook-form";

export type Support = {
    password: string,
};

const initialValues = {
    password:'',
}


export const CreateSupport = () => {
    const form = useForm<Support>({
        defaultValues:{},
        // resolver: yupResolver(),
    });
    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = form;
    const onSubmit: SubmitHandler<Support> = data => {
        console.log(data)
        alert(JSON.stringify(data))
    };
    const onError = (errors:any) => {
        console.log(errors)

    };

    const Box = ({children, className}:any) => {
        return(
            <div className={classNames('p-4 bg-white rounded-md mb-3', className)}>
                {children}
            </div>
        )
    }

    return (
      <Frame>
            <div className='grid grid-cols-2 w-full'>
                <div>
                    <IconFrame icon={<Message className="menu-icon" />} title="Yeni Destek Talebi Oluştur" />
                    <form onSubmit={handleSubmit(onSubmit, onError)}>
                        <Box className='flex-center justify-start'>
                            <img src='assets/default.png' width='25' />
                            <div className=''>
                                <div className='text-lg font-medium'>Sercan İzci</div>
                                <div className='text-gray-500 text-sm'>test@test.com</div>
                            </div>
                        </Box>
                        <Box className='flex items-start'>
                            <b className='text-md'>Konu:</b>
                            <input type="text" className='ml-3 w-full text-md text-gray-500 outline-none' value='Örnek Konu 1' />
                        </Box>
                        <Box className='flex items-start'>
                            <b className='text-md'>Mesaj:</b>
                            <textarea name='' className='ml-3 w-full h-32 text-md text-gray-500 outline-none'>Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Ipsam doloremque soluta, aut consectetur quisquam modi? Sapiente molestias voluptatem nihil? Excepturi quos asperiores perferendis aut repellendus, nulla dolores maiores saepe quis!
                            </textarea>
                        </Box>
                        <FileUploadHook 
                            name='cover'
                            placeholder='Dosya Ekle (Opsiyonel)'
                            control={control}
                        />
                    </form>
                </div>
                <div>
                    
                </div>
            </div>
      </Frame>
    )
}

CreateSupport.Layout = PrivateLayout;

export default CreateSupport;


 