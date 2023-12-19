import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);
   background:any
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'User Register Details', cols: 1, rows: 1,color: 'linear-gradient(to right, #8843bf, #0722a4)',btn:"userDetails" },
          { title: 'User Register Details', cols: 3, rows: 1,btn:"userDetails",color: 'linear-gradient(90deg, rgba(59,18,222,1) 0%, rgba(208,46,63,1) 100%)' },
          { title: 'User Register Details', cols: 1, rows: 1 ,btn:"userDetails",color: 'linear-gradient(to top, #00c6fb 0%, #005bea 100%)'},
          { title: 'User Register Details', cols: 3, rows: 1 ,btn:"userDetails",color: 'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)'},
          { title: 'User Register Details', cols: 1, rows: 1 ,btn:"userDetails",color: 'linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)'},
          { title: 'User Register Details', cols: 1, rows: 1,btn:"userDetails" ,color: 'linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)'},
          { title: 'User Register Details', cols: 1, rows: 1 ,btn:"userDetails",color: 'linear-gradient(to right, #8843bf, #0722a4)'},
       ];
      }

      return [
        { title: 'User Register Details', cols: 1, rows: 1,color: 'linear-gradient(to right, #8843bf, #0722a4)',btn:"userDetails" },
        { title: 'User Register Details', cols: 1, rows: 1 ,btn:"userDetails",color: 'linear-gradient(90deg, rgba(59,18,222,1) 0%, rgba(208,46,63,1) 100%)'},
        { title: 'User Register Details', cols: 1, rows: 1 ,btn:"userDetails",color: 'linear-gradient(to top, #00c6fb 0%, #005bea 100%)'},
        { title: 'User Register Details', cols: 3, rows: 1 ,btn:"userDetails",color: 'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)'},
        { title: 'User Register Details', cols: 1, rows: 1 ,btn:"userDetails",color: 'linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)'},
        { title: 'User Register Details', cols: 1, rows: 1 ,btn:"userDetails",color: 'linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)'},
        { title: 'User Register Details', cols: 1, rows: 1,btn:"userDetails" ,color: 'linear-gradient(to right, #8843bf, #0722a4)'},
      ];
    })
  );
}
