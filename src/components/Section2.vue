<template>
  <div class="container">
    <p style="font-size: 15px;text-align: center;">The zero-shot <em>Acc+</em> and <em>Acc</em> (%) performance w.r.t. chart types on ChartBench.</p>
    <el-table
      class="table"
      :data="chartTypeViewDataRef"
      :header-cell-style="headerCellStyle"
      @sort-change="sortChange"
    >
      <el-table-column
        prop="rank"
        label="Rank"
        align="center"
        sortable="custom"
      >
        <template #default="scope">
          {{ scope.row["rank"].val }}
        </template>
      </el-table-column>
      <el-table-column
        prop="model"
        label="Model"
        align="center"
        width="110px"
      >
        <template #default="scope">
          <a class="link" :href="scope.row['link']" target="_blank">
            {{ scope.row["model"] }}
          </a>
        </template>
      </el-table-column>
      <el-table-column prop="line" label="Line" align="center">
        <el-table-column
          prop="line_acc_plus"
          label="Acc+"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['line_acc_plus'].bold)">
              {{ row["line_acc_plus"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="line_acc"
          label="Acc"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['line_acc'].bold)">
              {{ row["line_acc"].val }}
            </span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="bar" label="Bar" align="center">
        <el-table-column
          prop="bar_acc_plus"
          label="Acc+"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['bar_acc_plus'].bold)">
              {{ row["bar_acc_plus"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="bar_acc"
          label="Acc"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['bar_acc'].bold)">
              {{ row["bar_acc"].val }}
            </span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="pie" label="Pie" align="center">
        <el-table-column
          prop="pie_acc_plus"
          label="Acc+"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['pie_acc_plus'].bold)">
              {{ row["pie_acc_plus"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="pie_acc"
          label="Acc"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['pie_acc'].bold)">
              {{ row["pie_acc"].val }}
            </span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="area" label="Area" align="center">
        <el-table-column
          prop="area_acc_plus"
          label="Acc+"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['area_acc_plus'].bold)">
              {{ row["area_acc_plus"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="area_acc"
          label="Acc"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['area_acc'].bold)">
              {{ row["area_acc"].val }}
            </span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="box" label="Box" align="center">
        <el-table-column
          prop="box_acc_plus"
          label="Acc+"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['box_acc_plus'].bold)">
              {{ row["box_acc_plus"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="box_acc"
          label="Acc"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['box_acc'].bold)">
              {{ row["box_acc"].val }}
            </span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="radar" label="Radar" align="center">
        <el-table-column
          prop="radar_acc_plus"
          label="Acc+"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['radar_acc_plus'].bold)">
              {{ row["radar_acc_plus"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="radar_acc"
          label="Acc"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['radar_acc'].bold)">
              {{ row["radar_acc"].val }}
            </span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="scatter" label="Scatter" align="center">
        <el-table-column
          prop="scatter_acc_plus"
          label="Acc+"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['scatter_acc_plus'].bold)">
              {{ row["scatter_acc_plus"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="scatter_acc"
          label="Acc"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['scatter_acc'].bold)">
              {{ row["scatter_acc"].val }}
            </span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="node" label="Node" align="center">
        <el-table-column
          prop="node_acc_plus"
          label="Acc+"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['node_acc_plus'].bold)">
              {{ row["node_acc_plus"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="node_acc"
          label="Acc"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['node_acc'].bold)">
              {{ row["node_acc"].val }}
            </span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="combination" label="Combination" align="center">
        <el-table-column
          prop="combination_acc_plus"
          label="Acc+"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['combination_acc_plus'].bold)">
              {{ row["combination_acc_plus"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="combination_acc"
          label="Acc"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['combination_acc'].bold)">
              {{ row["combination_acc"].val }}
            </span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="all" label="All" align="center">
        <el-table-column
          prop="all_acc_plus"
          label="Acc+"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['all_acc_plus'].bold)">
              {{ row["all_acc_plus"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="all_acc"
          label="Acc"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['all_acc'].bold)">
              {{ row["all_acc"].val }}
            </span>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
    
    <p style="font-size: 15px;text-align: center;">The zero-shot <em>Acc+</em>, <em>Acc</em> and <em>CoR</em> (%) performance w.r.t. task types on ChartBench.</p>
    <el-table
      class="table"
      :data="taskTypeViewDataRef"
      :header-cell-style="headerCellStyle"
      @sort-change="sortChange2"
    >
      <el-table-column
        prop="rank"
        label="Rank"
        align="center"
        sortable="custom"
      >
        <template #default="scope">
          {{ scope.row["rank"].val }}
        </template>
      </el-table-column>
      <el-table-column
        prop="model"
        label="Model"
        align="center"
        width="110px"
      >
        <template #default="scope">
          <a class="link" :href="scope.row['link']" target="_blank">
            {{ scope.row["model"] }}
          </a>
        </template>
      </el-table-column>
      <el-table-column prop="CR" label="CR" align="center">
        <el-table-column
          prop="CR_acc_plus"
          label="Acc+"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['CR_acc_plus'].bold)">
              {{ row["CR_acc_plus"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="CR_acc"
          label="Acc"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['CR_acc'].bold)">
              {{ row["CR_acc"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="CR_cor"
          label="CoR"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['CR_cor'].bold)">
              {{ row["CR_cor"].val }}
            </span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="VE" label="VE" align="center">
        <el-table-column
          prop="VE_acc_plus"
          label="Acc+"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['VE_acc_plus'].bold)">
              {{ row["VE_acc_plus"].val }}
            </span>
          </template></el-table-column
        >
        <el-table-column
          prop="VE_acc"
          label="Acc"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['VE_acc'].bold)">
              {{ row["VE_acc"].val }}
            </span>
          </template></el-table-column
        >
        <el-table-column
          prop="VE_cor"
          label="CoR"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['VE_cor'].bold)">
              {{ row["VE_cor"].val }}
            </span>
          </template></el-table-column
        >
      </el-table-column>
      <el-table-column prop="VC" label="VC" align="center">
        <el-table-column
          prop="VC_acc_plus"
          label="Acc+"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['VC_acc_plus'].bold)">
              {{ row["VC_acc_plus"].val }}
            </span>
          </template></el-table-column
        >
        <el-table-column
          prop="VC_acc"
          label="Acc"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['VC_acc'].bold)">
              {{ row["VC_acc"].val }}
            </span>
          </template></el-table-column
        >
        <el-table-column
          prop="VC_cor"
          label="CoR"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['VC_cor'].bold)">
              {{ row["VC_cor"].val }}
            </span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="GC" label="GC" align="center">
        <el-table-column
          prop="GC_acc_plus"
          label="Acc+"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['GC_acc_plus'].bold)">
              {{ row["GC_acc_plus"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="GC_acc"
          label="Acc"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['GC_acc'].bold)">
              {{ row["GC_acc"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="GC_cor"
          label="CoR"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['GC_cor'].bold)">
              {{ row["GC_cor"].val }}
            </span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="all" label="all" align="center">
        <el-table-column
          prop="all_acc_plus"
          label="Acc+"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['all_acc_plus'].bold)">
              {{ row["all_acc_plus"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="all_acc"
          label="Acc"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['all_acc'].bold)">
              {{ row["all_acc"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="all_cor"
          label="CoR"
          width="82"
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['all_cor'].bold)">
              {{ row["all_cor"].val }}
            </span>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>

    <p>
      "N/A" stands for missing value, indicating that we didn't measure this metric on the proprietary model. 
      We report the results of the best-performing prompt for each MLLM. 
      The benchmark is continuously updated to encourage researchers to participate in.
    </p>
  </div>
</template>

<script lang="ts" setup>
import { CellStyle } from "element-plus";
import { StyleValue, ref } from "vue";
import { chartTypeViewData } from "./section2-chart-type-view";
import { taskTypeViewData } from "./section2-task-type-view";

const chartTypeViewDataRef = ref(chartTypeViewData);
const taskTypeViewDataRef = ref(taskTypeViewData);

function headerCellStyle({}): CellStyle<cellStyle> {
  const style = { color: "black", padding: "6px 0" };
  // if (column.property === "nose") {
  //   Object.assign(style, { backgroundColor: "rgb(181,228,140)" });
  // }
  // if (column.property === "mouth") {
  //   Object.assign(style, { backgroundColor: "rgb(255,183,3)" });
  // }
  // if (column.property === "forehead") {
  //   Object.assign(style, { backgroundColor: "rgb(189,178,255)" });
  // }
  // if (column.property === "cheek") {
  //   Object.assign(style, { backgroundColor: "rgb(144,224,239)" });
  // }
  // if (column.property === "all") {
  //   Object.assign(style, { backgroundColor: "rgb(217,217,217)" });
  // }
  return style;
}

function sortChange({ prop, order }: { prop: string; order: string }) {
  chartTypeViewDataRef.value.sort((a: ChartTypeData, b: ChartTypeData) => {
    if (a[prop].val == "N/A" && b[prop].vla == "N/A") return 0;
    if (a[prop].val == "N/A") return 1;
    if (b[prop].val == "N/A") return -1;
    if (order === "ascending") {
      return Number.parseFloat(a[prop].val) - Number.parseFloat(b[prop].val);
    }
    return b[prop].val - a[prop].val;
  });
}

function sortChange2({ prop, order }: { prop: string; order: string }) {
  taskTypeViewDataRef.value.sort((a: TaskTypeData, b: TaskTypeData) => {
    if (a[prop].val == "N/A" && b[prop].vla == "N/A") return 0;
    if (a[prop].val == "N/A") return 1;
    if (b[prop].val == "N/A") return -1;
    if (order === "ascending") {
      return Number.parseFloat(a[prop].val) - Number.parseFloat(b[prop].val);
    }
    return b[prop].val - a[prop].val;
  });
}

function dataStyle(bold: boolean): StyleValue {
  if (bold) {
    return { fontWeight: "bolder" };
  }
  return { fontWeight: "normal" };
}

interface cellStyle {
  color: string;
}
</script>

<style lang="postcss" scoped>
.container {
  width: 100%;

  .link {
    font-size: 14px;
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
    .table-cell {
      background-color: black;
    }
  }
}
</style>