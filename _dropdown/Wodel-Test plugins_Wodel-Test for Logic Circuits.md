---
layout: page
title: ./Wodel-Test for Logic Circuits
section: LC
subtitle: A mutation-testing tool for logic circuits generated with Wodel-Test
description: A mutation-testing tool for logic circuits generated with Wodel-Test
dropdown: "Wodel-Test plug-ins"
priority: 2
---

<br>
<br>
<h4>About Wodel-Test for Logic Circuits</h4>
<br>
<div style="text-align: left" markdown="1">
**./Wodel-Test for Logic Circuits** is a mutation-testing (MuT) tool for digital logic circuits, engineered with the [Wodel-Test designer](https://gomezabajo.github.io/Wodel-Test/dropdown/Wodel-Test%20plugins_Wodel-Test%20designer/). Logic circuits are the building blocks of digital hardware and a classic subject in computer science and engineering curricula, and they are validated with sets of test vectors. This tool helps assess how good those test vectors really are at uncovering defects in a circuit design, and it also illustrates that the Wodel-Test approach reaches beyond software languages into hardware notations.

Following the Wodel-Test approach, the tool was generated from a **meta-model of logic circuits** — describing the inputs and outputs of the circuit, its logic gates, and the connections between them — together with a catalogue of **mutation operators defined with the Wodel DSL**. The operators emulate typical design faults and classical hardware fault models, such as replacing one kind of gate by another (e.g., an AND by an OR or a NAND), negating or rewiring a connection, and fixing a signal to a constant value in the style of stuck-at faults. As in the other Wodel-Test tools, the operators are declarative, defined at the model level, and easy to extend.

In this domain, a test suite is a set of input vectors, each annotated with the expected output values of the circuit. The tool applies the mutation operators to the circuit under test to synthesise the set of mutants, discards duplicate and potentially equivalent ones, and evaluates every test vector on each mutant. A mutant is killed when it produces outputs that differ from the expected ones for some vector. Finally, the tool reports the resulting **mutation score** and detailed metrics of the MuT process within the Eclipse IDE.
</div>
<br>
<div style="text-align: left" markdown="1">
The demo video below shows Wodel-Test for Logic Circuits in action.
</div>
<br>
<br>
<h4>The generated MuT tool for logic circuits in operation</h4>
<br>
[![Demonstration of the Wodel-Test MuT tool for logic circuits](https://raw.githubusercontent.com/gomezabajo/Wodel/gh-pages/images/wodel-test-lc.png)](https://youtu.be/xMhsinETung)
