---
layout: default
title: ./Wodel-Test
description: A model-based framework for the engineering of language-specific mutation testing tools
---

<div class="lead-intro" markdown="1">
**Wodel-Test** automates the engineering of Mutation Testing (MuT) tools. Given the
meta-model of a language and a set of mutation operators defined with the
**Wodel** domain-specific language, it synthesises a complete, ready-to-install MuT
environment for that language as an Eclipse plug-in — the same model-based recipe has
already produced MuT tools for Java, ATL, finite automata, logic circuits and chatbots.
</div>

<div class="cta-row">
  <a class="btn-green" href="dropdown/Wodel-Test%20plugins_Wodel-Test%20designer/">Get the Wodel-Test designer</a>
  <a class="btn-green-outline" href="https://github.com/gomezabajo/Wodel-Test/wiki/Get-Started-with-Wodel%E2%80%90Test-Designer" target="_blank">Tutorial</a>
  <a class="btn-green-outline" href="https://github.com/gomezabajo/Wodel-Test" target="_blank">View on GitHub</a>
</div>

<div class="landing-section" markdown="1">
<span class="section-label">Overview</span>
### Language-independent mutation testing, generated from models.

<ul class="cap-list">
  <li><strong>Language independence</strong>: MuT tools can be generated for any language defined by a meta-model</li>
  <li><strong>Mutation operators in Wodel</strong>: operators are specified once, at the model level, with the Wodel DSL</li>
  <li><strong>Complete MuT environments</strong>: each generated tool is a full Eclipse plug-in, distributed via its own update site</li>
  <li><strong>Model-based execution</strong>: programs are parsed into models conforming to the language meta-model, mutated, and tested</li>
  <li><strong>Rich metrics</strong>: the generated tools evaluate the test suites on the mutants and report a detailed picture of the MuT process</li>
</ul>

Mutation testing assesses the quality of a test suite by seeding small, systematic
faults — mutants — into the program under test and checking whether the tests detect
them. Building a mutation testing tool for a new language, however, has traditionally
required a substantial ad hoc development effort, repeated for every language.

**Wodel-Test** removes that effort with a model-based approach. Because both the
language and its mutation operators are described as models, the same machinery
generates a tailored MuT tool for each language: the generated tools parse the programs
as models, apply the mutation operators, run the test suites on the resulting mutants,
and offer a rich collection of metrics about the MuT process.
</div>

<div class="landing-section" markdown="1">
<span class="section-label">Tool demo</span>
### See a generated MuT tool in action.

<div class="video-grid">
  <figure>
    <div class="video-frame">
      <iframe src="https://www.youtube.com/embed/-7NV2VnSC0Q" title="Wodel-Test for Java with jUnit4 in action" loading="lazy" allowfullscreen></iframe>
    </div>
    <figcaption>The generated MuT tool for Java, running with jUnit4.</figcaption>
  </figure>
  <figure>
    <div class="video-frame">
      <iframe src="https://www.youtube.com/embed/chjVhp018IQ" title="Wodel-Test for Java with jUnit5 in action" loading="lazy" allowfullscreen></iframe>
    </div>
    <figcaption>The generated MuT tool for Java, running with jUnit5.</figcaption>
  </figure>
</div>
</div>

<div class="landing-section" markdown="1">
<span class="section-label">How Wodel-Test works</span>
### From language meta-model to mutation testing results, in five steps.

<article class="step" markdown="1">
<h4><span class="step-number">1</span>Provide the language meta-model</h4>
The process starts from an Ecore meta-model describing the abstract syntax of the target
language — Java, ATL, finite automata, logic circuits, chatbot definitions, or any other
language for which a meta-model exists or can be defined.
</article>

<article class="step" markdown="1">
<h4><span class="step-number">2</span>Define the mutation operators with Wodel</h4>
Mutation operators are written in **Wodel**, a domain-specific language for model
mutation. Wodel provides mutation primitives for object creation and deletion, reference
redirection, attribute modification, cloning and retyping, and its engine guarantees
that every generated mutant is a valid model of the language.

<figure>
  <img src="assets/img/tutorial/designer-editor.png" alt="The Wodel editor with mutation operators for the target language">
  <figcaption>Editing the mutation operators of the target language in the Wodel-Test designer.</figcaption>
</figure>
</article>

<article class="step" markdown="1">
<h4><span class="step-number">3</span>Generate the MuT tool with the Wodel-Test designer</h4>
From the meta-model and the operators, the **Wodel-Test designer** synthesises a
complete MuT environment for the language, packaged as an Eclipse plug-in together with
its own update site, ready to be installed and distributed.

<figure>
  <img src="assets/img/tutorial/designer-generated-update-site.png" alt="The update site generated for a MuT tool">
  <figcaption>The update site generated for the new MuT tool.</figcaption>
</figure>
</article>

<article class="step" markdown="1">
<h4><span class="step-number">4</span>Run mutation testing</h4>
The generated tool parses the programs under test, representing them as models
conforming to the language meta-model, applies the mutation operators to produce the
mutants, and executes the test suites on them.
</article>

<article class="step" markdown="1">
<h4><span class="step-number">5</span>Analyse the results</h4>
The tool reports a rich collection of metrics about the MuT process — including the
mutation score and the mutants that each test detects — helping to assess and improve
the quality of the test suites.
</article>
</div>

<div class="landing-section" markdown="1">
<span class="section-label">The tools</span>
### The designer, and the MuT tools generated with it.

<div class="tool-grid">

<div class="tool-card" markdown="1">
<span class="tool-card__tag">Designer</span>
<h4><a href="dropdown/Wodel-Test%20plugins_Wodel-Test%20designer/">./Wodel-Test designer</a></h4>
<p>The framework itself: define a language and its mutation operators, and generate its MuT tool.</p>
<div class="tool-links" markdown="1">
[![View on GitHub](assets/img/icons/GitHub-Mark.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://github.com/gomezabajo/Wodel/tree/Wodel-Test-designer)[![Update-site](assets/img/icons/category_obj.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/designer/update-site)[![Standalone Eclipse + Wodel-Test designer](assets/img/icons/eclipse32.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://www.dropbox.com/scl/fi/d698rghjmord6r2ig4dya/eclipse.zip?rlkey=57qufltl84a396inezs9l65si&dl=0)
</div>
</div>

<div class="tool-card" markdown="1">
<span class="tool-card__tag">Generated MuT tool</span>
<h4><a href="dropdown/Wodel-Test%20plugins_Wodel-Test%20for%20Java/">./Wodel-Test for Java</a></h4>
<p>A mutation testing tool for Java, with jUnit3, jUnit4 and jUnit5 support.</p>
<div class="tool-links" markdown="1">
[![View on GitHub](assets/img/icons/GitHub-Mark.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://github.com/gomezabajo/Wodel/tree/Wodel-Test-for-Java)[![Update-site](assets/img/icons/category_obj.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/java/update-site)[![Wodel project .zip](assets/img/icons/wodelZip.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/plugins/testJava.zip)[![Java ecore meta-model](assets/img/icons/NewEcore.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/ecore/java.ecore)[![Standalone Eclipse + Wodel-Test for Java MuT tool](assets/img/icons/eclipse32.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://www.dropbox.com/scl/fi/g7pn7enhd93axfhrdhafx/eclipse.zip?rlkey=q7uni28gxf26s3qrutr4nslfw&dl=0)
</div>
</div>

<div class="tool-card" markdown="1">
<span class="tool-card__tag">Generated MuT tool</span>
<h4><a href="dropdown/Wodel-Test%20plugins_Wodel-Test%20for%20ATL/">./Wodel-Test for ATL</a></h4>
<p>A mutation testing tool for the ATL model transformation language.</p>
<div class="tool-links" markdown="1">
[![View on GitHub](assets/img/icons/GitHub-Mark.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://github.com/gomezabajo/Wodel/tree/Wodel-Test-for-ATL)[![Update-site](assets/img/icons/category_obj.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/atl/update-site)[![Wodel project .zip](assets/img/icons/wodelZip.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/plugins/testATL.zip)[![ATL ecore meta-model](assets/img/icons/NewEcore.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/ecore/ATL.ecore)[![Standalone Eclipse + Wodel-Test for ATL MuT tool](assets/img/icons/eclipse32.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://www.dropbox.com/scl/fi/06ptvz1j3vzey5wpwd41u/eclipse.zip?rlkey=99x8xvo7023w91wi81dgtf7c9&dl=0)
</div>
</div>

<div class="tool-card" markdown="1">
<span class="tool-card__tag">Generated MuT tool</span>
<h4><a href="dropdown/Wodel-Test%20plugins_Wodel-Test%20for%20Finite%20Automata/">./Wodel-Test for Finite Automata</a></h4>
<p>A mutation testing tool for finite automata.</p>
<div class="tool-links" markdown="1">
[![View on GitHub](assets/img/icons/GitHub-Mark.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://github.com/gomezabajo/Wodel/tree/Wodel-Test-for-FA)[![Update-site](assets/img/icons/category_obj.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/fa/update-site)[![Wodel project .zip](assets/img/icons/wodelZip.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/plugins/testFA.zip)[![Finite Automata ecore meta-model](assets/img/icons/NewEcore.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/ecore/DFAAutomaton.ecore)[![Standalone Eclipse + Wodel-Test for Finite Automata MuT tool](assets/img/icons/eclipse32.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://www.dropbox.com/scl/fi/lt3izw39nau9ewx2xk3os/eclipse.zip?rlkey=7ni6t1dtwz3rg80r2dtyeqx0r&dl=0)
</div>
</div>

<div class="tool-card" markdown="1">
<span class="tool-card__tag">Generated MuT tool</span>
<h4><a href="dropdown/Wodel-Test%20plugins_Wodel-Test%20for%20Logic%20Circuits/">./Wodel-Test for Logic Circuits</a></h4>
<p>A mutation testing tool for logic circuits.</p>
<div class="tool-links" markdown="1">
[![View on GitHub](assets/img/icons/GitHub-Mark.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://github.com/gomezabajo/Wodel/tree/Wodel-Test-for-LC)[![Update-site](assets/img/icons/category_obj.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/lc/update-site)[![Wodel project .zip](assets/img/icons/wodelZip.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/plugins/testLC.zip)[![Logic Circuits ecore meta-model](assets/img/icons/NewEcore.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/ecore/LogicCircuit.ecore)[![Standalone Eclipse + Wodel-Test for Logic Circuits MuT tool](assets/img/icons/eclipse32.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://www.dropbox.com/scl/fi/8a19kssxwlceo1sfjlsbs/eclipse.zip?rlkey=gxs40qz0ydyw4s44po2wve2e4&dl=0)
</div>
</div>

<div class="tool-card" markdown="1">
<span class="tool-card__tag">Generated MuT tool</span>
<h4><a href="dropdown/Wodel-Test%20plugins_Wodel-Test%20for%20Chatbots/">./Wodel-Test for Chatbots</a></h4>
<p>A mutation testing tool for chatbots defined with the CONGA notation.</p>
<div class="tool-links" markdown="1">
[![View on GitHub](assets/img/icons/GitHub-Mark.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://github.com/gomezabajo/Wodel/tree/Wodel-Test-for-Conga)[![Update-site](assets/img/icons/category_obj.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/conga/update-site)[![Wodel project .zip](assets/img/icons/wodelZip.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/plugins/testBotGenerator.zip)[![Chatbots ecore meta-model](assets/img/icons/NewEcore.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/ecore/BotGenerator.ecore)[![Annotate Chatbots ecore meta-model](assets/img/icons/NewEcore.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://gomezabajo.github.io/Wodel/Wodel-Test/ecore/Annotation.ecore)[![Dataset](assets/img/icons/zenodo.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://zenodo.org/records/10938786)[![Standalone Eclipse + Wodel-Test for Chatbots MuT tool](assets/img/icons/eclipse32.png){:style='float: left;margin-right: 12px;margin-top: 4px; height:20px; width:20px;'}](https://www.dropbox.com/scl/fi/u4s3rbkcb51pbpqbuku3k/eclipse.zip?rlkey=0uc1zgfuho25q7e3clu979dp4&dl=0)
</div>
</div>

</div>
</div>

<div class="landing-section" markdown="1">
<span class="section-label">Research context</span>
### An academic research tool for model-driven engineering and software testing.

Wodel-Test is developed by researchers at the Universidad Autónoma de Madrid and the
Universidad Complutense de Madrid, and builds on a rich stack of Eclipse Modeling
technologies — Xtext, Sirius, Epsilon, OCL Tools, Acceleo, MoDisco, ATL, AnATLyzer,
CONGA and emfjson — acknowledged in the
[Authors & Contributors]({{ '/about/' | prepend: site.baseurl }}) page.

Key publications include *Wodel-Test: A model-based framework for engineering
language-specific mutation testing tools* (SoftwareX, Elsevier, 2025) and *Wodel-Test: A
model-based framework for language-independent mutation testing* (Software and Systems
Modeling, Springer, 2021). The full list, together with the funding acknowledgements
(the SATORI, FORTE and MASSIVE projects), is available in the
[Publications & Funding]({{ '/publications/' | prepend: site.baseurl }}) page.
</div>
