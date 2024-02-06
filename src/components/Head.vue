<template>
  <div class="container">
    <h1>ChartBench: A Benchmark for Complex Visual Reasoning in Charts</h1>
    <!-- <h2>ECCV 2022</h2> -->
    <div class="author-list">
      <div class="logo">
        <img src="/images/authors/tsinghua.png" alt="tsinghua"/>
        <img src="/images/authors/idea.png" alt="idea"/>
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
        href="https://huggingface.co/datasets/SincereX/ChartBench-Demo"
        target="_blank"
      >
        <font-awesome-icon icon="fa-brands fa-github" class="icon" />
        Code
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
