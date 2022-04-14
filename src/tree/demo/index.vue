<template>
  <div>
    <tm-tree
      :height="390"
      :virtual-scroll="true"
      :default-expand-all="true"
      show-checkbox
      :data="data"
      :props="{ label: 'name', children: 'children' }"
    />
  </div>
</template>
<script>

function uuid () {
  var temp_url = URL.createObjectURL(new Blob());
  var uuid = temp_url.toString(); // blob:https://xxx.com/b250d159-e1b6-4a87-9002-885d90033be3
  URL.revokeObjectURL(temp_url);
  return uuid.substr(uuid.lastIndexOf("/") + 1);
}

export default {
  name: 'demo',
  data () {
    return {
      data: new Array(100).fill(0).map((i, m) => ({
        id: uuid(),
        name: `uuid-${m}`.repeat(10),
        children: new Array(3).fill(0).map((j, k) => ({
          id: uuid(),
          name: `child-${k}`.repeat(10)
        }))
      }))
    }
  }
}
</script>