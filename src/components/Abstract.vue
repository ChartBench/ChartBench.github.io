<template>
  <div class="container">
    <h2>Abstract</h2>
    <p>
      Multimodal Large Language Models (MLLMs) demonstrate impressive image understanding and generating capabilities. 
      However, existing benchmarks employ limited charts that deviate from real-world scenarios, posing challenges in accurately assessing the chart comprehension of MLLMs. 
      To overcome this constraint, we propose ChartBench, an exhaustive chart benchmark specifically designed to evaluate MLLMs' chart comprehension and data reliability through complex visual reasoning. 
      ChartBench encompasses a wide spectrum, including <strong>42</strong> categories, <strong>2.1K</strong> charts, and <strong>16.8K</strong> question-answer pairs. 
      Diverging from previous benchmarks, ChartBench avoids employing data point annotation charts or metadata prompts directly. 
      Instead, it compels MLLMs to derive values akin to human understanding by leveraging inherent chart elements such as color, legends, or coordinate systems. 
      Additionally, we propose an enhanced evaluation metric, <em>Acc+</em>, which facilitates the evaluation of MLLMs without needing labor-intensive manual efforts or costly evaluations based on GPT. 
      Our extensive experimental evaluation involves <strong>12</strong> widely-used open-sourced and <strong>2</strong> proprietary MLLMs, revealing the limitations of MLLMs in interpreting charts and providing valuable insights to encourage closer scrutiny of this aspect.
    </p>
    <p class="keywords">
      <strong>Keywords:</strong> Multimodal Large Language Model (MLLM), Evaluation, Benchmark, Chart
    </p>
    <br><br>
  </div>

</template>



<style lang="postcss">

.container {
  text-align: center;
  display: block;
  h2 {
    text-align: center;
  }

  p {
    line-height: 1.5rem;
  }

  .link {
    font-size: 1.2rem;
  }

  .pipeline {
    margin-top: 2rem;
  }
  .left_align_caption {
    text-align: left;
  }
  .distribution {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .image_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .image_container img {
    width: 400px;
    height: 400px;
  }
  
  .image_container figcaption {
    margin-top: 10px;
  }
}

</style>
