import request from '@/utils/request'
export function fetchList(query) {
    console.log(query)
    return request({
        url: '/article/list',
        method: 'get',
        params: query
    })
}