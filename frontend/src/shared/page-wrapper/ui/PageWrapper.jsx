import {Outlet} from "react-router-dom";
import {Navigation} from "@modules/Navigation/ui/Navigation";
import {Header} from "@modules/Header/ui/Header";

export const PageWrapper = (props) => {
  return (
    <div>
      <Header />
      <Outlet />
      <Navigation />
    </div>
  )
}