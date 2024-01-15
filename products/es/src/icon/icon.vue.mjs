import { defineComponent as c, computed as l, openBlock as r, createElementBlock as s, normalizeClass as p, renderSlot as a } from "vue";
import "./style/index.css";
const d = /* @__PURE__ */ c({
  name: "LlIcon",
  __name: "icon",
  props: {
    type: {}
  },
  setup(o) {
    const e = o, t = l(() => ({ [`ll-icon--${e.type}`]: e.type }));
    return (n, i) => (r(), s("button", {
      class: p(["ll-icon", t.value])
    }, [
      a(n.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
