import { db } from "./server/db";

await db.user.create({
  data: {
    emailAddress: "doron@hotmail.com",
    firstName: "Doron",
    lastName: "VAN CUTSEM",
  },
});

console.log("done!");
