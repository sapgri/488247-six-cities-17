import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {Map, TileLayer, Zoom} from 'leaflet';

import { MapSetting } from '../const';
import {Location} from '../types';

export default function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  location: Location,
  weelScalable?: Zoom,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
        scrollWheelZoom: weelScalable,
      });

      const layer = new TileLayer(
        MapSetting.Layer, { attribution: MapSetting.Copiright }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, location, weelScalable]);

  return map;
}
