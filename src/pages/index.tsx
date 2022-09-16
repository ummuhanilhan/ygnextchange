import { Header } from '@components/header'
import { Sidebar } from '@components/sidebar'
import { Apple } from '@yukgetir-icons'
import type { NextPage } from 'next'
import Main from '@containers/Main'
import PrivateLayout from '@layouts/PrivateLayout'
import React from 'react'
import { FloatingLabelInput, FloatingLabelPhone } from '@shared/elements/inputs'
import { FloatingLabelTextarea } from '@shared/elements/textareas'
import { FloatingSelect } from '@shared/elements/selects'
import { FloatingTags } from '@shared/elements/tags'

const Home = () => {
  const [value, setValue] = React.useState('')

  const paragraph =  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur eos fugiat odit laborum temporibus explicabo at accusantium aperiam atque impedit. Expedita veniam quod illo consequuntur similique sint, modi nostrum officiis.
    Necessitatibus explicabo distinctio veritatis ipsam magni error sunt consectetur quas eius laudantium debitis nobis expedita, quia aliquam amet nisi corporis laborum delectus, deleniti earum? Impedit nesciunt esse officia placeat culpa.
    Iste suscipit earum unde rem officia quis obcaecati iure modi eos quos nesciunt similique voluptate ab id ad vitae voluptatum, assumenda dolores neque, explicabo commodi minus temporibus? Facilis, est laborum!
    Quaerat cumque labore facere dignissimos quasi eius, eum neque similique doloremque maiores vel dolorem voluptatem modi eos, distinctio sapiente vero culpa tenetur ad voluptate laudantium ipsa commodi. Dolore, voluptatem assumenda.
    Assumenda a consequatur quaerat laboriosam deserunt velit, adipisci quibusdam eius praesentium et magni inventore. Impedit eos molestias dolorem quia consectetur voluptatum ratione quas mollitia tempora quis, odio illum amet! Tenetur.
    Quos quasi iure fugiat impedit cupiditate, rerum repellat ut, sed soluta architecto deserunt ipsum odit modi cum quia nesciunt. Nemo, quae eveniet aut molestias quis saepe ut aperiam earum voluptates!
    Officiis ipsam non alias. Ullam nostrum beatae ab reiciendis ducimus consequatur labore! Exercitationem libero aspernatur facere molestias illum, incidunt officia architecto. Quidem quis reprehenderit molestiae fugit nobis nesciunt nihil suscipit.
    Voluptatum consequatur aspernatur voluptatibus, pariatur dolorem repudiandae veniam voluptates. Nemo quo aliquid, molestias minus quae voluptatem iusto eaque nesciunt ducimus cum labore nam, molestiae ratione voluptate adipisci sunt sit? Mollitia.
    Amet nulla a fugit? Dolor error beatae autem harum velit deleniti ea dicta aperiam ad neque? Tempore iure exercitationem placeat maiores deleniti voluptatem vitae saepe repudiandae voluptates debitis, iusto quae!
    Corporis aliquid ipsam a odio blanditiis totam enim consequuntur? Quas delectus, blanditiis dolor quibusdam laborum necessitatibus! Illo autem, optio inventore perferendis tempore ipsum nostrum, voluptatem id vero delectus ad. Earum!
    Cupiditate temporibus, excepturi dolor, voluptate provident adipisci, unde repudiandae minima aperiam nemo labore. Totam tenetur accusantium, reprehenderit optio maiores ipsa porro commodi voluptatum tempore odio nulla veritatis delectus saepe doloremque?
    Dolorem reiciendis odit nisi debitis explicabo! Officia nihil tenetur soluta. Fugit iusto corporis quidem aut voluptate quis voluptatibus ea mollitia sapiente facilis quisquam, corrupti sit, culpa dolor eius modi perspiciatis.
    Veritatis facere nihil quaerat illum enim, modi molestias vitae rem voluptatibus ipsam quos nemo eius aliquam neque, unde accusamus earum corrupti dicta aliquid dolores reprehenderit ab saepe? Quibusdam, repellat! Delectus.
    Dolorum repellat, nulla rem maiores sequi ipsum. Repellat numquam minus ipsum voluptas possimus distinctio corrupti porro labore. Perspiciatis iste qui, fuga enim, suscipit nesciunt praesentium magni accusantium earum, facilis saepe.
    In necessitatibus enim minima tempora minus quo laudantium ea fugit dicta itaque facilis, laboriosam sequi voluptate odit iure. Eaque vel voluptatum nam praesentium ratione delectus cum sequi corporis? Saepe, voluptatem!
    Consectetur aspernatur impedit consequuntur vero officiis voluptatem earum modi esse, enim in nemo et necessitatibus expedita commodi? Corrupti veritatis, quam fugit debitis consectetur, natus sit, eligendi cupiditate eveniet voluptate minus.
    Itaque omnis aperiam praesentium adipisci delectus unde et officiis voluptate, veniam assumenda neque cumque sapiente iusto minima iure esse sunt quidem repellendus quos at doloribus autem corrupti? Fugiat, veniam rerum.
    Ea, non eum aliquam molestias optio officiis libero nam incidunt omnis ratione cum saepe. Qui fugit sit vel et velit temporibus dolores dolorem. Expedita maxime odio, cupiditate iure dolores beatae.
    Recusandae eveniet unde voluptate! Sapiente est sunt praesentium odio aut necessitatibus blanditiis provident. Dolorem ab eius doloribus quae maiores pariatur odio distinctio vel beatae, perferendis adipisci. Tempore accusantium rerum consectetur!
    Repudiandae hic doloribus, nihil repellendus velit saepe corrupti cum exercitationem ratione consequatur vitae possimus delectus omnis. Officia consequatur cum laboriosam quo corrupti fugiat velit exercitationem, quaerat, adipisci deleniti repudiandae accusamus.
    Perspiciatis totam alias veritatis suscipit quae eaque aut quisquam officia vel atque harum, quasi officiis iure odit facilis cumque eius consequuntur beatae nemo deleniti exercitationem est rerum? Earum, ducimus tenetur.
    Hic accusantium atque corrupti, neque illum labore quas autem! Doloribus corrupti, fugiat deserunt cumque expedita eius nisi quod aut, harum dignissimos velit repellat libero ullam? Corporis et ipsum sint at!
    Deleniti, minus. Culpa adipisci sunt exercitationem molestias numquam in commodi, aspernatur doloribus iusto optio hic nostrum saepe porro laboriosam quod at, eos voluptatum totam incidunt recusandae labore impedit perferendis quidem.
    Provident, quidem? Ipsum magnam fugit veritatis ex vero quia totam repellat quo, ea expedita at. Cupiditate molestias a incidunt facere rem voluptatem eligendi velit excepturi quod delectus, veritatis quam harum.
    Dolor hic illum necessitatibus ratione, dicta doloremque sed natus veritatis eius esse odio maxime similique magni. Tenetur atque ducimus ipsa ab asperiores perspiciatis. Velit eaque, ea illo eligendi aliquid vel?
  </p>
  return (
    <React.Fragment>

      <div className='flex items-start gap-2 my-5 '>
        
            <div className="w-full">
              <h3 className='text-md'>Tags</h3>
              <FloatingTags
                className=' '
                value={value}
                placeholder='Araç Özellikleri'
                size='medium'
                onChange={(e:string)=>setValue(e)}
              />
            </div>
            <div className="w-full">
              <h3 className='text-md'>Selects</h3>
                <FloatingSelect
                className=' '
                value={value}
                placeholder='Araç Türleri'
                size='medium'
                onChange={(e:string)=>setValue(e)}
              />
           </div>
          
      </div>

      <div className='flex items-start gap-2 mb-5 '>
        <div className='w-full'>
         <h3 className='tex-md'>Small</h3>
          <FloatingLabelInput
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
          <FloatingLabelInput
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
          <FloatingLabelInput
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
          <FloatingLabelPhone
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
          <FloatingLabelPhone
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
          <FloatingLabelPhone
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

      


      {paragraph}
    </React.Fragment>
  )
}

Home.Layout = PrivateLayout

export default Home
