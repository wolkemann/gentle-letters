import ncrypt from "ncrypt-js";

export const encryptString = (string: string) => {
  const ncryptObject = new ncrypt(process.env.SECRET || "");

  return ncryptObject.encrypt(encodeHTML(string) || "");
};

export const decryptString = (string: string) => {
  const ncryptObject = new ncrypt(process.env.SECRET || "");

  return decodeHTML((ncryptObject.decrypt(string) as string) || "");
};

function encodeHTML(string: string) {
  let i = string.length,
    a = [];

  while (i--) {
    let iC = string.charCodeAt(i);
    if (iC < 65 || iC > 127 || (iC > 90 && iC < 97)) {
      a[i] = "&#" + iC + ";";
    } else {
      a[i] = string[i];
    }
  }
  return a.join("");
}

function decodeHTML(text: string) {
  return text.replace(/&#(\d+);/g, (match, dec) => {
    // Convert the decimal code to a Unicode character
    return String.fromCodePoint(parseInt(dec, 10));
  });
}
