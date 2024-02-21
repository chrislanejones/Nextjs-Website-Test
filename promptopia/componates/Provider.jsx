"use client";

import { Provider } from "next-auth/client";

const Providers = ({ Componate, children }) => {
  return (
    <Provider session={children.session}>
      <Component {...children} />
    </Provider>
  );
};

export default Providers;
