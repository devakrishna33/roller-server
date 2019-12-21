import auth from "./auth";
import user from "./user";
import post from "./post";
import project from "./project";

export default {
  ...auth,
  ...user,
  ...post,
  ...project
};
