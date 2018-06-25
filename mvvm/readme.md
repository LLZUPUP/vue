vue-cli
文章列表模块
    index.vue #root
    数据放在最外层的组件    ? axios 请求easy-mock
    npm install axios 根目录下import axios
    data here 数据传输理论是数据归最外层的组件,将其传给孩子
    articles: [] 生命周期mounted easy-mock
    articles components
        props articles v-for="(key,i) in articles"
        <article v-for="(key,i) in articles">
        ?data no
        article components