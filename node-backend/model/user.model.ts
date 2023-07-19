import { Schema, model, Document } from 'mongoose';

interface User extends Document {
  email: string;
  password: string;
}

const UserSchema = new Schema<User>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = model<User>('User', UserSchema);

export default UserModel;
