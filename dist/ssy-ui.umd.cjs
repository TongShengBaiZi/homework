(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.SSYUI = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
  var __vite_style__ = document.createElement("style");
  __vite_style__.textContent = '#--unocss--{layer:__ALL__;escape-view:\\"\\\'\\`\\\\}#--unocss-layer-start--__ALL__--{start:__ALL__} *,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}.mx-1{margin-left:0.25rem;margin-right:0.25rem;}.hover\\:scale-105:hover{--un-scale-x:1.05;--un-scale-y:1.05;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}.transform{transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}.cursor-pointer,[cursor-pointer=""]{cursor:pointer;}.border-blue-400{--un-border-opacity:1;border-color:rgb(96 165 250 / var(--un-border-opacity));}.border-blue-500{--un-border-opacity:1;border-color:rgb(59 130 246 / var(--un-border-opacity));}.border-gray-400{--un-border-opacity:1;border-color:rgb(156 163 175 / var(--un-border-opacity));}.border-gray-500{--un-border-opacity:1;border-color:rgb(107 114 128 / var(--un-border-opacity));}.border-green-400{--un-border-opacity:1;border-color:rgb(74 222 128 / var(--un-border-opacity));}.border-green-500{--un-border-opacity:1;border-color:rgb(34 197 94 / var(--un-border-opacity));}.border-indigo-400{--un-border-opacity:1;border-color:rgb(129 140 248 / var(--un-border-opacity));}.border-indigo-500{--un-border-opacity:1;border-color:rgb(99 102 241 / var(--un-border-opacity));}.border-pink-400{--un-border-opacity:1;border-color:rgb(244 114 182 / var(--un-border-opacity));}.border-pink-500{--un-border-opacity:1;border-color:rgb(236 72 153 / var(--un-border-opacity));}.border-purple-400{--un-border-opacity:1;border-color:rgb(192 132 252 / var(--un-border-opacity));}.border-purple-500{--un-border-opacity:1;border-color:rgb(168 85 247 / var(--un-border-opacity));}.border-red-400{--un-border-opacity:1;border-color:rgb(248 113 113 / var(--un-border-opacity));}.border-red-500{--un-border-opacity:1;border-color:rgb(239 68 68 / var(--un-border-opacity));}.border-yellow-400{--un-border-opacity:1;border-color:rgb(250 204 21 / var(--un-border-opacity));}.border-yellow-500{--un-border-opacity:1;border-color:rgb(234 179 8 / var(--un-border-opacity));}.rounded-full{border-radius:9999px;}.rounded-lg{border-radius:0.5rem;}.border-solid,[border-solid=""]{border-style:solid;}.bg-blue-100{--un-bg-opacity:1;background-color:rgb(219 234 254 / var(--un-bg-opacity)) /* #dbeafe */;}.bg-blue-400{--un-bg-opacity:1;background-color:rgb(96 165 250 / var(--un-bg-opacity)) /* #60a5fa */;}.bg-blue-500{--un-bg-opacity:1;background-color:rgb(59 130 246 / var(--un-bg-opacity)) /* #3b82f6 */;}.bg-gray-100{--un-bg-opacity:1;background-color:rgb(243 244 246 / var(--un-bg-opacity)) /* #f3f4f6 */;}.bg-gray-400{--un-bg-opacity:1;background-color:rgb(156 163 175 / var(--un-bg-opacity)) /* #9ca3af */;}.bg-gray-500{--un-bg-opacity:1;background-color:rgb(107 114 128 / var(--un-bg-opacity)) /* #6b7280 */;}.bg-green-100{--un-bg-opacity:1;background-color:rgb(220 252 231 / var(--un-bg-opacity)) /* #dcfce7 */;}.bg-green-400{--un-bg-opacity:1;background-color:rgb(74 222 128 / var(--un-bg-opacity)) /* #4ade80 */;}.bg-green-500{--un-bg-opacity:1;background-color:rgb(34 197 94 / var(--un-bg-opacity)) /* #22c55e */;}.bg-indigo-100{--un-bg-opacity:1;background-color:rgb(224 231 255 / var(--un-bg-opacity)) /* #e0e7ff */;}.bg-indigo-400{--un-bg-opacity:1;background-color:rgb(129 140 248 / var(--un-bg-opacity)) /* #818cf8 */;}.bg-indigo-500{--un-bg-opacity:1;background-color:rgb(99 102 241 / var(--un-bg-opacity)) /* #6366f1 */;}.bg-pink-100{--un-bg-opacity:1;background-color:rgb(252 231 243 / var(--un-bg-opacity)) /* #fce7f3 */;}.bg-pink-400{--un-bg-opacity:1;background-color:rgb(244 114 182 / var(--un-bg-opacity)) /* #f472b6 */;}.bg-pink-500{--un-bg-opacity:1;background-color:rgb(236 72 153 / var(--un-bg-opacity)) /* #ec4899 */;}.bg-purple-100{--un-bg-opacity:1;background-color:rgb(243 232 255 / var(--un-bg-opacity)) /* #f3e8ff */;}.bg-purple-400{--un-bg-opacity:1;background-color:rgb(192 132 252 / var(--un-bg-opacity)) /* #c084fc */;}.bg-purple-500{--un-bg-opacity:1;background-color:rgb(168 85 247 / var(--un-bg-opacity)) /* #a855f7 */;}.bg-red-100{--un-bg-opacity:1;background-color:rgb(254 226 226 / var(--un-bg-opacity)) /* #fee2e2 */;}.bg-red-400{--un-bg-opacity:1;background-color:rgb(248 113 113 / var(--un-bg-opacity)) /* #f87171 */;}.bg-red-500{--un-bg-opacity:1;background-color:rgb(239 68 68 / var(--un-bg-opacity)) /* #ef4444 */;}.bg-yellow-100{--un-bg-opacity:1;background-color:rgb(254 249 195 / var(--un-bg-opacity)) /* #fef9c3 */;}.bg-yellow-400{--un-bg-opacity:1;background-color:rgb(250 204 21 / var(--un-bg-opacity)) /* #facc15 */;}.bg-yellow-500{--un-bg-opacity:1;background-color:rgb(234 179 8 / var(--un-bg-opacity)) /* #eab308 */;}.hover\\:bg-blue-100:hover{--un-bg-opacity:1;background-color:rgb(219 234 254 / var(--un-bg-opacity)) /* #dbeafe */;}.hover\\:bg-blue-300:hover{--un-bg-opacity:1;background-color:rgb(147 197 253 / var(--un-bg-opacity)) /* #93c5fd */;}.hover\\:bg-blue-400:hover{--un-bg-opacity:1;background-color:rgb(96 165 250 / var(--un-bg-opacity)) /* #60a5fa */;}.hover\\:bg-blue-500:hover{--un-bg-opacity:1;background-color:rgb(59 130 246 / var(--un-bg-opacity)) /* #3b82f6 */;}.hover\\:bg-gray-100:hover{--un-bg-opacity:1;background-color:rgb(243 244 246 / var(--un-bg-opacity)) /* #f3f4f6 */;}.hover\\:bg-gray-300:hover{--un-bg-opacity:1;background-color:rgb(209 213 219 / var(--un-bg-opacity)) /* #d1d5db */;}.hover\\:bg-gray-400:hover{--un-bg-opacity:1;background-color:rgb(156 163 175 / var(--un-bg-opacity)) /* #9ca3af */;}.hover\\:bg-gray-500:hover{--un-bg-opacity:1;background-color:rgb(107 114 128 / var(--un-bg-opacity)) /* #6b7280 */;}.hover\\:bg-green-100:hover{--un-bg-opacity:1;background-color:rgb(220 252 231 / var(--un-bg-opacity)) /* #dcfce7 */;}.hover\\:bg-green-300:hover{--un-bg-opacity:1;background-color:rgb(134 239 172 / var(--un-bg-opacity)) /* #86efac */;}.hover\\:bg-green-400:hover{--un-bg-opacity:1;background-color:rgb(74 222 128 / var(--un-bg-opacity)) /* #4ade80 */;}.hover\\:bg-green-500:hover{--un-bg-opacity:1;background-color:rgb(34 197 94 / var(--un-bg-opacity)) /* #22c55e */;}.hover\\:bg-indigo-100:hover{--un-bg-opacity:1;background-color:rgb(224 231 255 / var(--un-bg-opacity)) /* #e0e7ff */;}.hover\\:bg-indigo-300:hover{--un-bg-opacity:1;background-color:rgb(165 180 252 / var(--un-bg-opacity)) /* #a5b4fc */;}.hover\\:bg-indigo-400:hover{--un-bg-opacity:1;background-color:rgb(129 140 248 / var(--un-bg-opacity)) /* #818cf8 */;}.hover\\:bg-indigo-500:hover{--un-bg-opacity:1;background-color:rgb(99 102 241 / var(--un-bg-opacity)) /* #6366f1 */;}.hover\\:bg-pink-100:hover{--un-bg-opacity:1;background-color:rgb(252 231 243 / var(--un-bg-opacity)) /* #fce7f3 */;}.hover\\:bg-pink-300:hover{--un-bg-opacity:1;background-color:rgb(249 168 212 / var(--un-bg-opacity)) /* #f9a8d4 */;}.hover\\:bg-pink-400:hover{--un-bg-opacity:1;background-color:rgb(244 114 182 / var(--un-bg-opacity)) /* #f472b6 */;}.hover\\:bg-pink-500:hover{--un-bg-opacity:1;background-color:rgb(236 72 153 / var(--un-bg-opacity)) /* #ec4899 */;}.hover\\:bg-purple-100:hover{--un-bg-opacity:1;background-color:rgb(243 232 255 / var(--un-bg-opacity)) /* #f3e8ff */;}.hover\\:bg-purple-300:hover{--un-bg-opacity:1;background-color:rgb(216 180 254 / var(--un-bg-opacity)) /* #d8b4fe */;}.hover\\:bg-purple-400:hover{--un-bg-opacity:1;background-color:rgb(192 132 252 / var(--un-bg-opacity)) /* #c084fc */;}.hover\\:bg-purple-500:hover{--un-bg-opacity:1;background-color:rgb(168 85 247 / var(--un-bg-opacity)) /* #a855f7 */;}.hover\\:bg-red-100:hover{--un-bg-opacity:1;background-color:rgb(254 226 226 / var(--un-bg-opacity)) /* #fee2e2 */;}.hover\\:bg-red-300:hover{--un-bg-opacity:1;background-color:rgb(252 165 165 / var(--un-bg-opacity)) /* #fca5a5 */;}.hover\\:bg-red-400:hover{--un-bg-opacity:1;background-color:rgb(248 113 113 / var(--un-bg-opacity)) /* #f87171 */;}.hover\\:bg-red-500:hover{--un-bg-opacity:1;background-color:rgb(239 68 68 / var(--un-bg-opacity)) /* #ef4444 */;}.hover\\:bg-yellow-100:hover{--un-bg-opacity:1;background-color:rgb(254 249 195 / var(--un-bg-opacity)) /* #fef9c3 */;}.hover\\:bg-yellow-300:hover{--un-bg-opacity:1;background-color:rgb(253 224 71 / var(--un-bg-opacity)) /* #fde047 */;}.hover\\:bg-yellow-400:hover{--un-bg-opacity:1;background-color:rgb(250 204 21 / var(--un-bg-opacity)) /* #facc15 */;}.hover\\:bg-yellow-500:hover{--un-bg-opacity:1;background-color:rgb(234 179 8 / var(--un-bg-opacity)) /* #eab308 */;}.p-3,[p-3=""]{padding:0.75rem;}.px-1{padding-left:0.25rem;padding-right:0.25rem;}.px-2{padding-left:0.5rem;padding-right:0.5rem;}.px-3{padding-left:0.75rem;padding-right:0.75rem;}.px-4{padding-left:1rem;padding-right:1rem;}.px-5{padding-left:1.25rem;padding-right:1.25rem;}.px-6{padding-left:1.5rem;padding-right:1.5rem;}.px-7{padding-left:1.75rem;padding-right:1.75rem;}.px-8{padding-left:2rem;padding-right:2rem;}.py-1{padding-top:0.25rem;padding-bottom:0.25rem;}.py-2{padding-top:0.5rem;padding-bottom:0.5rem;}.py-3{padding-top:0.75rem;padding-bottom:0.75rem;}.py-4{padding-top:1rem;padding-bottom:1rem;}.py-5{padding-top:1.25rem;padding-bottom:1.25rem;}.py-6{padding-top:1.5rem;padding-bottom:1.5rem;}.py-7{padding-top:1.75rem;padding-bottom:1.75rem;}.py-8{padding-top:2rem;padding-bottom:2rem;}.text-2xl{font-size:1.5rem;line-height:2rem;}.text-3xl{font-size:1.875rem;line-height:2.25rem;}.text-base{font-size:1rem;line-height:1.5rem;}.text-lg{font-size:1.125rem;line-height:1.75rem;}.text-sm{font-size:0.875rem;line-height:1.25rem;}.text-xl{font-size:1.25rem;line-height:1.75rem;}.text-xs{font-size:0.75rem;line-height:1rem;}.text-blue-500{--un-text-opacity:1;color:rgb(59 130 246 / var(--un-text-opacity)) /* #3b82f6 */;}.text-gray-500{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}.text-green-500{--un-text-opacity:1;color:rgb(34 197 94 / var(--un-text-opacity)) /* #22c55e */;}.text-indigo-500{--un-text-opacity:1;color:rgb(99 102 241 / var(--un-text-opacity)) /* #6366f1 */;}.text-pink-500{--un-text-opacity:1;color:rgb(236 72 153 / var(--un-text-opacity)) /* #ec4899 */;}.text-purple-500{--un-text-opacity:1;color:rgb(168 85 247 / var(--un-text-opacity)) /* #a855f7 */;}.text-red-500{--un-text-opacity:1;color:rgb(239 68 68 / var(--un-text-opacity)) /* #ef4444 */;}.text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}.text-yellow-500{--un-text-opacity:1;color:rgb(234 179 8 / var(--un-text-opacity)) /* #eab308 */;}.hover\\:text-blue-500:hover{--un-text-opacity:1;color:rgb(59 130 246 / var(--un-text-opacity)) /* #3b82f6 */;}.hover\\:text-gray-500:hover{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}.hover\\:text-green-500:hover{--un-text-opacity:1;color:rgb(34 197 94 / var(--un-text-opacity)) /* #22c55e */;}.hover\\:text-indigo-500:hover{--un-text-opacity:1;color:rgb(99 102 241 / var(--un-text-opacity)) /* #6366f1 */;}.hover\\:text-pink-500:hover{--un-text-opacity:1;color:rgb(236 72 153 / var(--un-text-opacity)) /* #ec4899 */;}.hover\\:text-purple-500:hover{--un-text-opacity:1;color:rgb(168 85 247 / var(--un-text-opacity)) /* #a855f7 */;}.hover\\:text-red-500:hover{--un-text-opacity:1;color:rgb(239 68 68 / var(--un-text-opacity)) /* #ef4444 */;}.hover\\:text-white:hover{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}.hover\\:text-yellow-500:hover{--un-text-opacity:1;color:rgb(234 179 8 / var(--un-text-opacity)) /* #eab308 */;}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.duration-300{transition-duration:300ms;}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);} #--unocss-layer-end--__ALL__--{end:__ALL__}';
  document.head.appendChild(__vite_style__);
  const buttonProps = {
    // 颜色
    color: {
      type: String,
      default: "blue"
    },
    /**
     * 尺寸
     * @example 'small' | 'medium' | 'large'
     */
    size: {
      type: String,
      default: "medium"
    },
    // 是否圆角
    round: {
      type: Boolean,
      default: false
    },
    // 是否扁平
    plain: {
      type: Boolean,
      default: false
    },
    // 图标
    icon: {
      type: String,
      default: ""
    }
  };
  const SButton = /* @__PURE__ */ vue.defineComponent({
    name: "SButton",
    props: buttonProps,
    setup(props, {
      slots
    }) {
      const size = {
        small: {
          x: "2",
          y: "1",
          text: "sm"
        },
        medium: {
          x: "3",
          y: "1.5",
          text: "base"
        },
        large: {
          x: "4",
          y: "2",
          text: "lg"
        }
      };
      return () => vue.createVNode("button", {
        "class": `
          mx-1
          hover:scale-105
          hover:text-white
          transition duration-300 ease-in-out transform
          py-${size[props.size].y}
          px-${size[props.size].x}
          ${props.round ? "rounded-full" : "rounded-lg"}
          bg-${props.color}-${props.plain ? "100" : "500"}
          hover:bg-${props.color}-400
          border-${props.color}-${props.plain ? "500" : "500"}
          cursor-pointer
          border-solid
          text-${props.plain ? `${props.color}-500` : "white"}
          text-${size[props.size].text}
          `
      }, [props.icon !== "" ? vue.createVNode("i", {
        "class": `i-ic-baseline-${props.icon} p-3`
      }, null) : "", slots.default ? slots.default() : ""]);
    }
  });
  const _sfc_main = {
    name: "SFCButton"
  };
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("button", null, "SFC Button");
  }
  const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  const TSXButton = /* @__PURE__ */ vue.defineComponent({
    name: "TSXButton",
    render() {
      return vue.createVNode("button", null, [vue.createTextVNode("TSX Button")]);
    }
  });
  const entry = {
    install(app) {
      app.component(SButton.name, SButton);
      app.component(SFCButton.name, SFCButton);
      app.component(TSXButton.name, TSXButton);
    }
  };
  exports2.SButton = SButton;
  exports2.SFCButton = SFCButton;
  exports2.TSXButton = TSXButton;
  exports2.default = entry;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
