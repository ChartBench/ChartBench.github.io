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
    <div class="pipeline">
      <figure>
        <img src="/images/contents/pipeline.png" />
        <figcaption class="left_align_caption">
          <strong>The pipeline of ChartBench design</strong>. ChartBench 1) greatly enriches the chart's types and quantity. 
          2) introduces more challenging questions to validate visual logical reasoning abilities. 
          3) tests multiple prompt templates and adopts improved <em>Acc+</em> metric.
        </figcaption>
      </figure>
    </div>
    <br>
    <h3>ChartBench Split Distribution. Major chart types and <em>wi/wo</em> annotation distribution.</h3>
    <el-table
      :data="split_annos_data"
      :cell-style="{textAlign: 'center'}"
      :header-cell-style="{textAlign: 'center'}"
    >
      <el-table-column label="Metric">
        <el-table-column prop="category" label="Category"/>
      </el-table-column>
      <el-table-column label="Annotation Distribution">
        <el-table-column prop="wi" label="With"/>
        <el-table-column prop="wo" label="Without"/>
      </el-table-column>
      <el-table-column label="Chart Type Distribution">
        <el-table-column prop="line" label="Line"/>
        <el-table-column prop="bar" label="Bar"/>
        <el-table-column prop="pie" label="Pie"/>
        <el-table-column prop="area" label="Area"/>
        <el-table-column prop="box" label="Box"/>
        <el-table-column prop="radar" label="Radar"/>
        <el-table-column prop="scatter" label="Scatter"/>
        <el-table-column prop="node" label="Node"/>
        <el-table-column prop="combination" label="Combination"/>
      </el-table-column>
    </el-table>
    <br>
    <h3>Benchmark Statistics. <em>Visual</em> indicates inference via only visual reasoning, without the assistance of metatable data or annotations as MLLM's prompt.</h3>
    <el-table
      :data="benchmark_data"
      :cell-style="{textAlign: 'center'}"
      :header-cell-style="{textAlign: 'center'}"
      :border="true"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="benchmark" label="Benchmark">
      </el-table-column>
      <el-table-column prop="types" label="Types">
      </el-table-column>
      <el-table-column prop="charts" label="Charts">
      </el-table-column>
      <el-table-column prop="qas" label="QAs">
      </el-table-column>
      <el-table-column prop="visual" label="Visual">
      </el-table-column>
    </el-table>
    <br>
  </div>

</template>

<script lang="ts" setup>
  const split_annos_data = [
    {
      category: 'Ratio',
      wi: '23.8%',
      wo: '76.2%',
      line: '11.9%',
      bar: '31.0%',
      pie: '11.9%',
      area: '7.1%',
      box: '7.1%',
      radar: '9.5%',
      scatter: '7.1%',
      node: '4.8%',
      combination: '11.9%'
    }
  ]
  interface benchmark_item {
    benchmark: string
    types: string
    charts: string
    qas: string
    visual: string
  }

  const tableRowClassName = ({
    row, 
    rowIndex,
  }: {
    row: benchmark_item
    rowIndex: number
  }) => {
    if (rowIndex === 3) {
      return 'success-row'
    }
    return ''
  }

  const benchmark_data: benchmark_item[] = [
    {
      benchmark: 'ChartQA',
      types: '3',
      charts: '1.6K',
      qas: '2.5K',
      visual: 'No'
    },
    {
      benchmark: 'PlotQA',
      types: '3',
      charts: '33.6K',
      qas: '4.3M',
      visual: 'No'
    },
    {
      benchmark: 'ChartLlama',
      types: '10',
      charts: '2.1K',
      qas: '3.5K',
      visual: 'No'
    },
    {
      benchmark: 'ChartBench (ours)',
      types: '42',
      charts: '2.1K',
      qas: '16.8K',
      visual: 'Yes'
    },
  ]

  
</script>

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
.success-row {
  font-weight: bold;
  color: red;
}
</style>
