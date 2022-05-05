import { RouteLocationRaw } from 'vue-router';

// From https://github.com/nuxt/framework/discussions/3576
// Written by qnp

export function useRedirect(to: RouteLocationRaw) {
  const router = useRouter();
  const { ssrContext } = useNuxtApp();

  // Server-side redirection using h3 res from ssrContext
  if (process.server && ssrContext) {
    const { res } = ssrContext;
    const { path } = router.resolve(to);
    res.writeHead(302, { Location: path });
    res.end();
  }
  // Client-side redirection using vue-router
  else if (process.client) {
    router.beforeEach((_, __, next) => {
      return next(to);
    });
  }
}