//首页获取数据
import service from "..";
//获取轮播图数据
export function getBanner(){
    return service({
        method:"GET",
        url:'/banner?type=2',
    })
}

//获取音乐列表
export function getMusic(){
    return service({
        method:"GET",
        url:'/personalized?limit=10',
    })
}