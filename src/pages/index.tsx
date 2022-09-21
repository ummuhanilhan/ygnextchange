import PrivateLayout from '@layouts/PrivateLayout'
import React, { useRef, useState } from 'react'
import { FloatingLabelTextarea } from '@shared/elements/textareas'
import { FloatingSelect } from '@shared/elements/selects'
import { tagItems, tagItems2 } from '@utils/mock'
import Turkiye from '@utils/dummy/turkiye.json'
import { Input, InputGroup } from '@shared/elements/groups'
import { meterUnits, weightUnits } from '@utils/dummy/definitions'
import {  Upload } from '@shared/elements/uploads'
import { FloatingInput, FloatingPhone } from '@shared/elements/inputs'
import { Tag } from '@shared/elements/tags'
import { CalendarBasic } from '@shared/elements/calendar'
import { FileUpload } from 'primereact/fileupload';

const Home = () => {
  const [value, setValue] = React.useState('')

  return (
    <React.Fragment>
      <div className='grid grid-cols-2 gap-2 my-5'>
         <div className="w-full">
            <h3 className='text-md'></h3>
            <CalendarBasic />
          </div>
          <div className='w-full'>
          <Upload 
            name="driver_file" 
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
              <FloatingSelect
                  className=' '
                  value={value}
                  placeholder='Şehir Seçiniz'
                  size='medium'
                  id='label'
                  searchable
                  border
                  items={Turkiye}
                  onChange={(e:string)=>setValue(e)}
                />
          </div>
          <div className="w-full">
              <h3 className='text-md'>Select</h3>
              <FloatingSelect
                  className=' '
                  value={value}
                  placeholder='Şehir Seçiniz'
                  size='medium'
                  id='label'
                  border
                  items={Turkiye}
                  onChange={(e:string)=>setValue(e)}
                />
          </div>
          <div className="w-full">
              <h3 className='text-md'>Select <small>with FloatingLabel</small> </h3>
              <FloatingSelect
                  className=' '
                  value={value}
                  placeholder='Araç Markası Seçiniz'
                  size='small'
                  items={tagItems}
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
            <FloatingLabelTextarea
              className=' '
              value={value}
              placeholder='Şirket Adresi'
              size='medium'
              border
              onChange={(e:string)=>setValue(e)}
            />
            <FloatingLabelTextarea
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

Home.Layout = PrivateLayout

export default Home

