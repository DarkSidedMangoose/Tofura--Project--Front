const trampoline = (fs) => {
  return (...args) => {
    let result = fs(...args);
    while (typeof result == "function") {
      result = result();
    }
    return result;
  };
};

const addOne = (n, num = 1) => {
  if (n === 10000) {
    return n;
  } else {
    return () => addOne(n + 1, num * n);
  }
};

const fromN = trampoline(addOne);

console.log(fromN(5));
