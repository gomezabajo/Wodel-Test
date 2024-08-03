---
layout: default
title: .\Wodel-Test
description: A model-based framework for the engineering of language-specific mutation testing tools
---
### A model-based framework for the engineering of language-specific mutation testing tools
Wodel-Test is built on top of Wodel, a domain-specific language to define and execute model mutations.

Wodel is language independent, enabling the creation of mutation operators for any language defined by a meta-model.

Once the mutation operators are defined, Wodel-Test generates a complete Mutation Testing (MT) environment for the language as an Eclipse plugin.

This MT tool parses the program representing it as a model conformant to the language meta-model, applies the mutation operators, and evaluates the test suite on the generated mutants, offering a rich collection of metrics about the MT process.

You can access the following link to learn more about this solution and the tool support provided:

[Wodel-Test website](https://gomezabajo.github.io/Wodel/Wodel-Test/)