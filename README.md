<p align="center">
  <a href="https://gomezabajo.github.io/Wodel-Test">
    <img src="https://gomezabajo.github.io/Wodel/images/wodel-test.png" width="224" height="120" alt="Wodel-Test logo" />
  </a>
</p>

<h1 align="center">./Wodel-Test</h1>

<p align="center"><i>A model-based framework for the engineering of language-specific mutation testing tools</i></p>

<p align="center">
  <a href="https://gomezabajo.github.io/Wodel-Test/"><img src="https://img.shields.io/badge/website-Wodel--Test-2a4d14" alt="Website"></a>
  <a href="https://github.com/gomezabajo/Wodel-Test/blob/main/LICENSE"><img src="https://img.shields.io/github/license/gomezabajo/Wodel-Test" alt="License"></a>
  <img src="https://img.shields.io/badge/built%20with-Jekyll-cc0000" alt="Built with Jekyll">
</p>

<p align="center">
  <a href="https://gomezabajo.github.io/Wodel-Test/">Live site</a> &middot;
  <a href="https://github.com/gomezabajo/Wodel-Test/wiki/Get-Started-with-Wodel%E2%80%90Test-Designer">Tutorial</a> &middot;
  <a href="https://gomezabajo.github.io/Wodel/">Wodel</a>
</p>

---

> **About this repository.** This repo contains the **project website** for Wodel-Test,
> published with GitHub Pages at **<https://gomezabajo.github.io/Wodel-Test/>**. The Wodel-Test
> *tool* itself (the designer and the generated mutation-testing environments) is developed in
> the main [**Wodel**](https://github.com/gomezabajo/Wodel) repository, on dedicated branches
> linked from the [catalogue](#catalogue) below.

## Table of contents

- [What is Wodel-Test?](#what-is-wodel-test)
- [Catalogue](#catalogue)
- [Running the website locally](#running-the-website-locally)
- [Repository structure](#repository-structure)
- [Documentation](#documentation)
- [Citing Wodel-Test](#citing-wodel-test)
- [Authors and contact](#authors-and-contact)
- [Funding](#funding)
- [License](#license)
- [Credits](#credits)

## What is Wodel-Test?

Wodel-Test is built on top of [**Wodel**](https://gomezabajo.github.io/Wodel/), a
domain-specific language for defining and executing model mutations. Because Wodel is
language-independent, mutation operators can be defined for any language given by a meta-model.

From those operators, **Wodel-Test synthesises a complete Mutation Testing (MuT) environment for
the target language as an Eclipse plugin**. Each generated tool parses programs as models
conforming to the language meta-model, applies the mutation operators to produce mutants, runs
the test suite against them, and reports a rich collection of metrics about the mutation-testing
process.

## Catalogue

The website links every component to its source branch and downloadable resources. Source lives
in the main Wodel repository; standalone Eclipse bundles and additional artifacts are available
from the [live site](https://gomezabajo.github.io/Wodel-Test/).

### Designer

| Component | Source | Update site |
|-----------|--------|-------------|
| **Wodel-Test designer** — define mutation operators and generate MuT tools | [branch](https://github.com/gomezabajo/Wodel/tree/Wodel-Test-designer) | [update-site](https://gomezabajo.github.io/Wodel/Wodel-Test/designer) |

### MuT tools generated with Wodel-Test

| Target language | Source branch | Update site | Wodel project | Meta-model |
|-----------------|---------------|-------------|---------------|------------|
| **Java** | [Wodel-Test-for-Java](https://github.com/gomezabajo/Wodel/tree/Wodel-Test-for-Java) | [update-site](https://gomezabajo.github.io/Wodel/Wodel-Test/java/update-site) | [testJava.zip](https://gomezabajo.github.io/Wodel/Wodel-Test/plugins/testJava.zip) | [java.ecore](https://gomezabajo.github.io/Wodel/Wodel-Test/ecore/java.ecore) |
| **ATL** | [Wodel-Test-for-ATL](https://github.com/gomezabajo/Wodel/tree/Wodel-Test-for-ATL) | [update-site](https://gomezabajo.github.io/Wodel/Wodel-Test/atl/update-site) | [testATL.zip](https://gomezabajo.github.io/Wodel/Wodel-Test/plugins/testATL.zip) | [ATL.ecore](https://gomezabajo.github.io/Wodel/Wodel-Test/ecore/ATL.ecore) |
| **Finite Automata** | [Wodel-Test-for-FA](https://github.com/gomezabajo/Wodel/tree/Wodel-Test-for-FA) | [update-site](https://gomezabajo.github.io/Wodel/Wodel-Test/fa/update-site) | [testFA.zip](https://gomezabajo.github.io/Wodel/Wodel-Test/plugins/testFA.zip) | [DFAAutomaton.ecore](https://gomezabajo.github.io/Wodel/Wodel-Test/ecore/DFAAutomaton.ecore) |
| **Logic Circuits** | [Wodel-Test-for-LC](https://github.com/gomezabajo/Wodel/tree/Wodel-Test-for-LC) | [update-site](https://gomezabajo.github.io/Wodel/Wodel-Test/lc/update-site) | [testLC.zip](https://gomezabajo.github.io/Wodel/Wodel-Test/plugins/testLC.zip) | [LogicCircuit.ecore](https://gomezabajo.github.io/Wodel/Wodel-Test/ecore/LogicCircuit.ecore) |
| **Chatbots** | [Wodel-Test-for-Conga](https://github.com/gomezabajo/Wodel/tree/Wodel-Test-for-Conga) | [update-site](https://gomezabajo.github.io/Wodel/Wodel-Test/conga/update-site) | [testConga.zip](https://gomezabajo.github.io/Wodel/Wodel-Test/plugins/testConga.zip) | [BotGenerator.ecore](https://gomezabajo.github.io/Wodel/Wodel-Test/ecore/BotGenerator.ecore) · [Annotation.ecore](https://gomezabajo.github.io/Wodel/Wodel-Test/ecore/Annotation.ecore) |

The Chatbots case study also has an associated dataset on
[Zenodo](https://zenodo.org/records/10938786).

## Running the website locally

The site is built with [Jekyll](https://jekyllrb.com/) 4.3 on Ruby 3.3.4 (see
[`.ruby-version`](.ruby-version)), using a customized version of the Potato Hacker theme
bundled in this repository ([`potato-hacker.gemspec`](potato-hacker.gemspec)).

```bash
git clone https://github.com/gomezabajo/Wodel-Test.git
cd Wodel-Test
bundle install
bundle exec jekyll serve
```

The site is then available at `http://localhost:4000/Wodel-Test/`. GitHub Pages builds and
publishes it automatically from the `main` branch.

## Repository structure

| Path | Contents |
|------|----------|
| `index.md`, `blog.md` | Home page (the catalogue) and blog index. |
| `_dropdown/` | One page per tool: designer, Java, ATL, Finite Automata, Logic Circuits, Chatbots. |
| `_items/` | Secondary pages: about, publications & funding, wiki, Wodel. |
| `_layouts/`, `_includes/`, `_sass/`, `assets/` | Theme templates, partials, styles, and static assets. |
| `_config.yml`, `_data/` | Jekyll configuration and menu definitions. |
| `designer/`, `java/`, `atl/`, `fa/`, `lc/`, `chatbots/` | Redirect stubs for the per-tool sections. |
| `zip/` | Bundled downloads. |

## Documentation

- **Tutorial:** [Get started with the Wodel-Test designer](https://github.com/gomezabajo/Wodel-Test/wiki/Get-Started-with-Wodel%E2%80%90Test-Designer)
- **Authors & contributors:** <https://gomezabajo.github.io/Wodel-Test/items/about/>
- **Publications & funding:** <https://gomezabajo.github.io/Wodel-Test/items/publications/>
- **Wodel (core DSL):** <https://gomezabajo.github.io/Wodel/>

## Citing Wodel-Test

If you use Wodel-Test in academic work, please cite:

```bibtex
@article{GomezAbajo2021WodelTest,
  author  = {G\'omez-Abajo, Pablo and Guerra, Esther and de Lara, Juan and Merayo, Mercedes G.},
  title   = {Wodel-Test: A Model-Based Framework for Language-Independent Mutation Testing},
  journal = {Software and Systems Modeling},
  volume  = {20},
  pages   = {767--793},
  year    = {2021},
  doi     = {10.1007/s10270-020-00827-0}
}

@article{GomezAbajo2025WodelTestSoftwareX,
  author    = {G\'omez-Abajo, Pablo and Guerra, Esther and de Lara, Juan},
  title     = {Wodel-Test: A Model-Based Framework for Engineering
               Language-Specific Mutation Testing Tools},
  journal   = {SoftwareX},
  volume    = {31},
  year      = {2025},
  publisher = {Elsevier}
}
```

## Authors and contact

Developed by **Pablo Gómez-Abajo**, **Esther Guerra**, and **Juan de Lara** (with
**Mercedes G. Merayo** during Pablo's PhD. studies), of the [miso research group](http://www.miso.es/), Universidad
Autónoma de Madrid.

- Email: <Pablo.GomezA@uam.es>
- GitHub: [@gomezabajo](https://github.com/gomezabajo)
- LinkedIn: <https://www.linkedin.com/in/gomezabajo>

## Funding

Wodel-Test has been developed with the support of, among others: project
"[FORTE](https://antares.sip.ucm.es/forte-cm/)" (P2018/TCS-4314, R&D programme of the Madrid
Region) and project "MASSIVE" (RTI2018-095255-B-I00, Spanish Ministry of Science). The full
list of supporting projects is available on the
[publications & funding page](https://gomezabajo.github.io/Wodel-Test/items/publications/).

## License

Distributed under the **Eclipse Public License 2.0 (EPL-2.0)**. See [`LICENSE`](LICENSE) for
details.

Copyright (c) 2026 [Universidad Autónoma de Madrid](https://www.uam.es/).

## Credits

Website built with [GitHub Pages](https://pages.github.com) using the
[Potato Hacker Jekyll theme](https://github.com/luxedo/jekyll-theme-potato-hacker) by
[Luiz Amaral](https://www.linkedin.com/in/luiz-nishino-amaral).
