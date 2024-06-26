import { Middleware } from "wretch";

import { Options } from "../types";

export const auth: Middleware = () => (next) => async (url, opts: Options) => {
  opts.headers = {
    ...opts.headers,
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_API_ACCESS_TOKEN}`,
  };

  return next(url, opts);
};
