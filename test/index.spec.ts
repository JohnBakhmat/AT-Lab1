import { evaluate } from "../src/calculator";

describe("Addition operation is correct", () => {
  it("should add two numbers", () => {
    expect(evaluate("1", "2", "+")).toBe(3);
  });

  it("should NOT add numbers if there >2 or <2 operands", () => {
    expect(() => evaluate("1", "2 3", "+")).toThrow("Invalid input");
  });

  it("should NOT add numbers if there is no operator", () => {
    expect(() => evaluate("1", "2", "")).toThrow("Invalid operator");
  });

  it("should NOT add numbers if there is an invalid operator", () => {
    expect(() => evaluate("1", "2", "a")).toThrow("Invalid operator");
  });

  it("should NOT add numbers if there is an invalid operand", () => {
    expect(() => evaluate("1", "a", "+")).toThrow("Invalid input");
    expect(() => evaluate("a", "1", "+")).toThrow("Invalid input");
  });

  it("should NOT add numbers if there is an invalid operand and operator", () => {
    expect(() => evaluate("a", "b", "c")).toThrow("Invalid input");
  });

  it("should work on float numbers", () => {
    expect(evaluate("1.5", "2.5", "+")).toBe(4);
  });

  it("should work on negative numbers", () => {
    expect(evaluate("-1", "-2", "+")).toBe(-3);
  });

  it("should work on negative and positive numbers", () => {
    expect(evaluate("-1", "2", "+")).toBe(1);
  });

  it("should work on float and negative numbers", () => {
    expect(evaluate("-1.5", "2.6", "+")).toBe(1.1);
  });
});

describe("Subtraction operation is correct", () => {
  it("should subtract two numbers", () => {
    expect(evaluate("1", "2", "-")).toBe(-1);
  });

  it("should NOT subtract numbers if there >2 or <2 operands", () => {
    expect(() => evaluate("1", "2 3", "-")).toThrow("Invalid input");
  });

  it("should NOT subtract numbers if there is no operator", () => {
    expect(() => evaluate("1", "2", "")).toThrow("Invalid operator");
  });

  it("should NOT subtract numbers if there is an invalid operator", () => {
    expect(() => evaluate("1", "2", "a")).toThrow("Invalid operator");
  });

  it("should NOT subtract numbers if there is an invalid operand", () => {
    expect(() => evaluate("1", "a", "-")).toThrow("Invalid input");
    expect(() => evaluate("a", "1", "-")).toThrow("Invalid input");
  });

  it("should NOT subtract numbers if there is an invalid operand and operator", () => {
    expect(() => evaluate("a", "b", "c")).toThrow("Invalid input");
  });

  it("should work on float numbers", () => {
    expect(evaluate("1.5", "2.5", "-")).toBe(-1);
  });

  it("should work on negative numbers", () => {
    expect(evaluate("-1", "-2", "-")).toBe(1);
  });

  it("should work on negative and positive numbers", () => {
    expect(evaluate("-1", "2", "-")).toBe(-3);
  });

  it("should work on float and negative numbers", () => {
    expect(evaluate("-1.5", "2.5", "-")).toBe(-4);
  });
});

describe("Multiplication operation is correct", () => {
  it("should multiply two numbers", () => {
    expect(evaluate("1", "2", "*")).toBe(2);
  });

  it("should NOT multiply numbers if there >2 or <2 operands", () => {
    expect(() => evaluate("1", "2 3", "*")).toThrow("Invalid input");
  });

  it("should NOT multiply numbers if there is no operator", () => {
    expect(() => evaluate("1", "2", "")).toThrow("Invalid operator");
  });

  it("should NOT multiply numbers if there is an invalid operator", () => {
    expect(() => evaluate("1", "2", "a")).toThrow("Invalid operator");
  });

  it("should NOT multiply numbers if there is an invalid operand", () => {
    expect(() => evaluate("1", "a", "*")).toThrow("Invalid input");
    expect(() => evaluate("a", "1", "*")).toThrow("Invalid input");
  });

  it("should NOT multiply numbers if there is an invalid operand and operator", () => {
    expect(() => evaluate("a", "b", "c")).toThrow("Invalid input");
  });

  it("should work on float numbers", () => {
    expect(evaluate("1.5", "2.5", "*")).toBe(3.75);
  });

  it("should work on negative numbers", () => {
    expect(evaluate("-1", "-2", "*")).toBe(2);
  });

  it("should work on negative and positive numbers", () => {
    expect(evaluate("-1", "2", "*")).toBe(-2);
  });

  it("should work on float and negative numbers", () => {
    expect(evaluate("-1.5", "2.5", "*")).toBe(-3.75);
  });
});

describe("Division operation is correct", () => {
  it("should divide two numbers", () => {
    expect(evaluate("1", "2", "/")).toBe(0.5);
  });

  it("should NOT divide numbers if there >2 or <2 operands", () => {
    expect(() => evaluate("1", "2 3", "/")).toThrow("Invalid input");
  });

  it("should NOT divide numbers if there is no operator", () => {
    expect(() => evaluate("1", "2", "")).toThrow("Invalid operator");
  });

  it("should NOT divide numbers if there is an invalid operator", () => {
    expect(() => evaluate("1", "2", "a")).toThrow("Invalid operator");
  });

  it("should NOT divide numbers if there is an invalid operand", () => {
    expect(() => evaluate("1", "a", "/")).toThrow("Invalid input");

    expect(() => evaluate("a", "1", "/")).toThrow("Invalid input");
  });

  it("should NOT divide numbers if there is an invalid operand and operator", () => {
    expect(() => evaluate("a", "b", "c")).toThrow("Invalid input");
  });

  it("should work on float numbers", () => {
    expect(evaluate("1.5", "2.5", "/")).toBe(0.6);
  });

  it("should work on negative numbers", () => {
    expect(evaluate("-1", "-2", "/")).toBe(0.5);
  });
  it("should work on negative and positive numbers", () => {
    expect(evaluate("-1", "2", "/")).toBe(-0.5);
  });

  it("should work on float and negative numbers", () => {
    expect(evaluate("-1.5", "2.5", "/")).toBe(-0.6);
  });

  it("should NOT divide by zero", () => {
    expect(() => evaluate("1", "0", "/")).toThrow("Cannot divide by zero");
  });
});
