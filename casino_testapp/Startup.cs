using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(casino_testapp.Startup))]
namespace casino_testapp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
