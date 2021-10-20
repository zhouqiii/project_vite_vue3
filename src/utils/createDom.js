import { createVNode ,render} from 'vue';
import Loading from '../components/Loading.vue';

const body = document.body;
const root = document.createElement("div");
body.appendChild(root);
root.className = "custom-root";

export const install = (com) => {
  let div = document.createElement("div");
  root.appendChild(div);
  div.className = "add-component";
  // com 为自己写的组件,  SoltChild 可以是自己的子组件 ，也可以不传
  let vm = createVNode(com,{},{
      // slots
      default:()=>createVNode(SoltChild)
  });
  vm.appContext = app._context; // 这句很关键，关联起了数据
  render(vm,div);
          
}
export const unInstall = (ld) => {
  const target = document.getElementsByClassName('add-component');
  const paTarget = document.getElementsByClassName('custom-root')
  paTarget[0].removeChild(target[0]);
  ld = null
  return ld;
}

