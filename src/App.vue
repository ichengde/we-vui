
<script>
export default {
  name: "app",
  data() {
    return {};
  },
  render() {
    return <div>123</div>;
  }
};
</script>

<style lang="less">

.slide-enter {
  transform: translateX(100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-enter-active {
  transition: transform 300ms;
}

.slide-leave {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(100%);
}
.slide-leave-active {
  transition: transform 300ms;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 300ms;
}

.slide-right-enter {
  transform: translateX(100%);
}
.slide-right-enter-to {
  transform: translateX(0);
}
.slide-left-enter {
  transform: translateX(0);
}
.slide-left-leave-to {
  transform: translateX(100%);
}

body {
  background-color: #f5f5f5;
  line-height: 1;
}
#app {
  width: 100%;
  height: 100%;
  background: #fff;
}
.page {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  overflow: hidden;
  /*overflow:scroll;*/
  /*-webkit-overflow-scrolling: touch;*/
}
.sub-page {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 20;
  overflow: hidden;
}
/* cell样式修改*/
div.weui-cell_access .weui-cell__ft:after {
  border-color: #4a4a4a;
  border-width: 1px 1px 0 0;
}
div.weui-cells {
  font-size: 0.28rem;
}
div.weui-cells:before {
  border-top: none;
}
div.weui-cells:after {
  border-bottom: none;
}
div.vux-cell-box:not(:first-child):before {
  border-top: none;
}
div.weui-cell {
  padding: 0.2rem 0.3rem;
  /*padding-left: 0;*/
}
label.vux-label,
label.weui-label {
  line-height: 0.4rem;
  color: #847f86;
}
.input-inline {
  label.weui-label {
    width: auto;
  }
}
div.weui-cell__ft {
  line-height: 0.4rem;
  color: #cccccc;
}
span.vux-cell-value {
  line-height: 0.4rem;
  color: #333333;
}
span.vux-popup-picker-placeholder {
  color: #cccccc;
}

/*pick-popup样式修改*/
div.vux-popup-header-right {
  color: #f28e2c;
}
div.vux-popup-header {
  background: #fff;
}

/* input样式修改*/
div.weui-cell:before {
  border-top: none;
}
div.vux-x-input input.weui-input {
  color: #333333;
  line-height: inherit;
  height: 0.4rem;
}

/* search样式修改*/
.search-box {
  position: relative;
  height: 1rem;
  padding: 0 0.3rem;
  background: #fff;
  .search-wrapper {
    padding-top: 0.18rem;
  }
}

/* Alert样式修改*/
.vux-alert div.weui-dialog,
.weui-dialog {
  width: 5.34rem;
  max-width: 5.34rem;
  border-radius: 0.12rem;
}
.vux-alert div.weui-dialog .weui-dialog__hd {
  padding: 0;
  // padding-top: 0.32rem;
}
.vux-alert div.weui-dialog .weui-dialog__bd {
  font-size: 0.28rem;
  line-height: 0.42rem;
  color: #666;
  padding: 0.32rem;
  min-height: 0.42rem;
}

.vux-alert div.weui-dialog .weui-dialog__ft {
  height: 1rem;
  line-height: 1rem;
}
.vux-alert div.weui-dialog .weui-dialog__ft .weui-dialog__btn_primary {
  color: #ff9557;
  font-size: 0.32rem;
}
.weui-dialog__bd {
  font-size: 0.28rem;
  line-height: 0.42rem;
  color: #666 !important;
  padding: 0.32rem !important;
  min-height: 0.42rem;
}
.weui-dialog__btn_primary {
  color: #ff9557;
  font-size: 0.32rem;
}
.weui-dialog__btn_default {
  font-size: 0.32rem;
}
.weui-dialog__ft {
  height: 1rem;
  line-height: 1rem;
}
/* datetime样式修改*/
a.weui-cell {
  padding: 0.2rem 0.3rem;
  p {
    line-height: 0.4rem;
  }
}
a.weui-cell:before {
  border-top: none;
  height: 0;
}
a.weui-cell::after {
  height: 0;
}
a.weui-cell_access .weui-cell__ft:after {
  border-width: 1px 1px 0 0;
  border-color: #4a4a4a;
}
a.weui-cell_access div {
  color: #847f86;
}
span.vux-cell-placeholder {
  color: #cccccc;
}
div.dp-header .dp-item.dp-right {
  color: #f28e2c;
}
</style>
