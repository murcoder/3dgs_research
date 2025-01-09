# Interactive 3D-Gaussian-Splatting WebApp
![demo](public/assets/demo_1.gif)
## Description
A research project to create an interactive [3D-Gaussian-Splatting](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/) scene with react-three-fiber. 
Includes Physics, monitoring, PlayerController, Debug UI and more.

--> see [Demo Video](https://vimeo.com/1024414563)

## Tech Stack

| Technologie                                                       | Version | Description                                        |
|-------------------------------------------------------------------|---------|----------------------------------------------------|
| [three](https://threejs.org/)                                     | 0.158.0 | Graphic Javascript Framework based on JS API WebGL |
| [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) | 8.15    | react-three-fiber is a React renderer for threejs  |
| [@react-three/drei](https://github.com/pmndrs/drei)               | 9.88    | Graphic Javascript Framework based on JS API WebGL |
| [@react-three/rapier](https://github.com/pmndrs/react-three-rapier)| 1.3     | A physics engine packed in a wrapper for the web  |
| [leva](https://github.com/pmndrs/leva)                            | 0.9     | A Debug UI package                                 |
| [R3F-Perf](https://www.npmjs.com/package/r3f-perf)                            | 0.9     | Monitoring Tool for R3F                |
| [VITE](https://vitejs.dev/)                                       | 5.1.6   | Fast Frontend Building Tool                        |


## Run

```
npm install
npm run dev
```

## Interactive Splats
Conditional Rendering of different scans

![demo](public/assets/demo_2.gif)

## Mixed Content
Integrated HTML and Videos

![demo](public/assets/demo_3.gif)


## License
[GPL3 licensed](LICENSE)
