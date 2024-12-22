# Unexpected Type Coercion in JavaScript

This repository demonstrates a common JavaScript bug caused by loose typing and unexpected type coercion.

## Bug Description

JavaScript's dynamic typing system allows for implicit type conversions, which can sometimes lead to unexpected behavior.  This example shows how the `+` operator's behavior changes depending on the operands' types. When one operand is a string, the `+` operator performs string concatenation instead of numerical addition, leading to incorrect results.

## Bug Reproduction

1. Clone this repository.
2. Open `bug.js`.
3. Run the code using a JavaScript interpreter (e.g., Node.js).
4. Observe the unexpected output.

## Solution

The solution involves explicit type checking or conversion to ensure that the `+` operator always performs numerical addition.  See `bugSolution.js` for an example of how to fix this issue using type checking.