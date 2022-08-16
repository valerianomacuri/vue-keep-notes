import "material-design-icons-iconfont/dist/material-design-icons.css";

import { createVuetify } from "vuetify";
import { aliases, md } from "vuetify/iconsets/md";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default createVuetify({
  theme: {
    defaultTheme: "light",
  },
  icons: {
    defaultSet: "md",
    aliases,
    sets: {
      md,
    },
  },
  components,
  directives,
});
