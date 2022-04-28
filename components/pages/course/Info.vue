<template>
  <article>
    <h3>{{ info.title }}</h3>
    <p>{{ info.body }}</p>
    <ul v-if="info.moreInfo !== undefined" class="more-info">
      <li v-if="info.moreInfo.courseWhen">
        {{ info.moreInfo.courseWhen }}
      </li>
      <li v-if="info.moreInfo.coursePrice">
        {{ info.moreInfo.coursePrice }}
      </li>
      <li v-if="info.moreInfo.courseInfo">
        {{ publicArchery.moreInfo.courseInfo }}
      </li>
    </ul>
    <div class="info-slot">
      <slot></slot>
    </div>
    <div v-if="info.contact" class="contact">
      <p>{{ info.contact.contactInfo }}</p>
      <dl>
        <dt>{{ info.contact.contactPerson }}</dt>
        <dd class="email-icon">
          {{ info.contact.contactEmail }}
        </dd>
        <dd class="phone-icon">
          {{ info.contact.contactPhone }}
        </dd>
      </dl>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    info: Object,
  },
}
</script>

<style lang="scss" scoped>
.more-info {
  list-style-type: disc;
  font-size: 1.1rem;
  margin: 0 3rem;

  li {
    margin: 0.8rem 0;
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
    }
  }
}

.email-icon::before {
  content: url('~/assets/icons/mail.svg');
}

.phone-icon::before {
  content: url('~/assets/icons/phone.svg');
}
</style>
