export default {
  profile: {
    name: '潘敬',
    birthday: '1990-12',
    tel: '155-0771-1405',
    email: 'panjing.binary@gmail.com',
    github: 'github.com/iamplex',
  },

  works: [
    {
      company: '南宁市半岛科技',
      position: '前端开发工程师',
      location: '远程',
      start: '2022.11',
      end: '2023.02',
      highlights: [
        '负责法拍小程序的维护',
      ],
    },
    {
      company: 'Material Ltd.',
      position: '前端开发工程师',
      location: '南宁',
      start: '2020.09',
      end: '2022.05',
      highlights: [
        '使用Vue3参与越南生活服务公众号及政务OA的开发',
        '使用GitLab-Runner实现CI/CD，提高交付及部署质量',
      ],
    },
    {
      company: '北京京东世纪贸易有限公司 · 京东商城',
      position: '高级前端开发⼯程师',
      location: '杭州',
      start: '2018.09',
      end: '2019.07',
      highlights: [
        '领导车险理赔服务公众号的开发工作',
        '推进汽车保险、汽车配件事业部前后端分离架构的落地',
      ],
    },
    {
      company: '北京信路威科技股份有限公司',
      position: '前端开发⼯程师',
      location: '南宁',
      start: '2017.03',
      end: '2018.05',
      highlights: [
        '负责新技术的探索和攻克，并提供研究成果demo及解决⽅案',
        '负责多个地市的交通数据可视化大屏开发',
        '使用Vue2参与多个部门toB中后台系统的开发',
      ],
    },
    {
      company: '广西慧云信息技术有限公司',
      position: 'C#开发⼯程师',
      location: '南宁',
      start: '2014.05',
      end: '2017.03',
      highlights: [
        '使用C#及jQuery参与多个政府toB中后台系统的开发',
      ],
    },
  ],

  projects: [
    {
      name: '前端大文件上传解决方案',
      summary: '政务OA需要上传多个项⽬实施方案文件，其中文件大小均在2GB左右，因此不能使⽤简单的文件上传组件',
      start: '2022.03',
      end: '2022.04',
      highlights: [
        '负责实现文件的切片、哈希、暂停上传、断点续传、异常重传、展示上传进度条等核⼼功能',
        '使用队列模拟请求池实现对请求并发数的控制',
      ],
    },
    {
      name: '京车会公众号 - 车辆保险理赔服务',
      summary: '车险理赔服务要求首个版本在年底前必须上线并完成⼀笔交易，该服务允许⽤户只需在⼿机填写车牌号即可获取理赔⽅案，完成投保流程',
      start: '2018.10',
      end: '2018.11',
      highlights: [
        '带领3人团队负责车险理赔服务的前端开发⼯作以及移动端适配方案的调研',
        '适配方案的实施步骤参考了 <a href="https://www.w3cplus.com/mobile/vw-layout-in-vue.html" target="_blank">如何在Vue项目中使用vw实现移动端适配</a>',
        '通过px2vw的适配⽅案，开发过程无需考虑适配问题，只需将设计稿转为代码即可',
        '项目提前在11月底成功上线',
      ],
    },
    {
      name: '<a href="https://github.com/iamplex/simple-drawing" target="_blank">SimpleDrawing</a>',
      summary: '多个部门的客户端项目统一由WPF或Qt升级为Web端，需要将一个用于辅助OpenCV校对识别的绘图模块在Web端中100%还原',
      start: '2018.04',
      end: '2018.05',
      highlights: [
        '独立完成绘图功能的需求收集、整理、设计、Canvas技术的预研学习及开发工作',
        '核心思路参考了 <a href="https://github.com/openlayers/openlayers" target="_blank">OpenLayers</a> 的部分源码，并在调研过程中为该项目贡献了 <a href="https://github.com/openlayers/openlayers/pull/8396" target="_blank">PR</a>',
        '提供点、线、多边形及部分⾃定义图形等基本的绘制能力',
        '使用Canvas顺利将基于WPF或Qt等客户端的绘图模块过度到Web端',
      ],
    },
    {
      name: 'P2P连连赚互联网金融平台前端优化',
      summary: '随着⽤户量的不断上升，访问量处于高峰期的交易期间响应速度明显下降，上级希望在不对服务器扩容的情况下能保证⽤户的访问速度',
      start: '2016.01',
      end: '2016.02',
      highlights: [
        '独立完成浏览器缓存机制及前端构建方案的调研',
        '核心思路参考了 <a href="https://www.zhihu.com/question/20790576/answer/32602154" target="_blank">大公司里怎样开发和部署前端代码</a>',
        '使用gulp合并、压缩静态资源，并通过添加文件指纹使缓存失效，同时IIS启⽤本地缓存，每次部署采⽤非覆盖式发布',
        '首次访问响应时间平均从3 - 6s下降为0.6 - 0.9s',
      ],
    },
  ],

  educations: [
    {
      institution: '广西师范⼤学',
      area: '心理学',
      level: '函授本科',
      start: '2015.03',
      end: '2017.06',
    },
    {
      institution: '广西职业技术学院',
      area: '软件技术',
      level: '大专',
      start: '2009.09',
      end: '2012.07',
    },
  ],

  stacks: [
    'TypeScript',
    'ECMAScript 6',
    'Canvas',
    'SVG',
    'Vue',
    'UnoCSS',
    'Vitest',
    'Element-Plus',
  ],
}
