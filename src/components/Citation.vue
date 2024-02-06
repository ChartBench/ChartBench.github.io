<template>
  <div class="container">
    <h2>Citation</h2>
    <p>
      If you find this work is useful for your research, please cite our paper.
    </p>
    <pre>
      <code>@article{ChartBench,
    title={ChartBench: A Benchmark for Complex Visual Reasoning in Charts},
    author={Zhengzhuo Xu and Sinan Du and Yiyan Qi and Chengjin Xu and Chun Yuan and Jian Guo},
    journal={ArXiv},
    year={2023},
    volume={abs/2312.15915},
    url={https://api.semanticscholar.org/CorpusID:266550948}
}</code></pre>
    <el-divider />
    <h2>Contact</h2>
    <p>
      If you have any question, please contact
      <a class="link" href="mailto:xzzthu@gmail.com">Zhengzhuo Xu</a>
      or
      <a class="link" href="mailto:dusinan001@gmail.com">Sinan Du</a>.
    </p>
  </div>
</template>

<style lang="postcss" scoped>
h2 {
  text-align: center;
}
.container {
  width: 100%;
  text-align: left;
  .link {
    text-decoration: none;
    color: #409eff;
  }
  .note {
    p {
      margin: 2rem auto;
    }
  }
  .table {
    margin: 2rem auto;
  }

  pre {
    display: flex;
    margin: 0;
    font-size: 13px;
    line-height: 1.42857143;
    word-break: break-all;
    word-wrap: break-word;
    color: #333;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;

    code {
      padding: 0;
      margin: 0;
      font-size: inherit;
      color: inherit;
      white-space: pre-wrap;
      background-color: transparent;
      border-radius: 0;
      font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
    }
  }
}
</style>
