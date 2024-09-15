<template>
  <div class="auth-card">
    <div class="auth-card__info">
      <h1 class="auth-card__title">
        <slot name="title" />
      </h1>
      <div class="auth-card__info-text">
        <div class="auth-card__info-privacy">
          {{ $t("THIS_SITE_IS_PROTECTED_BY_RECAPTCHA_AND_THE_GOOGLE") }}
          <a href="/">{{ $t("PRIVACY_POLICY") }}</a> {{ $t("AND") }}
          <a href="/">{{ $t("TERMS_OF_SERVICE") }}</a> {{ $t("APPLY") }}.
        </div>
        <div class="auth-card__info-copy">
          © 2017 - 2022 Abyss. {{ $t("ALL_RIGHTS_RESERVED") }}
        </div>
      </div>
    </div>
    <div class="auth-card__form">
      <div class="auth-card__form-inputs">
        <slot name="inputs" />
      </div>

      <div class="auth-card__form-footer">
        <div class="auth-card__form-actions">
          <AppButton @click="emit('confirm')" large :loading="loading">{{
            buttonText
          }}</AppButton>
        </div>

        <div class="auth-card__form-link">
          <nuxt-link :to="link">{{ linkText }}</nuxt-link>
        </div>
      </div>
    </div>

    <div class="auth-card-circle"></div>
  </div>
</template>

<script setup lang="ts">
import AppButton from "@/components/Styleguide/AppButton/AppButton.vue";
const props = defineProps({
  buttonText: String,
  linkText: String,
  link: String,
  loading: Boolean,
});

const emit = defineEmits(["confirm"]);
</script>

<style lang="scss" scoped>
.auth-card {
  position: relative;
  max-width: 1050px;
  width: 100%;
  height: 505px;
  background: var(--card-color);
  border-radius: 25px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  &:before {
    position: absolute;
    content: "";
    width: 48px;
    height: 48px;
    background: var(--text-color);
    border-radius: 50%;
    top: 40px;
    left: 340px;
    opacity: 0.2;
  }

  &:after {
    position: absolute;
    content: "";
    width: 290px;
    height: 290px;
    border: 20px solid var(--text-color);
    border-radius: 50%;
    bottom: -150px;
    left: 355px;
    opacity: 0.2;
  }

  &-circle {
    position: absolute;
    content: "";
    width: 190px;
    height: 190px;
    background: var(--text-color);
    border-radius: 50%;
    bottom: -70px;
    left: 425px;
    opacity: 0.2;
  }

  &__title {
    color: var(--title-color);
    font-size: 64px;
    text-transform: capitalize;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px 15px 55px 40px;
  }

  &__form {
    position: relative;
    z-index: 2;
    max-width: 500px;
    width: 100%;
    background: var(--default-color);
    border-radius: 25px;
    padding: 23px 40px 40px;
    display: flex;
    flex-direction: column;
  }

  &__form-inputs {
    display: flex;
    flex-direction: column;
    gap: 16px;

    a {
      text-decoration: none;
      color: var(--title-color);
    }
  }

  &__form-footer {
    margin-top: auto;
  }

  &__info-privacy {
    max-width: 330px;
    font-size: 14px;
    line-height: 24px;
    color: var(--text-color);

    a {
      color: var(--title-color);
      text-decoration: underline;
    }
  }

  &__info-copy {
    margin-top: 105px;
    font-size: 14px;
    color: var(--title-color);
  }

  &__form-link {
    display: flex;
    margin-top: 35px;
    justify-content: center;
    position: relative;

    a {
      padding: 0 20px;
      z-index: 2;
      position: relative;
      display: block;
      background: var(--default-color);
      color: var(--primary-color);
      text-decoration: none;
      font-size: 16px;
    }

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 1px;
      background: var(--border-color);
    }
  }
}
</style>
