<template>
  <div class="tm-avatar-card">
    <tm-avatar />
    <div tm-avatar-card__content>

    </div>
  </div>
</template>

<script>
import Avatar from "../avatar";
export default {
  name: "tmAvatarCard",
  components: {
    [Avatar.name]: Avatar
  }
}
</script>