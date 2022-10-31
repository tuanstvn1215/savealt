import express, { Express, Request, Response } from "express";
import { AccountAltGenModel } from "./account";
import * as db from "./db";

const PORT: number = parseInt("8080");
const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
db.run()
  .then((res) => {})
  .catch((error) => {
    console.log(error);
  });
app.post("/save", async (req: Request, res: Response) => {
  try {
    const accounts: [] = req.body.accounts;
    let accountsInDb: [];
    console.log("adfsf");
    accounts.forEach((account: any) => {
      let accountInDb = AccountAltGenModel.findOne({
        userName: account.userName,
      });
      if (!accountInDb) {
        AccountAltGenModel.insertMany([{ userName: account.userName, passWord: account.passWord, status: 0 }]);
      }
    });

    res.send("hello");
  } catch (error) {}
});
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
