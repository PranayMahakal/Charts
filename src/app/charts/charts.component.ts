import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
   chartOptionsArray:any=[];
    donut:string="pie";
    newOptions:any;


    DataArray=[{
      key:"jan",
      value:"10"
    },
  {
    key:"feb",
    value:"20"
  },
  {
    key:"Mar",
    value:"15"
  },
  {
    key:"Apr",
    value:"30"
  },
  {
    key:"MAy",
    value:"25"
  }]
jsonDataArray=[{
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 130, 62, 69, 91, 124]
        }
      ],
      chart: {
        height: 350,
        type: "area"
      },
      title: {
        text: "Area Chart"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "Mayb",  "Jun",  "Jul",  "Aug", "Sep"]
      },
      stroke:{
        curve:"stepline"},
      stacked:"true"
    },
    {
      series: [
        {
          name: "My-series",
          data: [ 0,20, 90,40, 80,40,30, 25,0,24,90]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      title: {
        text: "Line Chart(stepline)"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "Mayb",  "Jun",  "Jul",  "Aug", "Sep"]
      },
      stroke:{
        curve:"stepline"},
      stacked:"true"
    },
    {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 130, 62, 69, 91, 124]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      title: {
        text: "line Chart(straight)"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "Mayb",  "Jun",  "Jul",  "Aug", "Sep"]
      },
      stroke:{
        curve:"straight"},
      stacked:"true"
    }, {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 130, 62, 69, 91, 124]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      title: {
        text: "line Chart(smooth)"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "Mayb",  "Jun",  "Jul",  "Aug", "Sep"]
      },
      stroke:{
        curve:"smooth"},
      stacked:"true"
    },
    {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 130, 62, 69, 91, 124]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "Bar Chart"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "Mayb",  "Jun",  "Jul",  "Aug", "Sep"]
      },
      stroke:{
        curve:"stepline"},
      stacked:"true"
    },
    {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 130, 62, 69, 91, 124]
        }
      ],
      chart: {
        height: 350,
        type: "pie"
      },
      title: {
        text: "My First Angular Chart"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "Mayb",  "Jun",  "Jul",  "Aug", "Sep"]
      },
      stroke:{
        curve:"stepline"},
      stacked:"true",
      
        
          distributed: "true"
        
      
    }
   
    
   
  ]

  ngOnInit(): void {
    this.buildWindow();
     this.buildNew();
  
  }
  buildWindow(){
        this.jsonDataArray.forEach((chartStructure)=>{
          this.buildChart(chartStructure);
          
      })
      // this.buildChart(this.DataArray)
  }
  buildChart(jsonData:any){
    console.log("build executing")
          
      this.chartOptions = {
        series: jsonData.series.map((seriesItem: any) => ({
          name: seriesItem.name,
          data: seriesItem.data
        })),
        chart: {
          type:jsonData.chart.type || 'bar', // Default to 'bar' if chartType is not provided
          height:jsonData.chart.height || 350 // Default to 350 if chartHeight is not provided
        },
        title: {
          text: jsonData.title.text || 'My Angular Chart' // Default title if titleText is not provided
        },
        xaxis: {
          categories: jsonData.xaxis.categories || [] // Default to an empty array if categories are not provided
        },
        stroke: {
          curve: jsonData.stroke.curve || '',
        },
        stacked:jsonData.stacked ||'',
     
        plotOptions: {
          bar: {
            distributed:jsonData.distributed || "false"
          }
        } 
      };
      this.chartOptionsArray.push(this.chartOptions);
      
  }
  buildNew(){
    this.chartOptions = {
        series: [{
          name: "Array ",
          data: this.DataArray.map((dataObject)=>dataObject.value)
        }],
        chart: {
          type:'bar', 
          height: 350 
        },
        title: {
          text: 'My Angular Chart' // Default title if titleText is not provided
        },
        xaxis: {
          categories: this.DataArray.map((dataObject)=>dataObject.key)|| [] // Default to an empty array if categories are not provided
        },
  
      
        plotOptions: {
          bar: {
            distributed: "true"
          }
        } 
      };
      
      this.chartOptionsArray.push(this.chartOptions);
      
       
  }
}
