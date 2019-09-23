import "dotenv/config";
import { sign } from "jsonwebtoken";
import { User } from "./entity/User";

// exclamation point tells type script that the process.env.ACESS_TOKEN_SECRET in defined
export const createAccessToken = (user: User) => {
  return sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "15m"
  });
};

export const createRefreshToken = (user: User) => {
  return sign({ userId: user.id }, process.env.REFRESH_TOKEN_SECRET!, {
    expiresIn: "7d"
  });
};
