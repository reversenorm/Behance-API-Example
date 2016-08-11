

var apiKey  = 'bM1DZSpebEhtZlRUq9QKuUmF3PpdW595';
var userID  = 'jphillips01';

(function() {
    var perPage = 12;
    var behanceProjectAPI = 'http://www.behance.net/v2/users/'+ userID +'/projects?callback=?&api_key=' + apiKey + '&per_page=' + perPage;
    
    function setPortfolioTemplate() {
        alert("Entered setPortfolioTemplate");
        var projectData = JSON.parse(sessionStorage.getItem('behanceProject')),
            getTemplate = $('#Behance-template').html(),
            template    = Handlebars.compile(getTemplate),
            result      = template(projectData);
        $('#BehancePortfolio').html(result);
    };
 
    if(sessionStorage.getItem('behanceProject')) {
        setPortfolioTemplate();
    } else {
        $.getJSON(behanceProjectAPI, function(project) {
            var data = JSON.stringify(project);
            sessionStorage.setItem('behanceProject', data);
            setPortfolioTemplate();
        });
    };
})();