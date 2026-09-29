---
---

# AI for Therapeutic Discovery and Precision Medicine

We are an interdisciplinary research group at Nanyang Technological University. We combine generative AI, multimodal learning, and high-throughput experimentation to make therapeutic discovery faster, more precise, and more accessible.

{% include button.html link="team" text="Meet the team" icon="fa-solid fa-users" %}

{% include section.html %}

## Research at the interface of AI and medicine

{% capture precision_text %}

Our research spans five therapeutic modalities: molecules, proteins, peptides, RNAs, and LNPs. Across these modalities, we develop AI methods that support three core capabilities: predicting properties, interactions, and outcomes; designing novel therapeutic candidates; and optimizing candidates across multiple objectives.

{% endcapture %}

{% include feature.html image="images/home/ai-driven-therapeutic-discovery.png" link="publications" title="AI-driven therapeutic discovery" text=precision_text contain=true ratio="1600 / 685" %}

{% capture multimodal_text %}

Therapeutic discovery is formulated as an iterative feedback loop that connects candidate design, evaluation, learning, and optimization. Candidates are assessed using feedback sources with different costs and fidelity levels, from computational predictors and simulations to experimental assays and expert input. The resulting feedback is used to update models through representation learning, preference learning, active learning, and uncertainty estimation. These updated models then guide multi-objective optimization of properties such as potency, safety, stability, developability, and selectivity, closing the loop for the next round of design.

{% include button.html link="publications" text="View publications" icon="fa-solid fa-arrow-right" flip=true style="bare" %}

{% endcapture %}

{% include feature.html image="images/home/closed-loop-therapeutic-discovery.png" link="publications" title="Closed-loop therapeutic discovery" flip=true text=multimodal_text contain=true ratio="1600 / 533" %}

{% capture team_text %}

Researchers in machine learning and experimental science work side by side, connecting model development with real biomedical questions and high-throughput validation.

{% include button.html link="team" text="Meet our members" icon="fa-solid fa-arrow-right" flip=true style="bare" %}

{% endcapture %}

{% include feature.html image="images/home/one-interdisciplinary-lab.jpeg" link="team" title="One interdisciplinary lab" text=team_text %}

{% include section.html %}

## Selected publications

{% include citation.html lookup="Towards Understanding Modality Interaction" style="rich" %}
{% include citation.html lookup="Designing lipid nanoparticles" style="rich" %}
