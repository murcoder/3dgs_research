# Virtual Makerspace Tour
![demo](public/assets/demo_1.gif)
## Description
A research project to create an interactive [3D-Gaussian-Splatting](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/) Web-App with react-three-fiber. 
Includes Physics, monitoring, PlayerController, Debug UI and more.

--> [Video](https://vimeo.com/1024414563) <br>
--> [Live](https://3dgs-research.vercel.app)

## Tech Stack

| Technologie                                                       | Version | Description                                        |
|-------------------------------------------------------------------|---------|----------------------------------------------------|
| [three](https://threejs.org/)                                     | 0.171.0 | Graphic Javascript Framework based on JS API WebGL |
| [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) | 8.17.8    | react-three-fiber is a React renderer for threejs  |
| [@react-three/drei](https://github.com/pmndrs/drei)               | 9.114.0    | Graphic Javascript Framework based on JS API WebGL |
| [@react-three/rapier](https://github.com/pmndrs/react-three-rapier)| 1.4.0     | A physics engine packed in a wrapper for the web  |
| [leva](https://github.com/pmndrs/leva)                            | 0.9.35     | A Debug UI package                                 |
| [R3F-Perf](https://www.npmjs.com/package/r3f-perf)                            | 7.2.1     | Monitoring Tool for R3F                |
| [VITE](https://vitejs.dev/)                                       | 5.4.8   | Fast Frontend Building Tool                        |


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
