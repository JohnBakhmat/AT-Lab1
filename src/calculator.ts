const operations = {
  "+": (a: number, b: number) => a + b,
  "-": (a: number, b: number) => a - b,
  "*": (a: number, b: number) => a * b,
  "/": (a: number, b: number) => a / b,
};

export const evaluate = (a: string, b: string, operator: string) => {
  if (!operandIsValid(a) || !operandIsValid(b)) {
    throw Error("Invalid input");
  }

  const parsedA = parseFloat(a);
  const parsedB = parseFloat(b);

  if (parsedB === 0 && operator === "/") {
    throw Error("Cannot divide by zero");
  }

  if (!operatorExists(operator)) {
    throw Error("Invalid operator");
  }

  return operations[operator](parsedA, parsedB);
};

const operatorExists = (operator: string) => {
  return Object.keys(operations).includes(operator);
};

const operandIsValid = (operand: string) => {
  return /^[0-9.-]+$/.test(operand);
};
