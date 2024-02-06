function boldMinValue(dataCollection: ChartTypeData[]) {
  const keys: string[] = [];
  Object.keys(dataCollection[0]).forEach((key) => {
    if (dataCollection[0][key].hasOwnProperty("val")) {
      keys.push(key);
    }
  });

  for (const key of keys) {
    let minIndex = 0;
    dataCollection.forEach((data: ChartTypeData, index: number) => {
      if (data[key].val < dataCollection[minIndex][key].val) {
        minIndex = index;
      }
    });
    dataCollection[minIndex][key].bold = true;
  }
}

function addRank(dataCollection: ChartTypeData[]) {
  dataCollection.forEach((val, index) => {
    Object.assign(val, { rank: { val: index + 1 } });
  });
}

function sortByAll(dataCollection: ChartTypeData[]) {
  return dataCollection.sort(
    (a: ChartTypeData, b: ChartTypeData) =>
      Number.parseFloat(b.all_acc_plus.val) - Number.parseFloat(a.all_acc_plus.val)
  );
}

function boldMinValue2(dataCollection: TaskTypeData[]) {
  const keys: string[] = [];
  Object.keys(dataCollection[0]).forEach((key) => {
    if (dataCollection[0][key].hasOwnProperty("val")) {
      keys.push(key);
    }
  });

  for (const key of keys) {
    let minIndex = 0;
    dataCollection.forEach((data: TaskTypeData, index: number) => {
      if (data[key].val < dataCollection[minIndex][key].val) {
        minIndex = index;
      }
    });
    dataCollection[minIndex][key].bold = true;
  }
}

function addRank2(dataCollection: TaskTypeData[]) {
  dataCollection.forEach((val, index) => {
    Object.assign(val, { rank: { val: index + 1 } });
  });
}

function sortByAll2(dataCollection: TaskTypeData[]) {
  return dataCollection.sort(
    (a: TaskTypeData, b: TaskTypeData) =>
      Number.parseFloat(b.all_acc_plus.val) - Number.parseFloat(a.all_acc_plus.val)
  );
}

export { boldMinValue, addRank, sortByAll, boldMinValue2, addRank2, sortByAll2};
