import React from "react";
import classes from "./SideBarR.module.css";
import SideBarMenuEle from "../../Community/Sidebar/SideBarMenuEle";

const SidebarR = () => {
  return (
    <div className={classes.side}>
      <SideBarMenuEle name={"Blogs"} path={""} />
      <SideBarMenuEle name={"News"} path={"news"} />
      <SideBarMenuEle name={"Videos"} path={"videos"} />
      <SideBarMenuEle name={"Discussion"} path={"community"} />
    </div>
  );
};

export default SidebarR;
