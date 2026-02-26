import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef, ColGroupDef } from 'ag-grid-community';

type ActiveType = 'rolls' | 'choke';

type RollPos = 'T' | 'B' | 'OP' | 'DR';

interface KpiCard {
  id: 'r1' | 'r2' | 'f1f4' | 'f5f7' | 'ed' | 'pinch';
  label: string;
  subLabel: string;
  types: string[];
  wrCount: number;
  burCount: number;
  edCount?: number;
  pinchCount?: number;
  totalWeight: string;
  totalLength: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
  barGradient: string;
}

interface RollRow {
  stand: string;
  standCategory: 'R1' | 'R2' | 'F1-F4' | 'F5-F7' | 'Edger' | 'Pinch';
  rollNo: string;
  diameter: number;
  matCode: 'SS' | 'FS' | 'HSS' | 'HICHR';
  initCrownMax: number | string;
  initCrownMin: number | string;
  equiCrownMax: number | string;
  equiCrownMin: number | string;
  grindType: '-' | 'CVC' | 'Flat' | 'HSS' | 'HICHR' | 'FS' | 'SS';
  grindIndex: number;
  shim: number;
  accumWeight: number;
  accumSlabs: number;
  accumLength: number;
  supplier: string;
  rollChangeTime: string;
}

interface RollInventoryRow {
  rollNo: string;
  standCategory: string;
  diameter: number;
  materialCode: string;
  initCrownMax: number;
  initCrownMin: number;
  equiCrownMax: number;
  equiCrownMin: number;
  grindType: string;
  grindIndex: number;
  shim: number;
  totalWeight: number;
  totalSlabs: number;
  totalLength: number;
  supplier: string;
  rollGrindTime: string;
}

interface ChokeRow {
  chokeId: string;
  weight: number;
  slabs: number;
  length: number;
  supplier: string;
}

interface EntryForm {
  stand: string;
  pos: '' | RollPos;
  rollNo: string;
  diameter: number | null;
  matCode: '' | 'SS' | 'FS' | 'HSS' | 'HICHR';
  initCrownMax: number | null;
  initCrownMin: number | null;
  equiCrownMax: number | null;
  equiCrownMin: number | null;
  grindType: '' | 'CVC' | 'Flat' | 'HSS' | 'HICHR' | 'FS' | 'SS';
  grindIndex: number | null;
  shim: number | null;
  accumWeight: number | null;
  accumSlabs: number | null;
  accumLength: number | null;
  supplier: string;
  rollChangeTime: string;
  rollType: '' | 'Edger Roll' | 'Pinch Roll';
}

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DatePipe, AgGridAngular],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent implements OnInit {
  private readonly router = inject(Router);

  activeType: ActiveType = 'rolls';

  openEntryModal = false;
  showToast = false;
  openDropdown: 'rollType' | 'grindType' | null = null;

  rollCurrentPage = 1;
  rollPageSize = 10;
  rollTotalRows = 0;

  chokeCurrentPage = 1;
  chokePageSize = 10;
  chokeTotalRows = 0;

  get rollTotalPages(): number {
    return Math.ceil(this.rollTotalRows / this.rollPageSize);
  }

  get rollPaginatedData(): any[] {
    const start = (this.rollCurrentPage - 1) * this.rollPageSize;
    return this.rollInventoryRowData.slice(start, start + this.rollPageSize);
  }

  rollGoToPage(page: number) {
    if (page >= 1 && page <= this.rollTotalPages) {
      this.rollCurrentPage = page;
    }
  }

  rollGetPageNumbers(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.rollTotalPages; i++) pages.push(i);
    return pages;
  }

  get chokeTotalPages(): number {
    return Math.ceil(this.chokeTotalRows / this.chokePageSize);
  }

  get chokePaginatedData(): any[] {
    const start = (this.chokeCurrentPage - 1) * this.chokePageSize;
    return this.chokeRowData.slice(start, start + this.chokePageSize);
  }

  chokeGoToPage(page: number) {
    if (page >= 1 && page <= this.chokeTotalPages) {
      this.chokeCurrentPage = page;
    }
  }

  chokeGetPageNumbers(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.chokeTotalPages; i++) pages.push(i);
    return pages;
  }

  min(a: number, b: number): number {
    return Math.min(a, b);
  }

  readonly kpiCards: KpiCard[] = [
    {
      id: 'r1',
      label: 'R1',
      subLabel: 'Roughing\nStand 1',
      types: ['WR', 'BUR'],
      wrCount: 6,
      burCount: 6,
      totalWeight: '24,500',
      totalLength: '165.2',
      accent: '#FF8C42',
      accentBg: 'rgba(255,140,66,0.12)',
      accentBorder: 'rgba(255,140,66,0.3)',
      barGradient: 'linear-gradient(90deg,#FF8C42,#FF6B00)'
    },
    {
      id: 'r2',
      label: 'R2',
      subLabel: 'Roughing\nStand 2',
      types: ['WR', 'BUR'],
      wrCount: 6,
      burCount: 8,
      totalWeight: '24,500',
      totalLength: '165.2',
      accent: '#FFA500',
      accentBg: 'rgba(255,165,0,0.12)',
      accentBorder: 'rgba(255,165,0,0.3)',
      barGradient: 'linear-gradient(90deg,#FFA500,#FF8C42)'
    },
    {
      id: 'f1f4',
      label: 'F1 – F4',
      subLabel: 'Finishing\nStands',
      types: ['WR', 'BUR'],
      wrCount: 8,
      burCount: 8,
      totalWeight: '18,200',
      totalLength: '142.8',
      accent: '#60A5FA',
      accentBg: 'rgba(96,165,250,0.12)',
      accentBorder: 'rgba(96,165,250,0.3)',
      barGradient: 'linear-gradient(90deg,#2563EB,#60A5FA)'
    },
    {
      id: 'f5f7',
      label: 'F5 – F7',
      subLabel: 'Finishing\nStands',
      types: ['WR', 'BUR'],
      wrCount: 6,
      burCount: 6,
      totalWeight: '14,600',
      totalLength: '98.5',
      accent: '#A78BFA',
      accentBg: 'rgba(167,139,250,0.12)',
      accentBorder: 'rgba(167,139,250,0.3)',
      barGradient: 'linear-gradient(90deg,#7C3AED,#A78BFA)'
    },
    {
      id: 'ed',
      label: 'ED',
      subLabel: 'Edger Rolls',
      types: ['Edger Roll'],
      wrCount: 0,
      burCount: 0,
      edCount: 4,
      totalWeight: '9,800',
      totalLength: '72.3',
      accent: '#00E5A0',
      accentBg: 'rgba(0,229,160,0.1)',
      accentBorder: 'rgba(0,229,160,0.3)',
      barGradient: 'linear-gradient(90deg,#00E5A0,#00B894)'
    },
    {
      id: 'pinch',
      label: 'Pinch',
      subLabel: 'Pinch Rolls',
      types: ['Pinch Roll'],
      wrCount: 0,
      burCount: 0,
      pinchCount: 4,
      totalWeight: '11,200',
      totalLength: '85.6',
      accent: '#FF4560',
      accentBg: 'rgba(255,69,96,0.1)',
      accentBorder: 'rgba(255,69,96,0.3)',
      barGradient: 'linear-gradient(90deg,#FF4560,#CC1832)'
    }
  ];

  readonly rollInventoryColDefs: Array<ColDef | ColGroupDef> = [
    {
      headerName: 'ROLL NO.',
      field: 'rollNo',
      pinned: 'left',
      width: 150,
      lockPinned: true,
      cellRenderer: (params: any) =>
        `<span style="color:#00D4FF;font-weight:700;font-size:13px;cursor:pointer">${params.value}</span>`,
      cellStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    },
    {
      headerName: 'STAND CATEGORY',
      field: 'standCategory',
      width: 150,
      cellRenderer: (params: any) => {
        const val = params.value || '-';
        if (val === '-') {
          return `<span style="color:#3D5175;font-size:13px">-</span>`;
        }
        return `
          <div style="display:flex;align-items:center;
                      justify-content:center;height:100%">
            <span style="
              background: rgba(167,139,250,0.15);
              color: #A78BFA;
              border: 1px solid rgba(167,139,250,0.35);
              border-radius: 8px;
              padding: 4px 14px;
              font-size: 11px;
              font-weight: 700;
              letter-spacing: 0.5px;
              white-space: nowrap;
            ">${val}</span>
          </div>`;
      },
      cellStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0'
      }
    },
    {
      headerName: 'DIAMETER [MM]',
      field: 'diameter',
      width: 150,
      cellStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#E8F0FE',
        fontSize: '13px'
      }
    },
    {
      headerName: 'MATERIAL CODE',
      field: 'materialCode',
      width: 140,
      cellStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#E8F0FE',
        fontSize: '13px'
      }
    },
    {
      headerName: 'INIT. CROWN [MM]',
      marryChildren: true,
      children: [
        {
          headerName: 'MAX',
          field: 'initCrownMax',
          width: 110,
          cellStyle: {
            display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            color: '#E8F0FE', fontSize: '13px'
          }
        },
        {
          headerName: 'MIN',
          field: 'initCrownMin',
          width: 110,
          cellStyle: {
            display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            color: '#E8F0FE', fontSize: '13px'
          }
        }
      ]
    } as ColGroupDef,
    {
      headerName: 'EQUI. CROWN [MM]',
      marryChildren: true,
      children: [
        {
          headerName: 'MAX',
          field: 'equiCrownMax',
          width: 110,
          cellStyle: {
            display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            color: '#E8F0FE', fontSize: '13px'
          }
        },
        {
          headerName: 'MIN',
          field: 'equiCrownMin',
          width: 110,
          cellStyle: {
            display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            color: '#E8F0FE', fontSize: '13px'
          }
        }
      ]
    } as ColGroupDef,
    {
      headerName: 'GRIND TYPE',
      field: 'grindType',
      width: 130,
      cellRenderer: (params: any) => {
        if (!params.value || params.value === '-') {
          return `<span style="color:#3D5175;font-size:13px">-</span>`;
        }
        return `
        <div style="display:flex;align-items:center;
                    justify-content:center;height:100%">
          <span style="
            background: rgba(167,139,250,0.15);
            color: #A78BFA;
            border: 1px solid rgba(167,139,250,0.3);
            border-radius: 8px;
            padding: 3px 12px;
            font-size: 11px;
            font-weight: 700;
          ">${params.value}</span>
        </div>`;
      }
    },
    {
      headerName: 'GRIND INDEX',
      field: 'grindIndex',
      width: 120,
      cellStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#E8F0FE',
        fontSize: '13px'
      }
    },
    {
      headerName: 'SHIM [MM]',
      field: 'shim',
      width: 110,
      cellStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#E8F0FE',
        fontSize: '13px'
      }
    },
    {
      headerName: 'TOTAL ACCUMULATION',
      headerClass: 'group-header-white',
      marryChildren: true,
      children: [
        {
          headerName: 'WEIGHT [TON]',
          field: 'totalWeight',
          width: 130,
          cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#E8F0FE',
            fontSize: '13px'
          }
        },
        {
          headerName: 'SLABS',
          field: 'totalSlabs',
          width: 100,
          cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#E8F0FE',
            fontSize: '13px'
          }
        },
        {
          headerName: 'LENGTH [KM]',
          field: 'totalLength',
          width: 120,
          cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#E8F0FE',
            fontSize: '13px'
          }
        }
      ]
    } as ColGroupDef,
    {
      headerName: 'SUPPLIER',
      field: 'supplier',
      width: 130,
      cellStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#E8F0FE',
        fontSize: '13px'
      }
    },
    {
      headerName: 'ROLL GRIND TIME',
      field: 'rollGrindTime',
      width: 190,
      cellStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#E8F0FE',
        fontSize: '13px'
      }
    }
  ];

  readonly rollInventoryDefaultColDef: ColDef = {
    resizable: true,
    sortable: false,
    suppressMovable: false,
    suppressMenu: true
  };

  readonly rollInventoryRowData: RollInventoryRow[] = [
    {
      rollNo: 'FB3FDOA01',
      standCategory: 'F1-F4',
      diameter: 1539.402,
      materialCode: 'FS',
      initCrownMax: 0.3,
      initCrownMin: 0,
      equiCrownMax: 0,
      equiCrownMin: 0,
      grindType: 'FS',
      grindIndex: 0,
      shim: 0,
      totalWeight: 154763,
      totalSlabs: 6967,
      totalLength: 415,
      supplier: 'Supplier1',
      rollGrindTime: '2025-01-15T15:01:00'
    },
    {
      rollNo: 'FB3FDOA02',
      standCategory: 'F1-F4',
      diameter: 1540.358,
      materialCode: 'FS',
      initCrownMax: 0.3,
      initCrownMin: 0,
      equiCrownMax: 0,
      equiCrownMin: 0,
      grindType: 'FS',
      grindIndex: 0,
      shim: 5,
      totalWeight: 151220,
      totalSlabs: 6820,
      totalLength: 413,
      supplier: 'Supplier1',
      rollGrindTime: '2025-01-15T15:01:00'
    },
    {
      rollNo: 'F1HSCMA03',
      standCategory: 'F1-F4',
      diameter: 766.731,
      materialCode: 'HSS',
      initCrownMax: 0,
      initCrownMin: 0.8,
      equiCrownMax: 0.8,
      equiCrownMin: -1,
      grindType: 'HSS',
      grindIndex: 1,
      shim: 0,
      totalWeight: 12450,
      totalSlabs: 151,
      totalLength: 25,
      supplier: 'Supplier3',
      rollGrindTime: '2025-02-06T19:15:00'
    },
    {
      rollNo: 'F1HSDOA06',
      standCategory: 'F1-F4',
      diameter: 766.741,
      materialCode: 'HSS',
      initCrownMax: 0,
      initCrownMin: 0.8,
      equiCrownMax: 0.8,
      equiCrownMin: -1,
      grindType: 'HSS',
      grindIndex: 1,
      shim: 0,
      totalWeight: 12110,
      totalSlabs: 148,
      totalLength: 24,
      supplier: 'Supplier3',
      rollGrindTime: '2025-02-06T19:15:00'
    },
    {
      rollNo: 'F1CIYA05',
      standCategory: 'F1-F4',
      diameter: 750.064,
      materialCode: 'HICHR',
      initCrownMax: 0,
      initCrownMin: 0.8,
      equiCrownMax: 0.8,
      equiCrownMin: -1,
      grindType: 'HICHR',
      grindIndex: 1,
      shim: 0,
      totalWeight: 13850,
      totalSlabs: 119,
      totalLength: 28,
      supplier: 'Supplier4',
      rollGrindTime: '2025-02-06T19:15:00'
    },
    {
      rollNo: 'FB5FCFA01',
      standCategory: 'F5-F7',
      diameter: 1530.034,
      materialCode: 'FS',
      initCrownMax: 0.3,
      initCrownMin: 0,
      equiCrownMax: 0,
      equiCrownMin: 0,
      grindType: 'FS',
      grindIndex: 0,
      shim: 20,
      totalWeight: 32640,
      totalSlabs: 2015,
      totalLength: 404,
      supplier: 'Supplier2',
      rollGrindTime: '2025-02-12T06:32:00'
    },
    {
      rollNo: 'FB5FNKA19',
      standCategory: 'F5-F7',
      diameter: 1531.136,
      materialCode: 'FS',
      initCrownMax: 0.3,
      initCrownMin: 0,
      equiCrownMax: 0,
      equiCrownMin: 0,
      grindType: 'FS',
      grindIndex: 0,
      shim: 45,
      totalWeight: 41230,
      totalSlabs: 1995,
      totalLength: 635,
      supplier: 'Supplier2',
      rollGrindTime: '2025-02-12T10:23:00'
    },
    {
      rollNo: 'FB5FNKA20',
      standCategory: 'F5-F7',
      diameter: 1526.077,
      materialCode: 'FS',
      initCrownMax: 0.3,
      initCrownMin: 0,
      equiCrownMax: 0,
      equiCrownMin: 0,
      grindType: 'FS',
      grindIndex: 0,
      shim: 50,
      totalWeight: 40190,
      totalSlabs: 1980,
      totalLength: 622,
      supplier: 'Supplier2',
      rollGrindTime: '2025-02-06T19:15:00'
    },
    {
      rollNo: 'F1EOS06',
      standCategory: 'Edger',
      diameter: 600.0,
      materialCode: 'SS',
      initCrownMax: 0,
      initCrownMin: 0,
      equiCrownMax: 0,
      equiCrownMin: 0,
      grindType: '-',
      grindIndex: 0,
      shim: 0,
      totalWeight: 9875,
      totalSlabs: 820,
      totalLength: 58,
      supplier: 'Supplier5',
      rollGrindTime: '2025-01-15T15:01:00'
    },
    {
      rollNo: 'F1EDS06',
      standCategory: 'Edger',
      diameter: 600.0,
      materialCode: 'SS',
      initCrownMax: 0,
      initCrownMin: 0,
      equiCrownMax: 0,
      equiCrownMin: 0,
      grindType: '-',
      grindIndex: 0,
      shim: 0,
      totalWeight: 9750,
      totalSlabs: 810,
      totalLength: 57,
      supplier: 'Supplier5',
      rollGrindTime: '2025-01-15T15:01:00'
    },
    {
      rollNo: 'R1WR0123',
      standCategory: 'R1',
      diameter: 845.125,
      materialCode: 'HSS',
      initCrownMax: 0.2,
      initCrownMin: 0.0,
      equiCrownMax: 0.1,
      equiCrownMin: 0.0,
      grindType: 'CVC',
      grindIndex: 2,
      shim: 10,
      totalWeight: 25680,
      totalSlabs: 1420,
      totalLength: 96,
      supplier: 'Supplier6',
      rollGrindTime: '2025-02-18T09:40:00'
    },
    {
      rollNo: 'R2BUR0456',
      standCategory: 'R2',
      diameter: 980.600,
      materialCode: 'FS',
      initCrownMax: 0.4,
      initCrownMin: 0.1,
      equiCrownMax: 0.2,
      equiCrownMin: 0.1,
      grindType: 'Flat',
      grindIndex: 3,
      shim: 15,
      totalWeight: 31240,
      totalSlabs: 1680,
      totalLength: 112,
      supplier: 'Supplier7',
      rollGrindTime: '2025-02-20T14:05:00'
    }
  ];

  onExportRollInventory() {
    const headers = [
      'Roll No.',
      'Stand Category',
      'Diameter [MM]',
      'Material Code',
      'Init Crown Max',
      'Init Crown Min',
      'Equi Crown Max',
      'Equi Crown Min',
      'Grind Type',
      'Grind Index',
      'Shim [MM]',
      'Total Weight [TON]',
      'Total Slabs',
      'Total Length [KM]',
      'Supplier',
      'Roll Grind Time'
    ];

    const rows = this.rollInventoryRowData.map((r: any) => {
      const grindTime = (() => {
        if (!r.rollGrindTime) return '';
        if (typeof r.rollGrindTime === 'string') {
          return r.rollGrindTime.replace('T', ' ');
        }
        return `${r.rollGrindTime?.date ?? ''} ${r.rollGrindTime?.time ?? ''}`.trim();
      })();

      return [
        r.rollNo,
        r.standCategory,
        r.diameter,
        r.materialCode,
        r.initCrownMax,
        r.initCrownMin,
        r.equiCrownMax,
        r.equiCrownMin,
        r.grindType,
        r.grindIndex,
        r.shim,
        r.totalWeight,
        r.totalSlabs,
        r.totalLength,
        r.supplier,
        grindTime
      ];
    });

    const csv = [headers, ...rows].map((r: any[]) => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `roll-inventory-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  readonly chokeRowData: ChokeRow[] = [
    { chokeId: 'CHK-E1-OS', weight: 12500, slabs: 820, length: 58.2, supplier: 'Supplier3' },
    { chokeId: 'CHK-E1-DS', weight: 12300, slabs: 810, length: 57.1, supplier: 'Supplier3' },
    { chokeId: 'CHK-E2-OS', weight: 11800, slabs: 780, length: 54.3, supplier: 'Supplier4' },
    { chokeId: 'CHK-E2-DS', weight: 11600, slabs: 765, length: 53.1, supplier: 'Supplier4' },
    { chokeId: 'CHK-F1-OS', weight: 8900, slabs: 580, length: 42.5, supplier: 'Supplier5' },
    { chokeId: 'CHK-F1-DS', weight: 8750, slabs: 570, length: 41.8, supplier: 'Supplier5' },
    { chokeId: 'CHK-F2-OS', weight: 8600, slabs: 560, length: 41.2, supplier: 'Supplier3' },
    { chokeId: 'CHK-F2-DS', weight: 8450, slabs: 550, length: 40.5, supplier: 'Supplier3' },
    { chokeId: 'CHK-F3-OS', weight: 7900, slabs: 510, length: 38.4, supplier: 'Supplier6' },
    { chokeId: 'CHK-F3-DS', weight: 7750, slabs: 500, length: 37.8, supplier: 'Supplier6' }
  ];

  readonly chokeColDefs: ColDef[] = [
    {
      headerName: 'CHOKE ID',
      field: 'chokeId',
      width: 180,
      pinned: 'left',
      cellStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#00D4FF',
        fontWeight: '700',
        fontSize: '13px'
      }
    },
    {
      headerName: 'WEIGHT (TON)',
      field: 'weight',
      flex: 1,
      minWidth: 130,
      cellStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#E8F0FE',
        fontWeight: '500',
        fontSize: '13px'
      }
    },
    {
      headerName: 'SLABS',
      field: 'slabs',
      flex: 1,
      minWidth: 100,
      cellStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#E8F0FE',
        fontWeight: '500',
        fontSize: '13px'
      }
    },
    {
      headerName: 'LENGTH (KM)',
      field: 'length',
      flex: 1,
      minWidth: 120,
      cellStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#E8F0FE',
        fontWeight: '500',
        fontSize: '13px'
      }
    },
    {
      headerName: 'SUPPLIER',
      field: 'supplier',
      flex: 1,
      minWidth: 130,
      cellStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#E8F0FE',
        fontWeight: '500',
        fontSize: '13px'
      }
    }
  ];

  readonly chokeDefaultColDef: ColDef = {
    resizable: false,
    sortable: false,
    suppressMovable: true,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '13px',
      color: '#E8F0FE'
    }
  };

  onExportChokeInventory() {
    const headers = ['Choke ID', 'Weight (TON)', 'Slabs', 'Length (KM)', 'Supplier'];
    const rows = this.chokeRowData.map((r: any) => [
      r.chokeId,
      r.weight,
      r.slabs,
      r.length,
      r.supplier
    ]);
    const csv = [headers, ...rows].map((r: any[]) => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `choke-inventory-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  ngOnInit(): void {
    this.rollTotalRows = this.rollInventoryRowData.length;
    this.chokeTotalRows = this.chokeRowData.length;
  }

  entryForm: EntryForm = this.createEmptyForm();
  readonly rollTypeOptions: Array<'Edger Roll' | 'Pinch Roll'> = ['Edger Roll', 'Pinch Roll'];
  readonly grindTypeOptions: Array<'CVC' | 'Flat' | 'HSS' | 'HICHR' | 'FS' | 'SS'> = [
    'CVC',
    'Flat',
    'HSS',
    'HICHR',
    'FS',
    'SS'
  ];

  getStandCategoryPillStyle(standCategory: RollRow['standCategory']): { [key: string]: string } {
    return {
      background: 'rgba(167,139,250,0.15)',
      color: '#A78BFA',
      border: '1px solid rgba(167,139,250,0.35)'
    };
  }

  setType(type: ActiveType): void {
    this.activeType = type;
  }

  openManualEntry(): void {
    this.openEntryModal = true;
  }

  closeManualEntry(): void {
    this.openEntryModal = false;
    this.resetForm();
  }

  submitEntry(): void {
    this.closeManualEntry();
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3500);
  }

  resetForm(): void {
    this.entryForm = this.createEmptyForm();
  }

  private createEmptyForm(): EntryForm {
    return {
      stand: '',
      pos: '',
      rollNo: '',
      diameter: null,
      matCode: '',
      initCrownMax: null,
      initCrownMin: null,
      equiCrownMax: null,
      equiCrownMin: null,
      grindType: '',
      grindIndex: null,
      shim: null,
      accumWeight: null,
      accumSlabs: null,
      accumLength: null,
      supplier: '',
      rollChangeTime: '',
      rollType: ''
    };
  }

  getGrindTypeBadge(type: RollRow['grindType']): { [key: string]: string } {
    const base = {
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.12)',
      color: '#7B90B8'
    };

    if (type === 'CVC') {
      return {
        background: 'rgba(167,139,250,0.12)',
        border: '1px solid rgba(167,139,250,0.3)',
        color: '#A78BFA'
      };
    }
    if (type === 'Flat') {
      return {
        background: 'rgba(0,229,160,0.1)',
        border: '1px solid rgba(0,229,160,0.3)',
        color: '#00E5A0'
      };
    }
    if (type === 'HSS') {
      return {
        background: 'rgba(255,140,66,0.1)',
        border: '1px solid rgba(255,140,66,0.3)',
        color: '#FF8C42'
      };
    }
    if (type === 'HICHR') {
      return {
        background: 'rgba(255,69,96,0.1)',
        border: '1px solid rgba(255,69,96,0.3)',
        color: '#FF4560'
      };
    }
    if (type === 'FS') {
      return {
        background: 'rgba(0,212,255,0.1)',
        border: '1px solid rgba(0,212,255,0.3)',
        color: '#00D4FF'
      };
    }
    if (type === 'SS') {
      return {
        background: 'rgba(123,144,184,0.12)',
        border: '1px solid rgba(123,144,184,0.3)',
        color: '#7B90B8'
      };
    }

    return base;
  }

  getPOSBadge(pos: RollPos): { [key: string]: string } {
    if (pos === 'T') {
      return {
        background: 'rgba(0,212,255,0.1)',
        border: '1px solid rgba(0,212,255,0.35)',
        color: '#00D4FF'
      };
    }
    if (pos === 'B') {
      return {
        background: 'rgba(167,139,250,0.12)',
        border: '1px solid rgba(167,139,250,0.35)',
        color: '#A78BFA'
      };
    }
    if (pos === 'OP') {
      return {
        background: 'rgba(0,229,160,0.1)',
        border: '1px solid rgba(0,229,160,0.35)',
        color: '#00E5A0'
      };
    }
    if (pos === 'DR') {
      return {
        background: 'rgba(255,140,66,0.12)',
        border: '1px solid rgba(255,140,66,0.35)',
        color: '#FF8C42'
      };
    }
    return {
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.12)',
      color: '#7B90B8'
    };
  }

  goToRollDetails(): void {
    this.router.navigate(['/roll-details']);
  }

  toggleDropdown(name: 'rollType' | 'grindType'): void {
    this.openDropdown = this.openDropdown === name ? null : name;
  }
}

