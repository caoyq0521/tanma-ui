<script>
import VirtualList from 'vue-virtual-scroll-list';
import CascaderNode from './cascader-node'
import Locale from 'element-ui/src/mixins/locale';
import { generateId } from 'element-ui/src/utils/util';

export default {
  name: 'CascaderMenu',

  mixins: [Locale],

  inject: ['panel'],

  components: {
    VirtualList,
    CascaderNode
  },

  props: {
    nodes: {
      type: Array,
      required: true
    },
    index: Number
  },

  data () {
    return {
      activeNode: null,
      hoverTimer: null,
      id: generateId()
    };
  },

  computed: {
    isEmpty () {
      return !this.nodes.length;
    },
    menuId () {
      return `cascader-menu-${this.id}-${this.index}`;
    }
  },

  methods: {
    handleExpand (e) {
      this.activeNode = e.target;
    },
    handleMouseMove (e) {
      const { activeNode, hoverTimer } = this;
      const { hoverZone } = this.$refs;

      if (!activeNode || !hoverZone) return;

      if (activeNode.contains(e.target)) {
        clearTimeout(hoverTimer);

        const { left } = this.$el.getBoundingClientRect();
        const startX = e.clientX - left;
        const { offsetWidth, offsetHeight } = this.$el;
        const top = activeNode.offsetTop;
        const bottom = top + activeNode.offsetHeight;

        hoverZone.innerHTML = `
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${top} L${offsetWidth} 0 V${top} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${bottom} L${offsetWidth} ${offsetHeight} V${bottom} Z" />
        `;
      } else if (!hoverTimer) {
        this.hoverTimer = setTimeout(this.clearHoverZone, this.panel.config.hoverThreshold);
      }
    },
    clearHoverZone () {
      const { hoverZone } = this.$refs;
      if (!hoverZone) return;
      hoverZone.innerHTML = '';
    },

    renderEmptyText (h) {
      return (
        <div class="el-cascader-menu__list is-empty">
          <div class="el-cascader-menu__empty-text">{this.t('el.cascader.noData')}</div>
        </div>
      );
    },

    renderNodeList (h) {
      const { menuId, nodes } = this;
      const { isHoverMenu } = this.panel;
      const events = { on: {} };

      if (isHoverMenu) {
        events.on.expand = this.handleExpand;
      }

      return [
        (<virtual-list
          ref="virtualList"
          id={menuId}
          data-key="uid"
          data-sources={nodes}
          data-component={CascaderNode}
          keeps={10}
          style={{ height: '100%', 'overflow-y': 'auto' }}
          class="tm-cascader-menu-virtual__wrap"
          wrap-class="el-cascader-menu__list"
          wrap-tag="ul"
          item-tag="li"
          extra-props={{ menuId }}
        />),
        isHoverMenu ? <svg ref='hoverZone' class='el-cascader-menu__hover-zone'></svg> : null
      ];
    },

    initVirtualList () {
      this.$nextTick(() => {
        const { virtualList } = this.$refs;
        virtualList && virtualList.reset();
      })
    }
  },

  render (h) {
    const { isEmpty } = this;
    const events = { nativeOn: {} };

    // optimize hover to expand experience (#8010)
    if (this.panel.isHoverMenu) {
      events.nativeOn.mousemove = this.handleMouseMove;
      // events.nativeOn.mouseleave = this.clearHoverZone;
    }

    return (
      <div class={{ 'el-cascader-menu': true }}>
        <div class="el-cascader-menu__wrap">
          {isEmpty ? this.renderEmptyText(h) : this.renderNodeList(h)}
        </div>
      </div>
    );
  }
};
</script>
