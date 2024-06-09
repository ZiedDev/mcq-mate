import { Workbox } from "workbox-window";
import createModal from "./modal.js";

export default function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    const wp = new Workbox("sw.js");

    wp.addEventListener("installed", (event) => {
      if (event.isUpdate) {
        createModal(
          "", // title
          ["New Update is available"], // content,
          [
            "Update",
            () => {
              window.location.reload();
            },
          ],
          undefined,
          () => {
            window.location.reload();
          }
        );
      }
    });

    wp.register();
  }
}
