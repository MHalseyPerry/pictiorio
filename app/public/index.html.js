const indexHtml = (html) => `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Pictorio</title>

        <link rel="stylesheet" href="/css/style.css">

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/manifest.json">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#38b1d4">
        <meta name="apple-mobile-web-app-title" content="Pictorio">
        <meta name="application-name" content="Pictorio">
        <meta name="theme-color" content="#38b1d4">
    </head>
    <body>
        <div id="root">${html}</div>

        <script src="/js/bundle.js"></script>
    </body>
</html>
`;

module.exports = indexHtml;
