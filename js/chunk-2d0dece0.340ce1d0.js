(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dece0"],{"86e1":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content element-doc"},[e._m(0),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <SwitchDispatcher v-model="value" />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      value: false\n    }  \n  }\n}\n<\/script>\n')])])])],2),e._m(1),n("demo-block",[n("template",{slot:"source"},[n("element-demo1")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <SwitchDispatcher v-model="value1">\n    <template #open>开</template>\n    <template #close>关</template>\n  </SwitchDispatcher>\n  <SwitchDispatcher v-model="value2">\n    <template #open>\n      <Icon type="md-checkmark" />\n    </template>\n    <template #close>\n      <Icon type="md-close" />\n    </template>\n  </SwitchDispatcher>\n  <br><br>\n  <SwitchDispatcher v-model="value3" size="large">\n    <template #open>开启</template>\n    <template #close>关闭</template>\n  </SwitchDispatcher>\n  <SwitchDispatcher v-model="value4" size="large">\n    <template #open>ON</template>\n    <template #close>OFF</template>\n  </SwitchDispatcher>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      value1: false,\n      value2: false,\n      value3: false,\n      value4: false,\n    }\n  }\n}\n<\/script>\n')])])])],2),e._m(2),n("demo-block",[n("template",{slot:"source"},[n("element-demo2")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <Row style="width: 100%">\n    <Col span="8">\n      <SwitchDispatcher v-model="toggle1" size="large" />\n    </Col>\n    <Col span="8">\n      <SwitchDispatcher v-model="toggle2" />\n    </Col>\n    <Col span="8">\n      <SwitchDispatcher v-model="toggle3" size="small" />\n    </Col>\n  </Row>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      toggle1: true,\n      toggle2: true,\n      toggle3: true\n    }\n  }\n}\n<\/script>\n')])])])],2),e._m(3),n("demo-block",[n("div",[n("p",[e._v("通过组件的props属性 "),n("code",[e._v("${namespace}-state(kebeb-case)")]),e._v(" 或 "),n("code",[e._v("${namespace}State(camelCase)")]),e._v(" 控制 read or write 状态。优先级高于 局部配置的 ${namespace}State")])]),n("template",{slot:"source"},[n("element-demo3")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n  <Form :model=\"form\">\n    <FormItem label=\"是否配送\">\n      <SwitchDispatcher v-model=\"form.deliver\" :rw-dispatcher-state=\"state\" />\n      <Icon :type=\"icon\" style=\"font-size: 20px\" @click=\"toggleState\" />\n    </FormItem>\n  </Form>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      form: {\n        deliver: false\n      },\n      state: 'write',\n      icon: 'ios-eye-outline'\n    }\n  },\n  methods: {\n    toggleState () {\n      if (this.state === 'write') {\n        this.state = 'read'\n        this.icon = 'ios-create-outline'\n      } else {\n        this.state = 'write'\n        this.icon = 'ios-eye-outline'\n      }\n    }\n  }\n}\n<\/script>\n")])])])],2),e._m(4),n("demo-block",[n("div",[n("p",[e._v("通过组件的props属性 "),n("code",[e._v("${namespace}-render(kebeb-case)")]),e._v(" 或 "),n("code",[e._v("${namespace}Render(camelCase)")]),e._v(" 自定义 read 状态的渲染函数。")])]),n("template",{slot:"source"},[n("element-demo4")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n  <SwitchDispatcher\n    v-model=\"toggle\"\n    :rw-dispatcher-render=\"readStateRender\"\n    placeholder=\"请输入内容\"\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      toggle: true\n    }\n  },\n  methods: {\n    readStateRender (h, context) {\n      return h('span', {\n        style: { color: 'green' }\n      }, context.data.attrs.value ? 'Yes' : 'No')\n    }\n  }\n}\n<\/script>\n")])])])],2),e._m(5),n("demo-block",[n("div",[n("p",[e._v("通过 "),n("code",[e._v("#${namespace}Render")]),e._v("（cabelCase） 或 "),n("code",[e._v("v-slot:${namespace}Render")]),e._v("（cabelCase） 自定义 read 状态的渲染函数。")])]),n("template",{slot:"source"},[n("element-demo5")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <SwitchDispatcher v-model="toggle" placeholder="请输入内容">\n    <template #rwDispatcherRender="{ data }">\n      <span style="color: red">{{ data.attrs.value ? \'Yes\' : \'No\' }}</span>\n    </template>\n  </SwitchDispatcher>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      toggle: true\n    }\n  }\n}\n<\/script>\n')])])])],2),e._m(6),n("iview-attributes",{scopedSlots:e._u([{key:"append",fn:function(){},proxy:!0}])}),e._m(7),n("iview-scope-slot"),e._m(8),e._m(9)],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"ji-ben-yong-fa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben-yong-fa","aria-hidden":"true"}},[e._v("¶")]),e._v(" 基本用法")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"wen-zi-he-tu-biao"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wen-zi-he-tu-biao","aria-hidden":"true"}},[e._v("¶")]),e._v(" 文字和图标")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"chi-cun"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#chi-cun","aria-hidden":"true"}},[e._v("¶")]),e._v(" 尺寸")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"zu-jian-pei-zhi----zhuang-tai"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zu-jian-pei-zhi----zhuang-tai","aria-hidden":"true"}},[e._v("¶")]),e._v(" 组件配置 — 状态")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"zi-ding-yi-xuan-ran-han-shu----props"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-xuan-ran-han-shu----props","aria-hidden":"true"}},[e._v("¶")]),e._v(" 自定义渲染函数 — props")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"zi-ding-yi-xuan-ran-han-shu----slot"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-xuan-ran-han-shu----slot","aria-hidden":"true"}},[e._v("¶")]),e._v(" 自定义渲染函数 — slot")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"switch-attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#switch-attributes","aria-hidden":"true"}},[e._v("¶")]),e._v(" Switch Attributes")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"switch-scoped-slots"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#switch-scoped-slots","aria-hidden":"true"}},[e._v("¶")]),e._v(" Switch Scoped Slots")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"qi-ta-shu-xing-slots-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#qi-ta-shu-xing-slots-events","aria-hidden":"true"}},[e._v("¶")]),e._v(" 其他属性、Slots、Events")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("与官方 "),n("code",[e._v("Switch")]),e._v(" 的完全一致，"),n("a",{attrs:{href:"https://www.iviewui.com/components/switch#API"}},[e._v("官方组件")]),e._v("。")])}],s=(n("8e6e"),n("ac6a"),n("456d"),n("bd86"));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("SwitchDispatcher",{model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})]],2)},t=[],n={data:function(){return{value:!1}}};return o({render:e,staticRenderFns:t},n)}(),"element-demo1":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("SwitchDispatcher",{scopedSlots:e._u([{key:"open",fn:function(){return[e._v("开")]},proxy:!0},{key:"close",fn:function(){return[e._v("关")]},proxy:!0}]),model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),e._v(" "),n("SwitchDispatcher",{scopedSlots:e._u([{key:"open",fn:function(){return[n("Icon",{attrs:{type:"md-checkmark"}})]},proxy:!0},{key:"close",fn:function(){return[n("Icon",{attrs:{type:"md-close"}})]},proxy:!0}]),model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}}),e._v(" "),n("br"),n("br"),e._v(" "),n("SwitchDispatcher",{attrs:{size:"large"},scopedSlots:e._u([{key:"open",fn:function(){return[e._v("开启")]},proxy:!0},{key:"close",fn:function(){return[e._v("关闭")]},proxy:!0}]),model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}}),e._v(" "),n("SwitchDispatcher",{attrs:{size:"large"},scopedSlots:e._u([{key:"open",fn:function(){return[e._v("ON")]},proxy:!0},{key:"close",fn:function(){return[e._v("OFF")]},proxy:!0}]),model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}})]],2)},t=[],n={data:function(){return{value1:!1,value2:!1,value3:!1,value4:!1}}};return o({render:e,staticRenderFns:t},n)}(),"element-demo2":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("Row",{staticStyle:{width:"100%"}},[n("Col",{attrs:{span:"8"}},[n("SwitchDispatcher",{attrs:{size:"large"},model:{value:e.toggle1,callback:function(t){e.toggle1=t},expression:"toggle1"}})],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("SwitchDispatcher",{model:{value:e.toggle2,callback:function(t){e.toggle2=t},expression:"toggle2"}})],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("SwitchDispatcher",{attrs:{size:"small"},model:{value:e.toggle3,callback:function(t){e.toggle3=t},expression:"toggle3"}})],1)],1)]],2)},t=[],n={data:function(){return{toggle1:!0,toggle2:!0,toggle3:!0}}};return o({render:e,staticRenderFns:t},n)}(),"element-demo3":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("Form",{attrs:{model:e.form}},[n("FormItem",{attrs:{label:"是否配送"}},[n("SwitchDispatcher",{attrs:{"rw-dispatcher-state":e.state},model:{value:e.form.deliver,callback:function(t){e.$set(e.form,"deliver",t)},expression:"form.deliver"}}),e._v(" "),n("Icon",{staticStyle:{"font-size":"20px"},attrs:{type:e.icon},on:{click:e.toggleState}})],1)],1)]],2)},t=[],n={data:function(){return{form:{deliver:!1},state:"write",icon:"ios-eye-outline"}},methods:{toggleState:function(){"write"===this.state?(this.state="read",this.icon="ios-create-outline"):(this.state="write",this.icon="ios-eye-outline")}}};return o({render:e,staticRenderFns:t},n)}(),"element-demo4":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("SwitchDispatcher",{attrs:{"rw-dispatcher-render":e.readStateRender,placeholder:"请输入内容"},model:{value:e.toggle,callback:function(t){e.toggle=t},expression:"toggle"}})]],2)},t=[],n={data:function(){return{toggle:!0}},methods:{readStateRender:function(e,t){return e("span",{style:{color:"green"}},t.data.attrs.value?"Yes":"No")}}};return o({render:e,staticRenderFns:t},n)}(),"element-demo5":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("SwitchDispatcher",{attrs:{placeholder:"请输入内容"},scopedSlots:e._u([{key:"rwDispatcherRender",fn:function(t){var a=t.data;return[n("span",{staticStyle:{color:"red"}},[e._v(e._s(a.attrs.value?"Yes":"No"))])]}}]),model:{value:e.toggle,callback:function(t){e.toggle=t},expression:"toggle"}})]],2)},t=[],n={data:function(){return{toggle:!0}}};return o({render:e,staticRenderFns:t},n)}()}},i=c,u=n("2877"),p=Object(u["a"])(i,a,r,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0dece0.340ce1d0.js.map