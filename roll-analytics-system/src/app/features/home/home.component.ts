import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import type {
  ColDef,
  ColGroupDef,
  CellClickedEvent,
  GridApi,
  GridReadyEvent,
  ICellRendererParams
} from 'ag-grid-community';

interface RollRow {
  rollId: string;
  stand: string;
  type: string;
  position: string;
  cycleWeight: number;
  cycleLength: number;
  cumulWeight: number;
  cumulLength: number;
  supplier: string;
  progress: number; // 0-100
}

type TabKey = 'all' | 'roughing' | 'finishing';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, AgGridAngular],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly router = inject(Router);

  gridApi?: GridApi<RollRow>;

  activeTab: TabKey = 'all';

  tabs: Array<{ key: TabKey; label: string; icon: string; count: number }> = [
    { key: 'all', label: 'All', icon: 'grid_view', count: 0 },
    { key: 'roughing', label: 'Roughing', icon: 'construction', count: 0 },
    { key: 'finishing', label: 'Finishing', icon: 'precision_manufacturing', count: 0 }
  ];

  allStands: string[] = [
    'E1',
    'R1',
    'E2',
    'R2',
    'F1e',
    'F1',
    'F2',
    'F3',
    'F4',
    'F5',
    'F6',
    'F7',
    'PR1',
    'PR2',
    'PR3'
  ];

  autoRefresh = true;
  private refreshInterval: ReturnType<typeof setInterval> | undefined;
  lastUpdated = new Date();

  showRollModal = false;
  selectedRoll: RollRow | null = null;

  currentPage = 1;
  pageSize = 15;
  pageSizeOptions: number[] = [10, 15, 20, 25];
  pageSizeOpen = false;

  get totalRows(): number {
    return this.filteredData.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalRows / this.pageSize) || 1;
  }

  get startRow(): number {
    if (this.totalRows === 0) return 0;
    return (this.currentPage - 1) * this.pageSize + 1;
    }

  get endRow(): number {
    return Math.min(this.currentPage * this.pageSize, this.totalRows);
  }

  get pageNumbers(): number[] {
    const pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    return pages.filter(
      (p) => p === 1 || p === this.totalPages || Math.abs(p - this.currentPage) <= 1
    );
  }

  onImgError(event: any): void {
    if (event?.target) {
      (event.target as HTMLElement).style.display = 'none';
    }
  }

  rowData: RollRow[] = [
    // R1 stand (Roughing):
    {
      rollId: 'RR1O_501',
      stand: 'R1',
      type: 'WR',
      position: 'Top',
      cycleWeight: 1250,
      cycleLength: 8.5,
      cumulWeight: 12500,
      cumulLength: 85.2,
      supplier: 'Supplier2',
      progress: 72
    },
    {
      rollId: 'RR1D_502',
      stand: 'R1',
      type: 'WR',
      position: 'Bot',
      cycleWeight: 1180,
      cycleLength: 7.9,
      cumulWeight: 11800,
      cumulLength: 79.1,
      supplier: 'Supplier2',
      progress: 68
    },
    {
      rollId: 'VRO_189',
      stand: 'R1',
      type: 'BUR',
      position: 'Top',
      cycleWeight: 980,
      cycleLength: 6.5,
      cumulWeight: 9800,
      cumulLength: 65.3,
      supplier: 'Supplier9',
      progress: 45
    },
    {
      rollId: 'VRD_190',
      stand: 'R1',
      type: 'BUR',
      position: 'Bot',
      cycleWeight: 960,
      cycleLength: 6.3,
      cumulWeight: 9600,
      cumulLength: 63.1,
      supplier: 'Supplier9',
      progress: 42
    },

    // R2 stand (Roughing):
    {
      rollId: 'WRO_112',
      stand: 'R2',
      type: 'WR',
      position: 'Top',
      cycleWeight: 1350,
      cycleLength: 9.2,
      cumulWeight: 13500,
      cumulLength: 92.1,
      supplier: 'Supplier1',
      progress: 85
    },
    {
      rollId: 'WRD_114',
      stand: 'R2',
      type: 'WR',
      position: 'Bot',
      cycleWeight: 1320,
      cycleLength: 8.9,
      cumulWeight: 13200,
      cumulLength: 89.4,
      supplier: 'Supplier1',
      progress: 82
    },

    // E1 stand:
    {
      rollId: 'ERO_898',
      stand: 'E1',
      type: 'BUR',
      position: 'Top',
      cycleWeight: 890,
      cycleLength: 5.8,
      cumulWeight: 8900,
      cumulLength: 58.2,
      supplier: 'Supplier3',
      progress: 55
    },
    {
      rollId: 'ERD_895',
      stand: 'E1',
      type: 'BUR',
      position: 'Bot',
      cycleWeight: 870,
      cycleLength: 5.6,
      cumulWeight: 8700,
      cumulLength: 56.1,
      supplier: 'Supplier4',
      progress: 52
    },

    // F1-F7 stands (Finishing):
    {
      rollId: 'WRF1T_201',
      stand: 'F1',
      type: 'WR',
      position: 'Top',
      cycleWeight: 1450,
      cycleLength: 9.8,
      cumulWeight: 14500,
      cumulLength: 98.3,
      supplier: 'Supplier1',
      progress: 91
    },
    {
      rollId: 'WRF1B_202',
      stand: 'F1',
      type: 'WR',
      position: 'Bot',
      cycleWeight: 1420,
      cycleLength: 9.5,
      cumulWeight: 14200,
      cumulLength: 95.1,
      supplier: 'Supplier1',
      progress: 88
    },
    {
      rollId: 'WRF2T_203',
      stand: 'F2',
      type: 'WR',
      position: 'Top',
      cycleWeight: 1380,
      cycleLength: 9.1,
      cumulWeight: 13800,
      cumulLength: 91.2,
      supplier: 'Supplier2',
      progress: 78
    },
    {
      rollId: 'WRF2B_204',
      stand: 'F2',
      type: 'WR',
      position: 'Bot',
      cycleWeight: 1360,
      cycleLength: 8.9,
      cumulWeight: 13600,
      cumulLength: 89.1,
      supplier: 'Supplier2',
      progress: 75
    },
    {
      rollId: 'WRF3T_205',
      stand: 'F3',
      type: 'WR',
      position: 'Top',
      cycleWeight: 1290,
      cycleLength: 8.5,
      cumulWeight: 12900,
      cumulLength: 85.4,
      supplier: 'Supplier6',
      progress: 62
    },
    {
      rollId: 'WRF3B_206',
      stand: 'F3',
      type: 'WR',
      position: 'Bot',
      cycleWeight: 1270,
      cycleLength: 8.3,
      cumulWeight: 12700,
      cumulLength: 83.2,
      supplier: 'Supplier6',
      progress: 59
    },
    {
      rollId: 'BRF4T_301',
      stand: 'F4',
      type: 'BUR',
      position: 'Top',
      cycleWeight: 3200,
      cycleLength: 21.5,
      cumulWeight: 32000,
      cumulLength: 215.3,
      supplier: 'Supplier1',
      progress: 35
    },
    {
      rollId: 'BRF4B_302',
      stand: 'F4',
      type: 'BUR',
      position: 'Bot',
      cycleWeight: 3150,
      cycleLength: 21.1,
      cumulWeight: 31500,
      cumulLength: 211.2,
      supplier: 'Supplier1',
      progress: 32
    },
    {
      rollId: 'WRF5T_207',
      stand: 'F5',
      type: 'WR',
      position: 'Top',
      cycleWeight: 1150,
      cycleLength: 7.6,
      cumulWeight: 11500,
      cumulLength: 76.3,
      supplier: 'Supplier3',
      progress: 48
    },
    {
      rollId: 'WRF5B_208',
      stand: 'F5',
      type: 'WR',
      position: 'Bot',
      cycleWeight: 1130,
      cycleLength: 7.4,
      cumulWeight: 11300,
      cumulLength: 74.1,
      supplier: 'Supplier3',
      progress: 45
    },
    {
      rollId: 'WRF6T_209',
      stand: 'F6',
      type: 'WR',
      position: 'Top',
      cycleWeight: 1080,
      cycleLength: 7.1,
      cumulWeight: 10800,
      cumulLength: 71.2,
      supplier: 'Supplier5',
      progress: 38
    },
    {
      rollId: 'WRF6B_210',
      stand: 'F6',
      type: 'WR',
      position: 'Bot',
      cycleWeight: 1060,
      cycleLength: 6.9,
      cumulWeight: 10600,
      cumulLength: 69.3,
      supplier: 'Supplier5',
      progress: 35
    },
    {
      rollId: 'WRF7T_211',
      stand: 'F7',
      type: 'WR',
      position: 'Top',
      cycleWeight: 980,
      cycleLength: 6.4,
      cumulWeight: 9800,
      cumulLength: 64.2,
      supplier: 'Supplier6',
      progress: 28
    },
    {
      rollId: 'WRF7B_212',
      stand: 'F7',
      type: 'WR',
      position: 'Bot',
      cycleWeight: 960,
      cycleLength: 6.2,
      cumulWeight: 9600,
      cumulLength: 62.1,
      supplier: 'Supplier6',
      progress: 25
    },

    // PR stands:
    {
      rollId: 'PR1T_301',
      stand: 'PR1',
      type: 'Pinch Roll',
      position: 'Top',
      cycleWeight: 780,
      cycleLength: 5.1,
      cumulWeight: 7800,
      cumulLength: 51.3,
      supplier: 'Supplier7',
      progress: 60
    },
    {
      rollId: 'PR1B_302',
      stand: 'PR1',
      type: 'Pinch Roll',
      position: 'Bot',
      cycleWeight: 760,
      cycleLength: 4.9,
      cumulWeight: 7600,
      cumulLength: 49.2,
      supplier: 'Supplier7',
      progress: 57
    }
  ];

  progressBarRenderer = (params: any) => {
    const val = params.value || 0;

    const barColor = '#00D4FF';
    const glowColor = 'rgba(0,212,255,0.6)';

    const container = document.createElement('div');
    container.style.cssText = `
      display:flex;
      align-items:center;
      gap:8px;
      height:100%;
      padding:0 12px;
      width:100%;
      box-sizing:border-box;
    `;

    const pct = document.createElement('span');
    pct.style.cssText = `
      font-size:12px;
      font-weight:800;
      color:${barColor};
      min-width:36px;
      text-align:right;
      flex-shrink:0;
      font-family:Inter,sans-serif;
      text-shadow:0 0 8px ${glowColor};
    `;
    pct.textContent = `${val}%`;

    const track = document.createElement('div');
    track.style.cssText = `
      flex:1;
      height:8px;
      background:rgba(255,255,255,0.07);
      border-radius:8px;
      overflow:hidden;
      position:relative;
      box-shadow:inset 0 1px 3px rgba(0,0,0,0.4);
    `;

    const fill = document.createElement('div');
    fill.style.cssText = `
      height:100%;
      width:0%;
      background:linear-gradient(90deg,${barColor}88,${barColor});
      border-radius:8px;
      box-shadow:0 0 10px ${glowColor};
      transition:width 1.2s cubic-bezier(0.4,0,0.2,1);
      position:relative;
      overflow:hidden;
    `;

    const shimmer = document.createElement('div');
    shimmer.style.cssText = `
      position:absolute;
      top:0;
      left:-100%;
      width:100%;
      height:100%;
      background:linear-gradient(90deg,
        transparent,
        rgba(255,255,255,0.3),
        transparent);
      animation:barShimmer 2s linear infinite;
    `;

    fill.appendChild(shimmer);
    track.appendChild(fill);

    container.appendChild(pct);
    container.appendChild(track);

    setTimeout(() => {
      fill.style.width = `${val}%`;
    }, 150);

    return container;
  };

  readonly standColors: Record<string, { bg: string; border: string; color: string }> = {
    R1: {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    R2: {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    E1: {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    E2: {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    F1: {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    F2: {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    F3: {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    F4: {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    F5: {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    F6: {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    F7: {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    F1e: {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    PR1: {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    PR2: {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    PR3: {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    }
  };

  readonly typeColors: Record<string, { bg: string; border: string; color: string }> = {
    'Work Roll': {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    WR: {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    'Backup Roll': {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    BUR: {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    'Intermediate Roll': {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    IMR: {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    'Edger Roll': {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    'Pinch Roll': {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    'Vertical Roll': {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    }
  };

  readonly positionColors: Record<string, { bg: string; border: string; color: string }> = {
    Top: {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    Bottom: {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    Bot: {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    'Drive Side': {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    },
    'Operator Side': {
      bg: 'rgba(167,139,250,0.15)',
      border: 'rgba(167,139,250,0.45)',
      color: '#A78BFA'
    }
  };

  createBadgeCell(
    value: string,
    colorMap: Record<string, { bg: string; border: string; color: string }>
  ): string {
    const defaultStyle = {
      bg: 'rgba(255,255,255,0.06)',
      border: 'rgba(255,255,255,0.1)',
      color: '#7B90B8'
    };
    const style = colorMap[value] || defaultStyle;
    return `<span style="
    background:${style.bg};
    border:1px solid ${style.border};
    color:${style.color};
    border-radius:8px;
    padding:4px 12px;
    font-size:11px;
    font-weight:700;
    letter-spacing:0.5px;
    white-space:nowrap;
    display:inline-flex;
    align-items:center;
    line-height:1.5;
  ">${value || ''}</span>`;
  }

  columnDefs: Array<ColDef<RollRow> | ColGroupDef<RollRow>> = [
    {
      field: 'rollId',
      headerName: 'ROLL ID',
      width: 140,
      pinned: 'left',
      lockPinned: true,
      headerClass: 'center-header',
      cellClass: ['center-cell', 'cursor-pointer'],
      sortable: false,
      cellRenderer: (params: ICellRendererParams<RollRow, string>) =>
        `<span class="roll-id-link">${params.value ?? ''}</span>`,
      onCellClicked: (params: CellClickedEvent<RollRow>) =>
        this.onRollIdClick(params.data as RollRow)
    },
    {
      field: 'stand',
      headerName: 'STAND',
      width: 100,
      headerClass: 'center-header',
      cellClass: 'center-cell',
      sortable: false,
      cellRenderer: (params: any) =>
        this.createBadgeCell(params.value, this.standColors)
    },
    {
      field: 'type',
      headerName: 'TYPE',
      width: 130,
      headerClass: 'center-header',
      cellClass: 'center-cell',
      sortable: false,
      cellRenderer: (params: any) =>
        this.createBadgeCell(params.value, this.typeColors)
    },
    {
      field: 'position',
      headerName: 'POSITION',
      width: 110,
      headerClass: 'center-header',
      cellClass: 'center-cell',
      sortable: false,
      cellRenderer: (params: any) =>
        this.createBadgeCell(params.value, this.positionColors)
    },
    {
      headerName: 'CYCLE',
      headerClass: 'center-header',
      headerGroupComponent: undefined,
      children: [
        {
          field: 'cycleWeight',
          headerName: 'WEIGHT (TON)',
          width: 140,
          headerClass: 'center-header',
          cellClass: 'center-cell',
          type: 'numericColumn',
          sortable: false,
          cellRenderer: (params: ICellRendererParams<RollRow, number>) =>
            `<span style="color:#00D4FF;font-weight:700;font-size:13px;">${params.value ?? ''}</span>`
        },
        {
          field: 'cycleLength',
          headerName: 'LENGTH (KM)',
          width: 130,
          headerClass: 'center-header',
          cellClass: 'center-cell',
          type: 'numericColumn',
          sortable: false,
          cellRenderer: (params: ICellRendererParams<RollRow, number>) =>
            `<span style="color:#00D4FF;font-weight:600;font-size:13px;">${params.value ?? ''}</span>`
        }
      ]
    },
    {
      headerName: 'CUMULATIVE',
      headerClass: 'center-header',
      children: [
        {
          field: 'cumulWeight',
          headerName: 'WEIGHT (TON)',
          width: 140,
          headerClass: 'center-header',
          cellClass: 'center-cell',
          type: 'numericColumn',
          sortable: false,
          cellRenderer: (params: ICellRendererParams<RollRow, number>) =>
            `<span style="color:#00D4FF;font-weight:700;font-size:13px;">${params.value ?? ''}</span>`
        },
        {
          field: 'cumulLength',
          headerName: 'LENGTH (KM)',
          width: 130,
          headerClass: 'center-header',
          cellClass: 'center-cell',
          type: 'numericColumn',
          sortable: false,
          cellRenderer: (params: ICellRendererParams<RollRow, number>) =>
            `<span style="color:#00D4FF;font-weight:600;font-size:13px;">${params.value ?? ''}</span>`
        }
      ]
    },
    {
      field: 'supplier',
      headerName: 'SUPPLIER',
      width: 120,
      headerClass: 'center-header',
      cellClass: 'center-cell',
      sortable: false,
      cellRenderer: (params: any) =>
        `<span style="
          color:#FFFFFF;
          font-weight:500;
          font-size:13px;
        ">${params.value || ''}</span>`
    },
    {
      field: 'progress',
      headerName: 'CAMPAIGN UTIL.',
      width: 180,
      minWidth: 180,
      pinned: 'right',
      lockPinned: true,
      headerClass: 'center-header',
      cellClass: 'center-cell',
      sortable: false,
      cellRenderer: this.progressBarRenderer,
      cellStyle: { padding: '0', overflow: 'visible' }
    }
  ];

  defaultColDef: ColDef = {
    sortable: false,
    unSortIcon: false,
    suppressHeaderMenuButton: true,
    resizable: true,
    suppressMovable: false,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };

  get filteredData(): RollRow[] {
    if (this.activeTab === 'all') return this.rowData;
    if (this.activeTab === 'roughing') {
      return this.rowData.filter((r) => ['R1', 'R2'].includes(r.stand));
    }
    return this.rowData.filter((r) =>
      ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7'].includes(r.stand)
    );
  }

  ngOnInit(): void {
    this.updateTabCounts();
    this.startAutoRefresh();
  }

  ngOnDestroy(): void {
    this.stopAutoRefresh();
  }

  onGridReady(params: GridReadyEvent<RollRow>): void {
    this.gridApi = params.api;
    this.gridApi.setRowData(this.filteredData);
    this.gridApi.paginationSetPageSize(this.pageSize);
    this.gridApi.paginationGoToFirstPage();
  }

  switchTab(key: TabKey): void {
    this.activeTab = key;
    this.currentPage = 1;
    this.gridApi?.setRowData(this.filteredData);
    this.gridApi?.paginationGoToFirstPage();
  }

  toggleAutoRefresh(): void {
    this.autoRefresh = !this.autoRefresh;
    if (this.autoRefresh) this.startAutoRefresh();
    else this.stopAutoRefresh();
  }

  private startAutoRefresh(): void {
    this.stopAutoRefresh();
    if (!this.autoRefresh) return;
    this.refreshInterval = setInterval(() => this.updateLiveData(), 5000);
  }

  private stopAutoRefresh(): void {
    if (this.refreshInterval) clearInterval(this.refreshInterval);
    this.refreshInterval = undefined;
  }

  private updateTabCounts(): void {
    const all = this.rowData.length;
    const roughing = this.rowData.filter((r) => ['R1', 'R2'].includes(r.stand)).length;
    const finishing = this.rowData.filter((r) =>
      ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7'].includes(r.stand)
    ).length;

    for (const t of this.tabs) {
      if (t.key === 'all') t.count = all;
      else if (t.key === 'roughing') t.count = roughing;
      else t.count = finishing;
    }
  }

  updateLiveData(): void {
    this.rowData = this.rowData.map((row) => ({
      ...row,
      cycleWeight: row.cycleWeight + Math.floor(Math.random() * 10 - 5),
      cycleLength: Number((row.cycleLength + (Math.random() * 0.2 - 0.1)).toFixed(1)),
      progress: Math.min(100, Math.max(0, row.progress + Math.floor(Math.random() * 3 - 1)))
    }));

    this.lastUpdated = new Date();
    this.updateTabCounts();
    this.gridApi?.setRowData(this.filteredData);
  }

  onRollIdClick(data: RollRow): void {
    this.selectedRoll = data;
    this.showRollModal = true;
  }

  navigateToRollDetails(): void {
    this.showRollModal = false;
    this.router.navigate(['/roll-details']);
  }

  goToPage(p: number): void {
    if (p < 1 || p > this.totalPages) return;
    this.currentPage = p;
    this.gridApi?.paginationGoToPage(p - 1);
  }

  onPageSizeChange(): void {
    this.gridApi?.paginationSetPageSize(Number(this.pageSize));
    this.currentPage = 1;
    this.gridApi?.paginationGoToFirstPage();
  }

  togglePageSizeDropdown(): void {
    this.pageSizeOpen = !this.pageSizeOpen;
  }

  changePageSize(size: number): void {
    this.pageSize = size;
    this.pageSizeOpen = false;
    this.gridApi?.paginationSetPageSize(Number(this.pageSize));
    this.currentPage = 1;
    this.gridApi?.paginationGoToFirstPage();
  }
}

