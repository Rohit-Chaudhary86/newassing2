/*Loops in programming are structures that allow you to repeat a block of code multiple times. 
They are essential for automating repetitive tasks and iterating over collections of data.
 JavaScript supports several types of loops, including `for`, `while`, and `do-while` loops.

1. **for loop:**
   The `for` loop is used when you know the number of iterations in advance.

   Syntax:
   ```javascript
   for (initialization; condition; increment/decrement) {
       // Code to be repeated
   }
   ```

   Example:
   ```javascript
   for (let i = 1; i <= 5; i++) {
       console.log(`Iteration ${i}`);
   }
   ```

2. **while loop:**
   The `while` loop is used when you don't know the number of iterations in advance, and the loop continues as long as the specified condition is true.

   Syntax:
   ```javascript
   while (condition) {
       // Code to be repeated
   }
   ```

   Example:
   ```javascript
   let i = 1;
   while (i <= 5) {
       console.log(`Iteration ${i}`);
       i++;
   }
   ```

3. **do-while loop:**
   Similar to the `while` loop, but the code block is executed at least once before checking the condition.

   Syntax:
   ```javascript
   do {
       // Code to be repeated
   } while (condition);
   ```

   Example:
   ```javascript
   let i = 1;
   do {
       console.log(`Iteration ${i}`);
       i++;
   } while (i <= 5);
   ```

These loops are used to perform tasks like iterating over arrays, processing lists of items, or executing a block of code until a certain condition is met. Loops help improve code efficiency and readability by reducing redundancy in the code.

Here's a brief explanation of the flow in each loop type:
- In a `for` loop, the initialization is done before the loop starts, the condition is checked before each iteration, and the increment/decrement is executed after each iteration.
- In a `while` loop, the condition is checked before each iteration.
- In a `do-while` loop, the code block is executed at least once, and then the condition is checked.

Choose the loop type based on the specific requirements of your task.
*/