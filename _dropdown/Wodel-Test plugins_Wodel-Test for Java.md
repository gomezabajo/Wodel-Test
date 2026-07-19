---
layout: page
title: ./Wodel-Test for Java
section: Java
subtitle: A mutation-testing tool for Java generated with Wodel-Test
description: A mutation-testing tool for Java generated with Wodel-Test
dropdown: "Wodel-Test plug-ins"
priority: 5
---

<br>
<br>
<h4>About ./Wodel-Test for Java</h4>
<br>
<div style="text-align: left" markdown="1">
**./Wodel-Test for Java** is a mutation-testing (MuT) tool for the Java programming language, engineered with the [Wodel-Test designer](https://gomezabajo.github.io/Wodel-Test/dropdown/Wodel-Test%20plugins_Wodel-Test%20designer/). Java is the most frequent target of mutation-testing research and practice, which makes it an excellent case study to demonstrate that the model-based approach of Wodel-Test scales to a full general-purpose programming language, while producing a tool that is useful in its own right to assess the quality of JUnit test suites.

Following the Wodel-Test approach, the tool was generated from a **meta-model of Java** and a catalogue of **mutation operators defined with the [Wodel](https://gomezabajo.github.io/Wodel/) DSL**. The catalogue covers classical Java mutations, such as replacing arithmetic, relational, conditional and assignment operators, modifying constants and variable references, and altering method invocations. Since the operators are expressed declaratively at the model level, the catalogue can be extended without touching the code of the generated tool.

In operation, the tool parses the Java program under test into a model conforming to the Java meta-model, applies the mutation operators to synthesise the mutants, discards duplicate and potentially equivalent ones, and extracts each surviving mutant back into compilable Java code. It then executes the test suite of the project — with support for both **JUnit 4 and JUnit 5** — against every mutant, classifies the mutants as killed or alive, and reports the resulting **mutation score** together with detailed metrics of the whole MuT process, all within the Eclipse IDE.
</div>
<br>
<div style="text-align: left" markdown="1">
The demo videos below show the tool in action with JUnit 4 and JUnit 5 test suites, and the last section describes how it handles mutants that enter endless loops.
</div>

<br>
<br>
<h4>The generated MuT tool for Java with JUnit 4 in operation</h4>
<br>
[![Demonstration of the Wodel-Test MuT tool for Java with JUnit 4](https://raw.githubusercontent.com/gomezabajo/Wodel/gh-pages/images/wodeltest-for-java-junit4.png)](https://youtu.be/-7NV2VnSC0Q)

<br>
<br>
<h4>The generated MuT tool for Java with JUnit 5 in operation</h4>
<br>
[![Demonstration of the Wodel-Test MuT tool for Java with JUnit 5](https://raw.githubusercontent.com/gomezabajo/Wodel/gh-pages/images/wodeltest-for-java-junit5.png)](https://youtu.be/chjVhp018IQ)

<br>
<br>
<br>

### Automatic handling of endless-loop mutants
<br>
<br>
<div style="text-align: left" markdown="1">
We evaluated the [Wodel-Test MuT tool for Java](https://gomezabajo.github.io/Wodel-Test/dropdown/Wodel-Test%20plugins_Wodel-Test%20for%20Java/) with several Java projects. In some projects, design problems in either the system under test or its test suite can cause particular mutants to enter infinite loops. To address this issue, the tool applies timeout limits when executing the test suite.

This behaviour can be examined using the Wodel-Test MuT tool for Java with the reduced version of an earlier release of the [Apache Commons CLI](https://github.com/rjust/defects4j/tree/master/framework/projects/Cli) project provided below. The project contains a known defect and forms part of [Defects4J](https://github.com/rjust/defects4j), a widely used collection of reproducible Java faults for evaluating software-testing tools.
</div>
<br>
<br>
<div style="text-align: left" markdown="1">
[Cli11f system under test](https://gomezabajo.github.io/Wodel/Wodel-Test/samples/Cli11f.zip)
<br>
[Cli11f test suite](https://gomezabajo.github.io/Wodel/Wodel-Test/samples/Cli11f-test.zip)
</div>
<br>
<br>
