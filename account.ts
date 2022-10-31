import { model, Model, Schema } from "mongoose";

interface IAccountAltGen {
  userName: string;
  passWord: string;
  status: number;
}
interface IAccountAltGenMethods {}

// Create a new Model type that knows about IUserMethods...
type AccountAltGenModel = Model<IAccountAltGen, {}, IAccountAltGenMethods>;
const AccountAltGenschema = new Schema<IAccountAltGen, AccountAltGenModel, IAccountAltGenMethods>({
  userName: { type: String, required: true },
  passWord: { type: String, required: true },
  status: { type: Number, required: false, default: 0 },
});
export const AccountAltGenModel: AccountAltGenModel = model<IAccountAltGen, AccountAltGenModel>("AccountAltGen", AccountAltGenschema, "accountaltgens");
