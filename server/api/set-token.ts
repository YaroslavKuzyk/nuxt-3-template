import {
  defineEventHandler,
  getCookie,
  H3Event,
  parseCookies,
  setCookie,
} from "h3";
export default defineEventHandler(async (event: H3Event) => {
  const cookies = parseCookies(event);
  const token = cookies?.token;
  setCookie(event, "token", token);
  const myToken = getCookie(event, "token");

  console.log(myToken);
});
