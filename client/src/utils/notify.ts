import { toast } from "react-toastify";

export function notify(text: string) {
  return toast(text);
}
