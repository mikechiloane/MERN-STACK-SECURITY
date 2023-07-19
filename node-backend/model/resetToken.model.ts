import { Schema, model, Document } from 'mongoose';
import { generateOtp } from '../util/generateOtp';
import { generateResetToken } from '../util/generateResetToken';

interface ResetToken extends Document {
    email: string;
    token: string;
    otp:string;
}

const ResetTokenSchema = new Schema<ResetToken>({
    email: { type: String, required: true, unique: true },
    token: { type: String, default:'' },
    otp: { type: String, default: '' },
  });
  
  ResetTokenSchema.pre<ResetToken>('save', function (next) {
    if (!this.otp) {
      this.otp = generateOtp();
      this.token = generateResetToken();
    }
    next();
  });

const ResetTokenModel = model<ResetToken>('ResetToken', ResetTokenSchema);

export default ResetTokenModel;

