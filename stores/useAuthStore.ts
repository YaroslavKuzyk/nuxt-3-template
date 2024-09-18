import { defineStore } from "pinia";
import $api from "@/api";
import {
  ISignUpUser,
  ISignInUser,
  IForgotPassword,
  IResetPassword,
} from "~/models/auth";
import { navigateTo } from "#app";
import { useValidationStore } from "~/stores/useValidationStore";
import { useToasts } from "~/composables/useToasts";

import { setCookie } from "h3";

export const useAuthStore = defineStore({
  id: "auth-store",
  state: () => ({
    user_info: null,
    isAuth: false,
  }),
  actions: {
    async signUp(data: ISignUpUser) {
      try {
        const { $customFetch } = useNuxtApp();
        await $customFetch("/api/sign-up", {
          method: "POST",
          body: data,
        });

        const toasts = useToasts();
        toasts.success("WE_HAVE_SENT_YOU_A_CONFIRMATION_BY_EMAIL");
      } catch (error) {
        const validationStore = useValidationStore();
        validationStore.setErrors(error);
      }
    },

    async forgotPassword(data: IForgotPassword) {
      try {
        const { $customFetch } = useNuxtApp();
        await $customFetch("/api/forgot-password", {
          method: "POST",
          body: data,
        });

        const toasts = useToasts();
        toasts.success("WE_HAVE_SENT_YOU_A_CONFIRMATION_BY_EMAIL");
      } catch (error) {
        const validationStore = useValidationStore();
        validationStore.setErrors(error);
      }
    },

    async resetPassword(data: IResetPassword) {
      try {
        const { $customFetch } = useNuxtApp();
        await $customFetch("/api/reset-password", {
          method: "POST",
          body: data,
        });

        navigateTo("/sign-in");
        setTimeout(() => {
          const toasts = useToasts();
          toasts.success("YOU_HAVE_SUCCESSFULLY_CHANGED_YOUR_PASSWORD");
        }, 500);
      } catch (error) {
        const validationStore = useValidationStore();
        validationStore.setErrors(error);
      }
    },

    async logOut() {
      try {
        const { $customFetch } = useNuxtApp();
        await $customFetch("/api/sign-out");
        this.isAuth = false;
        this.user_info = null;
        navigateTo("/");
      } catch (error) {
        console.error(error);
      }
    },

    async signIn(data: ISignInUser) {
      try {
        const { $customFetch } = useNuxtApp();
        const response = await $customFetch("/api/sign-in", {
          method: "POST",
          body: data,
        });

        const token = useCookie("token");
        token.value = response.token;

        setTimeout(async () => {
          await this.getUser(true);
        }, 100);

        if (this.isAuth) {
        }
      } catch (error) {
        const validationStore = useValidationStore();
        validationStore.setErrors(error);
      }
    },

    async getUser(redirect = false) {
      try {
        const { $customFetch } = useNuxtApp();
        const data = await $customFetch("/api/user", {
          method: "GET",
          credentials: "include",
        });
        this.user_info = data;
        this.isAuth = true;
        if (redirect) {
          navigateTo("/dashboard");

          setTimeout(async () => {
            const toasts = useToasts();
            toasts.success("WELCOME");
          }, 500);
        }
        return true;
      } catch (error) {
        this.isAuth = false;
        return false;
      }
    },
  },
});
