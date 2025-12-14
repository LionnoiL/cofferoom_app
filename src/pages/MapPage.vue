<template>
  <div class="map-page">
    <h2>Кав'ярні на карті</h2>

    <l-map
      style="height: 80vh; width: 100%;"
      :zoom="16"
      :center="[defaultLat, defaultLng]"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <l-marker
        v-for="cafe in cafes"
        :key="cafe.id"
        :lat-lng="[cafe.lat, cafe.lng]"
      >
        <l-popup>{{ cafe.name }}</l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script setup lang="ts">
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { cafes } from '@/data/cafes';

// Імпорт іконок для Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Виправляємо маркери для Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow
});

const defaultLat = cafes[0].lat;
const defaultLng = cafes[0].lng;
</script>

<style scoped>
.map-page {
  padding: 16px;
}

h2 {
  margin-bottom: 16px;
  text-align: center;
}
</style>