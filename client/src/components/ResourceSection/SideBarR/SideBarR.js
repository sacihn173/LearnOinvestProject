import React from "react";
import classes from "./SideBarR.module.css";
import SideBarMenuEle from "../../Community/Sidebar/SideBarMenuEle";

const SidebarR = () => {
  return (
    <div className={classes.side}>
      <SideBarMenuEle name={"News"} path={""} />
      <SideBarMenuEle name={"Blogs"} path={"blogs"} />
      <SideBarMenuEle name={"Courses"} path={"courses"} />
      <SideBarMenuEle name={"Discussion"} path={"/community"} />
    </div>
  );
};

export default SidebarR;
