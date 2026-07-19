---
layout: page
title: ./Wodel-Test designer
section: designer
subtitle: A model-based framework for engineering language-specific mutation-testing tools
description: A model-based framework for language-independent mutation testing
dropdown: "Wodel-Test plug-ins"
priority: 6
---

<br>
<br>
<h4>About the ./Wodel-Test designer</h4>
<br>
<div style="text-align: left" markdown="1">
The **./Wodel-Test designer** is the Eclipse-based development environment at the heart of the Wodel-Test framework. It is the tool that language engineers use to build complete mutation-testing (MuT) tools for arbitrary languages, following a model-based approach that removes the need to implement each MuT tool from scratch.

Working with the designer involves three main components. First, the engineer provides the **meta-model** of the target language, which captures its abstract syntax as an Ecore model. Second, the **mutation operators** for the language are defined at the model level using the [Wodel](https://gomezabajo.github.io/Wodel/) domain-specific language, so they remain concise, declarative and independent of any concrete implementation technology. Third, the engineer configures the **language-specific details** of the MuT process: how programs are injected into models conforming to the meta-model and extracted back into code, how the artefacts are compiled, and how their test suites are executed.

From these inputs, the designer **synthesises a ready-to-install Eclipse plug-in** implementing a full MuT environment for the target language. The generated tool parses the programs under test as models, applies the mutation operators to create the set of mutants, filters out duplicate and potentially equivalent mutants, and runs the test suites against each mutant. It then reports detailed metrics of the process, including the mutation score and the classification of mutants as killed or alive.
</div>
<br>
<div style="text-align: left" markdown="1">
This approach has already been used to engineer the MuT tools for Java, ATL, finite automata, logic circuits and chatbots available from this site, and the same workflow can be followed for any language defined by a meta-model.
</div>
<br>
<br>
<h4>The ./Wodel-Test designer in operation</h4>
<br>
[![Demonstration of the Wodel-Test designer](https://raw.githubusercontent.com/gomezabajo/Wodel/gh-pages/images/wodel-test-designer.png)](https://youtu.be/sB1oh2NFPso)
