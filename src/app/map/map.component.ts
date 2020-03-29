import { Component, OnInit, Input } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  @Input() latitude: number;
  @Input() longitude: number;
  constructor() {}

  ngOnInit(): void {
    console.log('lat', this.latitude);
    Object.getOwnPropertyDescriptor(mapboxgl, 'accessToken').set(
      environment.mapbox.accessToken
    );
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 15,
      center: [this.longitude, this.latitude]
      // center: [-121.811574, 37.681508]
    });

    this.map.addControl(new mapboxgl.NavigationControl());
  }
}
