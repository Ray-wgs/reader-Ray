import {getAxios} from '@/api'
export  function getBooksData(params){
    return getAxios('http://localhost:5200/books/'+params)
}
export function getImgUrl(params){
    return getAxios('http://localhost:5200/imgs/'+params)
}
