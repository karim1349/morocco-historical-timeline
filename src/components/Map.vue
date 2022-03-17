<template>
  <div>
        <gmap-map :options="mapStyle" map-type-id="terrain" :zoom="7" :center="center" style="width:100%;height:80%;position:absolute;top:0px;left:0px;">
            <gmap-polygon :paths="getMoroccoBorders" :options="getMoroccoOptions" ></gmap-polygon>
            <gmap-polygon :paths="getFranceBorders" :options="getFranceOptions" ></gmap-polygon>
            <gmap-polygon :paths="getSpainBorders" :options="getSpainOptions" ></gmap-polygon>
		</gmap-map>
        <div style="position:absolute;bottom:10px;width:80%">
            <p class="text-center">{{era}}</p>
            <b-form-input  v-model="era" min=1950 max=2022 step=1 type="range"></b-form-input>
        </div>
  </div>
</template>

<script>
import Morocco1979 from '../assets/morocco.json'
import Morocco1978 from '../assets/morocco1978.json'
import Morocco1974 from '../assets/morocco1974.json'
import Morocco1968 from '../assets/morocco1968.json'
import Morocco1959 from '../assets/morocco1959.json'
import Morocco1955 from '../assets/morocco1959.json'
import SidiIfni from '../assets/SidiIfni.json'

export default {
    name: 'MyMap',
    data() {
        return {
            era:2022,
			center: { 
				lat: 28.108932,
				lng: -10.228139
			},
            mapStyle: {
				zoomControlOptions: {
					position: 8
				},
				gestureHandling: 'greedy',
				mapTypeControl: false,
				fullscreenControl: false,
				streetViewControl: false
			},
            
        }
    },
    computed: {
        getMoroccoBorders() {
            if(this.era >= 1979) {
                return Morocco1979
            }
            else if(this.era >= 1975) {
                return Morocco1978
            }
            else if(this.era >= 1969) {
                return Morocco1974
            }
            else if(this.era >= 1960) {
                return Morocco1968
            }
            else if(this.era >= 1956) {
                return Morocco1959
            }
            else {
                return [{
                    "lat": 0,
                    "lng":0
                }]
            }
        },
        
        getMoroccoOptions() {
            return {
                strokeColor: '#A41E2F',
                strokeOpacity: 0.8,
                strokeWeight: 3,
                fillColor: '#A41E2F',
                fillOpacity: 0.6
            }
        },
        getFranceBorders() {
            if(this.era >= 1912 && this.era < 1956) {
                return Morocco1955
            }
            else {
                
                return [{
                    "lat": 0,
                    "lng":0
                }]
            }
        },
        
        getFranceOptions() {
                return {
                    strokeColor: 'blue',
                    strokeOpacity: 0.8,
                    strokeWeight: 3,
                    fillColor: 'blue',
                    fillOpacity: 0.6
                }
        },
        getSpainBorders() {
            if(this.era >= 1912 && this.era < 1969) {
                return SidiIfni
            }
            else {
                
                return [{
                    "lat": 0,
                    "lng":0
                }]
            }
        },
        
        getSpainOptions() {
                return {
                    strokeColor: 'yellow',
                    strokeOpacity: 0.8,
                    strokeWeight: 3,
                    fillColor: 'yellow',
                    fillOpacity: 0.6
                }
        }
    },
}

</script>

<style>

</style>