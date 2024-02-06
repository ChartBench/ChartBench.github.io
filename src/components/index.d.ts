interface DataItem {
  val: string;
  bold: boolean;
}

interface ChartTypeData {
  line_acc_plus: DataItem;
  line_acc: DataItem;
  bar_acc_plus: DataItem;
  bar_acc: DataItem;
  pie_acc_plus: DataItem;
  pie_acc: DataItem;
  area_acc_plus: DataItem;
  area_acc: DataItem;
  box_acc_plus: DataItem;
  box_acc: DataItem;
  radar_acc_plus: DataItem;
  radar_acc: DataItem;
  scatter_acc_plus: DataItem;
  scatter_acc: DataItem;
  node_acc_plus: DataItem;
  node_acc: DataItem;
  combination_acc_plus: DataItem;
  combination_acc: DataItem;
  all_acc_plus: DataItem;
  all_acc: DataItem;
  model: string;
  link: string;
  [key: string]: any;
}

interface TaskTypeData {
  CR_acc_plus: DataItem;
  CR_acc: DataItem;
  CR_cor: DataItem;
  VE_acc_plus: DataItem;
  VE_acc: DataItem;
  VE_cor: DataItem;
  VC_acc_plus: DataItem;
  VC_acc: DataItem;
  VC_cor: DataItem;
  GC_acc_plus: DataItem;
  GC_acc: DataItem;
  GC_cor: DataItem;
  all_acc_plus: DataItem;
  all_acc: DataItem;
  all_cor: DataItem;
  model: string;
  link: string;
  [key: string]: any;
}
