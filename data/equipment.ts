/**
 * Equipment Catalogue Data
 * Sample equipment items for ADNEX
 */

export type EquipmentCategory = 
  | 'Backhoe Loaders'
  | 'Wheel Loaders'
  | 'Skid Steer Loaders'
  | 'Telehandlers'
  | 'Others';

export interface Equipment {
  id: string;
  name: string;
  category: EquipmentCategory;
  description: string;
  year?: number;
  condition: 'New' | 'Used' | 'Refurbished';
  availability: 'Available' | 'In Stock' | 'Subject to Confirmation';
  image: string; // Placeholder image URL
}

export const equipmentCategories: EquipmentCategory[] = [
  'Backhoe Loaders',
  'Wheel Loaders',
  'Skid Steer Loaders',
  'Telehandlers',
  'Others',
];

export const equipment: Equipment[] = [
  // Backhoe Loaders
  {
    id: 'bh-001',
    name: 'JCB 3DX Super',
    category: 'Backhoe Loaders',
    description: 'Heavy-duty backhoe loader, 76 HP engine, 4WD, suitable for construction and excavation work.',
    year: 2022,
    condition: 'Used',
    availability: 'Available',
    image: '/equipment/jcb-3dx-super.jpg',
  },
  {
    id: 'bh-002',
    name: 'Caterpillar 416F2',
    category: 'Backhoe Loaders',
    description: '74 HP, advanced hydraulics, comfortable operator station, ideal for medium to large projects.',
    year: 2021,
    condition: 'Used',
    availability: 'In Stock',
    image: '/equipment/cat-416f2.jpg',
  },
  {
    id: 'bh-003',
    name: 'Case 580N',
    category: 'Backhoe Loaders',
    description: '67 HP, proven reliability, excellent for construction and utility work.',
    year: 2023,
    condition: 'Used',
    availability: 'Subject to Confirmation',
    image: '/equipment/case-580n.jpg',
  },

  // Wheel Loaders
  {
    id: 'wl-001',
    name: 'Volvo L120H',
    category: 'Wheel Loaders',
    description: 'Large wheel loader, 270 HP, high productivity, suitable for mining and heavy construction.',
    year: 2020,
    condition: 'Used',
    availability: 'Available',
    image: '/equipment/volvo-l120h.jpg',
  },
  {
    id: 'wl-002',
    name: 'Caterpillar 950M',
    category: 'Wheel Loaders',
    description: 'Medium wheel loader, 225 HP, versatile performance for various applications.',
    year: 2022,
    condition: 'Used',
    availability: 'In Stock',
    image: '/equipment/cat-950m.jpg',
  },
  {
    id: 'wl-003',
    name: 'Komatsu WA380-8',
    category: 'Wheel Loaders',
    description: '209 HP wheel loader, fuel-efficient, comfortable cab, excellent for construction sites.',
    year: 2021,
    condition: 'Used',
    availability: 'Available',
    image: '/equipment/komatsu-wa380.jpg',
  },

  // Skid Steer Loaders
  {
    id: 'ss-001',
    name: 'Bobcat S570',
    category: 'Skid Steer Loaders',
    description: '57 HP skid steer, compact design, versatile attachment system, perfect for tight spaces.',
    year: 2023,
    condition: 'New',
    availability: 'In Stock',
    image: '/equipment/bobcat-s570.jpg',
  },
  {
    id: 'ss-002',
    name: 'Caterpillar 259D3',
    category: 'Skid Steer Loaders',
    description: '74 HP compact track loader, excellent ground clearance, ideal for construction and landscaping.',
    year: 2022,
    condition: 'Used',
    availability: 'Available',
    image: '/equipment/cat-259d3.jpg',
  },

  // Telehandlers
  {
    id: 'th-001',
    name: 'JCB 540-170',
    category: 'Telehandlers',
    description: '17m lift height, 4000kg capacity, versatile telehandler for construction and material handling.',
    year: 2021,
    condition: 'Used',
    availability: 'Subject to Confirmation',
    image: '/equipment/jcb-540-170.jpg',
  },
  {
    id: 'th-002',
    name: 'Manitou MLT 735-120',
    category: 'Telehandlers',
    description: '12m lift height, 3500kg capacity, robust design for heavy-duty applications.',
    year: 2022,
    condition: 'Used',
    availability: 'Available',
    image: '/equipment/manitou-mlt735.jpg',
  },

  // Others
  {
    id: 'ot-001',
    name: 'Caterpillar D6T Dozer',
    category: 'Others',
    description: 'Heavy dozer, 165 HP, excellent for earthmoving and grading operations.',
    year: 2020,
    condition: 'Used',
    availability: 'Subject to Confirmation',
    image: '/equipment/cat-d6t.jpg',
  },
  {
    id: 'ot-002',
    name: 'JCB 457ZX Wheeled Excavator',
    category: 'Others',
    description: 'Wheeled excavator, 115 HP, excellent mobility, suitable for urban construction.',
    year: 2022,
    condition: 'Used',
    availability: 'Available',
    image: '/equipment/jcb-457zx.jpg',
  },
];
