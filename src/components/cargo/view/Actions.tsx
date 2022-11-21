
import React from "react"
import { Eye, Heart, HeartFill } from "@yukgetir-icons"
import classNames from "classnames"


export const Actions = ({item, isAuth, actionType, status, fav}:any) => {
    const faved = (
        <div className="inline-block">
            <div className='heart rounded-md border border-1 border-yg-orange h-[1.85em] w-[1.85em] flex
                    items-center justify-center ml-2 cursor-pointer hover:bg-yg-lightblue'> 
                {item.fav ? <HeartFill width={15} className='fill-yg-orange' /> : <Heart width={15} className='fill-yg-orange' />}
            </div>
        </div>
    )

    const viewed = (
        <div className='inline-block'>
            <div className='view flex flex-col items-center'>
                <Eye width={15} className='fill-gray-400' />
                <p className='text-gray-400 text-sm'>{item.viewed}</p>
            </div>
        </div>
    )

    const common = `w-full flex flex-[5] 
    justify-end items-end`
    const rich = `${common} flex-col xs:flex-row
    sm:flex-row-reverse `
    const normal = `${common}`

    const Button = ({children, rich}:any) => {
        return children
    }

    const getActions = (value:string, item:any, status:boolean) => {
        switch (value) {
            case 'cargoes':
                return (<Button>
                    {item.viewed && viewed}
                    {isAuth && faved}
                    <Action title='Detay Gör' color='orange' path='#' />
                    {isAuth && <Action title='Teklif Gönder' color='blue' path='#' />}

                 </Button>)
            break;
            case 'favorites':
                return (<Button>
                    {item.viewed && viewed}
                    {isAuth && faved}
                    <Action title='Detay Gör' color='orange' path='#' />
                    {isAuth && <Action title='Teklif Gönder' color='blue'disabled={!status}  path='#' />}
                 </Button>)
            break;
            case 'mycargoes':
                return (<Button>
                    {item.viewed && viewed}
                     <Action title='Sil' color='gray' outline path='#' />
                     <Action title='Kopyala' color='blue' outline path='#' />
                     <Action title='Tarih Güncelle' color='orange' outline path='#' />
                    <Action title='Düzenle' color='blue'disabled={!status}  path='#' />
                    <Action title='Detay Gör' color='orange' path='#' />
                 </Button>)
            break;
            case 'outgoing-inshipment':
                return (<Button rich>
                     {item.viewed && viewed}
                     {isAuth && faved}
                     <Action title='Vazgeç' color='gray' outline path='#' />
                     <Action title='İlan Detayını Gör' color='orange' path='#' />
                     <Action title='Sevkiyatı Tamamla' color='blue' path='#' />
                 </Button>)
            break;
            case 'outgoing-accepted':
                return (<Button>
                     {item.viewed && viewed}
                     {isAuth && faved}
                     <Action title='Vazgeç' color='gray' outline path='#' />
                    <Action title='İlan detayını gör' color='orange' path='#' />
                    <Action title='Sevkiyatı Başlat' color='blue' path='#' />
               </Button>)
            break;
            case 'outgoing-pending':
                return (<Button rich>
                     {item.viewed && viewed}
                     <Action title='İlan Detayını Gör' color='orange' path='#' />
                     <Action title='Teklifi Geri Al' color='blue' path='#' />
                 </Button>)
            break;            
            case 'ingoing-inshipment':
                return (<Button rich>
                     {item.viewed && viewed}
                     <Action title='Listeden Kaldır' color='gray' outline path='#' />
                     <Action title='İlan Detayını Gör' color='orange' path='#' />
                     <Action title='Teslimatı Onayla' color='blue' path='#' />
                 </Button>)
            break;
            case 'ingoing-accepted':
                return (<Button rich>
                     {item.viewed && viewed}
                     <Action title='Listeden Kaldır' color='gray' outline path='#' />
                     <Action title='İlan Detayını Gör' color='orange' path='#' />
                     <Action title='Diğer Teklifleri İncele (5)' color='blue' path='#' />
                 </Button>)
            break;
            case 'ingoing-pending':
                return (<Button rich>
                    {item.viewed && viewed}
                     <Action title='Listeden Kaldır' color='gray' outline path='#' />
                     <Action title='İlan Detayını Gör' color='orange' path='#' />
                     <Action title='Teklifleri İncele (3)' color='blue' path='#' />
                 </Button>)
            break;            
            case 'vehicle-active':
                return (<Button>
                    {item.viewed && viewed}
                    <Action title='Sil' color='gray' outline path='#' />
                    <Action title='Kopyala' color='blue' outline path='#' />
                   <Action title='Düzenle' color='blue' path='#' />
                    <Action title='Detay gör' color='orange' path='#' />

                 </Button>)
            break;            
            case 'vehicle-pending':
                return (<Button>
                    {item.viewed && viewed}
                    <Action title='Detay Gör' color='orange' path='#' />
                    <Action title='Teklif Gönder'  color='blue' path='#' />
                 </Button>)
            break;      
            case 'ingoing-vehicle-offers':
                return (<Button>
                    <Action title='Araç Detayını Gör' color='orange' path='#' />
                    <Action title='Teklifini Kabul Et' color='blue' path='#' />

                 </Button>)
            break;      
            default:
                return;
            break;
        }  
    }

    return (
        <div className="flex-[5] sm:flex-[9] md:flex-[3]  h-auto flex items-end justify-end">
            {getActions(actionType, item, status)}
        </div>
    )
}


export const Action = ({path, color, title, outline, disabled}:any) => {
    const disabledItem =  <a href={path} className={classNames(
        ` py-1 px-2 border border-transparent cursor-pointer text-sm rounded-md inline-block ml-2`,
        `bg-gray-300 text-white inline-block float-left h-min w-max`
    )}>{title}</a>

    const normalItem = <a href={path} className={classNames(
        ` py-1 px-2 border border-transparent cursor-pointer text-sm rounded-md inline-block ml-2`,
        `bg-yg-${color} text-white inline-block float-left h-min w-max`,
        `hover:border-yg-${color} hover:bg-transparent hover:text-yg-${color}`
    )}>{title}</a>

    const outlinedItem = <a href={path} className={classNames(
        ` py-1 px-2 border cursor-pointer text-sm rounded-md inline-block ml-2`,
        `bg-transparent text-yg-${color} border-yg-${color} inline-block float-left h-min w-max`,
        `hover:border-yg-${color} hover:bg-transparent hover:text-yg-${color}`
    )}>{title}</a>

    return !outline? (
       disabled ? disabledItem : normalItem
    ): outlinedItem
}

/**
<Action title='Sil' color='gray' outline path='#' outline />
<Action title='Vazgeç' color='gray' outline path='#' outline />
<Action title='Kopyala' color='blue' path='#' outline />
<Action title='Düzenle' color='blue' path='#' />
<Action title='İlan Detayını Gör' color='orange' path='#' />
<Action title='Sevkiyatı Tamamla' color='green' path='#' />
 */