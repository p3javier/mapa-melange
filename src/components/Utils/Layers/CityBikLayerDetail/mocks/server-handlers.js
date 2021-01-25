import { rest } from "msw"; // msw supports graphql too!
import * as response from "./response.json";

const handlers = [
  rest.get(
    "https://api.citybik.es/v2/networks/wrm-wroclaw",
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(response));
    }
  ),
];

export { handlers };
