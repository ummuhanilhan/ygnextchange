import React, { useEffect, useState } from "react"
import { Eye, Heart, HeartFill } from "@yukgetir-icons"
import classNames from "classnames"
import { useModal } from "stores/features/useModal"
import { useAppDispatch } from "stores/store"
import { useSelector } from "react-redux"
import { isfav, selectFavorite } from "stores/slices/favoriteSlice"
import api from "@utils/api"
import { notify, slugify } from "@utils/helper"
import { create, remove, update } from "stores/slices/offerSlice"
import { default15 } from "@shared/modals/classic"
import { Action } from "./action"
import { Faved, Viewed } from "./favorite"
import { ApproveToOffer, CancelToOffer, ComplateToOffer, InspectToOffer, OffersInspect, openOfferSendModal, RemoveOffer, SendOffer, ShowDetail, StartToOffer, UndoToOffer } from "./dispatchers"



export const Actions = ({item, offerId, cargo, isAuth, actionType, status}:any) => {
    if(!item?._id) return <></>;

    const {open, close}:any = useModal(state=>state);
    const dispatch = useAppDispatch()
    const [fav, setFav] = useState(false)
    const [count, setCount] = useState(0)
    useEffect(()=>{
      //  isFaved()
    },[])

    const common = `w-full flex flex-[5] 
    justify-end items-end`
    const rich = `${common} flex-col xs:flex-row
    sm:flex-row-reverse `

    const Button = ({children, rich}:any) => {
        return children
    }
 
    const show = (
    <Action 
        title='Detay Gör' 
        color='orange' 
        path='#' 
        onClick={()=> open({type:'show-cargo', values:{item}, styles:{padding:0} }) }
    /> )

       const getActions = (value:string, item:any, status:boolean) => {
        switch (value) {
            case 'cargoes':
                return (<Button>
                    {item?.viewed && <Viewed item={item} />}
                    {isAuth && <Faved item={item} />}
                    {show}
                    {isAuth && <Action 
                    title='Teklif Gönder' 
                    onClick={openOfferSendModal}
                    color='blue' path='#' item={item} />}

                 </Button>)
            break;
            case 'favorites':
                return (<Button>
                    {item?.viewed && <Viewed item={item} />}
                    {isAuth && <Faved item={item} />}
                    {show}
                    {isAuth && <SendOffer item={item} status={status} />}
                 </Button>)
            break;
            case 'mycargoes':
                return (<Button>
                    {item?.viewed && <Viewed item={item} />}
                     <Action title='Sil' color='gray' outline path='#' />
                     <Action title='Kopyala' color='blue' outline path='#' />
                     <Action title='Tarih Güncelle' color='orange' outline path='#' />
                    <Action title='Düzenle' color='blue'disabled={!status}  path='#' />
                    {show}
                 </Button>)
            break;
            case 'outgoing-inshipment':
                return (<Button rich>
                     {item?.viewed && <Viewed item={item} />}
                     {isAuth && <Faved item={item} />}
                     <CancelToOffer item={item} id={offerId} />
                    <ShowDetail item={item} />
                     <ComplateToOffer item={item} id={offerId} />
                 </Button>)
            break;
            case 'outgoing-accepted':
                return (<Button>
                     {item?.viewed && <Viewed item={item} />}
                     {isAuth && <Faved item={item} />}
                     <CancelToOffer item={item} id={offerId}  />
                     <ShowDetail item={item}  />
                    <StartToOffer item={item} id={offerId} />
               </Button>)
            break;
            case 'outgoing-pending':
                return (<Button rich>
                     {item?.viewed && <Viewed item={item} />}
                      <ShowDetail item={item}  />
                     <UndoToOffer item={item} id={offerId} />
                 </Button>)
            break;            
            case 'ingoing-inshipment':
                return (<Button rich>
                     {item?.viewed && <Viewed item={item} />}
                     <RemoveOffer item={item}  />
                      <ShowDetail item={item}  />
                     <ApproveToOffer item={item} id={offerId} />
                 </Button>)
            break;
            case 'ingoing-accepted':
                return (<Button rich>
                     {item?.viewed && <Viewed item={item} />}
                     <RemoveOffer item={item}  />
                      <ShowDetail item={item}  />
                     <InspectToOffer item={item}  />
                 </Button>)
            break;
            case 'ingoing-pending':
                return (<Button rich>
                    {item?.viewed && <Viewed item={item} />}
                     <RemoveOffer item={item}  />
                      <ShowDetail item={item}  />
                     <OffersInspect item={item}  />
                 </Button>)
            break;            
            case 'vehicle-active':
                return (<Button>
                    {item?.viewed && <Viewed item={item} />}
                    <Action title='Sil' color='gray' outline path='#' />
                    <Action title='Kopyala' color='blue' outline path='#' />
                   <Action title='Düzenle' color='blue' path='#' />
                    {show}

                 </Button>)
            break;            
            case 'vehicle-modal':
                return (<Button>
                    <Action title='Araç Değiştir' color='blue' outline path='#' />
                    <Action title='Varsayılan Seç' color='orange' path='#' />
                    <Action onClick={()=>{
                        // create offer
                        if(cargo?._id){
                         dispatch(create({cargo:cargo._id,vehicle:item._id}))
                        }
                        notify('Başarıyla gönderildi!',{type:'success'})
                        // close modal
                        // offered
                        close()
                    }} title='Teklif Gönder' color='blue' path='#' />
                 </Button>)
            break;            
            case 'vehicle-pending':
                return (<Button>
                    {item?.viewed && <Viewed item={item} />}
                    {show}
                    <SendOffer item={item} status={status} />
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

