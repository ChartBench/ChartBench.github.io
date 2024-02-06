<template>
  <h2>Proposed <em>Acc+</em></h2>
  <p>We propose an enhanced evaluation metric, <em>Acc+</em>, which facilitates the evaluation of MLLMs without needing labor-intensive manual efforts or costly evaluations based on GPT.
        It strives to maintain consistency between positive and negative queries, differing solely in the Ground Truth (GT) value. 
        The GT values for negative queries are derived from other data within the same chart, eliminating unrealistic scenarios and enhancing the validity of the evaluation process.</p>
  
  <div class="example_and_manner">
    <figure>
      <img src="/images/contents/examples_and_eval_manner.png">
      <!-- <figcaption class="left_align_caption">
        <strong>Examples of chart and evaluation manner from ChartBench.</strong> 
      </figcaption> -->
    </figure>
  </div>
  <br>
</template>



<style lang="postcss">
.split {
  text-align: center;
  margin-top: 5px;
  height: 300px;
  width: 800px;
}

.example_and_manner {
  margin-top: 0px;
}

.cot {
  text-align: center;
  margin-top: 5px;
  width: 100%;
  .cot_img {
    width: 1400px;
    height: 240px;
  }
}

.left_align_caption {
  text-align: left;
}

.cell-green {
  color: green;
}

.cell-red {
  color: red;
}
</style>
