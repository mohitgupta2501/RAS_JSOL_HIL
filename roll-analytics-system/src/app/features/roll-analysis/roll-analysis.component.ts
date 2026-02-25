import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import * as echarts from 'echarts';
import { DatetimePickerComponent } from '../../shared/components/datetime-picker/datetime-picker.component';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef, GridOptions } from 'ag-grid-community';

interface RollUsageData {
  cycleNo: number;
  plant: string;
  position: string;
  rolledLength: number;
  cycleStartDate: string;
  cycleEndDate: string;
  diameterStart: number;
  diameterEnd: number;
  maintCost: number;
  remarks: string;
  spall: string;
  crack: string;
  uniformCirculation: string;
  fitForUse: string;
}

@Component({
  selector: 'app-roll-analysis',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxEchartsModule, DatetimePickerComponent, AgGridAngular],
  templateUrl: './roll-analysis.component.html',
  styleUrl: './roll-analysis.component.scss'
})
export class RollAnalysisComponent implements OnInit {
  // Breadcrumb + layout are static in template

  // Filter bar dropdown state
  openDropdown: string | null = null;

  readonly rollIdOptions = ['WR123', 'WR456', 'VR789'];
  readonly millOptions = ['R1', 'R2', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7'];
  readonly positionOptions = ['Top', 'Bottom'];

  selectedRollId = this.rollIdOptions[0];
  selectedMill = this.millOptions[0];
  selectedPosition = this.positionOptions[0];

  // KPI mock data is rendered directly in template from hardcoded values

  // Charts
  diameterChartOptions: EChartsOption = {};
  utilizationChartOptions: EChartsOption = {};

  // Roll usage table + modal (copied pattern from Roll Details)
  activeTab: 'dia' | 'usage' = 'usage';
  showEditModal = false;
  showDefectModal = false;
  showToast = false;
  toastMessage = 'Cycle updated successfully';

  currentPage = 1;
  readonly itemsPerPage = 5;
  readonly totalPages = 1;

  readonly spallOptions = ['Yes', 'No'];
  readonly crackOptions = ['Yes', 'No'];
  readonly uniformCircOptions = ['Good', 'Average', 'Poor'];
  readonly fitForUseOptions = ['Yes', 'No'];

  rollUsageData: RollUsageData[] = [
    {
      cycleNo: 1,
      plant: 'Mill 1',
      position: 'Top',
      rolledLength: 600,
      cycleStartDate: '2025-03-11',
      cycleEndDate: '2025-01-15',
      diameterStart: 483,
      diameterEnd: 441,
      maintCost: 0.1,
      remarks: 'Normal wear',
      spall: 'No',
      crack: 'No',
      uniformCirculation: 'Good',
      fitForUse: 'Yes'
    },
    {
      cycleNo: 2,
      plant: 'Mill 1',
      position: 'Top',
      rolledLength: 600,
      cycleStartDate: '2025-03-15',
      cycleEndDate: '2025-01-20',
      diameterStart: 441,
      diameterEnd: 403,
      maintCost: 0.2,
      remarks: 'High usage',
      spall: 'Yes',
      crack: 'No',
      uniformCirculation: 'Average',
      fitForUse: 'Yes'
    },
    {
      cycleNo: 3,
      plant: 'Mill 1',
      position: 'Bottom',
      rolledLength: 600,
      cycleStartDate: '2025-02-18',
      cycleEndDate: '2025-01-20',
      diameterStart: 403,
      diameterEnd: 389,
      maintCost: 0.2,
      remarks: 'High usage',
      spall: 'Yes',
      crack: 'Yes',
      uniformCirculation: 'Poor',
      fitForUse: 'Yes'
    },
    {
      cycleNo: 4,
      plant: 'Mill 1',
      position: 'Bottom',
      rolledLength: 600,
      cycleStartDate: '2025-02-15',
      cycleEndDate: '2025-01-20',
      diameterStart: 389,
      diameterEnd: 361,
      maintCost: 0.3,
      remarks: 'High usage',
      spall: 'No',
      crack: 'Yes',
      uniformCirculation: 'Average',
      fitForUse: 'Yes'
    },
    {
      cycleNo: 5,
      plant: 'Mill 1',
      position: 'Top',
      rolledLength: 500,
      cycleStartDate: '2025-03-15',
      cycleEndDate: '2025-01-20',
      diameterStart: 361,
      diameterEnd: 360,
      maintCost: 0.2,
      remarks: 'High usage',
      spall: 'No',
      crack: 'No',
      uniformCirculation: 'Good',
      fitForUse: 'No'
    }
  ];

  rollUsageRowData = [
    {
      cycleNo: 1,
      plant: 'Mill 1',
      position: 'Top',
      rolledLength: 600,
      cycleStartDate: '2025-03-11',
      cycleEndDate: '2025-01-15',
      diameterStart: 483,
      diameterEnd: 441,
      maintCost: 0.1,
      remarks: 'Normal wear',
      spall: 'No',
      crack: 'No',
      uniformCirculation: 'Good',
      fitForUse: 'Yes'
    },
    {
      cycleNo: 2,
      plant: 'Mill 1',
      position: 'Top',
      rolledLength: 600,
      cycleStartDate: '2025-03-15',
      cycleEndDate: '2025-01-20',
      diameterStart: 441,
      diameterEnd: 403,
      maintCost: 0.2,
      remarks: 'High usage',
      spall: 'Yes',
      crack: 'No',
      uniformCirculation: 'Average',
      fitForUse: 'Yes'
    },
    {
      cycleNo: 3,
      plant: 'Mill 1',
      position: 'Bottom',
      rolledLength: 600,
      cycleStartDate: '2025-02-18',
      cycleEndDate: '2025-01-20',
      diameterStart: 403,
      diameterEnd: 389,
      maintCost: 0.2,
      remarks: 'High usage',
      spall: 'Yes',
      crack: 'Yes',
      uniformCirculation: 'Poor',
      fitForUse: 'Yes'
    },
    {
      cycleNo: 4,
      plant: 'Mill 1',
      position: 'Bottom',
      rolledLength: 600,
      cycleStartDate: '2025-02-15',
      cycleEndDate: '2025-01-20',
      diameterStart: 389,
      diameterEnd: 361,
      maintCost: 0.3,
      remarks: 'High usage',
      spall: 'No',
      crack: 'Yes',
      uniformCirculation: 'Average',
      fitForUse: 'Yes'
    },
    {
      cycleNo: 5,
      plant: 'Mill 1',
      position: 'Top',
      rolledLength: 500,
      cycleStartDate: '2025-03-15',
      cycleEndDate: '2025-01-20',
      diameterStart: 361,
      diameterEnd: 360,
      maintCost: 0.2,
      remarks: 'High usage',
      spall: 'No',
      crack: 'No',
      uniformCirculation: 'Good',
      fitForUse: 'No'
    }
  ];

  readonly rollUsageColumnDefs: ColDef[] = [
    {
      headerName: 'CYCLE NO',
      field: 'cycleNo',
      width: 100,
      pinned: 'left',
      cellRenderer: (params: any) =>
        `<span style="color:#00D4FF;font-weight:700;font-size:14px">${params.value}</span>`
    },
    {
      headerName: 'PLANT',
      field: 'plant',
      width: 100,
      cellStyle: {
        color: '#E8F0FE',
        fontSize: '13px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    },
    {
      headerName: 'POSITION',
      field: 'position',
      width: 110,
      cellRenderer: (params: any) => {
        const color = params.value === 'Top' ? '#00D4FF' : '#A78BFA';
        return `<span style="color:${color};font-weight:600;font-size:13px">${params.value}</span>`;
      }
    },
    {
      headerName: 'ROLLED LENGTH',
      field: 'rolledLength',
      width: 130,
      cellStyle: {
        color: '#E8F0FE',
        fontWeight: '700',
        fontSize: '13px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    },
    {
      headerName: 'CYCLE START DATE',
      field: 'cycleStartDate',
      width: 150,
      cellStyle: {
        color: '#7B90B8',
        fontSize: '13px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    },
    {
      headerName: 'CYCLE END DATE',
      field: 'cycleEndDate',
      width: 140,
      cellStyle: {
        color: '#7B90B8',
        fontSize: '13px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    },
    {
      headerName: 'DIAMETER (START)',
      field: 'diameterStart',
      width: 145,
      cellRenderer: (params: any) =>
        `<span style="color:#00E5A0;font-weight:600;font-size:13px">${params.value}</span>`
    },
    {
      headerName: 'DIAMETER (END)',
      field: 'diameterEnd',
      width: 135,
      cellRenderer: (params: any) =>
        `<span style="color:#FF8C42;font-weight:600;font-size:13px">${params.value}</span>`
    },
    {
      headerName: 'MAINT COST (MINR)',
      field: 'maintCost',
      width: 150,
      cellRenderer: (params: any) =>
        `<span style="color:#FF4560;font-weight:600;font-size:13px">${params.value}</span>`
    },
    {
      headerName: 'REMARKS',
      field: 'remarks',
      flex: 1,
      minWidth: 120,
      cellStyle: {
        color: '#E8F0FE',
        fontSize: '13px',
        display: 'flex',
        alignItems: 'center'
      }
    },
    {
      headerName: 'SPALL',
      field: 'spall',
      width: 90,
      cellRenderer: (params: any) => {
        const isYes = params.value === 'Yes';
        const color = isYes ? '#FF4560' : '#00E5A0';
        return `<span style="color:${color};font-weight:600;font-size:13px">${params.value}</span>`;
      }
    },
    {
      headerName: 'CRACK',
      field: 'crack',
      width: 90,
      cellRenderer: (params: any) => {
        const isYes = params.value === 'Yes';
        const color = isYes ? '#FF4560' : '#00E5A0';
        return `<span style="color:${color};font-weight:600;font-size:13px">${params.value}</span>`;
      }
    },
    {
      headerName: 'UNIFORM CIRCULATION',
      field: 'uniformCirculation',
      width: 170,
      cellRenderer: (params: any) => {
        const colorMap: any = {
          Good: '#00E5A0',
          Average: '#FF8C42',
          Poor: '#FF4560'
        };
        const color = colorMap[params.value] || '#E8F0FE';
        return `<span style="color:${color};font-weight:600;font-size:13px">${params.value}</span>`;
      }
    },
    {
      headerName: 'FIT FOR USE',
      field: 'fitForUse',
      width: 110,
      cellRenderer: (params: any) => {
        const isYes = params.value === 'Yes';
        const color = isYes ? '#00E5A0' : '#FF4560';
        return `<span style="color:${color};font-weight:600;font-size:13px">${params.value}</span>`;
      }
    }
  ];

  readonly defaultColDef: ColDef = {
    resizable: true,
    sortable: true,
    suppressMovable: true,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '13px',
      color: '#E8F0FE',
      padding: '0 16px',
      lineHeight: '1.4'
    }
  };

  readonly gridOptions: GridOptions = {
    rowHeight: 52,
    headerHeight: 44,
    domLayout: 'autoHeight',
    suppressCellFocus: true,
    pagination: true,
    paginationPageSize: 10,
    suppressPaginationPanel: true,
    suppressHorizontalScroll: false,
    suppressColumnVirtualisation: true,
    rowClass: 'custom-row'
  };

  editCycleData = {
    rolledLength: null as number | null,
    maintCost: null as number | null,
    rollChangeTime: '',
    remarks: ''
  };

  defectForm = {
    spall: 'No',
    crack: 'No',
    uniformCirculation: 'Good',
    fitForUse: 'No'
  };

  openDefectDropdown: string | null = null;

  ngOnInit(): void {
    this.buildDiameterChart();
    this.buildUtilizationChart();
  }

  private buildDiameterChart(): void {
    this.diameterChartOptions = {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(15, 26, 46, 0.95)',
        borderColor: 'rgba(0, 212, 255, 0.2)',
        textStyle: { color: '#E8F0FE' }
      },
      legend: {
        bottom: 0,
        textStyle: { color: '#7B90B8' }
      },
      grid: {
        left: '6%',
        right: '6%',
        top: '10%',
        bottom: '16%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7'],
        axisLabel: { color: '#7B90B8' },
        axisLine: { lineStyle: { color: '#1A2844' } }
      },
      yAxis: [
        {
          type: 'value',
          name: 'Diameter (mm)',
          nameTextStyle: { color: '#7B90B8' },
          axisLabel: { color: '#7B90B8' },
          splitLine: { lineStyle: { color: 'rgba(26,40,68,0.8)' } }
        },
        {
          type: 'value',
          name: 'Rolled (TON)',
          nameTextStyle: { color: '#FF8C42' },
          axisLabel: { color: '#FF8C42' },
          splitLine: { show: false },
          position: 'right'
        }
      ],
      series: [
        {
          name: 'Diameter',
          type: 'bar',
          emphasis: { focus: 'series' },
          data: [3000, 2760, 2510, 2280, 2020, 1775, 1520],
          itemStyle: { color: '#3b82f6' },
          yAxisIndex: 0
        },
        {
          name: 'New Diameter',
          type: 'bar',
          stack: 'Ad',
          emphasis: { focus: 'series' },
          data: [2760, 2510, 2280, 2020, 1775, 1520, 1285],
          itemStyle: { color: '#84cc16' },
          yAxisIndex: 0
        },
        {
          name: 'Grind',
          type: 'bar',
          stack: 'Ad',
          emphasis: { focus: 'series' },
          data: [35, 40, 25, 45, 30, 30, 28],
          itemStyle: { color: '#6b7280' },
          yAxisIndex: 0
        },
        {
          name: 'Wear',
          type: 'bar',
          stack: 'Ad',
          emphasis: { focus: 'series' },
          data: [205, 210, 205, 215, 215, 225, 207],
          itemStyle: { color: '#FF8C42' },
          yAxisIndex: 0
        },
        {
          name: 'Rolled TON',
          type: 'line',
          yAxisIndex: 1,
          data: [1251, 1180, 976, 968, 890, 820, 750],
          lineStyle: { color: '#00D4FF', width: 2 },
          itemStyle: { color: '#00D4FF' },
          symbol: 'circle',
          symbolSize: 6,
          smooth: true
        }
      ]
    };
  }

  private buildUtilizationChart(): void {
    this.utilizationChartOptions = {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(15, 26, 46, 0.95)',
        borderColor: 'rgba(0, 212, 255, 0.2)',
        textStyle: { color: '#E8F0FE' }
      },
      legend: {
        bottom: 0,
        textStyle: { color: '#7B90B8' }
      },
      grid: {
        left: '6%',
        right: '6%',
        top: '10%',
        bottom: '16%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7'],
        axisLabel: { color: '#7B90B8' },
        axisLine: { lineStyle: { color: '#1A2844' } }
      },
      yAxis: {
        type: 'value',
        name: 'Utilization (%)',
        min: 0,
        max: 100,
        axisLabel: {
          color: '#7B90B8',
          formatter: '{value}%'
        },
        splitLine: { lineStyle: { color: 'rgba(26,40,68,0.8)' } }
      },
      series: [
        {
          name: 'Utilization',
          type: 'line',
          smooth: true,
          data: [73, 70, 49, 45, 38, 32, 24],
          lineStyle: { color: '#00D4FF', width: 2 },
          itemStyle: { color: '#00D4FF' },
          symbol: 'circle',
          symbolSize: 6,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(0,212,255,0.2)' },
              { offset: 1, color: 'rgba(0,212,255,0.0)' }
            ])
          }
        }
      ]
    };
  }

  // Dropdown helpers
  toggleDropdown(name: string): void {
    this.openDropdown = this.openDropdown === name ? null : name;
  }

  selectRollId(id: string): void {
    this.selectedRollId = id;
    this.openDropdown = null;
  }

  selectMill(mill: string): void {
    this.selectedMill = mill;
    this.openDropdown = null;
  }

  selectPosition(pos: string): void {
    this.selectedPosition = pos;
    this.openDropdown = null;
  }

  toggleDefectDropdown(name: string, event: Event): void {
    event.stopPropagation();
    this.openDefectDropdown = this.openDefectDropdown === name ? null : name;
  }

  selectDefectOption(
    field: 'spall' | 'crack' | 'uniformCirculation' | 'fitForUse',
    value: string,
    event: Event
  ): void {
    event.stopPropagation();
    this.defectForm[field] = value as any;
    this.openDefectDropdown = null;
  }

  // Roll usage edit modal
  openEditModal(): void {
    const lastRow = this.rollUsageData[this.rollUsageData.length - 1];
    this.editCycleData = {
      rolledLength: lastRow.rolledLength,
      maintCost: lastRow.maintCost,
      rollChangeTime:
        (lastRow as RollUsageData & { rollChangeTime?: string }).rollChangeTime ?? '',
      remarks: lastRow.remarks
    };
    this.showEditModal = true;
  }

  closeEditModal(): void {
    this.showEditModal = false;
    this.resetEditForm();
  }

  private resetEditForm(): void {
    this.editCycleData = {
      rolledLength: null,
      maintCost: null,
      rollChangeTime: '',
      remarks: ''
    };
  }

  saveEdit(): void {
    const lastIndex = this.rollUsageData.length - 1;
    const lastRow = this.rollUsageData[lastIndex];

    this.rollUsageData[lastIndex] = {
      ...lastRow,
      rolledLength: this.editCycleData.rolledLength ?? lastRow.rolledLength,
      maintCost: this.editCycleData.maintCost ?? lastRow.maintCost,
      remarks: this.editCycleData.remarks
    };
    this.showEditModal = false;
    this.toastMessage = 'Cycle updated successfully';
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 3500);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!(event.target as HTMLElement).closest('.custom-select')) {
      this.openDropdown = null;
    }
  }

  // Defect modal
  openDefectModal(): void {
    this.showDefectModal = true;
    this.openDefectDropdown = null;
  }

  closeDefectModal(): void {
    this.showDefectModal = false;
    this.openDefectDropdown = null;
  }

  saveDefect(): void {
    this.closeDefectModal();
    this.toastMessage = 'Defect logged successfully';
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
      this.toastMessage = 'Cycle updated successfully';
    }, 3500);
  }
}

