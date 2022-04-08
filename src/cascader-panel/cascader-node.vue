<script>
import ElCheckbox from 'element-ui/packages/checkbox';
import ElRadio from 'element-ui/packages/radio';
import { isEqual } from 'element-ui/src/utils/util';

const stopPropagation = e => e.stopPropagation();

export default {
  name: 'CascaderNode',
  inject: ['panel'],

  components: {
    ElCheckbox,
    ElRadio
  },

  props: {
    source: {
      type: Object,
      default: () => ({})
    },
    index: Number,
    menuId: String
  },

  computed: {
    config () {
      return this.panel.config;
    },
    isLeaf () {
      return this.source.isLeaf;
    },
    isDisabled () {
      return this.source.isDisabled;
    },
    checkedValue () {
      return this.panel.checkedValue;
    },
    isChecked () {
      return this.source.isSameNode(this.checkedValue);
    },
    inActivePath () {
      return this.isInPath(this.panel.activePath);
    },
    inCheckedPath () {
      if (!this.config.checkStrictly) return false;

      return this.panel.checkedNodePaths
        .some(checkedPath => this.isInPath(checkedPath));
    },
    value () {
      return this.source.getValueByOption();
    }
  },

  methods: {
    handleExpand () {
      const { panel, source, isDisabled, config } = this;
      const { multiple, checkStrictly } = config;

      if ((!checkStrictly && isDisabled) || source.loading) return;

      if (config.lazy && !source.loaded) {
        panel.lazyLoad(source, () => {
          // do not use cached leaf value here, invoke this.isLeaf to get new value.
          const { isLeaf } = this;

          if (!isLeaf) this.handleExpand();
          if (multiple) {
            // if leaf sync checked state, else clear checked state
            const checked = isLeaf ? source.checked : false;
            this.handleMultiCheckChange(checked);
          }
        });
      } else {
        panel.handleExpand(source);
      }
    },

    handleCheckChange () {
      const { panel, value, source } = this;
      panel.handleCheckChange(value);
      panel.handleExpand(source);
    },

    handleMultiCheckChange (checked) {
      this.source.doCheck(checked);
      this.panel.calculateMultiCheckedValue();
    },

    isInPath (pathNodes) {
      const { source } = this;
      const selectedPathNode = pathNodes[source.level - 1] || {};
      return selectedPathNode.uid === source.uid;
    },

    renderPrefix (h) {
      const { isLeaf, isChecked, config } = this;
      const { checkStrictly, multiple } = config;

      if (multiple) {
        return this.renderCheckbox(h);
      } else if (checkStrictly) {
        return this.renderRadio(h);
      } else if (isLeaf && isChecked) {
        return this.renderCheckIcon(h);
      }

      return null;
    },

    renderPostfix (h) {
      const { source, isLeaf } = this;

      if (source.loading) {
        return this.renderLoadingIcon(h);
      } else if (!isLeaf) {
        return this.renderExpandIcon(h);
      }

      return null;
    },

    renderCheckbox (h) {
      const { source, config, isDisabled } = this;
      const events = {
        on: { change: this.handleMultiCheckChange },
        nativeOn: {}
      };

      if (config.checkStrictly) { // when every source is selectable, click event should not trigger expand event.
        events.nativeOn.click = stopPropagation;
      }

      return (
        <el-checkbox
          value={source.checked}
          indeterminate={source.indeterminate}
          disabled={isDisabled}
          {...events}
        ></el-checkbox>
      );
    },

    renderRadio (h) {
      let { checkedValue, value, isDisabled } = this;

      // to keep same reference if value cause radio's checked state is calculated by reference comparision;
      if (isEqual(value, checkedValue)) {
        value = checkedValue;
      }

      return (
        <el-radio
          value={checkedValue}
          label={value}
          disabled={isDisabled}
          onChange={this.handleCheckChange}
          nativeOnClick={stopPropagation}>
          {/* add an empty element to avoid render label */}
          <span></span>
        </el-radio>
      );
    },

    renderCheckIcon (h) {
      return (
        <i class="el-icon-check el-cascader-node__prefix"></i>
      );
    },

    renderLoadingIcon (h) {
      return (
        <i class="el-icon-loading el-cascader-node__postfix"></i>
      );
    },

    renderExpandIcon (h) {
      return (
        <i class="el-icon-arrow-right el-cascader-node__postfix"></i>
      );
    },

    renderContent (h) {
      const { panel, source } = this;
      const render = panel.renderLabelFn;
      const vnode = render
        ? render({ source, data: source.data })
        : null;

      return (
        <span class="el-cascader-node__label">{vnode || source.label}</span>
      );
    }
  },

  render (h) {
    const {
      inActivePath,
      inCheckedPath,
      isChecked,
      isLeaf,
      isDisabled,
      config,
      menuId,
      index
    } = this;
    const { expandTrigger, checkStrictly, multiple } = config;
    const disabled = !checkStrictly && isDisabled;
    const events = { on: {} };

    if (expandTrigger === 'click') {
      events.on.click = this.handleExpand;
    } else {
      events.on.mouseenter = e => {
        this.handleExpand();
        this.$emit('expand', e);
      };
      events.on.focus = e => {
        this.handleExpand();
        this.$emit('expand', e);
      };
    }
    if (isLeaf && !isDisabled && !checkStrictly && !multiple) {
      events.on.click = this.handleCheckChange;
    }

    return (
      <div
        role="menuitem"
        id={`${menuId}-${index}`}
        aria-expanded={inActivePath}
        tabindex={disabled ? null : -1}
        class={{
          'el-cascader-node': true,
          'is-selectable': checkStrictly,
          'in-active-path': inActivePath,
          'in-checked-path': inCheckedPath,
          'is-active': isChecked,
          'is-disabled': disabled
        }}
        {...events}>
        {this.renderPrefix(h)}
        {this.renderContent(h)}
        {this.renderPostfix(h)}
      </div>
    );
  }
};
</script>
