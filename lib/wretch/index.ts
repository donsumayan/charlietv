import _wretch from "wretch";

import { auth } from "./middlewares/auth";
import { queryString } from "./middlewares/queryString";

const wretch = (rootUrl = process.env.EXPO_PUBLIC_TMDB_API_BASE_URL) => {
  return _wretch(rootUrl)
    .middlewares([queryString(), auth()])
    .catcherFallback((err) => {
      throw err;
    });
};

export default wretch;
