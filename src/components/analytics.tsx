import { useEffect } from "react";

export function Analytics() {
  useEffect(() => {
    import("@litemetrics/tracker").then(({ createTracker }) => {
      createTracker({
        siteId: "site_m0i7rspp7gge",
        endpoint: "https://metrics.codixus.com/api/collect",
      });
    });
  }, []);

  return null;
}
