import {latLon} from './latLon'

export class DirectionWhithWaypoints{
    username:String
    title:String
    description:String
    travelMode:String
    origin: latLon
    destination:latLon
    waypoints:latLon[] //string ID 
    visible:boolean
}