using System.Web;
using System.Web.Optimization;

namespace casino_testapp
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"
                        ));
            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                    //   "~/Scripts/bootstrap.js",
                    //   "~/Scripts/respond.js"
                    "~/Content/assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
                    "~/Content/assets/vendor/apexcharts/apexcharts.min.js",
                    "~/Content/assets/vendor/chart.js/chart.umd.js",
                    "~/Content/assets/vendor/echarts/echarts.min.js",
                    "~/Content/assets/vendor/quill/quill.js",
                    "~/Content/assets/vendor/simple-datatables/simple-datatables.js",
                    "~/Content/assets/vendor/tinymce/tinymce.min.js",
                    "~/Content/assets/vendor/php-email-form/validate.js",
                    "~/Content/assets/js/main.js",
                    "~/Script/AngularJs/myApp.js"
                    ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                    //"~/Content/bootstrap.css",
                    //"~/Content/site.css"
                    "~/Content/assets/css/style.css",
                    "~/Content/assets/assets/vendor/bootstrap/css/bootstrap.min.css",
                    "~/Content/assets/vendor/bootstrap-icons/bootstrap-icons.css",
                    "~/Content/assets/vendor/boxicons/css/boxicons.min.css",
                    "~/Content/assets/vendor/quill/quill.snow.css",
                    "~/Content/assets/vendor/quill/quill.bubble.css",
                    "~/Content/assets/vendor/remixicon/remixicon.css",
                    "~/Content/assets/vendor/simple-datatables/style.css"
                      ));
          
        
        }
    }
}
