import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

type ActiveType = 'rolls' | 'choke';

interface KpiCard {
  id: 'rm' | 'f1f4' | 'f5f7' | 'ed' | 'pinch';
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
  pos: 'T' | 'B' | 'OP' | 'DR';
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

interface ChokeRow {
  chokeId: string;
  weight: number;
  slabs: number;
  length: number;
  supplier: string;
}

interface EntryForm {
  stand: string;
  pos: '' | 'T' | 'B' | 'OP' | 'DR';
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
  imports: [CommonModule, FormsModule, RouterModule, DatePipe],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent {
  private readonly router = inject(Router);

  activeType: ActiveType = 'rolls';
  selectedKpi: KpiCard['id'] = 'rm';

  openEntryModal = false;
  showToast = false;
  openDropdown: 'rollType' | 'grindType' | null = null;

  readonly kpiCards: KpiCard[] = [
    {
      id: 'rm',
      label: 'RM',
      subLabel: 'Roughing Mill',
      types: ['WR', 'BUR'],
      wrCount: 4,
      burCount: 4,
      totalWeight: '24,500',
      totalLength: '165.2',
      accent: '#FF8C42',
      accentBg: 'rgba(255,140,66,0.12)',
      accentBorder: 'rgba(255,140,66,0.3)',
      barGradient: 'linear-gradient(90deg,#FF8C42,#FF6B00)'
    },
    {
      id: 'f1f4',
      label: 'F1 – F4',
      subLabel: 'Finishing Stands',
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
      subLabel: 'Finishing Stands',
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

  readonly rollData: RollRow[] = [
    {
      stand: 'F1E',
      pos: 'OP',
      rollNo: 'F1EOS06',
      diameter: 600.0,
      matCode: 'SS',
      initCrownMax: '-',
      initCrownMin: '-',
      equiCrownMax: '-',
      equiCrownMin: '-',
      grindType: '-',
      grindIndex: 0,
      shim: 0,
      accumWeight: 154_763,
      accumSlabs: 6967,
      accumLength: 415,
      supplier: 'Supplier1',
      rollChangeTime: '01/15 15:01'
    },
    {
      stand: 'F1E',
      pos: 'DR',
      rollNo: 'F1EDS06',
      diameter: 600.0,
      matCode: 'SS',
      initCrownMax: '-',
      initCrownMin: '-',
      equiCrownMax: '-',
      equiCrownMin: '-',
      grindType: '-',
      grindIndex: 0,
      shim: 0,
      accumWeight: 154_763,
      accumSlabs: 6967,
      accumLength: 413,
      supplier: 'Supplier1',
      rollChangeTime: '01/15 15:01'
    },
    {
      stand: 'F3',
      pos: 'T',
      rollNo: 'FB3FDOA01',
      diameter: 1539.402,
      matCode: 'FS',
      initCrownMax: 0.3,
      initCrownMin: 0.0,
      equiCrownMax: 0.0,
      equiCrownMin: 0.0,
      grindType: 'FS',
      grindIndex: 0,
      shim: 70,
      accumWeight: 46_382,
      accumSlabs: 2015,
      accumLength: 243,
      supplier: 'Supplier2',
      rollChangeTime: '02/06 19:15'
    },
    {
      stand: 'F3',
      pos: 'B',
      rollNo: 'FB3FDOA02',
      diameter: 1540.358,
      matCode: 'FS',
      initCrownMax: 0.3,
      initCrownMin: 0.0,
      equiCrownMax: 0.0,
      equiCrownMin: 0.0,
      grindType: 'FS',
      grindIndex: 0,
      shim: 65,
      accumWeight: 46_382,
      accumSlabs: 2015,
      accumLength: 243,
      supplier: 'Supplier2',
      rollChangeTime: '02/06 19:15'
    },
    {
      stand: 'F1',
      pos: 'T',
      rollNo: 'F1HSCMA03',
      diameter: 766.731,
      matCode: 'HSS',
      initCrownMax: 0.0,
      initCrownMin: 0.8,
      equiCrownMax: 0.8,
      equiCrownMin: -1.0,
      grindType: 'HSS',
      grindIndex: 1,
      shim: 0,
      accumWeight: 4026,
      accumSlabs: 151,
      accumLength: 25,
      supplier: 'Supplier3',
      rollChangeTime: '02/12 06:32'
    },
    {
      stand: 'F1',
      pos: 'B',
      rollNo: 'F1HSDOA06',
      diameter: 766.741,
      matCode: 'HSS',
      initCrownMax: 0.0,
      initCrownMin: 0.8,
      equiCrownMax: 0.8,
      equiCrownMin: -1.0,
      grindType: 'HSS',
      grindIndex: 1,
      shim: 0,
      accumWeight: 4026,
      accumSlabs: 151,
      accumLength: 25,
      supplier: 'Supplier3',
      rollChangeTime: '02/12 06:32'
    },
    {
      stand: 'F5',
      pos: 'T',
      rollNo: 'FB5FCFA01',
      diameter: 1530.034,
      matCode: 'FS',
      initCrownMax: 0.3,
      initCrownMin: 0.0,
      equiCrownMax: 0.0,
      equiCrownMin: 0.0,
      grindType: 'FS',
      grindIndex: 0,
      shim: 20,
      accumWeight: 46_382,
      accumSlabs: 2015,
      accumLength: 404,
      supplier: 'Supplier2',
      rollChangeTime: '02/06 19:15'
    },
    {
      stand: 'F1',
      pos: 'T',
      rollNo: 'F1CIYA05',
      diameter: 750.064,
      matCode: 'HICHR',
      initCrownMax: 0.0,
      initCrownMin: 0.8,
      equiCrownMax: 0.8,
      equiCrownMin: -1.0,
      grindType: 'HICHR',
      grindIndex: 1,
      shim: 0,
      accumWeight: 2414,
      accumSlabs: 119,
      accumLength: 28,
      supplier: 'Supplier4',
      rollChangeTime: '02/12 10:23'
    },
    {
      stand: 'F5',
      pos: 'T',
      rollNo: 'FB5FNKA19',
      diameter: 1531.136,
      matCode: 'FS',
      initCrownMax: 0.3,
      initCrownMin: 0.0,
      equiCrownMax: 0.0,
      equiCrownMin: 0.0,
      grindType: 'FS',
      grindIndex: 0,
      shim: 45,
      accumWeight: 46_517,
      accumSlabs: 1995,
      accumLength: 635,
      supplier: 'Supplier2',
      rollChangeTime: '02/06 19:15'
    },
    {
      stand: 'F5',
      pos: 'B',
      rollNo: 'FB5FNKA20',
      diameter: 1526.077,
      matCode: 'FS',
      initCrownMax: 0.3,
      initCrownMin: 0.0,
      equiCrownMax: 0.0,
      equiCrownMin: 0.0,
      grindType: 'FS',
      grindIndex: 0,
      shim: 50,
      accumWeight: 46_517,
      accumSlabs: 1995,
      accumLength: 635,
      supplier: 'Supplier2',
      rollChangeTime: '02/06 19:15'
    }
  ];

  readonly chokeData: ChokeRow[] = [
    { chokeId: 'CHK-E1-OS', weight: 12_500, slabs: 820, length: 58.2, supplier: 'Supplier3' },
    { chokeId: 'CHK-E1-DS', weight: 12_300, slabs: 810, length: 57.1, supplier: 'Supplier3' },
    { chokeId: 'CHK-E2-OS', weight: 11_800, slabs: 780, length: 54.3, supplier: 'Supplier4' },
    { chokeId: 'CHK-E2-DS', weight: 11_600, slabs: 765, length: 53.1, supplier: 'Supplier4' },
    { chokeId: 'CHK-F1-OS', weight: 8900, slabs: 580, length: 42.5, supplier: 'Supplier5' },
    { chokeId: 'CHK-F1-DS', weight: 8750, slabs: 570, length: 41.8, supplier: 'Supplier5' }
  ];

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

  get groupedRolls(): Array<{ stand: string; rows: RollRow[] }> {
    const groups = new Map<string, RollRow[]>();
    for (const row of this.rollData) {
      const list = groups.get(row.stand) ?? [];
      list.push(row);
      groups.set(row.stand, list);
    }
    return Array.from(groups.entries()).map(([stand, rows]) => ({ stand, rows }));
  }

  isGroupA(card: KpiCard): boolean {
    return card.id === 'rm' || card.id === 'f1f4' || card.id === 'f5f7';
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

  getPOSBadge(pos: RollRow['pos']): { [key: string]: string } {
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

