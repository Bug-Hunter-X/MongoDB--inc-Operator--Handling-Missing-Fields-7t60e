# MongoDB $inc Operator: Handling Missing Fields

This repository demonstrates a common but easily overlooked error when using the `$inc` operator in MongoDB updates.  The `$inc` operator is intended to increment (or decrement) a numeric field in a document. However, if the field doesn't already exist, it will silently add the field rather than throwing an error.  This can lead to unexpected behavior and data inconsistencies.

The `bug.js` file shows incorrect usage of `$inc`, failing to handle the case where the field is missing. The `bugSolution.js` file provides the correct solution, showcasing how to safely handle missing fields with the `upsert` option.