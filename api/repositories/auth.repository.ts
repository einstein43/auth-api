import { User } from "../users/users";
import { users } from "../users/users";

export class AuthRepository {
  constructor() {}








   public async auth(email: string, password: string) {
    const user = users.find(user => user.email === email);
    if (!user) {
      return {
        status: 401,
        message: "User not found",
      };
    } else if (user.password !== password) {
      return {
        status: 401,
        message: "Password does not match",
      };
    } else {
      return {
        status: 200,
        message: "Credentials Correct",
      };
    }
  }
  



//   public async auth(email: string, password: string) {
    
//     const user = users.find((user) => user.email === email);
//     const passwordMatch = users.find((user) => user.password === password);

//     if(!user) {
//         return {
//             status: 401,
//             message: "User not found",
//         };
//     } else if(!passwordMatch) {
//         return {
//             status: 401,
//             message: "Password does not match",
//         };
//     } else {
//         return {
//             status: 200,
//             message: "Credentials Correct",
//         };
//     }

    
//   }
}
