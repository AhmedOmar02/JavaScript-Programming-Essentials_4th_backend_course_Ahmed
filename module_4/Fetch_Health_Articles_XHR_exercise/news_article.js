var xhob = new XMLHttpRequest();
xhob.open('GET', './news_articles.json', true);
xhob.responseType = 'json';
var articlesDiv = document.getElementById('articles');

xhob.onload = function () {
    var articles = xhob.response.articles;
    articles.forEach(element => {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = element.title;

        var description = document.createElement('p');
        description.textContent = element.description;

        var category = document.createElement('h3');
        category.textContent = `category: ${element.category}`;

        var published_date = document.createElement('h3');
        published_date.textContent = `published date: ${element.published_date}`;

        var content = document.createElement('p');
        content.textContent = `content:\    n${element.content}`;;



        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(category);
        articleDiv.appendChild(published_date);
        articleDiv.appendChild(content);

        articlesDiv.appendChild(articleDiv);

    });
}

xhob.send();