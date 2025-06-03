import { jwtDecode } from "jwt-decode";

const decodeJwt = (token) => {
  const decodedToken = jwtDecode(token);
  return decodedToken;
};

export default decodeJwt;
