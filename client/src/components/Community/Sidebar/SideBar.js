import React from "react";
import classes from "./SideBar.module.css";
import SideBarMenuEle from "./SideBarMenuEle";

const Sidebar = () => {
  return (
    <div className={classes.side}>
      <SideBarMenuEle name={"Home"} path={""} />
      <SideBarMenuEle name={"Stream & Connect"} path={"agora"} />
      <SideBarMenuEle name={"Groups"} path={"chats"} />
    </div>
  );
};

export default Sidebar;
