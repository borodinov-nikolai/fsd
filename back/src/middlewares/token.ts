module.exports = (config, { strapi }) => {
    // Add your own logic here.
    return async (ctx, next) => {




        
        // console.log(ctx.request.header.cookie.split(';')[0].split('=')[1])
        const req_token = ctx.request.header.cookie && ctx.request.header.cookie.split(';')[0].split('=')[1]
        console.log('входящий токен', req_token)


  
        if (req_token && !ctx.request.header.authorization) {
            ctx.request.header.authorization = req_token;
          }

        await next()
        
        
        const res_token : string = ctx.response.body.jwt


        if (res_token) {
            console.log('Токен найден:', res_token);
        
            // Пробуем установить токен в cookie
            ctx.cookies.set('jwt', `Bearer ${res_token}`, {
                httpOnly: true,
                maxAge: 7 * 24 * 60 * 60 * 1000,
              });
             
          
            //   delete ctx.body.jwt
            console.log('Токен добавлен в cookie');
          } else {
            console.log('Токен не найден');
          }
      }
 
  };