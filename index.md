---
layout: default
title: ./Wodel-Test
description: A model-based framework for engineering language-specific mutation-testing tools
---

<div class="cta-row">
  <a class="btn-green" href="dropdown/Wodel-Test%20plugins_Wodel-Test%20designer/">Get the Wodel-Test designer</a>
  <a class="btn-green-outline" href="https://github.com/gomezabajo/Wodel-Test/wiki/Get-Started-with-Wodel%E2%80%90Test-Designer" target="_blank">Read the tutorial</a>
  <a class="btn-green-outline" href="https://github.com/gomezabajo/Wodel-Test" target="_blank">View on GitHub</a>
</div>

<div class="landing-section" markdown="1">
<span class="section-label">Language-independent mutation testing generated from models.</span>
### Overview

**Wodel-Test** automates the development of mutation-testing (MuT) tools. It takes the
meta-model of a language and a set of mutation operators defined with the **Wodel**
domain-specific language. From these inputs, it synthesises a complete MuT environment
for the target language as a ready-to-install Eclipse plug-in. This model-based approach
has already been used to generate MuT tools for Java, ATL, finite automata, logic
circuits and chatbots.

<ul class="cap-list">
  <li><strong>Language independence</strong>: a MuT tool can be generated for any language defined by a meta-model.</li>
  <li><strong>Mutation operators in Wodel</strong>: operators are defined once, at model level, using the Wodel DSL.</li>
  <li><strong>Complete MuT environments</strong>: each generated tool is a full Eclipse plug-in distributed through its own update site.</li>
  <li><strong>Model-based execution</strong>: programs are parsed as models that conform to the language meta-model, then mutated and tested.</li>
  <li><strong>Detailed metrics</strong>: the generated tools execute the test suites against the mutants and report detailed information about the MuT process.</li>
</ul>

Mutation testing assesses the quality of a test suite by introducing small, systematic
changes, known as mutants, into the program under test. The tests are then executed to
determine whether they detect these changes. Traditionally, developing a mutation-testing
tool for a new language has required substantial ad hoc work, which must be repeated for
each language.

**Wodel-Test** reduces this effort through a model-based approach. Both the target
language and its mutation operators are represented as models, so the same framework can
generate a tailored MuT tool for each language. The generated tool parses programs as
models, applies the mutation operators, executes the test suites against the resulting
mutants, and reports a detailed set of metrics about the MuT process.

</div>

<div class="landing-section" markdown="1">
<span class="section-label">See generated MuT tools in operation.</span>
### Tool demonstrations

<div class="video-grid">
  <figure>
    <div class="video-frame">
      <iframe src="https://www.youtube.com/embed/-7NV2VnSC0Q" title="Wodel-Test for Java with JUnit 4 in operation" loading="lazy" allowfullscreen></iframe>
    </div>
    <figcaption>The generated MuT tool for Java running with JUnit 4.</figcaption>
  </figure>
  <figure>
    <div class="video-frame">
      <iframe src="https://www.youtube.com/embed/chjVhp018IQ" title="Wodel-Test for Java with JUnit 5 in operation" loading="lazy" allowfullscreen></iframe>
    </div>
    <figcaption>The generated MuT tool for Java running with JUnit 5.</figcaption>
  </figure>
</div>
</div>

<div class="landing-section" markdown="1">
<span class="section-label">From a language meta-model to mutation-testing results in five steps.</span>
### How ./Wodel-Test works

<article class="step" markdown="1">
<h4><span class="step-number">1</span>Provide the language meta-model</h4>
The process begins with an Ecore meta-model that describes the abstract syntax of the
target language. This may be Java, ATL, finite automata, logic circuits, chatbot
definitions, or any other language for which a meta-model exists or can be created.
</article>

<article class="step" markdown="1">
<h4><span class="step-number">2</span>Define the mutation operators with Wodel</h4>
Mutation operators are written in **Wodel**, a domain-specific language for model
mutation. Wodel provides primitives for creating and deleting objects, redirecting
references, modifying attributes, cloning elements and changing their types. Its engine
also ensures that every generated mutant is a valid model of the target language.

<figure>
  <img src="assets/img/tutorial/designer-editor.png" alt="The Wodel editor showing mutation operators for the target language">
  <figcaption>Defining mutation operators for the target language in the Wodel-Test designer.</figcaption>
</figure>
</article>

<article class="step" markdown="1">
<h4><span class="step-number">3</span>Generate the MuT tool with the Wodel-Test designer</h4>
Using the meta-model and mutation operators, the **Wodel-Test designer** synthesises a
complete MuT environment for the language. The environment is packaged as an Eclipse
plug-in with its own update site, ready for installation and distribution.

<figure>
  <img src="assets/img/tutorial/designer-generated-update-site.png" alt="The update site generated for a MuT tool">
  <figcaption>The update site generated for the new MuT tool.</figcaption>
</figure>
</article>

<article class="step" markdown="1">
<h4><span class="step-number">4</span>Run mutation testing</h4>
The generated tool parses the programs under test as models that conform to the language
meta-model. It then applies the mutation operators to create mutants and executes the
test suites against them.
</article>

<article class="step" markdown="1">
<h4><span class="step-number">5</span>Analyse the results</h4>
The tool reports detailed metrics about the MuT process, including the mutation score
and the mutants detected by each test. These results help users assess and improve the
quality of their test suites.
</article>
</div>

<div class="landing-section" markdown="1">
<span class="section-label">The designer and the MuT tools generated with it.</span>
### Available tools

<div class="tool-grid">

<div class="tool-card" markdown="1">
<span class="tool-card__tag">Designer</span>
<h4><a href="dropdown/Wodel-Test%20plugins_Wodel-Test%20designer/">./Wodel-Test designer</a></h4>
<p>The core framework for defining a language and its mutation operators and generating the corresponding MuT tool.</p>
<div class="tool-links" markdown="1">
[![View on GitHub](assets/img/icons/GitHub-Mark.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://github.com/gomezabajo/Wodel/tree/Wodel-Test-designer)[![Eclipse update site](assets/img/icons/category_obj.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/designer/update-site)[![Standalone Eclipse distribution with the Wodel-Test designer](assets/img/icons/eclipse32.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://www.dropbox.com/scl/fi/d698rghjmord6r2ig4dya/eclipse.zip?rlkey=57qufltl84a396inezs9l65si&dl=0)
</div>
</div>

<div class="tool-card" markdown="1">
<span class="tool-card__tag">MuT tool for Java</span>
<h4><a href="dropdown/Wodel-Test%20plugins_Wodel-Test%20for%20Java/">./Wodel-Test for Java</a></h4>
<p>A mutation-testing tool for Java with support for JUnit 3, JUnit 4 and JUnit 5.</p>
<div class="tool-links" markdown="1">
[![View on GitHub](assets/img/icons/GitHub-Mark.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://github.com/gomezabajo/Wodel/tree/Wodel-Test-for-Java)[![Eclipse update site](assets/img/icons/category_obj.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/java/update-site)[![Wodel project ZIP archive](assets/img/icons/wodelZip.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/plugins/testJava.zip)[![Java Ecore meta-model](assets/img/icons/NewEcore.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/ecore/java.ecore)[![Standalone Eclipse distribution with Wodel-Test for Java](assets/img/icons/eclipse32.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://www.dropbox.com/scl/fi/g7pn7enhd93axfhrdhafx/eclipse.zip?rlkey=q7uni28gxf26s3qrutr4nslfw&dl=0)
</div>
</div>

<div class="tool-card" markdown="1">
<span class="tool-card__tag">MuT tool for ATL</span>
<h4><a href="dropdown/Wodel-Test%20plugins_Wodel-Test%20for%20ATL/">./Wodel-Test for ATL</a></h4>
<p>A mutation-testing tool for the ATL model-transformation language.</p>
<div class="tool-links" markdown="1">
[![View on GitHub](assets/img/icons/GitHub-Mark.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://github.com/gomezabajo/Wodel/tree/Wodel-Test-for-ATL)[![Eclipse update site](assets/img/icons/category_obj.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/atl/update-site)[![Wodel project ZIP archive](assets/img/icons/wodelZip.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/plugins/testATL.zip)[![ATL Ecore meta-model](assets/img/icons/NewEcore.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/ecore/ATL.ecore)[![Standalone Eclipse distribution with Wodel-Test for ATL](assets/img/icons/eclipse32.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://www.dropbox.com/scl/fi/06ptvz1j3vzey5wpwd41u/eclipse.zip?rlkey=99x8xvo7023w91wi81dgtf7c9&dl=0)
</div>
</div>

<div class="tool-card" markdown="1">
<span class="tool-card__tag">MuT tool for finite automata</span>
<h4><a href="dropdown/Wodel-Test%20plugins_Wodel-Test%20for%20Finite%20Automata/">./Wodel-Test for Finite Automata</a></h4>
<p>A mutation-testing tool for finite automata.</p>
<div class="tool-links" markdown="1">
[![View on GitHub](assets/img/icons/GitHub-Mark.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://github.com/gomezabajo/Wodel/tree/Wodel-Test-for-FA)[![Eclipse update site](assets/img/icons/category_obj.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/fa/update-site)[![Wodel project ZIP archive](assets/img/icons/wodelZip.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/plugins/testFA.zip)[![Finite-automata Ecore meta-model](assets/img/icons/NewEcore.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/ecore/DFAAutomaton.ecore)[![Standalone Eclipse distribution with Wodel-Test for finite automata](assets/img/icons/eclipse32.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://www.dropbox.com/scl/fi/lt3izw39nau9ewx2xk3os/eclipse.zip?rlkey=7ni6t1dtwz3rg80r2dtyeqx0r&dl=0)
</div>
</div>

<div class="tool-card" markdown="1">
<span class="tool-card__tag">MuT tool for logic circuits</span>
<h4><a href="dropdown/Wodel-Test%20plugins_Wodel-Test%20for%20Logic%20Circuits/">./Wodel-Test for Logic Circuits</a></h4>
<p>A mutation-testing tool for logic circuits.</p>
<div class="tool-links" markdown="1">
[![View on GitHub](assets/img/icons/GitHub-Mark.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://github.com/gomezabajo/Wodel/tree/Wodel-Test-for-LC)[![Eclipse update site](assets/img/icons/category_obj.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/lc/update-site)[![Wodel project ZIP archive](assets/img/icons/wodelZip.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/plugins/testLC.zip)[![Logic-circuit Ecore meta-model](assets/img/icons/NewEcore.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/ecore/LogicCircuit.ecore)[![Standalone Eclipse distribution with Wodel-Test for logic circuits](assets/img/icons/eclipse32.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://www.dropbox.com/scl/fi/8a19kssxwlceo1sfjlsbs/eclipse.zip?rlkey=gxs40qz0ydyw4s44po2wve2e4&dl=0)
</div>
</div>

<div class="tool-card" markdown="1">
<span class="tool-card__tag">MuT tool for chatbots</span>
<h4><a href="dropdown/Wodel-Test%20plugins_Wodel-Test%20for%20Chatbots/">./Wodel-Test for Chatbots</a></h4>
<p>A mutation-testing tool for chatbots defined with the CONGA notation.</p>
<div class="tool-links" markdown="1">
[![View on GitHub](assets/img/icons/GitHub-Mark.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://github.com/gomezabajo/Wodel/tree/Wodel-Test-for-Conga)[![Eclipse update site](assets/img/icons/category_obj.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/conga/update-site)[![Wodel project ZIP archive](assets/img/icons/wodelZip.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/plugins/testBotGenerator.zip)[![Chatbot Ecore meta-model](assets/img/icons/NewEcore.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/ecore/BotGenerator.ecore)[![Chatbot-annotation Ecore meta-model](assets/img/icons/NewEcore.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/ecore/Annotation.ecore)[![Associated dataset](assets/img/icons/zenodo.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://zenodo.org/records/10938786)[![Standalone Eclipse distribution with Wodel-Test for chatbots](assets/img/icons/eclipse32.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://www.dropbox.com/scl/fi/u4s3rbkcb51pbpqbuku3k/eclipse.zip?rlkey=0uc1zgfuho25q7e3clu979dp4&dl=0)
</div>
</div>

</div>
</div>

<div class="landing-section" markdown="1">
<span class="section-label">An academic research tool for model-driven engineering and software testing.</span>
### Research context

Wodel-Test is developed by researchers at the Universidad Autónoma de Madrid and the
Universidad Complutense de Madrid. It builds on a broad range of Eclipse Modelling
technologies, including Xtext, Sirius, Epsilon, OCL Tools, Acceleo, MoDisco, ATL,
AnATLyzer, CONGA and EMF JSON. These technologies are acknowledged on the
[Authors & Contributors]({{ '/about/' | prepend: site.baseurl }}) page.

Key publications include *Wodel-Test: A model-based framework for engineering
language-specific mutation testing tools* (SoftwareX, Elsevier, 2025) and *Wodel-Test: A
model-based framework for language-independent mutation testing* (Software and Systems
Modeling, Springer, 2021). The complete publication list and funding acknowledgements,
including the SATORI, FORTE and MASSIVE projects, are available on the
[Publications & Funding]({{ '/publications/' | prepend: site.baseurl }}) page.
</div>
