import { useAuth } from "../contexts/auth";

import Public from "./Public";
import Private from "./Private";

export default function Routes() {
  const { signed } = useAuth();

  return <div id="container">{signed ? <Private /> : <Public />}</div>;
}
