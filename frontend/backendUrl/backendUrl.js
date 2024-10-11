const backendUrl = "http://localhost:8080";

const ApiList = {
  signup: {
    url: `${backendUrl}/signup`,
    method: "post",
  },
  login: {
    url: `${backendUrl}/login`,
    method: "post",
  },
  logout: {
    url: `${backendUrl}/logout`,
    method: "get",
  },
  current_user: {
    url: `${backendUrl}/user-details`,
    method: "get",
  },
};
export default ApiList;
