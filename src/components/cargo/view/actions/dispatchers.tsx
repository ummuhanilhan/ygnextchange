import { useAppDispatch } from "stores/store"
import { Action } from "./action"
import { create, remove, update } from "stores/slices/offerSlice"
import { useModal } from "stores/features/useModal"
import { default15 } from "@shared/modals/classic"
import { CargoState } from "stores/types"
import { notify, notifySuccess } from "@utils/helper"

type ItemState = {
    item:CargoState,
    status?: Boolean
    id?: String
}
 
export const ShowDetail = ({item}:ItemState) => {
    const dispatch = useAppDispatch();
    const {open, close}:any = useModal(state=>state);

    return <Action title='İlan Detayını Gör' color='orange' onClick={()=>open({type:'show-cargo', styles:{padding:0}, values:{item} }) }  path='#' />
}
export const RemoveOffer = ({item}:ItemState) => {
    const dispatch = useAppDispatch();
    return <Action title='Listeden Kaldır' color='gray'  onClick={()=>{
        // alert('remove')
        dispatch(remove({ cargo:'', vehicle:''  }))
    }} outline path='#' />
}

export const ComplateToOffer = ({item, id}:ItemState) => {
    const dispatch = useAppDispatch();
    return <Action title='Sevkiyatı Tamamla' color='blue' onClick={()=>{
        // alert('complate offer')
         dispatch(update({  id, values:{ status:'complated' } }))
         notifySuccess('Sevkiyat Tamamlandı!')
    }} path='#' />
}    

export const ApproveToOffer = ({item, id}:ItemState) => {
    const dispatch = useAppDispatch();
    return <Action title='Teslimatı Onayla' color='blue' onClick={()=>{
        // alert('approve to offer')
        if(id) dispatch(update({  id, values:{ status:'accepted' } }))
        notifySuccess('Teslimat Onaylandı!')
    }}  path='#' />
}

export const StartToOffer = ({item, id}:ItemState) => {
    const dispatch = useAppDispatch();
    return <Action title='Sevkiyatı Başlat' color='blue' onClick={()=>{
        // alert('start to inshipment')
        dispatch(update({  id, values:{ status:'inshipment' } }))
        notifySuccess('Sevkiyata Başlandı!')
    }} path='#' />
} 

export const UndoToOffer = ({item, id}:ItemState) => {
    const dispatch = useAppDispatch();
    return <Action title='Teklifi Geri Al' color='blue' onClick={()=>{
         alert('return back to offer [REMOVE]')
    }}  path='#' />
}

export const InspectToOffer = ({item}:ItemState) => {
    const {open, close}:any = useModal(state=>state);
    return <Action title='Diğer Teklifleri İncele (5)' onClick={()=>{
         open({type:'show-offers', styles:default15, values:{item},  })
    }}  color='blue' path='#' />
}

export const SendOffer = ({item, status}:ItemState) => {
    const dispatch = useAppDispatch();
    return <Action title='Teklif Gönder' color='blue'disabled={!status} 
    onClick={()=>{
        // alert('send offer')
        dispatch(create({ cargo:'', vehicle:''  }))
    }} path='#' />
}

export const openOfferSendModal = ({item}:ItemState) => {
    const {open, close}:any = useModal(state=>state);
    open({type:'show-vehicle', styles:default15, values:{item} })
} 

export const CancelToOffer = ({item, id}:ItemState) => {
    const dispatch = useAppDispatch();
    return  <Action title='Vazgeç' color='gray' onClick={()=>{
        // alert('reject / remove to offer')
         dispatch(update({  id, values:{ status:'rejected' } }))
    }} outline path='#' />
}

export const OffersInspect = ({item}:ItemState) => {
    const {open, close}:any = useModal(state=>state);

   return <Action title='Teklifleri İncele (3)' onClick={()=>{
        open({type:'show-offers', styles:default15, values:{item} })
    }} color='blue' path='#' />
}
