---
layout: page
title: ./Wodel-Test for Chatbots
section: Chatbots
subtitle: A mutation-testing tool for chatbots generated with Wodel-Test
description: A mutation-testing tool for chatbots generated with Wodel-Test
dropdown: "Wodel-Test plug-ins"
priority: 1
---

<br>
<br>
<h4>About ./Wodel-Test for Chatbots</h4>
<br>
<div style="text-align: left" markdown="1">
**./Wodel-Test for Chatbots** is a mutation-testing (MuT) tool for task-oriented chatbots, engineered with the [Wodel-Test designer](https://gomezabajo.github.io/Wodel-Test/dropdown/Wodel-Test%20plugins_Wodel-Test%20designer/). Chatbots are increasingly used as conversational front-ends in domains like customer service, e-commerce and education, and they are typically validated with suites of test conversations. This tool helps chatbot designers measure how effective those test conversations really are at detecting defects.

Following the Wodel-Test approach, the tool was generated from the **platform-independent chatbot meta-model** named [Conga](https://saraperezsoler.github.io/CONGA/) together with a catalogue of **mutation operators defined with the [Wodel](https://gomezabajo.github.io/Wodel/) DSL**. The operators emulate faults that chatbot designers typically make, such as mistakes in the intents and their training phrases, in the entities and parameters used to extract information from the user, and in the responses and conversation flow of the chatbot. Since the mutations are applied at the model level, the approach is independent of any specific chatbot development platform, and the chatbot definitions are parsed as models conforming to the neutral meta-model before being mutated.

In operation, the tool applies the mutation operators to the chatbot under test to synthesise the set of mutants, discarding duplicate and potentially equivalent ones. It then exercises each mutant with the test suite of conversations — user utterances together with the expected chatbot reactions — and classifies each mutant as killed or alive depending on whether some conversation fails on it. Finally, it reports the resulting **mutation score** and detailed metrics of the MuT process within the Eclipse IDE, revealing the weaknesses of the test suite and guiding the design of stronger test conversations.
</div>
<br>
<div style="text-align: left" markdown="1">
The demo video below shows Wodel-Test for Chatbots in action.
</div>
<br>
<br>
<h4>The generated MuT tool for chatbots in operation</h4>
<br>
[![Demonstration of the Wodel-Test MuT tool for chatbots](https://raw.githubusercontent.com/gomezabajo/Wodel/gh-pages/images/wodeltest-for-chatbots.png)](https://youtu.be/nFGHD92k834)
