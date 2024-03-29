import { boldMinValue2, addRank2, sortByAll2 } from "./utils";

let taskTypeViewData: TaskTypeData[] = [
  {
    CR_acc_plus: { val: "15.17", bold: false },
    CR_acc: { val: "55.27", bold: false },
    CR_cor: { val: "80.20", bold: false },
    VE_acc_plus: { val: "0.00", bold: false },
    VE_acc: { val: "49.90", bold: false },
    VE_cor: { val: "99.81", bold: false },
    VC_acc_plus: { val: "0.00", bold: false },
    VC_acc: { val: "49.95", bold: false },
    VC_cor: { val: "99.90", bold: false },
    GC_acc_plus: { val: "0.00", bold: false },
    GC_acc: { val: "49.93", bold: false },
    GC_cor: { val: "99.85", bold: false },
    all_acc_plus: { val: "3.79", bold: false },
    all_acc: { val: "51.26", bold: false },
    all_cor: { val: "94.95", bold: false },
    model: "VisualGLM",
    link: "https://arxiv.org/abs/2105.13290",
  },
  {
    CR_acc_plus: { val: "2.15", bold: false },
    CR_acc: { val: "49.27", bold: false },
    CR_cor: { val: "94.25", bold: false },
    VE_acc_plus: { val: "11.90", bold: false },
    VE_acc: { val: "50.68", bold: false },
    VE_cor: { val: "77.56", bold: false },
    VC_acc_plus: { val: "10.63", bold: false },
    VC_acc: { val: "52.37", bold: false },
    VC_cor: { val: "83.46", bold: false },
    GC_acc_plus: { val: "7.76", bold: false },
    GC_acc: { val: "48.12", bold: false },
    GC_cor: { val: "80.73", bold: false },
    all_acc_plus: { val: "8.11", bold: false },
    all_acc: { val: "50.11", bold: false },
    all_cor: { val: "84.00", bold: false },
    model: "Shikra",
    link: "https://arxiv.org/abs/2306.15195",
  },
  {
    CR_acc_plus: { val: "49.90", bold: false },
    CR_acc: { val: "67.93", bold: false },
    CR_cor: { val: "36.05", bold: false },
    VE_acc_plus: { val: "0.00", bold: false },
    VE_acc: { val: "50.00", bold: false },
    VE_cor: { val: "100.00", bold: false },
    VC_acc_plus: { val: "0.05", bold: false },
    VC_acc: { val: "49.95", bold: false },
    VC_cor: { val: "99.80", bold: false },
    GC_acc_plus: { val: "0.00", bold: false },
    GC_acc: { val: "49.95", bold: false },
    GC_cor: { val: "99.90", bold: false },
    all_acc_plus: { val: "12.49", bold: false },
    all_acc: { val: "54.46", bold: false },
    all_cor: { val: "83.94", bold: false },
    model: "InstructBLIP",
    link: "https://arxiv.org/abs/2305.06500",
  },
  {
    CR_acc_plus: { val: "29.41", bold: false },
    CR_acc: { val: "64.10", bold: false },
    CR_cor: { val: "69.36", bold: false },
    VE_acc_plus: { val: "2.39", bold: false },
    VE_acc: { val: "49.83", bold: false },
    VE_cor: { val: "94.88", bold: false },
    VC_acc_plus: { val: "14.29", bold: false },
    VC_acc: { val: "54.59", bold: false },
    VC_cor: { val: "80.58", bold: false },
    GC_acc_plus: { val: "7.12", bold: false },
    GC_acc: { val: "52.37", bold: false },
    GC_cor: { val: "90.49", bold: false },
    all_acc_plus: { val: "13.30", bold: false },
    all_acc: { val: "55.22", bold: false },
    all_cor: { val: "83.83", bold: false },
    model: "CogVLM",
    link: "https://arxiv.org/abs/2311.03079",
  },
  {
    CR_acc_plus: { val: "42.59", bold: false },
    CR_acc: { val: "70.90", bold: false },
    CR_cor: { val: "56.64", bold: false },
    VE_acc_plus: { val: "6.98", bold: false },
    VE_acc: { val: "49.41", bold: false },
    VE_cor: { val: "84.87", bold: false },
    VC_acc_plus: { val: "2.49", bold: false },
    VC_acc: { val: "50.76", bold: false },
    VC_cor: { val: "96.54", bold: false },
    GC_acc_plus: { val: "9.90", bold: false },
    GC_acc: { val: "48.88", bold: false },
    GC_cor: { val: "77.95", bold: false },
    all_acc_plus: { val: "15.49", bold: false },
    all_acc: { val: "55.70", bold: false },
    all_cor: { val: "79.00", bold: false },
    model: "Internlm-XComposer",
    link: "https://arxiv.org/abs/2309.15112",
  },
  {
    CR_acc_plus: { val: "38.15", bold: false },
    CR_acc: { val: "63.90", bold: false },
    CR_cor: { val: "51.51", bold: false },
    VE_acc_plus: { val: "9.90", bold: false },
    VE_acc: { val: "50.39", bold: false },
    VE_cor: { val: "80.98", bold: false },
    VC_acc_plus: { val: "14.15", bold: false },
    VC_acc: { val: "52.90", bold: false },
    VC_cor: { val: "77.51", bold: false },
    GC_acc_plus: { val: "9.37", bold: false },
    GC_acc: { val: "50.00", bold: false },
    GC_cor: { val: "81.27", bold: false },
    all_acc_plus: { val: "17.89", bold: false },
    all_acc: { val: "54.30", bold: false },
    all_cor: { val: "72.82", bold: false },
    model: "SPHINX",
    link: "https://arxiv.org/abs/2311.07575",
  },
  {
    CR_acc_plus: { val: "59.51", bold: false },
    CR_acc: { val: "78.27", bold: false },
    CR_cor: { val: "37.51", bold: false },
    VE_acc_plus: { val: "3.85", bold: false },
    VE_acc: { val: "49.39", bold: false },
    VE_cor: { val: "91.07", bold: false },
    VC_acc_plus: { val: "13.95", bold: false },
    VC_acc: { val: "54.24", bold: false },
    VC_cor: { val: "80.59", bold: false },
    GC_acc_plus: { val: "3.66", bold: false },
    GC_acc: { val: "49.49", bold: false },
    GC_cor: { val: "91.66", bold: false },
    all_acc_plus: { val: "20.24", bold: false },
    all_acc: { val: "57.85", bold: false },
    all_cor: { val: "75.21", bold: false },
    model: "BLIP2",
    link: "https://arxiv.org/abs/2301.12597",
  },
  {
    CR_acc_plus: { val: "49.51", bold: false },
    CR_acc: { val: "60.27", bold: false },
    CR_cor: { val: "78.48", bold: false },
    VE_acc_plus: { val: "8.34", bold: false },
    VE_acc: { val: "51.71", bold: false },
    VE_cor: { val: "84.98", bold: false },
    VC_acc_plus: { val: "20.54", bold: false },
    VC_acc: { val: "55.24", bold: false },
    VC_cor: { val: "73.32", bold: false },
    GC_acc_plus: { val: "10.63", bold: false },
    GC_acc: { val: "53.51", bold: false },
    GC_cor: { val: "84.68", bold: false },
    all_acc_plus: { val: "22.26", bold: false },
    all_acc: { val: "55.18", bold: false },
    all_cor: { val: "80.36", bold: false },
    model: "ChartLlama",
    link: "https://arxiv.org/abs/2311.16483",
  },
  {
    CR_acc_plus: { val: "29.02", bold: false },
    CR_acc: { val: "53.54", bold: false },
    CR_cor: { val: "49.03", bold: false },
    VE_acc_plus: { val: "22.29", bold: false },
    VE_acc: { val: "50.00", bold: false },
    VE_cor: { val: "55.41", bold: false },
    VC_acc_plus: { val: "24.59", bold: false },
    VC_acc: { val: "51.44", bold: false },
    VC_cor: { val: "53.70", bold: false },
    GC_acc_plus: { val: "18.29", bold: false },
    GC_acc: { val: "49.34", bold: false },
    GC_cor: { val: "62.10", bold: false },
    all_acc_plus: { val: "23.55", bold: false },
    all_acc: { val: "51.08", bold: false },
    all_cor: { val: "55.06", bold: false },
    model: "MiniGPT-v2",
    link: "https://arxiv.org/abs/2310.09478",
  },
  {
    CR_acc_plus: { val: "46.98", bold: false },
    CR_acc: { val: "65.37", bold: false },
    CR_cor: { val: "36.78", bold: false },
    VE_acc_plus: { val: "15.90", bold: false },
    VE_acc: { val: "49.34", bold: false },
    VE_cor: { val: "66.88", bold: false },
    VC_acc_plus: { val: "26.15", bold: false },
    VC_acc: { val: "54.66", bold: false },
    VC_cor: { val: "57.02", bold: false },
    GC_acc_plus: { val: "16.54", bold: false },
    GC_acc: { val: "50.29", bold: false },
    GC_cor: { val: "67.51", bold: false },
    all_acc_plus: { val: "26.39", bold: false },
    all_acc: { val: "54.91", bold: false },
    all_cor: { val: "57.05", bold: false },
    model: "LLaVA-v1.5",
    link: "https://arxiv.org/abs/2310.03744",
  },
  {
    CR_acc_plus: { val: "32.20", bold: false },
    CR_acc: { val: "61.51", bold: false },
    CR_cor: { val: "58.64", bold: false },
    VE_acc_plus: { val: "23.02", bold: false },
    VE_acc: { val: "56.66", bold: false },
    VE_cor: { val: "67.26", bold: false },
    VC_acc_plus: { val: "25.37", bold: false },
    VC_acc: { val: "56.20", bold: false },
    VC_cor: { val: "61.66", bold: false },
    GC_acc_plus: { val: "26.54", bold: false },
    GC_acc: { val: "57.37", bold: false },
    GC_cor: { val: "61.66", bold: false },
    all_acc_plus: { val: "26.78", bold: false },
    all_acc: { val: "57.93", bold: false },
    all_cor: { val: "62.30", bold: false },
    model: "mPLUG-Owl-bloomz",
    link: "https://arxiv.org/abs/2304.14178",
  },
  {
    CR_acc_plus: { val: "52.54", bold: false },
    CR_acc: { val: "73.49", bold: false },
    CR_cor: { val: "41.90", bold: false },
    VE_acc_plus: { val: "10.78", bold: false },
    VE_acc: { val: "53.29", bold: false },
    VE_cor: { val: "85.03", bold: false },
    VC_acc_plus: { val: "27.46", bold: false },
    VC_acc: { val: "58.88", bold: false },
    VC_cor: { val: "62.83", bold: false },
    GC_acc_plus: { val: "21.95", bold: false },
    GC_acc: { val: "59.34", bold: false },
    GC_cor: { val: "74.78", bold: false },
    all_acc_plus: { val: "28.18", bold: false },
    all_acc: { val: "61.25", bold: false },
    all_cor: { val: "66.13", bold: false },
    model: "Qwen-VL-Chat",
    link: "https://arxiv.org/abs/2308.12966",
  },
  {
    CR_acc_plus: { val: "65.37", bold: false },
    CR_acc: { val: "N/A", bold: false },
    CR_cor: { val: "19.03", bold: false },
    VE_acc_plus: { val: "43.90", bold: false },
    VE_acc: { val: "N/A", bold: false },
    VE_cor: { val: "45.85", bold: false },
    VC_acc_plus: { val: "32.20", bold: false },
    VC_acc: { val: "N/A", bold: false },
    VC_cor: { val: "41.47", bold: false },
    GC_acc_plus: { val: "46.34", bold: false },
    GC_acc: { val: "N/A", bold: false },
    GC_cor: { val: "48.29", bold: false },
    all_acc_plus: { val: "46.95", bold: false },
    all_acc: { val: "N/A", bold: false },
    all_cor: { val: "38.66", bold: false },
    model: "ERNIE",
    link: "https://yiyan.baidu.com",
  },
  {
    CR_acc_plus: { val: "96.10", bold: false },
    CR_acc: { val: "N/A", bold: false },
    CR_cor: { val: "2.93", bold: false },
    VE_acc_plus: { val: "29.27", bold: false },
    VE_acc: { val: "N/A", bold: false },
    VE_cor: { val: "64.88", bold: false },
    VC_acc_plus: { val: "47.32", bold: false },
    VC_acc: { val: "N/A", bold: false },
    VC_cor: { val: "35.61", bold: false },
    GC_acc_plus: { val: "44.88", bold: false },
    GC_acc: { val: "N/A", bold: false },
    GC_cor: { val: "48.78", bold: false },
    all_acc_plus: { val: "54.39", bold: false },
    all_acc: { val: "N/A", bold: false },
    all_cor: { val: "38.05", bold: false },
    model: "GPT-4V",
    link: "https://openai.com/research/gpt-4",
  },
];

taskTypeViewData = sortByAll2(taskTypeViewData);
addRank2(taskTypeViewData);
boldMinValue2(taskTypeViewData);

export { taskTypeViewData };
