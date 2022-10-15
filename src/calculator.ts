const operations = {
  "+": (a: number, b: number) => a + b,
  "-": (a: number, b: number) => a - b,
  "*": (a: number, b: number) => a * b,
  "/": (a: number, b: number) => a / b,
};

export const evaluate = (a: string, b: string, operator: string) => {
  const parsedA = parseInt(a, 10);
  const parsedB = parseInt(b, 10);
  return operations[operator](parsedA, parsedB);
};
