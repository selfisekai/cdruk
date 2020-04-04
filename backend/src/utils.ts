import bcrypt from 'bcryptjs';

export const hashPassword = (password: string, salt: string) => bcrypt.hash(password, salt);

export const generateSalt = () => bcrypt.genSalt();
