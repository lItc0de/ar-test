/* globals THREE */
import { useEffect, useState } from 'react';

import initializeRenderer from '../utils/initializeRenderer';
import { initializeArToolkit, getMarker } from '../utils/arToolkit';

const { Camera, Scene } = THREE;

const ViewerAR = () => {
  const [markerFound, setMarkerFound] = useState(false);

  let canvas = null;

  useEffect(() => {
    const renderer = initializeRenderer(canvas);

    const scene = new Scene();
    const camera = new Camera();
    scene.add(camera);

    const onRenderFcts = [];
    const arToolkitContext = initializeArToolkit(
      renderer,
      camera,
      onRenderFcts
    );

    const marker = getMarker(arToolkitContext, camera);
    marker.addEventListener('markerFound', () => {
      setMarkerFound(true);
    });

    marker.addEventListener('markerLost', () => {
      setMarkerFound(false);
    });

    // var light = new AmbientLight(0x404040, props.light); // white light
    // scene.add(light);

    // render the scene
    onRenderFcts.push(() => {
      renderer.render(scene, camera);
    });

    // run the rendering loop
    let lastTimeMsec = null;

    const animate = (nowMsec) => {
      // keep looping
      requestAnimationFrame(animate);
      // measure time
      lastTimeMsec = lastTimeMsec || nowMsec - 1000 / 60;
      const deltaMsec = Math.min(200, nowMsec - lastTimeMsec);
      lastTimeMsec = nowMsec;
      // call each update function
      onRenderFcts.forEach((onRenderFct) => {
        onRenderFct(deltaMsec / 1000, nowMsec / 1000);
      });
    };
    requestAnimationFrame(animate);

    /* eslint-disable-next-line */
  }, []);

  const storeRef = (node) => {
    canvas = node;
  };

  return (
    <div>
      <canvas ref={storeRef} />
      {markerFound && (
        <div>
          <h1>Hello</h1>
        </div>
      )}
    </div>
  );
};

export default ViewerAR;
