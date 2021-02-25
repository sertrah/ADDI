import ListLead from "presentation-layer/lead/ListLead";
import AddLead from "presentation-layer/lead/AddLead";
import ListProspect from "presentation-layer/prospect/ListProspect";
import Home from "presentation-layer/home";

import { ROUTER_PATH_LIST } from "./constants";

const routes = [
  {
    path: ROUTER_PATH_LIST.default,
    component: Home,
  },
  {
    path: ROUTER_PATH_LIST.leads,
    component: ListLead,
  },
  {
    path: ROUTER_PATH_LIST.addLead,
    component: AddLead,
  },
  {
    path: ROUTER_PATH_LIST.prospects,
    component: ListProspect,
  },
];

export default routes;
