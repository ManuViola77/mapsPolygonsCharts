const BACKGROUND = '#041727';
const BLACK = '#000000';
const MAP_LIGHT_WATER = '#1d5c76';
const MAP_RED = '#ff0000';
const MAP_ROADS = '#342F63';
const MAP_WATER = '#0D385B';
const PRIMARY_PURPLE = '#7E16FF';
const SECONDARY_PURPLE_WARM = '#A359FF';
const WHITE = '#FFFFFF';

export const staticMapStyle = [
  {
    featureType: 'all',
    elementType: 'all',
    stylers: [
      {
        color: PRIMARY_PURPLE,
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'geometry.fill',
    stylers: [
      {
        lightness: '-100',
      },
      {
        color: PRIMARY_PURPLE,
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: PRIMARY_PURPLE,
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [
      {
        lightness: '0',
      },
      {
        color: BACKGROUND,
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: BACKGROUND,
      },
      {
        lightness: '0',
      },
      {
        weight: 1.2,
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'all',
    stylers: [
      {
        color: BACKGROUND,
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        color: BACKGROUND,
      },
      {
        lightness: '0',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: BACKGROUND,
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: BACKGROUND,
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'landscape.natural.terrain',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: BACKGROUND,
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: BACKGROUND,
      },
      {
        lightness: '5',
      },
      {
        saturation: '-10',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [
      {
        lightness: '100',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [
      {
        color: WHITE,
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: SECONDARY_PURPLE_WARM,
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: SECONDARY_PURPLE_WARM,
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        lightness: 17,
      },
      {
        color: MAP_ROADS,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: SECONDARY_PURPLE_WARM,
      },
      {
        lightness: 29,
      },
      {
        weight: '0.10',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: BLACK,
      },
      {
        lightness: 18,
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: MAP_ROADS,
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.stroke',
    stylers: [
      {
        visibility: 'off',
      },
      {
        weight: '0.10',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: BLACK,
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        color: BLACK,
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: MAP_ROADS,
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: MAP_ROADS,
      },
      {
        lightness: '0',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: MAP_LIGHT_WATER,
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: MAP_WATER,
      },
    ],
  },
];

export const mapStyle = [
  ...staticMapStyle,
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'off',
      },
      {
        color: BACKGROUND,
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: MAP_RED,
      },
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.stroke',
    stylers: [
      {
        visibility: 'off',
      },
      {
        weight: '0.10',
      },
    ],
  },
];
