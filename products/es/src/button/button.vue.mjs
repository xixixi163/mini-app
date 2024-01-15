import { defineComponent as l, computed as r, openBlock as u, createElementBlock as s, normalizeClass as p, renderSlot as a } from "vue";
import "./style/index.less";
const d = /* @__PURE__ */ l({
  name: "LlButton",
  __name: "button",
  props: {
    type: {}
  },
  setup(e) {
    const t = e, o = r(() => ({ [`ll-button--${t.type}`]: t.type }));
    return (n, c) => (u(), s("button", {
      class: p(["ll-button", o.value])
    }, [
      a(n.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
