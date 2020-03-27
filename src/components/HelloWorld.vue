

<script lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  public created() {
    (this as any).$vux.loading.show();

    (this as any).$vux.alert.show({ content: 'asd' });
    setTimeout(() => {
      (this as any).$vux.loading.hide();
    }, 3200);
  }

  public render() {
    return <div>hi</div>;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
