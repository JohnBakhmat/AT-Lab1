import { evaluate } from "../src/calculator";

describe("Addition operation is correct", () => {
  it("should add two numbers", () => {
    expect(evaluate("1", "2", "+")).toBe(3);
  });

  it("should NOT add numbers if there >2 or <2 operands", () => {
    expect(evaluate("1", "2 3", "+")).toBe("Invalid input");
  });

  it("should NOT add numbers if there is no operator", () => {
    expect(evaluate("1", "2", "")).toBe("Invalid operator");
  });

  it("should NOT add numbers if there is an invalid operator", () => {
    expect(evaluate("1", "2", "a")).toBe("Invalid operator");
  });

  it("should NOT add numbers if there is an invalid operand", () => {
    expect(evaluate("1", "a", "+")).toBe("Invalid input");
    expect(evaluate("a", "1", "+")).toBe("Invalid input");
  });

  it("should NOT add numbers if there is an invalid operand and operator", () => {
    expect(evaluate("a", "b", "c")).toBe("Invalid input");
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
    expect(evaluate("-1.5", "2.5", "+")).toBe(1);
  });
});

describe("Subtraction operation is correct", () => {
  it("should subtract two numbers", () => {
    expect(evaluate("1", "2", "-")).toBe(-1);
  });

  it("should NOT subtract numbers if there >2 or <2 operands", () => {
    expect(evaluate("1", "2 3", "-")).toBe("Invalid input");
  });

  it("should NOT subtract numbers if there is no operator", () => {
    expect(evaluate("1", "2", "")).toBe("Invalid operator");
  });

  it("should NOT subtract numbers if there is an invalid operator", () => {
    expect(evaluate("1", "2", "a")).toBe("Invalid operator");
  });

  it("should NOT subtract numbers if there is an invalid operand", () => {
    expect(evaluate("1", "a", "-")).toBe("Invalid input");
    expect(evaluate("a", "1", "-")).toBe("Invalid input");
  });

  it("should NOT subtract numbers if there is an invalid operand and operator", () => {
    expect(evaluate("a", "b", "c")).toBe("Invalid input");
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
    expect(evaluate("1", "2 3", "*")).toBe("Invalid input");
  });

  it("should NOT multiply numbers if there is no operator", () => {
    expect(evaluate("1", "2", "")).toBe("Invalid operator");
  });

  it("should NOT multiply numbers if there is an invalid operator", () => {
    expect(evaluate("1", "2", "a")).toBe("Invalid operator");
  });

  it("should NOT multiply numbers if there is an invalid operand", () => {
    expect(evaluate("1", "a", "*")).toBe("Invalid input");
    expect(evaluate("a", "1", "*")).toBe("Invalid input");
  });

  it("should NOT multiply numbers if there is an invalid operand and operator", () => {
    expect(evaluate("a", "b", "c")).toBe("Invalid input");
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
