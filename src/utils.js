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
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-W",
    keyOfKeyboard: "W",
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-E",
    keyOfKeyboard: "E",
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-R",
    keyOfKeyboard: "R",
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-T",
    keyOfKeyboard: "T",
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-Y",
    keyOfKeyboard: "Y",
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-U",
    keyOfKeyboard: "U",
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-I",
    keyOfKeyboard: "I",
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-O",
    keyOfKeyboard: "O",
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-P",
    keyOfKeyboard: "P",
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-A",
    keyOfKeyboard: "A",
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-S",
    keyOfKeyboard: "S",
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-D",
    keyOfKeyboard: "D",
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-F",
    keyOfKeyboard: "F",
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-G",
    keyOfKeyboard: "G",
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-H",
    keyOfKeyboard: "H",
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-J",
    keyOfKeyboard: "J",
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-K",
    keyOfKeyboard: "K",
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-L",
    keyOfKeyboard: "L",
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-Z",
    keyOfKeyboard: "Z",
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-X",
    keyOfKeyboard: "X",
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-C",
    keyOfKeyboard: "C",
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-V",
    keyOfKeyboard: "V",
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-B",
    keyOfKeyboard: "B",
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-N",
    keyOfKeyboard: "N",
    keyStatus: "key-keyboard",
  },
  {
    id: crypto.randomUUID() + "-M",
    keyOfKeyboard: "M",
    keyStatus: "key-keyboard",
  },
];
