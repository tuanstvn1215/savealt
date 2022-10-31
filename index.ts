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
app.use(function (req, res, next) {
  res.status(404);

  // respond with html page
  if (req.accepts("html")) {
    res.render("404", { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts("json")) {
    res.json({ error: "Not found" });
    return;
  }

  // default to plain-text. send()
  res.type("txt").send("Not found");
});
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
