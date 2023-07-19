import crypto from 'crypto';

export const generateResetToken =  ()=> {
  const token:string = crypto.randomBytes(32).toString('hex');
  return token;
}
