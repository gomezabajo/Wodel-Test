---
layout: page
title: ./Wodel-Test for ATL
section: ATL
subtitle: A mutation-testing tool for ATL generated with Wodel-Test
description: A mutation-testing tool for ATL generated with Wodel-Test
dropdown: "Wodel-Test plug-ins"
priority: 4
---

<br>
<br>
<h4>About ./Wodel-Test for ATL</h4>
<br>
<div style="text-align: left" markdown="1">
**./Wodel-Test for ATL** is a mutation-testing (MuT) tool for the [ATL](https://eclipse.dev/atl/) model transformation language, engineered with the [Wodel-Test designer](https://gomezabajo.github.io/Wodel-Test/dropdown/Wodel-Test%20plugins_Wodel-Test%20designer/). ATL is one of the most widely used languages for defining model-to-model transformations in model-driven engineering, and the correctness of these transformations is critical, since any defect propagates to every model they produce. This tool helps developers assess and improve the quality of the test suites used to validate their ATL transformations.

Following the Wodel-Test approach, the tool was generated from the **ATL meta-model** and a catalogue of **mutation operators defined with the [Wodel](https://gomezabajo.github.io/Wodel/) DSL**. These operators emulate common faults in transformation definitions, such as modifications in matched rules, in their filter conditions, and in the bindings that initialise the features of the target elements. Because the operators are defined at the model level, they are declarative, concise and easy to extend with new kinds of mutations.

In operation, the tool parses each ATL transformation under test as a model conforming to the ATL meta-model, applies the mutation operators to synthesise the set of mutants, and discards duplicate and potentially equivalent ones. A test suite for a transformation consists of input models together with the assertions used to check the produced output models. The tool executes the test suite against every mutant, classifies each mutant as killed or alive, and reports the resulting **mutation score** along with detailed metrics of the whole MuT process, all within the Eclipse IDE.
</div>
<br>
<div style="text-align: left" markdown="1">
The demo video below shows Wodel-Test for ATL in action on an example transformation.
</div>
<br>
<br>
<h4>The generated MuT tool for ATL in operation</h4>
<br>
[![Demonstration of the Wodel-Test MuT tool for ATL](https://raw.githubusercontent.com/gomezabajo/Wodel/gh-pages/images/wodeltest-for-atl.png)](https://youtu.be/TeV2BClqmiw)
