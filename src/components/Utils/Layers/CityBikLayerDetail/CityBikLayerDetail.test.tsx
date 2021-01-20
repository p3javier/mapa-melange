//@ts-nocheck
import React from "react";
import { render } from "@testing-library/react";
import CityBikLayerDetail from "./CityBikLayerDetail";

import { MapConsumer } from "react-leaflet";

describe("CityBikeLayer tests", () => {
  it("should render", () => {
    const { debug } = render(
      <MapConsumer>
        <CityBikLayerDetail />
      </MapConsumer>
    );
    console.log(debug);
  });
});
