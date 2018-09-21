import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css']
})
export class DevicesListComponent {

  displayedColumns = ['siteId', 'siteName', 'siteAreaName', 'equipmentName', 'conditionLevel', 'vibrationLevel', 'equipmentTemperature', 'equipmentUtilization', 'powerUsage', 'runningIndicator'];
  // dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  dataSource = new MatTableDataSource<Element>(deviceLists);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Element {
  siteId: number;
  siteName: string;
  siteAreaName: string;
  equipmentName: string;
  conditionLevel: string;
  vibrationLevel: string;
  equipmentTemperature: string;
  equipmentUtilization: string;
  powerUsage: string;
  runningIndicator: boolean;
}

// export interface Element {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }


/*const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];*/
const deviceLists: Element[] = [
  {
    siteId: 1,
    siteName: 'Site B',
    siteAreaName: 'IT Delivery',
    equipmentName: 'Cooling Tower 1',
    conditionLevel: 'Good',
    vibrationLevel: '0.66',
    equipmentTemperature: '26C',
    equipmentUtilization: '85 % ',
    powerUsage: '225 KWH',
    runningIndicator: true
  },
  {
    siteId: 2,
    siteName: 'Site B',
    siteAreaName: 'IT Delivery',
    equipmentName: 'Cooling Tower 1',
    conditionLevel: 'Good',
    vibrationLevel: '0.66',
    equipmentTemperature: '26C',
    equipmentUtilization: '85 % ',
    powerUsage: '225 KWH',
    runningIndicator: true
  },
  {
    siteId: 3,
    siteName: 'Site B',
    siteAreaName: 'IT Delivery',
    equipmentName: 'Cooling Tower 1',
    conditionLevel: 'Good',
    vibrationLevel: '0.66',
    equipmentTemperature: '26C',
    equipmentUtilization: '85 % ',
    powerUsage: '225 KWH',
    runningIndicator: true
  },
  {
    siteId: 4,
    siteName: 'Site B',
    siteAreaName: 'IT Delivery',
    equipmentName: 'Cooling Tower 1',
    conditionLevel: 'Good',
    vibrationLevel: '0.66',
    equipmentTemperature: '26C',
    equipmentUtilization: '85 % ',
    powerUsage: '225 KWH',
    runningIndicator: true
  },
  {
    siteId: 5,
    siteName: 'Site B',
    siteAreaName: 'IT Delivery',
    equipmentName: 'Cooling Tower 1',
    conditionLevel: 'Good',
    vibrationLevel: '0.66',
    equipmentTemperature: '26C',
    equipmentUtilization: '85 % ',
    powerUsage: '225 KWH',
    runningIndicator: true
  },
  {
    siteId: 6,
    siteName: 'Site B',
    siteAreaName: 'IT Delivery',
    equipmentName: 'Cooling Tower 1',
    conditionLevel: 'Good',
    vibrationLevel: '0.66',
    equipmentTemperature: '26C',
    equipmentUtilization: '85 % ',
    powerUsage: '225 KWH',
    runningIndicator: true
  },
  {
    siteId: 7,
    siteName: 'Site B',
    siteAreaName: 'IT Delivery',
    equipmentName: 'Cooling Tower 1',
    conditionLevel: 'Good',
    vibrationLevel: '0.66',
    equipmentTemperature: '26C',
    equipmentUtilization: '85 % ',
    powerUsage: '225 KWH',
    runningIndicator: true
  },
  {
    siteId: 8,
    siteName: 'Site B',
    siteAreaName: 'IT Delivery',
    equipmentName: 'Cooling Tower 1',
    conditionLevel: 'Good',
    vibrationLevel: '0.66',
    equipmentTemperature: '26C',
    equipmentUtilization: '85 % ',
    powerUsage: '225 KWH',
    runningIndicator: true
  },
  {
    siteId: 9,
    siteName: 'Site B',
    siteAreaName: 'IT Delivery',
    equipmentName: 'Cooling Tower 1',
    conditionLevel: 'Good',
    vibrationLevel: '0.66',
    equipmentTemperature: '26C',
    equipmentUtilization: '85 % ',
    powerUsage: '225 KWH',
    runningIndicator: true
  },
  {
    siteId: 10,
    siteName: 'Site B',
    siteAreaName: 'IT Delivery',
    equipmentName: 'Cooling Tower 1',
    conditionLevel: 'Good',
    vibrationLevel: '0.66',
    equipmentTemperature: '26C',
    equipmentUtilization: '85 % ',
    powerUsage: '225 KWH',
    runningIndicator: true
  },
  {
    siteId: 11,
    siteName: 'Site B',
    siteAreaName: 'IT Delivery',
    equipmentName: 'Cooling Tower 1',
    conditionLevel: 'Good',
    vibrationLevel: '0.66',
    equipmentTemperature: '26C',
    equipmentUtilization: '85 % ',
    powerUsage: '225 KWH',
    runningIndicator: true
  },
  {
    siteId: 12,
    siteName: 'Site B',
    siteAreaName: 'IT Delivery',
    equipmentName: 'Cooling Tower 1',
    conditionLevel: 'Good',
    vibrationLevel: '0.66',
    equipmentTemperature: '26C',
    equipmentUtilization: '85 % ',
    powerUsage: '225 KWH',
    runningIndicator: true
  },
  {
    siteId: 13,
    siteName: 'Site B',
    siteAreaName: 'IT Delivery',
    equipmentName: 'Cooling Tower 1',
    conditionLevel: 'Good',
    vibrationLevel: '0.66',
    equipmentTemperature: '26C',
    equipmentUtilization: '85 % ',
    powerUsage: '225 KWH',
    runningIndicator: true
  },
  {
    siteId: 14,
    siteName: 'Site B',
    siteAreaName: 'IT Delivery',
    equipmentName: 'Cooling Tower 1',
    conditionLevel: 'Good',
    vibrationLevel: '0.66',
    equipmentTemperature: '26C',
    equipmentUtilization: '85 % ',
    powerUsage: '225 KWH',
    runningIndicator: true
  },
  {
    siteId: 3,
    siteName: 'Site B',
    siteAreaName: 'IT Delivery',
    equipmentName: 'Cooling Tower 1',
    conditionLevel: 'Good',
    vibrationLevel: '0.66',
    equipmentTemperature: '26C',
    equipmentUtilization: '85 % ',
    powerUsage: '225 KWH',
    runningIndicator: true
  },
  {
    siteId: 3,
    siteName: 'Site B',
    siteAreaName: 'IT Delivery',
    equipmentName: 'Cooling Tower 1',
    conditionLevel: 'Good',
    vibrationLevel: '0.66',
    equipmentTemperature: '26C',
    equipmentUtilization: '85 % ',
    powerUsage: '225 KWH',
    runningIndicator: true
  },
  {
    siteId: 3,
    siteName: 'Site B',
    siteAreaName: 'IT Delivery',
    equipmentName: 'Cooling Tower 1',
    conditionLevel: 'Good',
    vibrationLevel: '0.66',
    equipmentTemperature: '26C',
    equipmentUtilization: '85 % ',
    powerUsage: '225 KWH',
    runningIndicator: true
  },
  {
    siteId: 3,
    siteName: 'Site B',
    siteAreaName: 'IT Delivery',
    equipmentName: 'Cooling Tower 1',
    conditionLevel: 'Good',
    vibrationLevel: '0.66',
    equipmentTemperature: '26C',
    equipmentUtilization: '85 % ',
    powerUsage: '225 KWH',
    runningIndicator: true
  },
  {
    siteId: 3,
    siteName: 'Site B',
    siteAreaName: 'IT Delivery',
    equipmentName: 'Cooling Tower 1',
    conditionLevel: 'Good',
    vibrationLevel: '0.66',
    equipmentTemperature: '26C',
    equipmentUtilization: '85 % ',
    powerUsage: '225 KWH',
    runningIndicator: true
  },
  {
    siteId: 3,
    siteName: 'Site B',
    siteAreaName: 'IT Delivery',
    equipmentName: 'Cooling Tower 1',
    conditionLevel: 'Good',
    vibrationLevel: '0.66',
    equipmentTemperature: '26C',
    equipmentUtilization: '85 % ',
    powerUsage: '225 KWH',
    runningIndicator: true
  },
  {
    siteId: 3,
    siteName: 'Site B',
    siteAreaName: 'IT Delivery',
    equipmentName: 'Cooling Tower 1',
    conditionLevel: 'Good',
    vibrationLevel: '0.66',
    equipmentTemperature: '26C',
    equipmentUtilization: '85 % ',
    powerUsage: '225 KWH',
    runningIndicator: true
  },
  {
    siteId: 3,
    siteName: 'Site B',
    siteAreaName: 'IT Delivery',
    equipmentName: 'Cooling Tower 1',
    conditionLevel: 'Good',
    vibrationLevel: '0.66',
    equipmentTemperature: '26C',
    equipmentUtilization: '85 % ',
    powerUsage: '225 KWH',
    runningIndicator: true
  },
  {
    siteId: 3,
    siteName: 'Site B',
    siteAreaName: 'IT Delivery',
    equipmentName: 'Cooling Tower 1',
    conditionLevel: 'Good',
    vibrationLevel: '0.66',
    equipmentTemperature: '26C',
    equipmentUtilization: '85 % ',
    powerUsage: '225 KWH',
    runningIndicator: true
  },
  {
    siteId: 3,
    siteName: 'Site B',
    siteAreaName: 'IT Delivery',
    equipmentName: 'Cooling Tower 1',
    conditionLevel: 'Good',
    vibrationLevel: '0.66',
    equipmentTemperature: '26C',
    equipmentUtilization: '85 % ',
    powerUsage: '225 KWH',
    runningIndicator: true
  }
];


