<template>
  <div id="app">
    <article-table></article-table>
    <!-- <comment></comment> -->
    <!-- <ele-radio-group v-model="sex">
      <ele-radio label="女"></ele-radio>
      <ele-radio label="男"></ele-radio>
    </ele-radio-group> -->
    <!-- <login /> -->
    <!-- <markdown></markdown> -->
    

  </div>
</template>

<script>
// @表示alias 地址短链接，在哪里都指向src 让地址引入更轻松
import ArticleTable from '@/views/ArticleTable'
import Comment from '@/components/Comment'
import Login from '@/views/Login'
import Markdown from '@/views/Markdown'
import EleRadioGroup from '@/components/EleRadioGroup'
import EleRadio from '@/components/EleRadio'
export default {
  name: 'App',
  components: {
    Login,
    Markdown,
    EleRadioGroup,
    EleRadio,
    Comment,
    ArticleTable
  },
  data() {
    return {
      content: "邓志远：东京真的很热",
      contentHtml: "<span>邓志远：东京真的很热</span>",
      sex: 1
    }
  }
}
</script>

<style lang="scss">
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .set-language {
      color: #fff;
      position: absolute;
      top: 5px;
      right: 0px;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 35px;
    bottom: 28px;
  }
}
</style>


