import service from "..";
//获取歌单数据
export function getItemMusic(data){
    return service({
        method:"GET",
        url:`/playlist/detail?id=${data}`,
    })
}
//获取歌曲数据
export function getMusicList(data){
    return service({
        method:"GET",
        url:`/playlist/track/all?id=${data}&limit=20&offset=0`
    })
}

//获取歌词数据
export function getLyric(data){
    return service({
        method:"GET",
        url:`/lyric?id=${data}`
    })
}