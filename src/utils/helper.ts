import React, { useEffect } from "react";  
import moment from 'moment'; 
import slug from "slug";


export function slugify(value:string='', options={}) {
    return slug((String(value)), options) || ''
};



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
        console.log(el)
        const {type,count, _id} = el;
        let l = {type, count, num:generateRandomNDigits(15), typeId,_id}; 
        list.push(l)
    })
    return list;
 }
 

export const capitalize = (str:string) => {
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
                console.log(s, t._id)
                l.push(t.name)
            }
        })
    });
    console.log('l',l)
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
    console.log('defined:',definitions, select, str)
    console.log('defined:',defined(definitions, select, '_id', str))
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