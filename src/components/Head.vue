<template>
  <div class="container">
    <h1>ChartBench: A Benchmark for Complex Visual Reasoning in Charts</h1>
    <div class="author-list">
      <div class="logo">
        <img src="/images/authors/tsinghua3.jpg" alt="tsinghua"/>
        <img src="/images/authors/idea2.png" alt="idea"/>
      </div>
      <div class="authors">
        <p>Zhengzhuo Xu*, Sinan Du*, Yiyan Qi</p>
        <p>Chengjin Xu, Chun Yuan†, Jian Guo†</p>
        <p>(* Equal Contribution, † Corresponding Author)</p>
      </div>
    </div>
    
    <div class="open-source">
      <el-link
        type="primary"
        href="https://arxiv.org/pdf/2312.15915.pdf"
        target="_blank"
      >
        <font-awesome-icon icon="fa-regular fa-file-pdf" class="icon" />
        Paper
      </el-link>
      <!-- <el-link
        type="primary"
        href="https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136680072-supp.pdf"
        target="_blank"
      >
        <font-awesome-icon icon="fa-solid fa-paperclip" class="icon" />
        Supplementary
      </el-link> -->
      <el-link
        type="primary"
        href="https://arxiv.org/abs/2312.15915"
        target="_blank"
      >
        <!-- <img class="icon" src="/images/contents/github.svg" /> -->
        <i class="ai ai-arxiv ai-lg" style="margin-right: 5px" />
        ArXiv
      </el-link>
      <el-link
        type="primary"
        href="https://github.com/IDEA-FinAI/ChartBench"
        target="_blank"
      >
        <font-awesome-icon icon="fa-brands fa-github" class="icon" />
        Code
      </el-link>
      <el-link
        type="primary"
        href="https://huggingface.co/datasets/SincereX/ChartBench-Demo"
        target="_blank"
      >
      <svg t="1707236024522" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4118" width="16" height="16"><path d="M925.0304 82.3808c-25.4464-16.6912-61.0816-31.488-105.9328-43.9296-89.1904-24.7808-207.36-38.4-332.6976-38.4s-243.5072 13.6704-332.6976 38.4c-44.9024 12.4416-80.5376 27.2384-105.9328 43.9296C16.0768 103.2192 0 127.1296 0 153.6v614.4c0 26.4704 16.0768 50.432 47.7696 71.2192 25.4464 16.6912 61.0816 31.488 105.9328 43.9296 89.1904 24.7808 207.36 38.4 332.6976 38.4s243.5072-13.6704 332.6976-38.4512c44.9024-12.4416 80.5376-27.2384 105.9328-43.9296 31.6928-20.7872 47.7696-44.7488 47.7696-71.2192v-614.4c0-26.4704-16.0768-50.432-47.7696-71.2192zM167.424 87.7568C252.3136 64.2048 365.568 51.2 486.4 51.2s234.1376 13.0048 318.976 36.5568C897.28 113.3056 921.6 141.9776 921.6 153.6s-24.2688 40.2944-116.224 65.8432C720.4864 242.9952 607.232 256 486.4 256s-234.1376-13.0048-318.976-36.5568C75.52 193.8944 51.2 165.2224 51.2 153.6s24.2688-40.2944 116.224-65.8432z m637.952 746.0864c-84.8896 23.552-198.144 36.5568-318.976 36.5568s-234.1376-13.0048-318.976-36.5568C75.52 808.2944 51.2 779.6224 51.2 768v-131.3792c25.1904 15.8208 59.5968 29.8496 102.5024 41.7792 89.1904 24.7808 207.36 38.4 332.6976 38.4s243.5072-13.6704 332.6976-38.4512c42.9056-11.9296 77.3632-25.9584 102.5024-41.7792v131.3792c0 11.6224-24.2688 40.2944-116.224 65.8432z m0-204.8c-84.8896 23.552-198.144 36.5568-318.976 36.5568s-234.1376-13.0048-318.976-36.5568C75.52 603.4944 51.2 574.8224 51.2 563.2V431.8208c25.1904 15.8208 59.5968 29.8496 102.5024 41.7792 89.1904 24.7808 207.36 38.4 332.6976 38.4s243.5072-13.6704 332.6976-38.4c42.9056-11.9296 77.3632-25.9584 102.5024-41.7792V563.2c0 11.6224-24.2688 40.2944-116.224 65.8432z m0-204.8C720.4864 447.7952 607.232 460.8 486.4 460.8s-234.1376-13.0048-318.976-36.5568C75.52 398.6944 51.2 370.0224 51.2 358.4V227.0208c25.1904 15.8208 59.5968 29.8496 102.5024 41.7792C242.8928 293.5808 361.0624 307.2 486.4 307.2s243.5072-13.6704 332.6976-38.4c42.9056-11.9296 77.3632-25.9584 102.5024-41.7792V358.4c0 11.6224-24.2688 40.2944-116.224 65.8432z" fill="#1296db" p-id="4119"></path></svg>
        Dataset
      </el-link>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.container {
  
  text-align: center;
  .author-list {
    width: 100%;
    .logo {
      display: flex;
      justify-content: center;
      justify-items: center;
      align-items: center;
      margin: 2.5rem auto;
      img {
        height: 5rem;
        margin: 1rem;
      }
    }
    @media screen and (max-width: 768px) {
      .logo {
        flex-direction: column;
      }
    }
    .authors {
      p {
        text-align: center;
      }
    }
  }
  .open-source {
    > * {
      margin: 1rem;
      font-size: 1rem;
    }
    .icon {
      margin-right: 10px;
      font-size: 1.2rem;
    }
  }
  
}


</style>
