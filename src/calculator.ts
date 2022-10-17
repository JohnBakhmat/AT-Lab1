const operations = {
  "+": (a: number, b: number) => a + b,
  "-": (a: number, b: number) => a - b,
  "*": (a: number, b: number) => a * b,
  "/": (a: number, b: number) => a / b,
};

export const evaluate = (a: string, b: string, operator: string) => {
  if (!operatorExists(operator)) {
    throw Error("Invalid operator");
  }

  const parsedA = parseFloat(a);
  const parsedB = parseFloat(b);
  return operations[operator](parsedA, parsedB);
};

const operatorExists = (operator: string) => {
  return Object.keys(operations).includes(operator);
};
