<template>
  <div class="example_and_manner">
    <figure>
      <img src="/images/contents/examples_and_eval_manner.png">
      <figcaption class="left_align_caption">
        <strong>Examples of chart and evaluation manner from ChartBench.</strong> 
        IN OUR INTRO: 1) it strives to maintain consistency between positive and negative queries, differing solely in the Ground Truth (GT) value. 
        2) the GT values for negative queries are derived from other data within the same chart, eliminating unrealistic scenarios and enhancing the validity of the evaluation process.
      </figcaption>
    </figure>
  </div>

  <div class="cot">
    <figure>
      <img src="/images/contents/CoT.png">
      <figcaption class="left_align_caption">
        <strong>The proposed ChartCoT.</strong>
        IN OUR Sec3.6: We propose a simple yet effective baseline (ChartCoT) based on Chain of Thought to enhance the visual reasoning capability without parameter training. 
        Specifically, we design a series of questions that decompose user inquiries and employ prompts to guide MLLMs to imitate human visual reasoning for chart recognition. It is highly effective in scenarios where table data or OCR is not available.
      </figcaption>
    </figure>
  </div>
  <br>
  <h2>The <em>Acc+</em> (%) performance w.r.t. data annotations. 
    <em>w/i</em> and <em>w/o</em> indicate chart with and without annotations, respectively.
  </h2>
  <el-table
    :data="wi_wo_anno_data"
    :cell-style="{textAlign: 'center'}"
    :header-cell-style="{textAlign: 'center'}"
    :border="true"
  >
    <el-table-column prop="model" label="Model"/>
    <el-table-column prop="wi" label="w/i"/>
    <el-table-column prop="wo" label="w/o"/>
    <el-table-column prop="delta" label="&#x0394;">
      <template #default="{ row }">
        <span :style="dataStyle(row.delta)">
              {{ row.delta }}
        </span>
      </template>
    </el-table-column>/>
    <el-table-column prop="acc_plus" label="Acc+"/>
  </el-table>
  <br>

  <h2>Model performance with zero-shot and ChartCoT. <em>w/i</em> and <em>w/o</em> indicate chart with and without annotations, respectively.</h2>
  <el-table
    :data="acc_plus_cot_data"
    :cell-style="{textAlign: 'center'}"
    :header-cell-style="{textAlign: 'center'}"
    :border="true"
  >
    <el-table-column prop="metric" label="Metric (Acc+)"/>
    <el-table-column label="MiniGPT-v2">
      <el-table-column prop="base_1" label="Base"/>
      <el-table-column prop="cot_1" label="CoT"/>
      <el-table-column prop="delta_1" label="&#x0394;">
        <template #default="{ row }">
          <span :style="dataStyle(row.delta_1)">
                {{ row.delta_1 }}
          </span>
        </template>
      </el-table-column>/>
    </el-table-column>
    <el-table-column label="QWen-VL-Chat">
      <el-table-column prop="base_2" label="Base"/>
      <el-table-column prop="cot_2" label="CoT"/>
      <el-table-column prop="delta_2" label="&#x0394;">
        <template #default="{ row }">
          <span :style="dataStyle(row.delta_2)">
                {{ row.delta_2 }}
          </span>
        </template>
      </el-table-column>/>
    </el-table-column>
  </el-table>
  <br>
  <el-table
    :data="cor_cot_data"
    :cell-style="{textAlign: 'center'}"
    :header-cell-style="{textAlign: 'center'}"
    :border="true"
  >
    <el-table-column prop="metric" label="Metric (CoR)"/>
    <el-table-column label="MiniGPT-v2">
      <el-table-column prop="base_1" label="Base"/>
      <el-table-column prop="cot_1" label="CoT"/>
      <el-table-column prop="delta_1" label="&#x0394;">
        <template #default="{ row }">
          <span :style="dataStyle(row.delta_1)">
                {{ row.delta_1 }}
          </span>
        </template>
      </el-table-column>/>
    </el-table-column>
    <el-table-column label="QWen-VL-Chat">
      <el-table-column prop="base_2" label="Base"/>
      <el-table-column prop="cot_2" label="CoT"/>
      <el-table-column prop="delta_2" label="&#x0394;">
        <template #default="{ row }">
          <span :style="dataStyle(row.delta_2)">
                {{ row.delta_2 }}
          </span>
        </template>
      </el-table-column>/>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { StyleValue } from 'vue';

  const wi_wo_anno_data = [
    {
      model: 'VisualGLM',
      wi: '7.22',
      wo: '2.83',
      delta: '+4.39',
      acc_plus: '3.79'
    },
    {
      model: 'Shikra',
      wi: '4.17',
      wo: '9.22',
      delta: '-5.05',
      acc_plus: '8.11'
    },
    {
      model: 'InstructBLIP',
      wi: '14.28',
      wo: '11.98',
      delta: '+2.30',
      acc_plus: '12.49'
    },
    {
      model: 'CogVLM',
      wi: '17.67',
      wo: '12.08',
      delta: '+5.59',
      acc_plus: '13.30'
    },
    {
      model: 'InternLM-Xcomposer',
      wi: '11.94',
      wo: '16.48',
      delta: '-4.54',
      acc_plus: '15.49'
    },
    {
      model: 'SPHINX',
      wi: '23.22',
      wo: '16.39',
      delta: '+6.83',
      acc_plus: '17.89'
    },
    {
      model: 'ChartLlama',
      wi: '21.83',
      wo: '13.08',
      delta: '+8.75',
      acc_plus: '19.06'
    },
    {
      model: 'BLIP2',
      wi: '28.94',
      wo: '17.80',
      delta: '+11.14',
      acc_plus: '20.24'
    },
    {
      model: 'MiniGPT-v2',
      wi: '23.83',
      wo: '23.47',
      delta: '+0.36',
      acc_plus: '23.55'
    },
    {
      model: 'LLaVA-v1.5',
      wi: '29.72',
      wo: '25.45',
      delta: '+4.27',
      acc_plus: '26.39'
    },
    {
      model: 'mPLUG-owl-bloomz',
      wi: '28.67',
      wo: '26.25',
      delta: '+2.42',
      acc_plus: '26.78'
    },
    {
      model: 'Qwen-VL-Chat',
      wi: '40.67',
      wo: '24.67',
      delta: '+16.00',
      acc_plus: '28.18'
    },
    {
      model: 'ERNIE',
      wi: '51.11',
      wo: '45.78',
      delta: '+5.33',
      acc_plus: '46.95'
    },
    {
      model: 'GPT-4V',
      wi: '78.89',
      wo: '47.50',
      delta: '+31.39',
      acc_plus: '54.39'
    },
  ]
  const acc_plus_cot_data = [
    {
      metric: 'CR',
      base_1: '29.02',
      cot_1: '36.76',
      delta_1: '+7.74',
      base_2: '52.54',
      cot_2: '64.54',
      delta_2: '+12.00',
    },
    {
      metric: 'VE',
      base_1: '22.29',
      cot_1: '29.22',
      delta_1: '+6.93',
      base_2: '10.78',
      cot_2: '15.85',
      delta_2: '+5.07',
    },
    {
      metric: 'VC',
      base_1: '24.59',
      cot_1: '25.14',
      delta_1: '+0.55',
      base_2: '27.46',
      cot_2: '28.44',
      delta_2: '+0.98',
    },
    {
      metric: 'GC',
      base_1: '18.29',
      cot_1: '26.37',
      delta_1: '+8.08',
      base_2: '21.95',
      cot_2: '29.22',
      delta_2: '+7.27',
    },
    {
      metric: 'All',
      base_1: '23.55',
      cot_1: '29.37',
      delta_1: '+5.82',
      base_2: '28.18',
      cot_2: '34.51',
      delta_2: '+6.33',
    },
    {
      metric: 'w/i',
      base_1: '23.47',
      cot_1: '29.77',
      delta_1: '+6.30',
      base_2: '40.67',
      cot_2: '48.89',
      delta_2: '+8.22',
    },
    {
      metric: 'w/o',
      base_1: '23.83',
      cot_1: '29.26',
      delta_1: '+5.43',
      base_2: '24.67',
      cot_2: '30.47',
      delta_2: '+5.80',
    },
  ]
  const cor_cot_data = [
    {
      metric: 'CR',
      base_1: '49.03',
      cot_1: '43.11',
      delta_1: '-5.92',
      base_2: '41.90',
      cot_2: '31.66',
      delta_2: '-10.24',
    },
    {
      metric: 'VE',
      base_1: '55.41',
      cot_1: '52.27',
      delta_1: '-3.14',
      base_2: '85.03',
      cot_2: '78.24',
      delta_2: '-6.79',
    },
    {
      metric: 'VC',
      base_1: '53.70',
      cot_1: '51.72',
      delta_1: '-1.98',
      base_2: '62.83',
      cot_2: '61.86',
      delta_2: '-0.97',
    },
    {
      metric: 'GC',
      base_1: '62.10',
      cot_1: '55.12',
      delta_1: '-6.98',
      base_2: '74.78',
      cot_2: '66.73',
      delta_2: '-8.05',
    },
    {
      metric: 'All',
      base_1: '55.06',
      cot_1: '50.55',
      delta_1: '-4.51',
      base_2: '66.13',
      cot_2: '59.63',
      delta_2: '-6.50',
    },
    {
      metric: 'w/i',
      base_1: '55.73',
      cot_1: '51.28',
      delta_1: '-4.45',
      base_2: '69.67',
      cot_2: '64.02',
      delta_2: '-5.65',
    },
    {
      metric: 'w/o',
      base_1: '52.67',
      cot_1: '50.32',
      delta_1: '-2.35',
      base_2: '53.56',
      cot_2: '44.00',
      delta_2: '-9.56',
    },
  ]
  function dataStyle(delta: string): StyleValue {
    if (delta.includes('-')) {
      return {color: 'red'};
    } else if (delta.includes('+')) {
      return {color: 'green'}
    }
    return ''
  }
</script>

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
