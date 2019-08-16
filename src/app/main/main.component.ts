import { Component, OnInit } from '@angular/core';
import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch, } from "nativescript-geolocation";
import { EventDto } from '../model/eventDto';
import { EventService } from '../event.service';

@Component({
  selector: 'ns-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  moduleId: module.id,
})
export class MainComponent implements OnInit {
  private eventDto:EventDto=new EventDto();
  constructor(private eventService:EventService) { }

  ngOnInit() {
    
  }
  addEvent(){
    var location = getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}).
    then(function(loc) {
        if (loc) {
            console.log("Current location is: " + JSON.stringify(loc));
            this.eventDto.user="Robick";
            this.eventDto.location=loc;
            this.eventService.addEvent(this.eventDto).subscribe(resposne => {
              console.log("Added event"+JSON.stringify(resposne));
            })
        }
    }, function(e){
        console.log("Error: " + e.message);
    });
  }
  

}
// export function public enableLocationTap() {
//   geolocation.isEnabled().then(function (isEnabled) {
//       if (!isEnabled) {
//           geolocation.enableLocationRequest().then(function () {
//           }, function (e) {
//               console.log("Error: " + (e.message || e));
//           });
//       }
//   }, function (e) {
//       console.log("Error: " + (e.message || e));
//   });
//}
