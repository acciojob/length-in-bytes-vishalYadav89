const byteSize = (str) => {
  let bytes = 0;

  for (let char of str) {
    const code = char.codePointAt(0);

    if (code <= 0x7F) {
      bytes += 1;          // 1 byte (ASCII)
    } else if (code <= 0x7FF) {
      bytes += 2;          // 2 bytes
    } else if (code <= 0xFFFF) {
      bytes += 3;          // 3 bytes
    } else {
      bytes += 4;          // 4 bytes (emoji etc.)
    }
  }

  return bytes;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));