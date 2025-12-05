import {Outlet} from "react-router-dom";
import {Navigation} from "@modules/Navigation/ui/Navigation";

export const PageWrapper = (props) => {
  return (
    <section>
      <Outlet />
      <Navigation />
    </section>
  )
}