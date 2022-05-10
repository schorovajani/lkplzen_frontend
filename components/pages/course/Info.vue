<template>
  <article>
    <h3>{{ info.title }}</h3>
    <div v-html="$md.render(`${info.body}`)"></div>
    <ul v-if="info.moreInfo !== undefined" class="more-info">
      <li v-if="info.moreInfo.courseWhen">
        {{ info.moreInfo.courseWhen }}
      </li>
      <li v-if="info.moreInfo.coursePrice">
        {{ info.moreInfo.coursePrice }}
      </li>
      <li v-if="info.moreInfo.courseInfo">
        {{ info.moreInfo.courseInfo }}
      </li>
    </ul>
    <div class="info-slot">
      <slot></slot>
    </div>
    <div v-if="info.contact !== undefined" class="contact">
      <p>{{ info.contact.contactInfo }}</p>
      <dl>
        <dt>{{ info.contact.contactPerson }}</dt>
        <dd class="contact-icon">
          <img
            v-if="light"
            alt="mail-icon"
            src="~/assets/icons/mail-light.svg"
          />
          <img v-else alt="mail-icon" src="~/assets/icons/mail.svg" />
          <span>{{ info.contact.contactEmail }}</span>
        </dd>
        <dd class="contact-icon">
          <img
            v-if="light"
            alt="phone-icon"
            src="~/assets/icons/phone-light.svg"
          />
          <img v-else alt="phone-icon" src="~/assets/icons/phone.svg" />
          <span>{{ info.contact.contactPhone }}</span>
        </dd>
      </dl>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    info: Object,
    light: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.more-info {
  list-style-type: disc;
  font-size: 1.1rem;
  margin: 0 3rem;

  li {
    margin: 1rem 0;
  }
}

.info-slot {
  margin: 3rem 0;
}

.contact {
  p {
    font-weight: 600;
  }
  dl {
    margin-left: 2rem;
    dt {
      margin: 1rem 0;
    }

    dd {
      margin: 0.8rem;
      display: flex;
      align-items: center;

      img {
        width: 1.3rem;
      }
      span {
        margin-left: 1rem;
      }
    }
  }
}
</style>
