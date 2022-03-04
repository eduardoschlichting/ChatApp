
module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `
          @import "@/assets/sass/reset.scss";
            @import "@/assets/sass/vars.scss";
          `,
          
        }
      }
    }
  };