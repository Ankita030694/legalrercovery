#!/bin/bash
# Launches Google Chrome for Remotion renders with flags Remotion has no option for.
# Without them, headless Chrome screenshots a frame before every 3D layer has finished drawing,
# so floating cards go missing from random frames of the render.
exec "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --run-all-compositor-stages-before-draw \
  --disable-checker-imaging \
  "$@"
