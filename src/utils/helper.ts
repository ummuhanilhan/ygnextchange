import React, { useEffect } from "react";  
import moment from 'moment'; 
import slug from "slug";
import { toast } from "react-toastify";
import { setAutoFreeze } from 'immer';
import api from "@utils/api";
import useSWR from "swr";

export const server = typeof window === "undefined";

export function slugify(value:string='', options={}) {
    return slug((String(value)), options) || ''
};

export const fetcher = (path:string) => api.get(path).then(res => res.data)
export const fetcher2 = ({url, values=null, method='post'}:any) => api({
    method,
    url,
    data:{
        ...values,
    }
  }).then(res => res.data)
  
  export const useQuery = (url:string, values:any=null, method='post') => {
    const { data, error } = useSWR(url, ()=>api({
      method,
      url,
      data:{
          ...values,
      }
    }).then(res => res.data))
  
    return {
      data,
      loading: !error && !data,
      error
    }
  }

export function toSelectItem(items: any[], id:boolean=false) {
    return items?.map(m => ({ label: m.name, value: id? m._id : m.slug }))
};


export const randomBinary = (min:number, max:number) => {
    return Math.floor(min + Math.random() * (max + 1 - min)).toString(2);
}

export const getRandomInt = (min:number, max:number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
export const generateRandomNDigits = (n:number) => {
    return Math.floor(Math.random() * (9 * (Math.pow(10, n)))) + (Math.pow(10, n));
} 

export const updateItemById = (data:any, item:any, code:string) => {
    let list = [...data];
    const index = list.findIndex(l=>l.code==code)
    list.splice(index,1,item)
    return list;
 } 
 
export function isNumber(data:any) {
    return (typeof data === 'number' && !isNaN(data));
}

 export const reformatRequirements = (data:any,typeId:string) => {
    let list:any = [];
    data?.map((el:any)=>{
        const {type,count, _id} = el;
        let l = {type, count, num:generateRandomNDigits(15), typeId,_id}; 
        list.push(l)
    })
    return list;
 }
 

export const capitalize = (str:string) => {
    if(!str) return;
    const lower = str.toLocaleLowerCase()
    return str.charAt(0).toUpperCase() 
    + lower.slice(1); 
}

export const fieldNames = (value:string) =>{
    switch (value) {
        case 'Name':
            return 'İsim alanı'
        case 'Email':
            return 'Eposta alanı'
        case 'Password':
            return 'Şifre alanı'
        break;
        default:
            break;
    }
}


const DATE_FORMAT = 'DD.MM.YYYY';
const TIME_FORMAT = "HH:mm";
const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;

export function toDateString(date: Date) {
    return moment(date).format(DATE_FORMAT);
}

export function toTimeString(date: Date) {
    return moment(date).format(TIME_FORMAT);
}

export function toDateTimeString(date: Date) {
    return moment(date).format(DATE_TIME_FORMAT);
}

export function dateWithoutTime(date?: Date) {
    return date ? moment(date).startOf('day').toDate() : date;
} 

/** HOOK HELPERS **/

export const useTitle = (title:string) => {
    useEffect(()=>{
        document.title = title;
    },[title])
    return;
}  

export const useBackground = (title:string='#fafafa') => {
    useEffect(()=>{
        document.body.style.background= title;
        return () => {
            document.body.style.background= '#fff'
        }
    },[title])
    return;
} 

export const defined = (definitions:any, slug:string, select:string='slug',  result:boolean=false) => {
    const type = definitions?.find((t:any)=> (select=='_id'? t._id : t.slug ) == slug);
    return result ? type : type?.name ;
}

export const defines = (definitions:any, selection:any, str:boolean=false) => {
    const l:any = [];
    selection?.map((s:any)=>{
    definitions?.map((t:any)=>{
            if(s == t._id) {
                l.push(t.name)
            }
        })
    });
    return str ? l.toString().replace(/,/g, " - ") : l;
}

export const formattedDefines = (definitions:any) => {
    const newDefinitions:any = {};
    Object.entries(definitions).map((el:any,i:any)=>{
        const name = el[0];
        const items = el[1];
        items?.length > 0 && items?.map((item:any)=>{
            newDefinitions[item._id] = item; 
        })
   })
   return newDefinitions;
}

export const defineById = (definitions:any, select:string, str:boolean=false) => {
    let newDefinitions:any = {}
    if(!Array.isArray(definitions)){
        if(typeof definitions == 'object'){
            newDefinitions = formattedDefines(definitions);
            return !str ? newDefinitions[select]?.name : newDefinitions[select] ;
        }

   }else{
            return defined(definitions, select, '_id', str);
    }
}

 

export const defineManyById = (definitions:any, selection:any) => {
    const newSelection:any = [];
    selection.map((select:any)=>{
         const name = defineById(definitions, select);
         newSelection.push(name);
    })
    return newSelection;
}


export const changeDate = (value:string) =>{
    switch (value) {
      case '1week':
        return add(6.048e+8)
      break;
      case '10day':
        return add(10)
      break;
      case '1month':
        return add(6.048e+8 * 4)
      default:
        return add(6.048e+8)
      break;
    }
  }
export const add = (increment:number) => new Date(Date.now() + increment)

export const  Capitalize = (string:string) => {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
}

export const formSuite = (obj:any) => {
    setAutoFreeze(false);
    let data = {...obj};
    delete data._id
    delete data.__v
    delete data.created_at
    delete data.updated_at
    delete data.user
    delete data.viewing
    delete data.privacy
   if(data.publish?.start){
        const {start,end} = data.publish;
        const startDate = start.date;
        const endDate = end.date;
         // if(startDate) data.publish.start.date = new Date(startDate) 
         // if(endDate) data.publish.end.date = new Date(endDate) 
   }
    return data;
}


export const notify = (title:string='', obj:object={}) =>  toast(title||'🦄 Wow so easy!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    type: 'success',
    ...obj,
});

function firstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function currencyFormat(price:string, currency:string) {
    switch (currency) {
        case 'try':
            return price + '₺' 
        break;
        case 'usd':
            return '$' + price
        break;
        default:
            return price + '₺';
        break;
    }
    return;
}
  

export const priceFormat = (price:string) => {
    return new Intl.NumberFormat('try').format(parseInt(price))||price;
}


export const successMessage = () => notify('',{position:'bottom-center', theme:'light'})
export const errMessage = (message:string) => message && notify(message||'Boş alanları doldurunuz!',{position:'bottom-right', theme:'light', type:'error'})


export const definedVehicle = (value:string) => {
        switch (value) {
            case 'truck':
                
            break;
        
            default:
                break;
        }
}
