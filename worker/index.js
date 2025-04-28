export default {
    async fetch(request, env, ctx) {
      const apkUrl = 'https://instapro.pages.dev/insta-pro.apk';
  
      const response = await fetch(apkUrl);
      const newHeaders = new Headers(response.headers);
  
      newHeaders.set('Content-Type', 'application/vnd.android.package-archive');
  
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
      });
    },
  };
  