// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Location, Surface, SurfaceShape } from "react-360-web";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options
  });
  const s = r360.getDefaultSurface();
  s.setShape("Flat");
  // Render your app content to the default cylinder surface
  r360.renderToLocation(r360.createRoot("layout-3d"), new Location(0, 0, 0));

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL("360_world.jpg"));
}

window.React360 = { init };
