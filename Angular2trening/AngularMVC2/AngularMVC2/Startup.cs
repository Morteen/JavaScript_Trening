using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularMVC2.Startup))]
namespace AngularMVC2
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
