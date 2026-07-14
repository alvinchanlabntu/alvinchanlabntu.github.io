---
title: Research
nav:
  order: 1
  tooltip: Research directions
---

# {% include icon.html icon="fa-solid fa-microscope" %}Research

Our research connects machine learning with biomedical science. We build computational methods and experimental workflows that learn from multiple scientific modalities, propose better therapeutic designs, and reveal how complex AI systems use information.

{% include section.html %}

{% capture medicine_text %}

We integrate molecular structures, formulation composition, biological assays, and high-throughput data to design therapeutic systems. Current work includes lipid nanoparticles and RNA delivery, where the design space is too large for experimental screening alone.

{% endcapture %}

{% include feature.html image="images/publications/designing-lipid-nanoparticles.png" title="AI for nanomedicine and RNA therapeutics" text=medicine_text %}

{% capture multimodal_text %}

We study how language models can reason with representations from vision, chemistry, and other scientific foundation models. Our work explores training-free adaptation, representation alignment, and generalization across modalities.

{% endcapture %}

{% include feature.html image="images/publications/in-context-representation-learning.png" title="Multimodal and generative AI for science" text=multimodal_text flip=true %}

{% capture reliable_text %}

We develop methods that separate unique, redundant, and synergistic information in multimodal systems. These tools help explain model decisions, diagnose modality dependence, and guide targeted interventions.

{% endcapture %}

{% include feature.html image="images/publications/partial-information-decomposition.png" title="Reliable and interpretable multimodal systems" text=reliable_text %}

{% include section.html %}

## Research highlights

{% include citation.html lookup="Designing lipid nanoparticles" style="rich" %}
{% include citation.html lookup="Can LLMs Reason Over Non-Text Modalities" style="rich" %}
{% include citation.html lookup="To Align or Not to Align" style="rich" %}
