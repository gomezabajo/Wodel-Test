---
layout: page
title: ./Wodel-Test for Finite Automata
section: FA
subtitle: A mutation-testing tool for finite automata generated with Wodel-Test
description: A mutation-testing tool for finite automata generated with Wodel-Test
dropdown: "Wodel-Test plug-ins"
priority: 3
---

<br>
<br>
<h4>About Wodel-Test for Finite Automata</h4>
<br>
<div style="text-align: left" markdown="1">
**./Wodel-Test for Finite Automata** is a mutation-testing (MuT) tool for finite automata, engineered with the [Wodel-Test designer](https://gomezabajo.github.io/Wodel-Test/dropdown/Wodel-Test%20plugins_Wodel-Test%20designer/). Finite automata are a fundamental formalism in computer science, used to specify the behaviour of systems and to recognise regular languages, and they are a cornerstone of automata theory courses. Beyond illustrating the flexibility of the Wodel-Test approach on a formal notation, this tool is useful to assess the quality of the test suites employed to validate automata, both in verification settings and in education.

Following the Wodel-Test approach, the tool was generated from a **meta-model of finite automata** — describing states, the alphabet, transitions, and the initial and final states — together with a catalogue of **mutation operators defined with the [Wodel](https://gomezabajo.github.io/Wodel/) DSL**. The operators emulate typical faults in the design of an automaton, such as changing the initial state, adding or removing final states, redirecting the source or target of a transition, and modifying the symbol that triggers a transition. Since the operators are defined at the model level with Wodel, the catalogue is declarative and easy to extend.

In this domain, a test suite is a set of input words, each annotated with the expected verdict: whether the automaton should accept or reject it. The tool applies the mutation operators to the automaton under test to synthesise the set of mutants, discarding duplicate and potentially equivalent ones, and then processes every word with each mutant. A mutant is killed when it produces a verdict different from the expected one for some word. Finally, the tool reports the resulting **mutation score** and detailed metrics of the MuT process within the Eclipse IDE.
</div>
<br>
<div style="text-align: left" markdown="1">
The demo video below shows Wodel-Test for Finite Automata in action.
</div>
<br>
<br>
<h4>The generated MuT tool for finite automata in operation</h4>
<br>
[![Demonstration of the Wodel-Test MuT tool for finite automata](https://raw.githubusercontent.com/gomezabajo/Wodel/gh-pages/images/wodeltest-for-fa.png)](https://youtu.be/9NhFv36BgS8)
