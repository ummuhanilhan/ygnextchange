import PrivateLayout from '@layouts/PrivateLayout'
import React, { useRef, useState } from 'react'
import { tagItems, tagItems2 } from '@utils/mock'
import Turkiye from '@utils/dummy/turkiye.json'
import { Input, InputGroup } from '@shared/elements/groups'
import { meterUnits, weightUnits } from '@utils/dummy/definitions'
import {  Upload } from '@shared/elements/uploads'
import { Tag } from '@shared/elements/tags'
import { CalendarBasic } from '@shared/elements/calendar'
import { FileUpload } from 'primereact/fileupload';
import { Select } from '@shared/elements/selects'
import { Textarea } from '@shared/elements/textareas'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FileUploadHook } from '@shared/elements/hooks/uploadHook'
import { InputHook } from '@shared/elements/hooks/inputHook'
import { PhoneHook } from '@shared/elements/hooks/phoneHook'
import { TextareaHook } from '@shared/elements/hooks/textareaHook'
import { TagHook } from '@shared/elements/hooks/tagHook'
import { SelectHook } from '@shared/elements/hooks/selectHook'
import { FloatingInput, FloatingPhone } from '@shared/elements/inputs'
 
const Home = () => {

  return (
    <React.Fragment>
      <Forms />
      <Elements />
    </React.Fragment>
  )
}

Home.Layout = PrivateLayout

export default Home


export const Forms = () => {
  const form = useForm<any>({
      defaultValues: {
        
      },
      // resolver: yupResolver(),
  });
  const { register, control, handleSubmit, watch, setValue, formState: { errors } } = form;
  const onSubmit: SubmitHandler<any> = data => {
      console.log(data)
      alert(JSON.stringify(data))
  };
  const onError = (errors:any) => {
      console.log(errors)

  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <h1 className='text-3xl my-5 font-bold text-yg-orange'>REACT HOOKFORM</h1>
      <div className='grid grid-cols-2 gap-2 my-5'>
         <div className="w-full">
            <h3 className='text-md'></h3>
            <CalendarBasic />
          </div>
          <div className='w-full'>
          <FileUploadHook 
            name="driver_file" 
            height='h-full'
            placeholder="Psikoteknik Belgesi Ekle (Opsiyonel)"  
            control={control}
          />
        </div>
      </div>

      <div className='grid grid-cols-3 gap-2 my-5'>
       <div className='w-full'>
        
        
        </div>
      </div>

      <div className='grid grid-cols-3 gap-2 my-5'>
       <div className='w-full'>
          <FileUploadHook 
            name="avatar" 
            placeholder="Profil Fotoğrafı Ekle"
            control={control}
          />
        </div>
        <div className='w-full'>
            <FileUploadHook
              name="src_file" 
              placeholder="Src Belgesi"
              file='file://'  
              control={control}
            />
        </div>
     
        <div className='w-full'>
          <FileUploadHook
            name="driver_file" 
            placeholder="Sürücü Belgesi Ekle"  
            control={control}
            />
        </div>
      </div>

      <div className='grid grid-cols-3 gap-2 my-5 '>
        
        <div className="w-full">
            <h3 className='text-md'>Dimensions</h3>
            <InputGroup
                border
                name=''
                items={weightUnits}
                control={control}
              />
        </div>
        <div className="w-full">
            <h3 className='text-md'>Input Appendeds</h3>
            <InputHook
                name=''
                placeholder='Hacim - Alan Belirtiniz'
                size='medium'
                border
                items={weightUnits}
                control={control}
              />
        </div>
        <div className="w-full">
            <h3 className='text-md'>Input Appended</h3>
            <InputHook
                name=''
                placeholder='Ağırlık Belirtiniz'
                size='medium'
                border
                items={meterUnits}
                control={control}
              />
        </div>
      
      </div>
      <div className='grid grid-cols-3 gap-2 my-5 '>
      <div className="w-full">
              <h3 className='text-md'>Searchable Select</h3>
              <SelectHook
                  name=''
                  placeholder='Şehir Seçiniz'
                  size='medium'
                  id='label'
                  removable
                  searchable
                  border
                  items={Turkiye}
                  control={control}
                />
          </div>
          <div className="w-full">
              <h3 className='text-md'>Select</h3>
              <SelectHook
                  name=''
                  placeholder='Şehir Seçiniz'
                  size='medium'
                  id='label'
                  removable
                  border
                  items={Turkiye}
                  control={control}
                />
          </div>
          <div className="w-full">
              <h3 className='text-md'>Select <small>with FloatingLabel</small> </h3>
              <SelectHook
                  name=''
                  placeholder='Araç Markası Seçiniz'
                  size='small'
                  items={tagItems}
                  removable
                  mini
                  border
                  control={control}
                />
          </div>
      </div>
      <div className='grid grid-cols-2 gap-2 my-5 '>
        
            <div className="w-full">
              <h3 className='text-md'>Tags</h3>
              <TagHook
                name=''
                placeholder='Araç Özellikleri'
                size='medium'
                items={tagItems}
                removable
                control={control}
              />
            </div>
            <div className="w-full">
              <h3 className='text-md'>Tags mini</h3>
                <TagHook
                name=''
                placeholder='Sürücü Belgesi Sınıfı'
                size='small'
                items={tagItems2}
                mini
                control={control}
              />
           </div>
          
      </div>

      <div className='flex items-start gap-2 mb-5 '>
        <div className='w-full'>
         <h3 className='tex-md'>Small</h3>
          <InputHook
            className=' bg-white'
            name=''
            placeholder='Kullanıcı Adı'
            size='small'
            height='55px'
            border
            control={control}
          />
        </div>
        <div className='w-full'>
         <h3 className='tex-md'>Medium</h3>
          <InputHook
            className=' bg-white'
            name=''
            placeholder='Şifre'
            type='password'
            size='medium'
            height='55px'
            border
            control={control}
          />        
      </div>
      <div className='w-full'>   
        <h3 className='tex-md'>Large</h3>
          <InputHook
            className=' bg-white'
            name=''
            placeholder='Eposta Adresi'
            type='email'
            size='large'
            border
            verified
            verifiable
            control={control}
          />
      </div>
        
      </div>

      <div className='flex items-start gap-2 mb-5'>
       <div className='w-full'>
         <h3 className='tex-md'>Small (55px)</h3>
          <PhoneHook
            name=''
            placeholder='Şirket Telefonu'
            size='small'
            border
            control={control}
          />
       </div>
       <div className='w-full'>
       <h3 className='tex-md'>Medium(64px)</h3>
          <PhoneHook
              name=''
              placeholder='Cep Telefonu'
              size='medium'
              verifiable
              success
              border
              control={control}
            />
       </div>
        <div className='w-full'>
         <h3 className='tex-md'>Large</h3>
          <PhoneHook
              name=''
              placeholder='Şirket Telefonu'
              size='large'
              border
              error='err'
              verifiable
              control={control}
            />
          </div>

      </div>

      <div className='flex items-start gap-2 mb-5 '>
            <TextareaHook
              name=''
              placeholder='Şirket Adresi'
              size='medium'
              border
              control={control}
            />
            <TextareaHook
              name=''
              placeholder='Şirket Adresi'
              error='err'
              border
              height='10rem'
              control={control}
            />
           
      </div>

    </form>
  )
}



export const Elements = () => {
  const [value, setValue] = React.useState('')

  return (
    <React.Fragment>
    <h1 className='text-3xl my-5 font-bold text-yg-blue'>CUSTOM ELEMENTS</h1>

      <div className='grid grid-cols-2 gap-2 my-5'>
         <div className="w-full">
            <h3 className='text-md'></h3>
            <CalendarBasic />
          </div>
          <div className='w-full'>
          <Upload 
            name="driver_file" 
            height='h-full'
            placeholder="Psikoteknik Belgesi Ekle (Opsiyonel)"  
          />
        </div>
      </div>

      <div className='grid grid-cols-3 gap-2 my-5'>
       <div className='w-full'>
        
        
        </div>
      </div>

      <div className='grid grid-cols-3 gap-2 my-5'>
       <div className='w-full'>
          <Upload 
            name="avatar" 
            placeholder="Profil Fotoğrafı Ekle"
          />
        </div>
        <div className='w-full'>
            <Upload 
              name="src_file" 
              placeholder="Src Belgesi"
              file='file://'  
            />
        </div>
     
        <div className='w-full'>
          <Upload 
            name="driver_file" 
            placeholder="Sürücü Belgesi Ekle"  
            />
        </div>
      </div>

      <div className='grid grid-cols-3 gap-2 my-5 '>
        
        <div className="w-full">
            <h3 className='text-md'>Dimensions</h3>
            <InputGroup
                border
                value={value}
                items={weightUnits}
                onChange={(e:string)=>setValue(e)}
              />
        </div>
        <div className="w-full">
            <h3 className='text-md'>Input Appendeds</h3>
            <Input
                className=' '
                value={value}
                placeholder='Hacim - Alan Belirtiniz'
                size='medium'
                border
                items={weightUnits}
                onChange={(e:string)=>setValue(e)}
              />
        </div>
        <div className="w-full">
            <h3 className='text-md'>Input Appended</h3>
            <Input
                className=' '
                value={value}
                placeholder='Ağırlık Belirtiniz'
                size='medium'
                border
                items={meterUnits}
                onChange={(e:string)=>setValue(e)}
              />
        </div>
      
      </div>
      <div className='grid grid-cols-3 gap-2 my-5 '>
      <div className="w-full">
              <h3 className='text-md'>Searchable Select</h3>
              <Select
                  className=' '
                  value={value}
                  placeholder='Şehir Seçiniz'
                  size='medium'
                  id='label'
                  removable
                  searchable
                  border
                  items={Turkiye}
                  onChange={(e:string)=>setValue(e)}
                />
          </div>
          <div className="w-full">
              <h3 className='text-md'>Select</h3>
              <Select
                  className=' '
                  value={value}
                  placeholder='Şehir Seçiniz'
                  size='medium'
                  id='label'
                  removable
                  border
                  items={Turkiye}
                  onChange={(e:string)=>setValue(e)}
                />
          </div>
          <div className="w-full">
              <h3 className='text-md'>Select <small>with FloatingLabel</small> </h3>
              <Select
                  className=' '
                  value={value}
                  placeholder='Araç Markası Seçiniz'
                  size='small'
                  items={tagItems}
                  removable
                  mini
                  border
                  onChange={(e:string)=>setValue(e)}
                />
          </div>
      </div>
      <div className='grid grid-cols-2 gap-2 my-5 '>
        
            <div className="w-full">
              <h3 className='text-md'>Tags</h3>
              <Tag
                className=' '
                value={value}
                placeholder='Araç Özellikleri'
                size='medium'
                items={tagItems}
                removable
                onChange={(e:string)=>setValue(e)}
              />
            </div>
            <div className="w-full">
              <h3 className='text-md'>Tags mini</h3>
                <Tag
                className=' '
                value={value}
                placeholder='Sürücü Belgesi Sınıfı'
                size='small'
                items={tagItems2}
                mini
                onChange={(e:string)=>setValue(e)}
              />
           </div>
          
      </div>

      <div className='flex items-start gap-2 mb-5 '>
        <div className='w-full'>
         <h3 className='tex-md'>Small</h3>
          <FloatingInput
            className=' bg-white'
            value={value}
            placeholder='Kullanıcı Adı'
            size='small'
            height='55px'
            border
            onChange={(e:string)=>setValue(e)}
          />
        </div>
        <div className='w-full'>
         <h3 className='tex-md'>Medium</h3>
          <FloatingInput
            className=' bg-white'
            value={value}
            placeholder='Şifre'
            type='password'
            size='medium'
            height='55px'
            border
            onChange={(e:string)=>setValue(e)}
          />        
      </div>
      <div className='w-full'>   
        <h3 className='tex-md'>Large</h3>
          <FloatingInput
            className=' bg-white'
            value={value}
            placeholder='Eposta Adresi'
            type='email'
            size='large'
            border
            verified
            verifiable
            onChange={(e:string)=>setValue(e)}
          />
      </div>
        
      </div>

      <div className='flex items-start gap-2 mb-5'>
       <div className='w-full'>
         <h3 className='tex-md'>Small (55px)</h3>
          <FloatingPhone
            className=' '
            value={value}
            placeholder='Şirket Telefonu'
            size='small'
            border
            onChange={(e:string)=>setValue(e)}
          />
       </div>
       <div className='w-full'>
       <h3 className='tex-md'>Medium(64px)</h3>
          <FloatingPhone
              className=' '
              value={value}
              placeholder='Cep Telefonu'
              size='medium'
              verifiable
              success
              border
              onChange={(e:string)=>setValue(e)}
            />
       </div>
        <div className='w-full'>
         <h3 className='tex-md'>Large</h3>
          <FloatingPhone
              className=' '
              value={value}
              placeholder='Şirket Telefonu'
              size='large'
              border
              error='err'
              verifiable
              onChange={(e:string)=>setValue(e)}
            />
          </div>

      </div>

      <div className='flex items-start gap-2 mb-5 '>
            <Textarea
              className=' '
              value={value}
              placeholder='Şirket Adresi'
              size='medium'
              border
              onChange={(e:string)=>setValue(e)}
            />
            <Textarea
              className=' '
              value={value}
              placeholder='Şirket Adresi'
              error='err'
              border
              height='10rem'
              onChange={(e:string)=>setValue(e)}
            />
           
      </div>

    </React.Fragment>
  )
}
