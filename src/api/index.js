import axios from 'axios'
import qs from 'qs'
export function getAxios(url,params) {
    return axios({
        method:'get',
        url:url,
        params:{...params}
    })
}
export function postAxios(url,params){
    return axios({
        method:'post',
        url:url,
        data:
          qs.stringify({
              ...params
          })  
        
    })
}