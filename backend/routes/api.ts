import { Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router({ prefix: '/api' });

router.get('/', ctx => {
   ctx.response.body = `
───────▄▀▀▀▀▀▀▀▀▀▀▄▄
────▄▀▀░░░░░░░░░░░░░▀▄
──▄▀░░░░░░░░░░░░░░░░░░▀▄
──█░░░░░░░░░░░░░░░░░░░░░▀▄
─▐▌░░░░░░░░░░░░░░░░░░░░░░▐▌
─█░░░░░░░░░░░░░░░░░░░░░░░░█
▐▌░░░░░░░░░░░░░░░░░░░░░░░░▐▌
█░░░░░░░░░▄▄▀▀▀▀▀░░░░▀▀▀▀▄░█
█░░░░░░░░░░░░░░░░▀░░░░░░░░░▐▌
▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▌
─█░░░░░░░░▐▐▐▐▐▐▐░░░░▐▐▐▐▐▐░█
─▐▌░░░░▄░░░▐▐▐▐▐░░░░▄░▐▐▐▐░░█
──▐▌░░▐░░░░░░░░░░░░░░▀▄░░░░░█
───█░░░▌░░░░░░░░▐▀░░░░▄▀░░░▐▌
───▐▌░░▀▄░░░░░░░░▀░▀░▀▀░░░▄▀
───▐▌░░▐▀▄░░░░░▄░░░░░░░░░░█
───▐▌░░░▌░▀▄░░░░▀▀▀▀▀▀░░░█
───█░░░▀░░░░▀▄░░░░░░░░░░▄▀
──▐▌░░░░░░░░░░▀▄░░░░░░▄▀
─▄▀░░░▄▀░░░░░░░░▀▀▀▀█▀
▀░░░▄▀░░░░░░░░░░▀░░░▀▀▀▀▄▄▄▄▄
      DRIVE BOT API`;
});

export default router;