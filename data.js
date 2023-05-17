var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room-",
      "name": "Living Room ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.913273594534294,
        "pitch": 0.3878258486799915,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": -3.0162525587794224,
          "pitch": -0.017032835008530256,
          "rotation": 0,
          "target": "1-bedroom-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bedroom-",
      "name": "Bedroom ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.10067786809694823,
        "pitch": 0.11674352502345187,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": -3.091419119140486,
          "pitch": 0.02424134360360064,
          "rotation": 0,
          "target": "0-living-room-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "3rdfloor",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
