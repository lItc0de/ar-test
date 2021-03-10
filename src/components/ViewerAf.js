/* globals AFRAME */

import { useEffect, useState } from 'react';

const ViewerAF = () => {
  const [markerDigitallsFound, setMarkerDigitallsFound] = useState(false);
  const [markerFabricantFound, setMarkerFabricantFound] = useState(false);

  useEffect(() => {
    AFRAME.registerComponent('fabricantmarker', {
      init: function () {
        const marker = this.el;

        marker.addEventListener('markerFound', () => {
          setMarkerFabricantFound(true);
        });

        marker.addEventListener('markerLost', () => {
          setMarkerFabricantFound(false);
        });
      },
    });

    AFRAME.registerComponent('digitallsmarker', {
      init: function () {
        const marker = this.el;

        marker.addEventListener('markerFound', () => {
          setMarkerDigitallsFound(true);
        });

        marker.addEventListener('markerLost', () => {
          setMarkerDigitallsFound(false);
        });
      },
    });
  });

  return (
    <div>
      <a-scene
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
      >
        <a-nft
          id="fabricant-marker"
          type="nft"
          fabricantmarker
          url="ar-test/static/markers/fabricant_marker"
          smooth="true"
          smoothcount="10"
          smoothtolerance=".01"
          smooththreshold="5"
        ></a-nft>

        <a-nft
          id="digitalls-marker"
          type="nft"
          digitallsmarker
          url="ar-test/static/markers/digitalls_marker"
          smooth="true"
          smoothcount="10"
          smoothtolerance=".01"
          smooththreshold="5"
        ></a-nft>
        <a-entity camera></a-entity>
      </a-scene>

      {markerDigitallsFound && (
        <div>
          <h1>Hello Digitalls</h1>
        </div>
      )}

      {markerFabricantFound && (
        <div>
          <h1>Hello Fabricant</h1>
        </div>
      )}
    </div>
  );
};

export default ViewerAF;
