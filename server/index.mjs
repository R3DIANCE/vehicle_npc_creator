import alt from 'alt'

import VehicleCreator from './constructor/VehicleCreator.mjs'

alt.on(
  'VehicleNPCCreator',
  (model, x, y, z, rx, ry, rz, dim, color, pedDriver, index) => {
    new VehicleCreator(model, x, y, z, rx, ry, rz, dim, color, pedDriver, index)
  }
)
