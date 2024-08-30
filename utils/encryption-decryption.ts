import ncrypt from "ncrypt-js";

export const encryptString = (string: string | null | undefined) => {
  const ncryptObject = new ncrypt(process.env.SECRET || "");

  return ncryptObject.encrypt(Encode(string) || "");
};

export const decryptString = (string: string | null | undefined) => {
  const ncryptObject = new ncrypt(process.env.SECRET || "");

  return decodeNumericEntities(ncryptObject.decrypt(string || ""));
};

function Encode(string) {
  let i = string.length,
    a = [];

  while (i--) {
    let iC = string[i].charCodeAt();
    if (iC < 65 || iC > 127 || (iC > 90 && iC < 97)) {
      a[i] = "&#" + iC + ";";
    } else {
      a[i] = string[i];
    }
  }
  return a.join("");
}

function decodeNumericEntities(text) {
  return text.replace(/&#(\d+);/g, (match, dec) => {
    // Convert the decimal code to a Unicode character
    return String.fromCodePoint(parseInt(dec, 10));
  });
}
