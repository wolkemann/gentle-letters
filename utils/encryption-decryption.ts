import ncrypt from "ncrypt-js";

export const encryptString = (string: string | null | undefined) => {
  const ncryptObject = new ncrypt(process.env.SECRET || "");

  return ncryptObject.encrypt(string || "");
};

export const decryptString = (string: string | null | undefined) => {
  const ncryptObject = new ncrypt(process.env.SECRET || "");

  console.log(process.env.SECRET);

  return ncryptObject.decrypt(string);
};
