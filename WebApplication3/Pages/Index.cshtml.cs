using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Identity.Web;
using System.Net;
using Microsoft.Graph;
using Microsoft.Identity.Abstractions;

namespace WebApplication3.Pages
{
    [AuthorizeForScopes(ScopeKeySection = "MicrosoftGraph:Scopes")]
    [AuthorizeForScopes(ScopeKeySection = "DownstreamApi:Scopes")]
    public class IndexModel : PageModel
    {
        private readonly IDownstreamApi _downstreamApi;
        private readonly GraphServiceClient _graphServiceClient;
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger, GraphServiceClient graphServiceClient, IDownstreamApi downstreamApi)
        {
            _logger = logger;
            _graphServiceClient = graphServiceClient;;
            _downstreamApi = downstreamApi;;
        }

        public async Task OnGet()
        {
            var user = await _graphServiceClient.Me.Request().GetAsync();;
            ViewData["GraphApiResult"] = user.DisplayName;;
            using var response = await _downstreamApi.CallApiForUserAsync("DownstreamApi").ConfigureAwait(false);;
if (response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                var apiResult = await response.Content.ReadAsStringAsync().ConfigureAwait(false);
                ViewData["ApiResult"] = apiResult;
            }
            else
            {
                var error = await response.Content.ReadAsStringAsync().ConfigureAwait(false);
                throw new HttpRequestException($"Invalid status code in the HttpResponseMessage: {response.StatusCode}: {error}");
            };

        }
    }
}