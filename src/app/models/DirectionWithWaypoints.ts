export class DirectionWhithWaypoints{
    id:String
    username:String
    title:String
    description:String
    travelMode:String
    origin: {lat: number, lng: number}
    destination:{lat: number,lng: number}
    intermidiatePoints: {lat: number,lng: number}[]
    
    visible:boolean
    type:boolean
    images:FileList
    isTracked:boolean
    imagesS:any[]
}