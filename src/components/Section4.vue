<template>
    <div class="container">
        <h2>Human evaluation results on ChartBench via random questionnaire.</h2>
        <el-table
        class="eval"
        :data="human_eval_chart_type_data"
        :cell-style="{textAlign: 'center'}"
        :header-cell-style="{textAlign: 'center'}"
        >
        <el-table-column prop="model" label="Model" width="140px"/>
        <el-table-column label="Regular Type">
            <el-table-column prop="line" label="Line"/>
            <el-table-column prop="bar" label="Bar"/>
            <el-table-column prop="pie" label="Pie"/>
        </el-table-column>
        <el-table-column label="Extra Type">
            <el-table-column prop="area" label="Area"/>
            <el-table-column prop="box" label="Box"/>
            <el-table-column prop="radar" label="Radar"/>
            <el-table-column prop="scatter" label="Scatter"/>
            <el-table-column prop="node" label="Node"/>
            <el-table-column prop="combination" label="Combination"/>
        </el-table-column>
        <el-table-column prop="acc_plus" label="Acc+"/>
        </el-table>
        <br>
        <el-table
        class="eval"
        :data="human_eval_task_type_data"
        :cell-style="{textAlign: 'center'}"
        :header-cell-style="{textAlign: 'center'}"
        >
        <el-table-column prop="model" label="Model" width="140"/>
        <el-table-column>
            <el-table-column prop="acc_plus" label="Task Type (Acc+)">
            <el-table-column prop="cr_1" label="CR"/>
            <el-table-column prop="ve_1" label="VE"/>
            <el-table-column prop="vc_1" label="VC"/>
            <el-table-column prop="gc_1" label="GC"/>
            <el-table-column prop="all_1" label="ALL"/>
            </el-table-column>
            <el-table-column prop="cor" label="Task Type (CoR)">
            <el-table-column prop="cr_2" label="CR"/>
            <el-table-column prop="ve_2" label="VE"/>
            <el-table-column prop="vc_2" label="VC"/>
            <el-table-column prop="gc_2" label="GC"/>
            <el-table-column prop="all_2" label="ALL"/>
            </el-table-column>
        </el-table-column>
        </el-table>
        <p>
        IN OUR APDX D.3, to ensure a fair and objective evaluation, we conduct an online survey, which consists of 10 randomly selected subcategories from ChartBench for each questionnaire. 
        1 chart and 4 assertions are selected from each subcategory for respondents to assess their accuracy. 
        To obtain reliable evaluation results, the survey participants mainly consist of undergraduate and graduate students with chart reading ability, 
        as well as other researchers in the campus and company. We encourage participants to use large-screen devices for better chart display and kindly request their patient and diligent responses. 
        On average, it takes approximately <em>15 minutes</em> and <em>17 seconds</em> to complete each survey. To avoid cases of random guessing, we still employ the <em>Acc+</em> evaluation metric. 
        Incomplete responses are discarded, and we ensure that each subcategory has valid answers. In total, we have collected 68 valid surveys.
        </p>
    </div>
</template>

<script lang="ts" setup>
const human_eval_chart_type_data = [
  {
    model: 'Qwen-VL-Chat',
    line: '41.00',
    bar: '20.96',
    pie: '40.00',
    area: '28.83',
    box: '24.17',
    radar: '35.00',
    scatter: '19.50',
    node: '18.50',
    combination: '25.50',
    acc_plus: '28.18'
  },
  {
    model: 'GPT-4V',
    line: '74.00',
    bar: '41.54',
    pie: '63.00',
    area: '33.30',
    box: '46.67',
    radar: '57.50',
    scatter: '70.00',
    node: '100.00',
    combination: '56.25',
    acc_plus: '54.39'
  },
  {
    model: 'Human Evaluation',
    line: '90.63',
    bar: '88.69',
    pie: '87.86',
    area: '86.61',
    box: '84.56',
    radar: '89.86',
    scatter: '89.29',
    node: '88.75',
    combination: '85.64',
    acc_plus: '88.46'
  }
]
const human_eval_task_type_data = [
  {
    model: 'Qwen-VL-Chat',
    cr_1: '52.54',
    ve_1: '10.78',
    vc_1: '27.46',
    gc_1: '21.95',
    all_1: '28.18',
    cr_2: '41.90',
    ve_2: '85.03',
    vc_2: '62.83',
    gc_2: '74.78',
    all_2: '66.13',
  },
  {
    model: 'GPT-4V',
    cr_1: '96.10',
    ve_1: '29.27',
    vc_1: '47.32',
    gc_1: '44.88',
    all_1: '54.39',
    cr_2: '2.93',
    ve_2: '64.88',
    vc_2: '35.61',
    gc_2: '48.78',
    all_2: '38.05',
  },
  {
    model: 'Human Evaluation',
    cr_1: '93.68',
    ve_1: '84.56',
    vc_1: '88.68',
    gc_1: '86.91',
    all_1: '88.46',
    cr_2: '1.34',
    ve_2: '5.82',
    vc_2: '4.72',
    gc_2: '3.52',
    all_2: '3.85',
  },
]
</script>

<style lang="postcss" scoped>
    .container {
        width: 100%;
    }
</style>