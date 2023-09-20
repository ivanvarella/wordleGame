export const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export const KEYS_INICIAL = [
  {
    id: crypto.randomUUID() + "-Q",
    keyOfKeyboard: "Q",
  },
  {
    id: crypto.randomUUID() + "-W",
    keyOfKeyboard: "W",
  },
  {
    id: crypto.randomUUID() + "-E",
    keyOfKeyboard: "E",
  },
  {
    id: crypto.randomUUID() + "-R",
    keyOfKeyboard: "R",
  },
  {
    id: crypto.randomUUID() + "-T",
    keyOfKeyboard: "T",
  },
  {
    id: crypto.randomUUID() + "-Y",
    keyOfKeyboard: "Y",
  },
  {
    id: crypto.randomUUID() + "-U",
    keyOfKeyboard: "U",
  },
  {
    id: crypto.randomUUID() + "-I",
    keyOfKeyboard: "I",
  },
  {
    id: crypto.randomUUID() + "-O",
    keyOfKeyboard: "O",
  },
  {
    id: crypto.randomUUID() + "-P",
    keyOfKeyboard: "P",
  },
  {
    id: crypto.randomUUID() + "-A",
    keyOfKeyboard: "A",
  },
  {
    id: crypto.randomUUID() + "-S",
    keyOfKeyboard: "S",
  },
  {
    id: crypto.randomUUID() + "-D",
    keyOfKeyboard: "D",
  },
  {
    id: crypto.randomUUID() + "-F",
    keyOfKeyboard: "F",
  },
  {
    id: crypto.randomUUID() + "-G",
    keyOfKeyboard: "G",
  },
  {
    id: crypto.randomUUID() + "-H",
    keyOfKeyboard: "H",
  },
  {
    id: crypto.randomUUID() + "-J",
    keyOfKeyboard: "J",
  },
  {
    id: crypto.randomUUID() + "-K",
    keyOfKeyboard: "K",
  },
  {
    id: crypto.randomUUID() + "-L",
    keyOfKeyboard: "L",
  },
  {
    id: crypto.randomUUID() + "-Z",
    keyOfKeyboard: "Z",
  },
  {
    id: crypto.randomUUID() + "-X",
    keyOfKeyboard: "X",
  },
  {
    id: crypto.randomUUID() + "-C",
    keyOfKeyboard: "C",
  },
  {
    id: crypto.randomUUID() + "-V",
    keyOfKeyboard: "V",
  },
  {
    id: crypto.randomUUID() + "-B",
    keyOfKeyboard: "B",
  },
  {
    id: crypto.randomUUID() + "-N",
    keyOfKeyboard: "N",
  },
  {
    id: crypto.randomUUID() + "-M",
    keyOfKeyboard: "M",
  },
];
