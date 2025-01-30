import { useContext } from "react";
import { MenuContext } from "../../Context/Menu";

export function useMenu() {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error("please wrap component in MenuContextProvider.");

  const open = () => ctx.setState("opened");
  const close = () => ctx.setState("closed");
  const toggle = () => (ctx.state === "opened" ? close() : open());

  return {
    state: ctx.state,
    open,
    close,
    toggle,
  };
}
