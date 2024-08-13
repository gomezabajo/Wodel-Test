---
layout: page
title: ./Wodel-Test for Java
section: Java
subtitle: A mutation testing tool for Java generated via Wodel-Test
description: A mutation testing tool for Java generated via Wodel-Test
dropdown: "Wodel-Test plugins"
priority: 4
---

<br>
<br>
<h4> The generated MuT tool for Java with jUnit4 in action:</h4>
<br>
[![Wodel-Test for Java with jUnit4 MuT tool in action](https://raw.githubusercontent.com/gomezabajo/Wodel/gh-pages/images/wodeltest-for-java-junit4.png)](https://youtu.be/-7NV2VnSC0Q)


<br>
<br>
<h4> The generated MuT tool for Java with jUnit5 in action:</h4>
<br>
[![Wodel-Test for Java with jUnit5 MuT tool in action](https://raw.githubusercontent.com/gomezabajo/Wodel/gh-pages/images/wodeltest-for-java-junit5.png)](https://youtu.be/chjVhp018IQ)

<br>
<br>
<br>

### Wodel-Test for Java with jUnit3
<br>
<br>
<div style="text-align: left" markdown="1">
We tested the [Wodel-Test for Java MuT tool](https://gomezabajo.github.io/Wodel-Test/dropdown/Wodel-Test%20plugins_Wodel-Test%20for%20Java/) with several Java projects and detected that for some of them that include bad design issues both in the system under test and in the test suite provided, some of the generated mutants can enter into endless loops. To overcome such execution inconvenience, we have included timeouts in the test suite execution. You can check this using the Wodel-Test for Java MuT tool with this reduced version of an old release of the [org.apache.commons.cli](https://github.com/rjust/defects4j/tree/master/framework/projects/Cli) Java project. This buggy Java project is included in a common framework used to validate MuT tools for Java known as the [defects4j](https://github.com/rjust/defects4j) project.
</div>
<br>
<br>
<div style="text-align: left" markdown="1">
[Cli11f System Under Test](https://gomezabajo.github.io/Wodel/Wodel-Test/samples/Cli11f.zip)
<br>
[Cli11f Test suite](https://gomezabajo.github.io/Wodel/Wodel-Test/samples/Cli11f-test.zip)
</div>
<br>
<br>




